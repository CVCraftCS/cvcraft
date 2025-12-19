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
  return process.env.VERCEL === "1" || !!process.env.VERCEL;
}

function devErrorPayload(err: unknown) {
  const e = err as any;
  return {
    message: e?.message || String(err),
    name: e?.name,
    stack: e?.stack,
  };
}

function pickFirstExisting(paths: string[]) {
  for (const p of paths) {
    try {
      if (p && fs.existsSync(p)) return p;
    } catch {
      // ignore
    }
  }
  return null;
}

function guessChromePath(): string | null {
  // Manual override (best for local)
  const envPath = process.env.CHROME_PATH;
  if (envPath) return envPath;

  // Windows common installs
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

  // macOS
  if (process.platform === "darwin") {
    return pickFirstExisting([
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
      "/Applications/Chromium.app/Contents/MacOS/Chromium",
    ]);
  }

  // Linux
  return pickFirstExisting([
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium-browser",
    "/usr/bin/chromium",
    "/snap/bin/chromium",
  ]);
}

async function getBrowser() {
  // On Vercel: puppeteer-core + @sparticuz/chromium (serverless-safe)
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

  // Local: prefer full puppeteer if present (uses bundled Chromium)
  try {
    const puppeteer = await import("puppeteer");
    return puppeteer.launch({ headless: true });
  } catch {
    // Local fallback: puppeteer-core + system Chrome/Edge
    const puppeteer = await import("puppeteer-core");
    const executablePath = guessChromePath();

    if (!executablePath) {
      throw new Error(
        "Could not find a local Chrome/Edge executable. Install Google Chrome OR set CHROME_PATH env var to your chrome.exe path."
      );
    }

    return puppeteer.launch({
      headless: true,
      executablePath,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    });
  }
}

function safeFilename(name: string) {
  // remove quotes and path separators
  return name.replace(/["']/g, "").replace(/[\\\/]/g, "-").trim() || "CVCraft-CV.pdf";
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

      // Render HTML
      await page.setContent(html, { waitUntil: "networkidle0" });

      const pdf = await page.pdf({
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true,
      });

      // Important: NextResponse body wants a BodyInit – Uint8Array is safe
      const pdfBytes = pdf instanceof Uint8Array ? pdf : new Uint8Array(pdf as any);

      return new NextResponse(pdfBytes, {
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
  } catch (err) {
    const isProd = process.env.NODE_ENV === "production";

    // Return JSON so DevTools "Response" should show something
    return NextResponse.json(
      {
        ok: false,
        error: "PDF export failed.",
        ...(isProd ? {} : { debug: devErrorPayload(err) }),
      },
      { status: 500 }
    );
  }
}
