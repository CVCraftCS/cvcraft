// app/api/generate-cv/route.ts
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  // Flexible field names (your UI may send different ones)
  targetRoleTitle?: string;
  role?: string;

  experienceText?: string;
  experience?: string;

  skillsText?: string | string[];
  skills?: string | string[];

  // Optional extras
  region?: string;
  template?: string;
  tone?: string;

  // If the frontend posts everything inside one object
  form?: Record<string, any>;
};

function normalizeSkills(v: unknown): string[] {
  if (!v) return [];
  if (Array.isArray(v)) return v.map(String).map((s) => s.trim()).filter(Boolean);
  if (typeof v === "string") {
    return v
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
}

function extractResponseText(d: any): string {
  // Most common convenience property
  if (typeof d?.output_text === "string" && d.output_text.trim()) {
    return d.output_text.trim();
  }

  // Fallback: walk output -> content -> text
  const out = d?.output;
  if (Array.isArray(out)) {
    const parts: string[] = [];
    for (const item of out) {
      const content = item?.content;
      if (!Array.isArray(content)) continue;

      for (const c of content) {
        if (typeof c?.text === "string" && c.text.trim()) parts.push(c.text.trim());
        if (typeof c?.output_text === "string" && c.output_text.trim())
          parts.push(c.output_text.trim());
      }
    }
    return parts.join("\n\n").trim();
  }

  return "";
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

    // Keep your default model here. You can override via Vercel env var OPENAI_MODEL.
    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

    const prompt = [
      `You are CVCraft, an expert CV writer.`,
      `Write in a ${tone} tone.`,
      `Region: ${region}.`,
      `Template hint: ${template}.`,
      ``,
      `Target role: ${role}`,
      ``,
      experience
        ? `Experience/context (may be incomplete):\n${experience}`
        : `Experience/context: (none provided)`,
      ``,
      skills.length
        ? `Skills:\n${skills.map((s) => `- ${s}`).join("\n")}`
        : `Skills: (none provided)`,
      ``,
      `Task: Generate a strong, ATS-friendly CV tailored to the target role.`,
      `Rules:`,
      `- Return ONLY the CV text (no JSON, no code, no markdown fences).`,
      `- Use clear section headings.`,
      `- Use bullet points where appropriate.`,
      `- Do not invent employers or qualifications; if something is missing, write generally without adding fake facts.`,
    ].join("\n");

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
        {
          ok: false,
          error: `OpenAI error: ${r.status} ${r.statusText}`,
          details: errText,
        },
        { status: 500 }
      );
    }

    const data: any = await r.json();
    const outputText = extractResponseText(data);

    if (!outputText) {
      return NextResponse.json(
        {
          ok: false,
          error: "OpenAI returned empty output.",
          debug: {
            hasOutputText: typeof data?.output_text === "string",
            hasOutputArray: Array.isArray(data?.output),
          },
        },
        { status: 500 }
      );
    }

    // ✅ Frontend expects: { ok: true, result: string }
    return NextResponse.json({ ok: true, result: outputText });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Unknown server error." },
      { status: 500 }
    );
  }
}
