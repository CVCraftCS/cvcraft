// app/api/generate-cv/route.ts
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  // Keep flexible: your frontend may send slightly different names
  targetRoleTitle?: string;
  role?: string;

  experienceText?: string;
  experience?: string;

  skillsText?: string | string[];
  skills?: string | string[];

  // Optional extras you might already send
  region?: string;
  template?: string;
  tone?: string;

  // If you send the whole form as one object
  form?: Record<string, any>;
};

function normalizeSkills(v: unknown): string[] {
  if (!v) return [];
  if (Array.isArray(v)) return v.map(String).map(s => s.trim()).filter(Boolean);
  if (typeof v === "string") {
    return v
      .split("\n")
      .map(s => s.trim())
      .filter(Boolean);
  }
  return [];
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Body;

    const role =
      body.targetRoleTitle?.trim() ||
      body.role?.trim() ||
      body.form?.targetRoleTitle?.trim() ||
      body.form?.role?.trim() ||
      "";

    const experience =
      body.experienceText?.trim() ||
      body.experience?.trim() ||
      body.form?.experienceText?.trim() ||
      body.form?.experience?.trim() ||
      "";

    const skills = normalizeSkills(
      body.skillsText ?? body.skills ?? body.form?.skillsText ?? body.form?.skills
    );

    const region = (body.region ?? body.form?.region ?? "UK").toString();
    const template = (body.template ?? body.form?.template ?? "classic").toString();
    const tone = (body.tone ?? body.form?.tone ?? "professional").toString();

    // If you want to allow “blank” generation, remove this check.
    if (!role) {
      return NextResponse.json(
        { ok: false, error: "Missing target role title." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Server missing OPENAI_API_KEY." },
        { status: 500 }
      );
    }

    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

    const prompt = [
      `You are CVCraft, a CV writer.`,
      `Write in ${tone} tone for region ${region}.`,
      `Template hint: ${template}.`,
      ``,
      `Target role: ${role}`,
      experience ? `Experience/context:\n${experience}` : `Experience/context: (none provided)`,
      skills.length ? `Skills:\n${skills.map(s => `- ${s}`).join("\n")}` : `Skills: (none provided)`,
      ``,
      `Return ONLY the finished CV text (no JSON).`,
      `Use clean section headings and bullet points where appropriate.`,
    ].join("\n");

    // OpenAI Responses API (recommended). If you’re using a different client elsewhere,
    // this still works as a standalone route.
    const r = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        input: prompt,
      }),
    });

    if (!r.ok) {
      const errText = await r.text().catch(() => "");
      return NextResponse.json(
        { ok: false, error: `OpenAI error: ${r.status} ${r.statusText}`, details: errText },
        { status: 500 }
      );
    }

    const data: any = await r.json();

    // Responses API usually provides output_text
    const outputText =
      (typeof data?.output_text === "string" && data.output_text) ||
      "";

    if (!outputText.trim()) {
      return NextResponse.json(
        { ok: false, error: "OpenAI returned empty output." },
        { status: 500 }
      );
    }

    // IMPORTANT: always return a STRING in result
    return NextResponse.json({ ok: true, result: outputText.trim() });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Unknown server error." },
      { status: 500 }
    );
  }
}
