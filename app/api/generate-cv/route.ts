// app/api/generate-cv/route.ts
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type JobInput = {
  title?: string;
  company?: string;
  location?: string;
  start?: string;
  end?: string;
  bullets?: string[];
};

type Body = {
  targetRoleTitle?: string;
  role?: string;

  experienceText?: string;
  experience?: string;

  skillsText?: string | string[];
  skills?: string | string[];

  jobs?: JobInput[];

  region?: string;
  template?: string;
  tone?: string;

  // ✅ Language hints (we now accept BOTH)
  language?: string; // e.g. "es", "es-ES", "spanish"
  lang?: string;     // e.g. "es-ES" (what your UI is likely sending)

  form?: Record<string, any>;
};

function normalizeSkills(v: unknown): string[] {
  if (!v) return [];

  if (Array.isArray(v)) {
    return v.map(String).map((s) => s.trim()).filter(Boolean);
  }

  if (typeof v === "string") {
    const s = v.trim();
    if (!s) return [];

    // Support newline OR comma-separated OR bullet-ish
    const parts = s.includes("\n")
      ? s.split("\n")
      : s.includes(",")
      ? s.split(",")
      : [s];

    return parts
      .map((x) => x.replace(/^[•\-*]\s+/, "").trim())
      .filter(Boolean);
  }

  return [];
}

