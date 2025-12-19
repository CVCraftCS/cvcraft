// app/api/export/pdf/route.ts
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  html?: string;
  filename?: string;
};

function isProbablyVercel(): boolean {
  // Vercel sets VERCEL=1 in runtime env
  return !!process.env.VERCEL;
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
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fs = require("fs");
  for (const p of paths) {
    try {
      if (p && fs.existsSync(p)) return p;
    } catch {}
  }
  return null;
}

function guessChromePath(): string | null {
  // Allow manual override (best for local dev)
  const envPath = process.env.CHROME_PATH;
  if (envPath) return envPath;

  // Common Chrome installs on Windows
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

  // Linux (common)
  return pickFirstExisting([
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium-browser",
    "/usr/bin/chromium",
    "/snap/bin/chromium",
  ]);
}

async function getBrowser() {
  // --- Vercel path (serverless Linux): puppeteer-core + @sparticuz/chromium
  if (isProbablyVercel()) {
    const chromium = (await import("@sparticuz/chromium")).default;
    const puppeteer = await import("puppeteer-core");

    const executablePath = await chromium.executablePath();

    return puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath,
      headless: chromium.headless,
    });
  }

  // --- Local dev path: prefer full puppeteer if installed, else puppeteer-core + local Chrome path
  try {
    const puppeteer = await import("puppeteer");
    return puppeteer.launch({
      headless: true,
    });
  } catch {
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
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
    });
  }
}

export async function POST(req: NextRequest) {
  let browser: any = null;

  try {
    const body = (await req.json()) as Body;
    const html = (body.html || "").trim();
    const filename = (body.filename || "CVCraft-CV.pdf").trim();

    if (!html) {
      return NextResponse.json({ ok: false, error: "Missing html in request body." }, { status: 400 });
    }

    browser = await getBrowser();

    const page = await browser.newPage();

    // Important for consistent rendering
    await page.setContent(html, { waitUntil: "networkidle0" });

    // Puppeteer returns a Uint8Array in newer versions (good for Web Response)
    const pdfUint8 = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
    });

    // ✅ CRITICAL FIX:
    // Use Web Response (NOT NextResponse) so Vercel/Next build typings accept the body.
    return new Response(pdfUint8, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename.replace(/"/g, "")}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    const isProd = process.env.NODE_ENV === "production";
    return NextResponse.json(
      {
        ok: false,
        error: "PDF export failed.",
        ...(isProd ? {} : { debug: devErrorPayload(err) }),
      },
      { status: 500 }
    );
  } finally {
    try {
      if (browser) await browser.close();
    } catch {}
  }
}
