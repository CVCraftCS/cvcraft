// src/pages/cv-writing-help.js
import Link from "next/link";

export default function CvWritingHelp() {
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
            <Link href="/cv" className="text-slate-200 hover:text-white">
              Build CV
            </Link>
            <Link href="/cover-letter" className="text-slate-200 hover:text-white">
              Cover letter (free)
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
            CV writing help
          </div>

          <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            CV writing help (fast improvements recruiters actually notice)
          </h1>

          <p className="mt-4 text-slate-300 leading-relaxed">
            A strong CV is clear, structured, and evidence-based. You don’t need to “sound fancy” — you need to
            make it easy to see what you did, how well you did it, and why it matters.
          </p>

          <div className="mt-7 rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
            <h2 className="text-xl font-semibold">The 20-minute upgrade checklist</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>
                <span className="text-white font-semibold">Lead with a clear target role</span> (e.g. “Warehouse Operative”, “Admin Assistant”).
              </li>
              <li>
                <span className="text-white font-semibold">Use bullet points</span> for experience — not paragraphs.
              </li>
              <li>
                <span className="text-white font-semibold">Add proof</span>: numbers, outcomes, speed, volume, quality, customer satisfaction.
              </li>
              <li>
                <span className="text-white font-semibold">Match keywords</span> from the job advert (tools, duties, certifications).
              </li>
              <li>
                <span className="text-white font-semibold">Cut weak filler</span> like “hardworking” unless you show evidence.
              </li>
            </ul>
          </div>

          <div className="mt-8 rounded-3xl bg-black/20 ring-1 ring-white/10 p-6">
            <h2 className="text-xl font-semibold">Bullet formula that works</h2>
            <p className="mt-3 text-slate-300">
              Use: <span className="text-white font-semibold">Action + What + Result</span>
            </p>
            <div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
              <p className="text-slate-200 text-sm">
                Example: “Handled 30+ customer queries per day, resolving issues quickly and improving satisfaction.”
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/cv"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-slate-950 hover:bg-slate-200 transition"
            >
              Build my CV →
            </Link>
            <Link
              href="/cover-letter-help"
              className="inline-flex items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 px-6 py-4 font-semibold text-white hover:bg-white/10 transition"
            >
              Cover letter help →
            </Link>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            If spelling/wording is a barrier, generating a draft first (then checking the facts) is often the fastest route to a professional result.
          </p>
        </div>
      </section>
    </main>
  );
}
