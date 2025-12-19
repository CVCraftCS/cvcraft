// app/api/export/pdf/route.ts
import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  html?: string;
  filename?: string;
};

function isVercel(): boolean {
  // Vercel sets VERCEL=1 in runtime env
  return process.env.VERCEL === "1";
}

function pickFirstExisting(paths: string[]): string | null {
  for (const p of paths) {
    try {
      if (p && fs.existsSync(p)) return p;
    } catch {}
  }
  return null;
}

function guessChromePath(): string | null {
  const envPath = process.env.CHROME_PATH;
  if (envPath) return envPath;

  if (process.platform === "win32") {
    const programFiles = process.env["PROGRAMFILES"] || "C:\\Program Files";
    const programFilesX86 = process.env["PROGRAMFILES(X86)"] || "C:\\Program Files (x86)";
    const localAppData = process.env["LOCALAPPDATA"] || "";

    return pickFirstExisting([
      `${programFiles}\\Google\\Chrome\\Application\\chrome.exe`,
      `${programFilesX86}\\Google\\Chrome\\Application\\chrome.exe`,
      `${localAppData}\\Google\\Chrome\\Application\\chrome.exe`,
      `${programFiles}\\Microsoft\\Edge\\Application\\msedge.exe`,
      `${programFilesX86}\\Microsoft\\Edge\\Application\\msedge.exe`,
    ]);
  }

  if (process.platform === "darwin") {
    return pickFirstExisting([
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
      "/Applications/Chromium.app/Contents/MacOS/Chromium",
    ]);
  }

  return pickFirstExisting([
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium-browser",
    "/usr/bin/chromium",
    "/snap/bin/chromium",
  ]);
}

async function getBrowser() {
  // ✅ Vercel (Linux serverless): puppeteer-core + @sparticuz/chromium
  if (isVercel()) {
    const chromiumMod = await import("@sparticuz/chromium");
    const chromium = chromiumMod.default;
    const puppeteer = await import("puppeteer-core");

    const executablePath = await chromium.executablePath();

    return puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath,
      headless: chromium.headless,
    });
  }

  // ✅ Local dev: try puppeteer first (uses installed Chrome), fallback to puppeteer-core with chrome path
  try {
    const puppeteer = await import("puppeteer");
    return puppeteer.launch({ headless: true });
  } catch {
    const puppeteer = await import("puppeteer-core");
    const executablePath = guessChromePath();

    if (!executablePath) {
      throw new Error(
        "Could not find local Chrome/Edge. Install Chrome or set CHROME_PATH to your chrome.exe path."
      );
    }

    return puppeteer.launch({
      headless: true,
      executablePath,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
    });
  }
}

function safeFilename(name: string) {
  // strip quotes and newlines etc.
  return name.replace(/["\r\n]/g, "").trim() || "CVCraft-CV.pdf";
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Body;

    const html = (body.html || "").trim();
    const filename = safeFilename(body.filename || "CVCraft-CV.pdf");

    if (!html) {
      return NextResponse.json({ ok: false, error: "Missing html in request body." }, { status: 400 });
    }

    const browser = await getBrowser();

    try {
      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: "networkidle0" });

      // Puppeteer returns a Buffer (Node), but TS can show Uint8Array — force Buffer for NextResponse
      const pdf = await page.pdf({
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true,
      });

      const pdfBuffer = Buffer.from(pdf);

      return new NextResponse(pdfBuffer, {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="${filename}"`,
          "Cache-Control": "no-store",
        },
      });
    } finally {
      await browser.close();
    }
  } catch (err: any) {
    // ✅ Always log on Vercel so you can see the real error in project Logs
    console.error("PDF export failed:", err);

    // Return a small debug payload (safe)
    return NextResponse.json(
      {
        ok: false,
        error: "PDF export failed.",
        message: err?.message || String(err),
      },
      { status: 500 }
    );
  }
}
