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

function cleanMultiline(s: string): string {
  return (s || "")
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
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

    const experienceRaw =
      body.experienceText?.trim() ||
      body.experience?.trim() ||
      body.form?.experienceText?.trim() ||
      body.form?.experience?.trim() ||
      "";

    const experience = cleanMultiline(experienceRaw);

    const skills = normalizeSkills(
      body.skillsText ?? body.skills ?? body.form?.skillsText ?? body.form?.skills
    );

    const region = (body.region ?? body.form?.region ?? "UK").toString();
    const template = (body.template ?? body.form?.template ?? "classic").toString();
    const tone = (body.tone ?? body.form?.tone ?? "professional").toString();

    if (!role) {
      return NextResponse.json({ ok: false, error: "Missing target role title." }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ ok: false, error: "Server missing OPENAI_API_KEY." }, { status: 500 });
    }

    // Keep your default model here. You can override via Vercel env var OPENAI_MODEL.
    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

    /**
     * IMPORTANT CHANGE:
     * We force a predictable section structure so the preview can reliably show "Experience" content.
     * Specifically, we require a "PROFILE" section and tell it to use the provided experience text.
     */
    const prompt = [
      `You are CVCraft, an expert CV writer.`,
      `Write in a ${tone} tone.`,
      `Region: ${region}.`,
      `Template hint: ${template}.`,
      ``,
      `TARGET ROLE: ${role}`,
      ``,
      `CANDIDATE CONTEXT (may be incomplete):`,
      experience ? experience : `(No experience text provided)`,
      ``,
      `SKILLS (if provided):`,
      skills.length ? skills.map((s) => `- ${s}`).join("\n") : `(No skills provided)`,
      ``,
      `TASK: Generate a strong, ATS-friendly CV tailored to the target role.`,
      ``,
      `OUTPUT RULES (must follow exactly):`,
      `- Return ONLY plain CV text (no JSON, no code, no markdown fences).`,
      `- Use THESE EXACT HEADINGS in this order (even if some are short):`,
      `  1) PROFILE`,
      `  2) KEY SKILLS`,
      `  3) EMPLOYMENT HISTORY`,
      `  4) EDUCATION`,
      `  5) QUALIFICATIONS & CERTIFICATIONS`,
      `  6) ADDITIONAL INFORMATION`,
      `- Under PROFILE:`,
      `  - If candidate context was provided, you MUST base the PROFILE on it (paraphrase/rewrite it).`,
      `  - Do NOT omit PROFILE.`,
      `- Under KEY SKILLS:`,
      `  - Prefer using provided skills verbatim as bullets; if none were provided, infer only general skills without fabricating facts.`,
      `- Under EMPLOYMENT HISTORY / EDUCATION / QUALIFICATIONS:`,
      `  - Do NOT invent employers, dates, schools, or certifications.`,
      `  - If missing, write a short placeholder-style line like "Details available on request" or keep the section minimal.`,
      `- Use bullet points where appropriate.`,
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
