import { NextResponse } from "next/server";
import { chromium } from "playwright";

export const runtime = "nodejs"; // important: Playwright needs Node runtime

export async function POST(req: Request) {
  try {
    const { html, filename } = await req.json();

    if (!html || typeof html !== "string") {
      return NextResponse.json({ error: "Missing `html` string" }, { status: 400 });
    }

    const browser = await chromium.launch();
    try {
      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: "networkidle" });

      const pdf = await page.pdf({
        format: "A4",
        printBackground: true,
        margin: { top: "12mm", right: "12mm", bottom: "12mm", left: "12mm" },
      });

      return new NextResponse(pdf, {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="${filename || "CVCraft-CV.pdf"}"`,
          "Cache-Control": "no-store",
        },
      });
    } finally {
      await browser.close();
    }
  } catch (err) {
    return NextResponse.json({ error: "PDF export failed" }, { status: 500 });
  }
}
