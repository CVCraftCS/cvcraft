// src/pages/cover-letter-help.js
import Link from "next/link";

export default function CoverLetterHelp() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="w-full px-6 py-5">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/15 flex items-center justify-center font-bold">
              CV
            </div>
            <span className="font-semibold tracking-tight">CVCraft</span>
          </Link>

          <nav className="flex items-center gap-5 text-sm">
            <Link href="/cover-letter" className="text-slate-200 hover:text-white">
              Cover letter (free)
            </Link>
            <Link href="/cv" className="text-slate-200 hover:text-white">
              Build CV
            </Link>
            <Link href="/pricing" className="text-slate-200 hover:text-white">
              Pricing
            </Link>
          </nav>
        </div>
      </header>

      <section className="px-6 pt-6 pb-16">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs text-slate-200">
            Cover letter help
          </div>

          <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            How to write a cover letter (simple, proven structure)
          </h1>

          <p className="mt-4 text-slate-300 leading-relaxed">
            A good cover letter is short, specific, and easy to scan. You don’t need fancy words —
            you need clear reasons you fit the role, backed by 2–3 examples.
          </p>

          <div className="mt-7 rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
            <h2 className="text-xl font-semibold">The easiest structure</h2>
            <ol className="mt-4 space-y-4 text-slate-200">
              <li>
                <p className="font-semibold">1) Hook (1–2 sentences)</p>
                <p className="text-slate-300 text-sm mt-1">
                  The role you’re applying for + why you’re interested (not generic).
                </p>
              </li>
              <li>
                <p className="font-semibold">2) Proof (2 short examples)</p>
                <p className="text-slate-300 text-sm mt-1">
                  Choose 2 strengths that match the job description and show evidence.
                </p>
              </li>
              <li>
                <p className="font-semibold">3) Fit &amp; values (1 short paragraph)</p>
                <p className="text-slate-300 text-sm mt-1">
                  Why this company, team, or industry — one specific line is enough.
                </p>
              </li>
              <li>
                <p className="font-semibold">4) Close (1–2 sentences)</p>
                <p className="text-slate-300 text-sm mt-1">
                  Thank them, confirm interest, and invite next steps.
                </p>
              </li>
            </ol>
          </div>

          <div className="mt-8 rounded-3xl bg-black/20 ring-1 ring-white/10 p-6">
            <h2 className="text-xl font-semibold">Quick tips that instantly improve results</h2>
            <ul className="mt-4 space-y-3 text-slate-200">
              <li className="text-slate-300">
                Keep it to <span className="text-white font-semibold">150–250 words</span>.
              </li>
              <li className="text-slate-300">
                Mirror 2–3 keywords from the job advert (skills/tools/role name).
              </li>
              <li className="text-slate-300">
                Replace vague lines like “hardworking” with a mini-example.
              </li>
              <li className="text-slate-300">
                If spelling/wording is a worry, generate a draft and then edit the facts.
              </li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/cover-letter"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-slate-950 hover:bg-slate-200 transition"
            >
              Use the free cover letter generator →
            </Link>
            <Link
              href="/cv-writing-help"
              className="inline-flex items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 px-6 py-4 font-semibold text-white hover:bg-white/10 transition"
            >
              CV writing help →
            </Link>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            Tip: If you’re applying to multiple jobs, regenerate the cover letter per role — keep the structure,
            swap the evidence and keywords.
          </p>
        </div>
      </section>
    </main>
  );
}
