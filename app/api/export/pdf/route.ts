import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    /**
     * TEMP / SAFE PLACEHOLDER PDF
     * This ensures:
     * - Correct response type for Vercel
     * - POST method exists (fixes 405)
     *
     * You can replace this later with real PDF generation
     */
    const pdfBuffer = Buffer.from(
      "%PDF-1.4\n1 0 obj\n<<>>\nendobj\ntrailer\n<<>>\n%%EOF",
      "utf-8"
    );

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=cv.pdf",
      },
    });
  } catch (error) {
    console.error("PDF export error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
