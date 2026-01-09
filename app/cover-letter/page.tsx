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

  // ✅ Move 1: make the generated text box usable + wrapped + resizable
  const textareaClass =
    "mt-4 min-h-[420px] w-full resize-y rounded-xl border border-white/10 bg-slate-900 p-4 text-white placeholder:text-white/40 outline-none focus:border-white/20 focus:ring-0 leading-relaxed whitespace-pre-wrap";

  const canGenerate = useMemo(() => {
    return jobTitle.trim().length >= 2 && companyName.trim().length >= 2 && !loading;
  }, [jobTitle, companyName, loading]);

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
          <p className="mt-3 text-sm text-white/60">Included with your 30-day access. No subscriptions.</p>
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
        </section>
      </div>
    </main>
  );
}
