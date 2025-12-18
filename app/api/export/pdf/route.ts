// src/app/api/export/pdf/route.ts
import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function safeFilename(name: unknown) {
  const raw = typeof name === "string" && name.trim() ? name.trim() : "CVCraft-CV.pdf";
  // remove any path separators and odd chars
  return raw.replace(/[/\\?%*:|"<>]/g, "-");
}

export async function POST(req: NextRequest) {
  try {
    const { html, filename } = await req.json();

    if (typeof html !== "string" || !html.trim()) {
      return Response.json({ error: "Missing html" }, { status: 400 });
    }

    const outName = safeFilename(filename);

    // ---- Launch puppeteer (prod = puppeteer-core + sparticuz chromium, dev = puppeteer) ----
    const isProd = process.env.VERCEL === "1" || process.env.NODE_ENV === "production";

    let browser: any;

    if (isProd) {
      const chromium = (await import("@sparticuz/chromium")).default;
      const puppeteer = await import("puppeteer-core");

      browser = await puppeteer.launch({
        args: chromium.args,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
        defaultViewport: chromium.defaultViewport,
      });
    } else {
      // Local dev: use full puppeteer (bundled Chromium)
      const puppeteer = await import("puppeteer");
      browser = await puppeteer.launch({
        headless: true,
      });
    }

    const page = await browser.newPage();

    // Important: setContent first, then PDF
    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
    });

    await page.close();
    await browser.close();

    // ✅ Return RAW BYTES (Buffer/Uint8Array), not a string
    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${outName}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err: any) {
    console.error("PDF export error:", err);
    return Response.json(
      { error: "PDF export failed", details: String(err?.message || err) },
      { status: 500 }
    );
  }
}
