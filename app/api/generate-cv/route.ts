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
  lang?: string; // e.g. "es-ES" (what your UI is likely sending)

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
    const parts = s.includes("\n") ? s.split("\n") : s.includes(",") ? s.split(",") : [s];

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
        if (typeof c?.output_text === "string" && c.output_text.trim()) parts.push(c.output_text.trim());
      }
    }
    return parts.join("\n\n").trim();
  }

  return "";
}

function cleanMultiline(s: string): string {
  return (s || "").replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
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
      bullets: Array.isArray(j.bullets) ? j.bullets.map(String).map((s) => s.trim()).filter(Boolean) : undefined,
    }))
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
        j.start || j.end ? `Dates: ${j.start ?? "[Start]"} – ${j.end ?? "[End/Present]"}` : `Dates: [Start] – [End/Present]`,
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

// -----------------------
// ✅ Rate limiting (simple, per-instance)
// -----------------------
type LimState = { count: number; resetAt: number };
const RL_WINDOW_MS = 60_000; // 1 minute
const RL_MAX_PER_WINDOW = 20; // per IP per minute (tweak as needed)

function getClientIp(req: NextRequest): string {
  // Vercel / proxies typically set x-forwarded-for
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || "unknown";
  const xrip = req.headers.get("x-real-ip");
  if (xrip) return xrip.trim();
  return "unknown";
}

function rateLimitHit(ip: string) {
  const g: any = globalThis as any;
  if (!g.__cvcraft_rl) g.__cvcraft_rl = new Map<string, LimState>();
  const m: Map<string, LimState> = g.__cvcraft_rl;

  const now = Date.now();
  const st = m.get(ip);

  if (!st || now > st.resetAt) {
    m.set(ip, { count: 1, resetAt: now + RL_WINDOW_MS });
    return { hit: false, remaining: RL_MAX_PER_WINDOW - 1, resetAt: now + RL_WINDOW_MS };
  }

  if (st.count >= RL_MAX_PER_WINDOW) {
    return { hit: true, remaining: 0, resetAt: st.resetAt };
  }

  st.count += 1;
  m.set(ip, st);
  return { hit: false, remaining: Math.max(0, RL_MAX_PER_WINDOW - st.count), resetAt: st.resetAt };
}

// -----------------------
// ✅ OpenAI call with retry/backoff for 429/5xx + timeout
// -----------------------
const OPENAI_URL = "https://api.openai.com/v1/responses";
const OPENAI_TIMEOUT_MS = 35_000;

// jittered exponential backoff (ms)
function backoffMs(attempt: number) {
  const base = 500 * Math.pow(2, attempt); // 500, 1000, 2000, 4000...
  const jitter = Math.floor(Math.random() * 250);
  return Math.min(8000, base + jitter);
}

function parseRetryAfterSeconds(h: string | null): number | null {
  if (!h) return null;
  const n = Number(h);
  if (Number.isFinite(n) && n >= 0) return n;
  return null;
}

