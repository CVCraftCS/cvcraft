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
  bullets?: string[]; // responsibilities/achievements
};

type Body = {
  // Flexible field names (your UI may send different ones)
  targetRoleTitle?: string;
  role?: string;

  experienceText?: string;
  experience?: string;

  skillsText?: string | string[];
  skills?: string | string[];

  // Option A: structured employment history
  jobs?: JobInput[];

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
    // keep only entries that have at least something
    .filter((j) => !!(j.title || j.company || j.location || j.start || j.end || (j.bullets && j.bullets.length)));
}

function formatJobsForPrompt(jobs: JobInput[]): string {
  if (!jobs.length) return `(No structured jobs provided)`;

  return jobs
    .map((j, idx) => {
      const header = [
        j.title ? `Title: ${j.title}` : `Title: [Job Title]`,
        j.company ? `Company: ${j.company}` : `Company: [Company]`,
        j.location ? `Location: ${j.location}` : `Location: [Location]`,
        (j.start || j.end)
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

    // Option A structured jobs (either top-level jobs or within form.jobs)
    const jobs = normalizeJobs((body as any).jobs ?? body.form?.jobs);

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
     * Specifically, we require an explicit "EXPERIENCE SUMMARY" section that MUST be based on the provided experience text.
     *
     * Option A:
     * If structured jobs are provided, we use them for EMPLOYMENT HISTORY.
     * If not, we output bracket placeholders (not "Details available on request").
     */
    const prompt = [
      `You are CVCraft, an expert CV writer.`,
      `Write in a ${tone} tone.`,
      `Region: ${region}.`,
      `Template hint: ${template}.`,
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
      `OUTPUT RULES (must follow exactly):`,
      `- Return ONLY plain CV text (no JSON, no code, no markdown fences).`,
      `- Use THESE EXACT HEADINGS in this order (even if some are short):`,
      `  1) PROFILE`,
      `  2) EXPERIENCE SUMMARY`,
      `  3) KEY SKILLS`,
      `  4) EMPLOYMENT HISTORY`,
      `  5) EDUCATION`,
      `  6) QUALIFICATIONS & CERTIFICATIONS`,
      `  7) ADDITIONAL INFORMATION`,
      ``,
      `- Under PROFILE:`,
      `  - Write 2–4 lines as a professional profile tailored to the target role.`,
      `  - You MAY draw from the user's experience text, but do not copy it verbatim.`,
      ``,
      `- Under EXPERIENCE SUMMARY:`,
      `  - MUST be present.`,
      `  - MUST be based on the user's provided experience text if available.`,
      `  - Write 3–6 lines, slightly rewritten for clarity, preserving key facts.`,
      `  - If no experience text was provided, use placeholders like "[X years]" and "[industry]" rather than inventing facts.`,
      ``,
      `- Under KEY SKILLS:`,
      `  - Prefer using provided skills verbatim as bullets; if none were provided, infer only general skills without fabricating facts.`,
      ``,
      `- Under EMPLOYMENT HISTORY:`,
      `  - If structured jobs were provided above, format each job as:`,
      `    Job Title — Company`,
      `    Location | Dates`,
      `    • bullet`,
      `    • bullet`,
      `    (Improve wording of provided bullets for professionalism, but do NOT invent employers/dates.)`,
      `  - If no structured jobs were provided, output 2–3 placeholder roles using bracket placeholders like:`,
      `    [Job Title] — [Company]`,
      `    [Location] | [Dates]`,
      `    • [Responsibility/achievement]`,
      `    • [Responsibility/achievement]`,
      `  - Do NOT write "Details available on request".`,
      ``,
      `- Under EDUCATION and QUALIFICATIONS & CERTIFICATIONS:`,
      `  - Do NOT invent schools/certifications.`,
      `  - If missing, output bracket placeholders like:`,
      `    [Qualification] — [Institution] ([Year])`,
      `    [Certification] — [Provider] ([Year])`,
      ``,
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
