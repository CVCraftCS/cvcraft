import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  // TODO: Replace this with your real PDF generation result.
  // Whatever you generate MUST end up as a Buffer, ArrayBuffer, Uint8Array, or string.

  // Example placeholder minimal PDF (valid enough for testing):
  const pdfBuffer = Buffer.from(
    "%PDF-1.4\n1 0 obj\n<<>>\nendobj\ntrailer\n<<>>\n%%EOF\n",
    "utf-8"
  );

  // ✅ Key fix: convert Buffer -> Uint8Array so it matches BodyInit in strict builds
  const pdfBytes = pdfBuffer instanceof Buffer ? new Uint8Array(pdfBuffer) : pdfBuffer;

  return new NextResponse(pdfBytes as any, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="cv.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
