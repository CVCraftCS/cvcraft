import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // If you already have CV processing logic,
    // move or call it here.
    // For now we just return the data back.
    return NextResponse.json({
      ok: true,
      result: data,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to generate CV" },
      { status: 500 }
    );
  }
}
