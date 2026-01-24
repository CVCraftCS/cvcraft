"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Tone = "professional" | "friendly" | "confident";

export default function CoverLetterClient() {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [tone, setTone] = useState<Tone>("professional");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const fieldClass =
    "mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/20 focus:ring-0";
  const selectClass =
    "mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-white/20 focus:ring-0";
  const textareaClass =
    "mt-4 min-h-[420px] w-full resize-y rounded-xl border border-white/10 bg-slate-900 p-4 text-white placeholder:text-white/40 outline-none focus:border-white/20 focus:ring-0 leading-relaxed whitespace-pre-wrap";

  const canGenerate = useMemo(
    () => jobTitle.trim().length >= 2 && companyName.trim().length >= 2 && !loading,
    [jobTitle, companyName, loading]
  );

  const hasResult = useMemo(() => result.trim().length > 0, [result]);

  async function generate() {
    try {
      setError(null);
      setCopied(false);
      setLoading(true);
      setResult("");

      const res = await fetch("/api/cover-letter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        body: JSON.stringify({
          jobTitle: jobTitle.trim(),
          companyName: companyName.trim(),
          tone,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Unable to generate cover letter");
      }

      setResult(String(data?.coverLetter || ""));
    } catch (e: any) {
      setError(e?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function copyToClipboard() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight">
            Free Cover Letter Generator for Students and Job Seekers
          </h1>

          <p className="mt-4 text-lg text-white/70">
            Create a professional cover letter in minutes — just enter the role and company and we’ll write a clean,
            recruiter-ready letter you can copy and use.
          </p>

          <p className="mt-3 text-sm text-white/60">
            Free to use. No account. Copy instantly.
          </p>

          <p className="mt-2 text-sm text-white/60">
            Want a CV to match it?{" "}
            <Link href="/pricing" className="underline decoration-white/30 hover:decoration-white/70">
              Get 30-day CV access anytime
            </Link>
            .
          </p>
        </header>

        {/* FORM */}
        <section className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
          {error && (
            <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
              {error}
            </div>
          )}

          <div className="grid gap-4">
            <div>
              <label className="text-sm text-white/70">Job title</label>
              <input
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="e.g. Warehouse Operative"
                className={fieldClass}
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Company name</label>
              <input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. Tesco"
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
              onClick={generate}
              disabled={!canGenerate}
              className="mt-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-white/90 disabled:opacity-50"
            >
              {loading ? "Generating…" : "Generate cover letter"}
            </button>
          </div>
        </section>

        {/* RESULT */}
        <section className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
          <h2 className="text-xl font-semibold">Your cover letter</h2>

          <textarea
            value={result}
            readOnly
            placeholder="Your generated cover letter will appear here…"
            className={textareaClass}
          />

          {hasResult && (
            <div className="mt-6 flex gap-2">
              <button
                onClick={copyToClipboard}
                className="rounded-xl bg-white px-4 py-2 font-semibold text-slate-900"
              >
                {copied ? "Copied ✅" : "Copy"}
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
