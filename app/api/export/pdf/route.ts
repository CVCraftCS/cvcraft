/**
 * app/api/export/pdf/route.ts
 * Placeholder PDF exporter that type-checks cleanly in Next.js.
 */

const PLACEHOLDER_PDF_BASE64 =
  "JVBERi0xLjMKJZOMi54gUmVwb3J0TGFiIEdlbmVyYXRlZCBQREYgZG9jdW1lbnQgaHR0cDovL3d3dy5yZXBvcnRsYWIuY29tCjEgMCBvYmoKPDwKL0YxIDIgMCBSCj4+CmVuZG9iagoyIDAgb2JqCjw8Ci9CYXNlRm9udCAvSGVsdmV0aWNhIC9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIC9OYW1lIC9GMSAvU3VidHlwZSAvVHlwZTEgL1R5cGUgL0ZvbnQKPj4KZW5kb2JqCjMgMCBvYmoKPDwKL0NvbnRlbnRzIDcgMCBSIC9NZWRpYUJveCBbIDAgMCA2MTIgNzkyIF0gL1BhcmVudCA2IDAgUiAvUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSAyIDAgUgo+PgovUHJvY1NldCBbIC9QREYgL1RleHQgL0ltYWdlQiAvSW1hZ2VDIC9JbWFnZUkgXQo+PiAvUm90YXRlIDAgL1RyYW5zIDw8Cj4+IAovVHlwZSAvUGFnZQo+PgplbmRvYmoKNCAwIG9iago8PAovUGFnZXMgNiAwIFIgL1R5cGUgL0NhdGFsb2cKPj4KZW5kb2JqCjUgMCBvYmoKPDwKL0F1dGhvciAoYW5vbnltb3VzKSAvQ3JlYXRpb25EYXRlIChEOjIwMjUxMjE2MTY1NzUzKzAwJzAwJykgL0NyZWF0b3IgKFJlcG9ydExhYiBQREYgTGlicmFyeSAtIHd3dy5yZXBvcnRsYWIuY29tKSAvS2V5d29yZHMgKCkgL01vZERhdGUgKEQ6MjAyNTEyMTYxNjU3NTMrMDAnMDAnKSAvUHJvZHVjZXIgKFJlcG9ydExhYiBQREYgTGlicmFyeSAtIHd3dy5yZXBvcnRsYWIuY29tKSAKL1N1YmplY3QgKCkgL1RpdGxlIChDVkNyYWZ0IFBERiBwbGFjZWhvbGRlcikKPj4KZW5kb2JqCjYgMCBvYmoKPDwKL0NvdW50IDEgL0tpZHMgWyAzIDAgUiBdIC9UeXBlIC9QYWdlcwo+PgplbmRvYmoKNyAwIG9iago8PAovTGVuZ3RoIDg5Cj4+CnN0cmVhbQpCBiAwMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTAgMDAwMDAgbiAKMDAwMDAwMDA2NSAwMDAwMCBuIAowMDAwMDAwMTU5IDAwMDAwIG4gCjAwMDAwMDAyNjQgMDAwMDAgbiAKMDAwMDAwMDMyMyAwMDAwMCBuIAowMDAwMDAwNjAxIDAwMDAwIG4gCnRyYWlsZXIKPDwKL0lEIFsgPGQ0MGE0YjJjZTU1ZjE4NGM0NTEzM2E4OTIwMmU2NjJmPjwgZDQwYTRiMmNlNTVmMTg0YzQ1MTMzYTg5MjAyZTY2MmY+IF0KL0luZm8gNSAwIFIKL1Jvb3QgNCAwIFIKL1NpemUgOAo+PgpzdGFydHhyZWYKMTAzNAolJUVPRgo=";

function getPlaceholderPdfArrayBuffer(): ArrayBuffer {
  // Buffer is the most compatible type in Next/Node, and lets us safely produce an ArrayBuffer slice.
  const buf = Buffer.from(PLACEHOLDER_PDF_BASE64, "base64");
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
}

// GET = quick health/info (avoid 405 in browser)
export async function GET() {
  return Response.json(
    {
      ok: true,
      message: "PDF export endpoint is alive. Use POST /api/export/pdf to get a PDF.",
    },
    { status: 200 }
  );
}

export async function POST(_req: Request) {
  try {
    const body = getPlaceholderPdfArrayBuffer();

    return new Response(body, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="cv.pdf"',
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("PDF export error:", error);
    return Response.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
