import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      role,
      experienceText,
      skills = [],
    } = body || {};

    // Basic safety checks
    if (!role || typeof role !== "string") {
      return NextResponse.json(
        { ok: false, error: "Missing role" },
        { status: 400 }
      );
    }

    // Build a single STRING result (this is what the UI expects)
    let result = "";

    result += `Target Role: ${role}\n\n`;

    if (experienceText && typeof experienceText === "string") {
      result += `Experience:\n${experienceText}\n\n`;
    }

    if (Array.isArray(skills) && skills.length > 0) {
      result += `Skills:\n`;
      result += skills.map((s: string) => `- ${s}`).join("\n");
    }

    // Final guard: ensure result is ALWAYS a string
    if (!result || typeof result !== "string") {
      return NextResponse.json(
        { ok: false, error: "Result generation failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      result, // ✅ STRING ONLY
    });
  } catch (err) {
    console.error("generate-cv error:", err);

    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
