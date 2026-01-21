// src/pages/index.js
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Top bar */}
      <header className="w-full px-6 py-5">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/15 flex items-center justify-center font-bold">
              CV
            </div>
            <span className="font-semibold tracking-tight">CVCraft</span>
          </div>

          <nav className="flex items-center gap-5 text-sm">
            <Link
              href="/cover-letter"
              className="text-slate-200 hover:text-white"
            >
              Cover letter (free)
            </Link>
            <Link href="/pricing" className="text-slate-200 hover:text-white">
              Pricing
            </Link>
            <Link href="/schools" className="text-slate-200 hover:text-white">
              Schools &amp; Educators
            </Link>
            <Link
              href="/cv"
              className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 font-semibold text-slate-950 hover:bg-slate-200 transition"
            >
              Build CV
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-10 pb-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs text-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Most people finish in under 20 minutes
              </div>

              <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
                Build a professional CV fast —
                <span className="text-slate-200"> without the stress.</span>
              </h1>

              <p className="mt-4 text-slate-300 text-lg leading-relaxed">
                CVCraft turns a few simple inputs into a clean, recruiter-ready
                CV. Perfect for jobseekers, and classroom-ready for teachers
                running one-hour CV sessions.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3">
                <Link
                  href="/cv"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-slate-950 hover:bg-slate-200 transition"
                >
                  Build my CV
                </Link>

                <Link
                  href="/cover-letter"
                  className="inline-flex items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 px-6 py-4 font-semibold text-white hover:bg-white/10 transition"
                >
                  Free cover letter
                </Link>

                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 px-6 py-4 font-semibold text-white hover:bg-white/10 transition"
                >
                  See pricing
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1">
                  No subscriptions
                </span>
                <span className="rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1">
                  Download &amp; print PDF
                </span>
                <span className="rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1">
                  Classroom-safe modes
                </span>
                <span className="rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1">
                  Free cover letter generator
                </span>
              </div>
            </div>

            {/* Right side card */}
            <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8">
              <h2 className="text-xl font-semibold">How it works</h2>

              <div className="mt-5 grid gap-4">
                <div className="rounded-2xl bg-black/20 ring-1 ring-white/10 p-4">
                  <p className="font-semibold">1) Tell us the basics</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Role, experience highlights, skills — no long forms.
                  </p>
                </div>

                <div className="rounded-2xl bg-black/20 ring-1 ring-white/10 p-4">
                  <p className="font-semibold">2) We generate a clean CV</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Structured layout, strong wording, ready to send.
                  </p>
                </div>

                <div className="rounded-2xl bg-black/20 ring-1 ring-white/10 p-4">
                  <p className="font-semibold">3) Export when you’re happy</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Download PDF or print/save as PDF instantly.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                <p className="text-sm text-slate-200">
                  <span className="font-semibold text-white">
                    Need a cover letter?
                  </span>{" "}
                  Generate one for free in under 2 minutes.
                </p>
                <div className="mt-3">
                  <Link
                    href="/cover-letter"
                    className="text-sm font-semibold text-slate-200 hover:text-white underline underline-offset-4"
                  >
                    Open free cover letter generator →
                  </Link>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-emerald-500/10 ring-1 ring-emerald-500/20 p-4">
                <p className="text-sm text-slate-200">
                  <span className="font-semibold text-white">For schools:</span>{" "}
                  run a one-hour session and students leave with a professional
                  CV.
                </p>
                <div className="mt-3">
                  <Link
                    href="/schools"
                    className="text-sm font-semibold text-emerald-200 hover:text-emerald-100 underline underline-offset-4"
                  >
                    See Schools &amp; Educators →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Credibility row */}
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
              <p className="text-sm text-slate-300">Typical time to finish</p>
              <p className="mt-1 text-2xl font-bold">Under 20 mins</p>
            </div>
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
              <p className="text-sm text-slate-300">Payment model</p>
              <p className="mt-1 text-2xl font-bold">No subscriptions</p>
            </div>
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
              <p className="text-sm text-slate-300">Free tool</p>
              <p className="mt-1 text-2xl font-bold">Cover letter generator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-2xl font-bold">What people say</h2>
            <p className="text-sm text-slate-300">
              Simple, fast, and built to be sent out with confidence.
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 text-left">
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <p className="text-slate-100 leading-relaxed">
                “This is great — so efficient, easy to use and saved me hours,
                worth the money alone just for the convenience.”
              </p>
              <p className="mt-4 text-sm text-slate-300">— Danny</p>
            </div>

            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <p className="text-slate-100 leading-relaxed">
                “I hate writing CVs. This made it simple and actually gave me
                something I felt confident sending out.”
              </p>
              <p className="mt-4 text-sm text-slate-300">— Recent jobseeker</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 pb-10">
        <div className="mx-auto max-w-6xl border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} CVCraft. Built for speed. Built properly.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/cover-letter"
              className="text-slate-300 hover:text-white"
            >
              Cover letter
            </Link>
            <Link href="/pricing" className="text-slate-300 hover:text-white">
              Pricing
            </Link>
            <Link href="/schools" className="text-slate-300 hover:text-white">
              Schools
            </Link>
            <Link href="/cv" className="text-slate-300 hover:text-white">
              Build CV
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