async function callOpenAIWithRetry(args: {
  apiKey: string;
  model: string;
  input: string;
  maxAttempts?: number;
}) {
  const maxAttempts = Math.max(1, Math.min(4, args.maxAttempts ?? 4)); // up to 4 attempts

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), OPENAI_TIMEOUT_MS);

    try {
      const r = await fetch(OPENAI_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${args.apiKey}`,
        },
        body: JSON.stringify({
          model: args.model,
          input: args.input,
        }),
        signal: controller.signal,
      });

      // Success
      if (r.ok) {
        const data = await r.json();
        return { ok: true as const, status: r.status, data };
      }

      // Read error body once (small)
      const errText = await r.text().catch(() => "");

      // If 429 / 5xx, retry (unless last attempt)
      const retryable = r.status === 429 || (r.status >= 500 && r.status <= 599);
      const retryAfter = parseRetryAfterSeconds(r.headers.get("retry-after"));
      if (retryable && attempt < maxAttempts - 1) {
        const wait = retryAfter != null ? Math.max(0, retryAfter * 1000) : backoffMs(attempt);
        await new Promise((res) => setTimeout(res, wait));
        continue;
      }

      return {
        ok: false as const,
        status: r.status,
        statusText: r.statusText,
        errText,
        retryAfterSeconds: retryAfter ?? undefined,
      };
    } catch (e: any) {
      // Timeout or network error: retry if attempts remain
      const isAbort = e?.name === "AbortError";
      if (attempt < maxAttempts - 1) {
        await new Promise((res) => setTimeout(res, backoffMs(attempt)));
        continue;
      }

      return {
        ok: false as const,
        status: 0,
        statusText: isAbort ? "timeout" : "network_error",
        errText: String(e?.message || e),
      };
    } finally {
      clearTimeout(t);
    }
  }

  // Should never reach here
  return { ok: false as const, status: 0, statusText: "unknown_error", errText: "" };
}

export async function POST(req: NextRequest) {
  try {
    // ✅ Basic per-IP rate limit to prevent accidental hammering
    const ip = getClientIp(req);
    const rl = rateLimitHit(ip);
    if (rl.hit) {
      const retryAfterSeconds = Math.max(1, Math.ceil((rl.resetAt - Date.now()) / 1000));
      return NextResponse.json(
        {
          ok: false,
          error: "Too many requests. Please wait a moment and try again.",
          code: "rate_limited",
          retryAfterSeconds,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfterSeconds),
            "Cache-Control": "no-store",
          },
        }
      );
    }

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

    const skills = normalizeSkills(body.skillsText ?? body.skills ?? body.form?.skillsText ?? body.form?.skills);

    const jobs = normalizeJobs((body as any).jobs ?? body.form?.jobs);

    const region = (body.region ?? body.form?.region ?? "UK").toString();
    const template = (body.template ?? body.form?.template ?? "classic").toString();
    const tone = (body.tone ?? body.form?.tone ?? "professional").toString();

    // ✅ accept both language and lang (top-level and inside form)
    const lang = normalizeLanguage(body.language ?? body.lang ?? body.form?.language ?? body.form?.lang ?? body.form?.locale);

    if (!role) {
      return NextResponse.json({ ok: false, error: "Missing target role title." }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ ok: false, error: "Server missing OPENAI_API_KEY." }, { status: 500 });
    }

    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

    /**
     * ✅ OUTPUT CONTRACT (IMPORTANT):
     * We output stable markdown headings so preview.js can ALWAYS extract sections.
     * The headings remain the same in all languages.
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

    // ✅ Retry/backoff on 429/5xx + timeout protection
    const openai = await callOpenAIWithRetry({
      apiKey,
      model,
      input: prompt,
      maxAttempts: 4,
    });

    if (!openai.ok) {
      // If OpenAI is rate limiting/quota, pass 429 through so the UI can show a friendly message
      if (openai.status === 429) {
        const retryAfter = openai.retryAfterSeconds ?? 20;
        return NextResponse.json(
          {
            ok: false,
            error: "We’re a bit busy right now. Please wait a moment and try again.",
            code: "openai_rate_limited",
            retryAfterSeconds: retryAfter,
          },
          {
            status: 429,
            headers: {
              "Retry-After": String(retryAfter),
              "Cache-Control": "no-store",
            },
          }
        );
      }

      // If it's a timeout/network issue, make it obvious but user-friendly
      if (openai.status === 0) {
        return NextResponse.json(
          {
            ok: false,
            error: "The CV generator didn’t respond in time. Please try again.",
            code: openai.statusText === "timeout" ? "openai_timeout" : "openai_network_error",
          },
          { status: 502 }
        );
      }

      // Other errors: forward status (but keep response clean)
      return NextResponse.json(
        {
          ok: false,
          error: `CV generation failed (${openai.status}). Please try again.`,
          code: "openai_error",
          // Keep details minimal in production to avoid leaking anything
          details: process.env.NODE_ENV === "development" ? openai.errText : undefined,
        },
        { status: openai.status >= 400 && openai.status <= 599 ? openai.status : 500 }
      );
    }

    const outputText = extractResponseText(openai.data);

    if (!outputText) {
      return NextResponse.json(
        {
          ok: false,
          error: "OpenAI returned empty output.",
          debug:
            process.env.NODE_ENV === "development"
              ? {
                  hasOutputText: typeof openai.data?.output_text === "string",
                  hasOutputArray: Array.isArray(openai.data?.output),
                }
              : undefined,
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
    return NextResponse.json({ ok: false, error: e?.message || "Unknown server error." }, { status: 500 });
  }
}
