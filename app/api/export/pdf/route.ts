import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  html?: string;
  filename?: string;
};

function isVercel(): boolean {
  return process.env.VERCEL === "1";
}

async function getBrowser() {
  if (isVercel()) {
    const chromium = (await import("@sparticuz/chromium")).default;
    const puppeteer = await import("puppeteer-core");

    return puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
      defaultViewport: chromium.defaultViewport,
    });
  }

  // Local dev
  const puppeteer = await import("puppeteer");
  return puppeteer.launch({ headless: true });
}

function safeFilename(name: string) {
  return name.replace(/["\r\n]/g, "").trim() || "CVCraft-CV.pdf";
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Body;

    const html = (body.html || "").trim();
    const filename = safeFilename(body.filename || "CVCraft-CV.pdf");

    if (!html) {
      return Response.json(
        { ok: false, error: "Missing html in request body." },
        { status: 400 }
      );
    }

    const browser = await getBrowser();

    try {
      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: "networkidle0" });

      const pdf = await page.pdf({
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true,
      });

      // ✅ Web-compatible binary response
      return new Response(pdf, {
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
    console.error("PDF export failed:", err);

    return Response.json(
      {
        ok: false,
        error: "PDF export failed.",
        message: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}
