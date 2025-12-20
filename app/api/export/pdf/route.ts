// app/api/export/pdf/route.ts
import { NextRequest } from "next/server";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  html?: string;
  filename?: string;
};

function safeFilename(name?: string) {
  return (name || "CVCraft-CV.pdf").replace(/["\r\n]/g, "").trim() || "CVCraft-CV.pdf";
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Body;
    const html = body.html?.trim();

    if (!html) {
      return Response.json({ ok: false, error: "Missing html in request body" }, { status: 400 });
    }

    const browser = await puppeteer.launch({
      args: [
        ...chromium.args,
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-gpu",
      ],
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });

    try {
      const page = await browser.newPage();

      // networkidle0 can hang on serverless; "load" is safer on Vercel
      await page.setContent(html, { waitUntil: "load" });

      const pdfUint8 = await page.pdf({
        format: "A4",
        printBackground: true,
      });

      // ✅ Make BodyInit unambiguous for TypeScript/Vercel: Blob is always accepted
      const pdfBlob = new Blob([pdfUint8], { type: "application/pdf" });

      return new Response(pdfBlob, {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="${safeFilename(body.filename)}"`,
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
        error: "PDF export failed",
        message: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}
