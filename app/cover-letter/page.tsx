"use client";

import { useMemo, useState } from "react";

type Tone = "professional" | "friendly" | "confident";

export default function CoverLetterPage() {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [tone, setTone] = useState<Tone>("professional");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");

  // ✅ Force consistent dark inputs (fix "can't see what I'm typing" + select styling)
  const fieldClass =
    "mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/20 focus:ring-0";
  const selectClass =
    "mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-white/20 focus:ring-0";

  // ✅ Make the generated text box usable + wrapped + resizable
  const textareaClass =
    "mt-4 min-h-[420px] w-full resize-y rounded-xl border border-white/10 bg-slate-900 p-4 text-white placeholder:text-white/40 outline-none focus:border-white/20 focus:ring-0 leading-relaxed whitespace-pre-wrap";

  const canGenerate = useMemo(() => {
    return jobTitle.trim().length >= 2 && companyName.trim().length >= 2 && !loading;
  }, [jobTitle, companyName, loading]);

  const hasResult = useMemo(() => result.trim().length > 0, [result]);

  async function generate() {
    try {
      setError(null);
      setLoading(true);
      setResult("");

      const res = await fetch("/api/cover-letter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobTitle: jobTitle.trim(),
          companyName: companyName.trim(),
          tone,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Unable to generate cover letter");
      }

      setResult(data?.coverLetter || "");
    } catch (e: any) {
      setError(e?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(result);
    } catch {
      // ignore
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Hero */}
        <header className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight">Free Cover Letter Generator</h1>
          <p className="mt-4 text-lg text-white/70">
            Enter the role and company — we’ll write a clean, professional cover letter you can copy and use.
          </p>

          {/* ✅ Free-first trust line */}
          <p className="mt-3 text-sm text-white/60">Free to use. No account. Copy instantly.</p>

          {/* ✅ Soft upgrade link (non-pushy) */}
          <p className="mt-2 text-sm text-white/60">
            Want a CV to match it?{" "}
            <a href="/pricing" className="text-white underline decoration-white/30 hover:decoration-white/70">
              Get 30-day CV access anytime
            </a>
            .
          </p>
        </header>

        {/* Form */}
        <section className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
          {error ? (
            <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
              {error}
            </div>
          ) : null}

          <div className="grid gap-4">
            <div>
              <label className="text-sm text-white/70">Job title</label>
              <input
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="e.g. Warehouse Operative / Customer Service Advisor"
                className={fieldClass}
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Company name</label>
              <input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. Tesco / Amazon / NHS"
                className={fieldClass}
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Tone</label>
              <select value={tone} onChange={(e) => setTone(e.target.value as Tone)} className={selectClass}>
                <option value="professional">Professional</option>
                <option value="friendly">Friendly</option>
                <option value="confident">Confident</option>
              </select>
            </div>

            <button
              type="button"
              onClick={generate}
              disabled={!canGenerate}
              className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Generating…" : "Generate cover letter"}
            </button>

            <p className="text-center text-xs text-white/50">
              Tip: After generating, tweak one or two lines so it sounds like you.
            </p>
          </div>
        </section>

        {/* Result */}
        <section className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="text-xl font-semibold">Your cover letter</h2>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={copyToClipboard}
                disabled={!result}
                className="rounded-xl border border-white/15 bg-white px-4 py-2 font-semibold text-slate-900 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Copy
              </button>
            </div>
          </div>

          <textarea
            value={result}
            readOnly
            placeholder="Your generated cover letter will appear here…"
            className={textareaClass}
          />

          {/* ✅ Conversion block (ONLY after a letter exists) */}
          {hasResult ? (
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Want this perfectly matched to your CV?</h3>
              <p className="mt-2 text-sm text-white/70">
                Build your CV in the same style, then download a recruiter-ready PDF. One-off payment, 30 days access.
              </p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/pricing"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-white/90"
                >
                  Get 30-Day CV Access — £9.99
                </a>

                <a
                  href="/cv"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-white/15 bg-transparent px-5 py-3 font-semibold text-white hover:bg-white/5"
                >
                  Or build your CV first
                </a>
              </div>
            </div>
          ) : null}
        </section>
      </div>

      {/* ✅ Sticky CTA (ONLY after a letter exists) */}
      {hasResult ? (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-slate-950/95 backdrop-blur">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-white/80">
              <span className="font-semibold text-white">You’ve got the cover letter</span> — now match it with a CV.
            </div>
            <div className="flex gap-2">
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 font-semibold text-slate-900 hover:bg-white/90"
              >
                Build CV (30-Day Access)
              </a>
              <a
                href="/cv"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2 font-semibold text-white hover:bg-white/5"
              >
                Go to CV builder
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