function extractResponseText(d: any): string {
  if (typeof d?.output_text === "string" && d.output_text.trim()) {
    return d.output_text.trim();
  }

  const out = d?.output;
  if (Array.isArray(out)) {
    const parts: string[] = [];
    for (const item of out) {
      const content = item?.content;
      if (!Array.isArray(content)) continue;

      for (const c of content) {
        if (typeof c?.text === "string" && c.text.trim()) parts.push(c.text.trim());
        if (typeof c?.output_text === "string" && c.output_text.trim()) {
          parts.push(c.output_text.trim());
        }
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

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function normalizeJobs(v: unknown): JobInput[] {
  if (!Array.isArray(v)) return [];

  return v
    .filter((j) => j && typeof j === "object")
    .map((j: any) => ({
      title: isNonEmptyString(j.title) ? j.title.trim() : undefined,
      company: isNonEmptyString(j.company) ? j.company.trim() : undefined,
      location: isNonEmptyString(j.location) ? j.location.trim() : undefined,
      start: isNonEmptyString(j.start) ? j.start.trim() : undefined,
      end: isNonEmptyString(j.end) ? j.end.trim() : undefined,
      bullets: Array.isArray(j.bullets)
        ? j.bullets.map(String).map((s) => s.trim()).filter(Boolean)
        : undefined,
    }))
    .filter(
      (j) =>
        !!(
          j.title ||
          j.company ||
          j.location ||
          j.start ||
          j.end ||
          (j.bullets && j.bullets.length)
        )
    );
}

function formatJobsForPrompt(jobs: JobInput[]): string {
  if (!jobs.length) return `(No structured jobs provided)`;

  return jobs
    .map((j, idx) => {
      const header = [
        j.title ? `Title: ${j.title}` : `Title: [Job Title]`,
        j.company ? `Company: ${j.company}` : `Company: [Company]`,
        j.location ? `Location: ${j.location}` : `Location: [Location]`,
        j.start || j.end
          ? `Dates: ${j.start ?? "[Start]"} – ${j.end ?? "[End/Present]"}`
          : `Dates: [Start] – [End/Present]`,
      ].join(" | ");

      const bullets =
        j.bullets && j.bullets.length
          ? j.bullets.map((b) => `- ${b}`).join("\n")
          : `- [Responsibility/achievement]\n- [Responsibility/achievement]`;

      return `JOB ${idx + 1}\n${header}\nBullets:\n${bullets}`;
    })
    .join("\n\n");
}

// ✅ Accept language from multiple locations and normalise
function normalizeLanguage(v: unknown): "en" | "es-es" {
  const raw = typeof v === "string" ? v.trim().toLowerCase() : "";
  if (!raw) return "en";

  if (
    raw === "es" ||
    raw === "es-es" ||
    raw.startsWith("es-") ||
    raw.startsWith("es_") ||
    raw.includes("spanish") ||
    raw.includes("español") ||
    raw.includes("espanol")
  ) {
    return "es-es";
  }

  return "en";
}

function languageRules(lang: "en" | "es-es") {
  if (lang === "es-es") {
    return [
      `LANGUAGE RULES (must follow):`,
      `- Write all CV CONTENT in Spanish (Spain).`,
      `- Professional, neutral European Spanish.`,
      `- Do NOT translate proper nouns (people, company names, product names, certifications, tools).`,
      `- Keep emails, URLs, IDs, and dates exactly as provided.`,
      `- IMPORTANT: Keep the SECTION HEADINGS EXACTLY as specified below (in English).`,
    ].join("\n");
  }

  return [
    `LANGUAGE RULES (must follow):`,
    `- Write all CV content in English.`,
    `- IMPORTANT: Keep the SECTION HEADINGS EXACTLY as specified below.`,
  ].join("\n");
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
      body.skillsText ??
        body.skills ??
        body.form?.skillsText ??
        body.form?.skills
    );

    const jobs = normalizeJobs((body as any).jobs ?? body.form?.jobs);

    const region = (body.region ?? body.form?.region ?? "UK").toString();
    const template = (body.template ?? body.form?.template ?? "classic").toString();
    const tone = (body.tone ?? body.form?.tone ?? "professional").toString();

    // ✅ CRITICAL FIX: accept both language and lang (top-level and inside form)
    const lang = normalizeLanguage(
      body.language ??
        body.lang ??
        body.form?.language ??
        body.form?.lang ??
        body.form?.locale
    );

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

    /**
     * ✅ OUTPUT CONTRACT (IMPORTANT):
     * We output stable markdown headings so preview.js can ALWAYS extract sections.
     * The headings remain the same in all languages.
     *
     * preview.js already knows how to parse:
     * - "### Professional Summary"
     * - "### Key Experience"
     * - "### Skills"
     *
     * So we force those exact markers.
     */
    const prompt = [
      `You are CVCraft, an expert CV writer.`,
      `Write in a ${tone} tone.`,
      `Region: ${region}.`,
      `Template hint: ${template}.`,
      ``,
      languageRules(lang),
      ``,
      `TARGET ROLE: ${role}`,
      ``,
      `USER-PROVIDED EXPERIENCE TEXT (authoritative):`,
      experience ? experience : `(No experience text provided)`,
      ``,
      `SKILLS (if provided):`,
      skills.length ? skills.map((s) => `- ${s}`).join("\n") : `(No skills provided)`,
      ``,
      `STRUCTURED EMPLOYMENT HISTORY (authoritative, if provided):`,
      formatJobsForPrompt(jobs),
      ``,
      `TASK: Generate a strong, ATS-friendly CV tailored to the target role.`,
      ``,
      `OUTPUT FORMAT (MUST follow exactly):`,
      `- Return ONLY plain text (no JSON, no code blocks).`,
      `- Use EXACTLY these headings, spelled exactly like this:`,
      `  ### Professional Summary`,
      `  ### Key Experience`,
      `  ### Skills`,
      `- Do not add extra headings.`,
      ``,
      `CONTENT RULES:`,
      `- Under "### Professional Summary": write 2–4 lines tailored to the role. If Spanish is selected, write these lines in Spanish.`,
      `- Under "### Key Experience": write 3–6 lines based on the user's experience text if available. If none is provided, use bracket placeholders like "[X years]" instead of inventing facts.`,
      `- Under "### Skills":`,
      `  - If skills were provided, output them as bullet points (one per line) and keep them close to the originals.`,
      `  - If none were provided, infer only generic skills appropriate to the role (no fake tools/certs).`,
      ``,
      `EMPLOYMENT NOTE:`,
      `- Do NOT include an "Employment History" section here. The UI already renders structured employmentHistory from the form.`,
      `- (This avoids duplicate/conflicting job history and keeps preview consistent.)`,
      ``,
      `BULLET RULE:`,
      `- Skills MUST be bullets, like:`,
      `  - Skill one`,
      `  - Skill two`,
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

    return NextResponse.json({
      ok: true,
      result: outputText,
      language: lang, // helpful debug
    });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Unknown server error." },
      { status: 500 }
    );
  }
}
