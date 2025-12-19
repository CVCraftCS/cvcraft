// app/api/export/pdf/route.ts
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  html?: string;
  filename?: string;
};

function isProbablyVercel(): boolean {
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

async function pathExists(p: string): Promise<boolean> {
  try {
    const fs = await import("fs/promises");
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function pickFirstExisting(paths: string[]) {
  for (const p of paths) {
    if (p && (await pathExists(p))) return p;
  }
  return null;
}

async function guessChromePath(): Promise<string | null> {
  const envPath = process.env.CHROME_PATH;
  if (envPath) return envPath;

  if (process.platform === "win32") {
    const programFiles = process.env["PROGRAMFILES"] || "C:\\Program Files";
    const programFilesX86 =
      process.env["PROGRAMFILES(X86)"] || "C:\\Program Files (x86)";
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
  // ✅ Vercel (serverless)
  if (isProbablyVercel()) {
    const chromium = (await import("@sparticuz/chromium")).default;
    const puppeteer = await import("puppeteer-core");

    return puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  }

  // ✅ Local dev (prefer full puppeteer)
  try {
    const puppeteer = await import("puppeteer");
    return puppeteer.launch({ headless: true });
  } catch {
    const puppeteer = await import("puppeteer-core");
    const executablePath = await guessChromePath();

    if (!executablePath) {
      throw new Error(
        "Chrome not found. Install Chrome or set CHROME_PATH env variable."
      );
    }

    return puppeteer.launch({
      headless: true,
      executablePath,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  }
}

export async function POST(req: NextRequest) {
  let browser: any;

  try {
    const body = (await req.json()) as Body;
    const html = (body.html || "").trim();
    const filename = (body.filename || "CVCraft-CV.pdf").trim();

    if (!html) {
      return NextResponse.json(
        { ok: false, error: "Missing html in request body." },
        { status: 400 }
      );
    }

    browser = await getBrowser();
    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
    });

    // ✅ MUST use Web Response (not NextResponse) for binary body
    return new Response(pdf, {
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
