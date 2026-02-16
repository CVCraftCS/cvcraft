// src/pages/start.js
import Head from "next/head";
import Link from "next/link";

export default function Start() {
  const title = "Start Here | Build CV + Free Cover Letter | CVCraft Classroom";
  const description =
    "A simple step-by-step flow: build your CV, generate a free cover letter, then export when you're ready. Fast, calm, recruiter-ready.";
  const canonical = "https://www.cvcraftclassroom.com/start";
  const ogImage = "https://www.cvcraftclassroom.com/og/og-default.png";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url: canonical,
    description,
    isPartOf: {
      "@type": "WebSite",
      name: "CVCraft Classroom",
      url: "https://www.cvcraftclassroom.com/",
    },
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:site_name" content="CVCraft Classroom" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Structured data */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="min-h-screen bg-slate-950 text-white">
        <header className="w-full px-6 py-5">
          <div className="mx-auto max-w-6xl flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <img
                src="/brand/logo.svg"
                alt="CVCraft Classroom"
                className="h-9 w-auto hidden sm:block"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/15 flex items-center justify-center font-bold sm:hidden">
                CV
              </div>
              <span className="sr-only">CVCraft Classroom</span>
            </Link>

            <nav className="hidden md:flex items-center gap-5 text-sm">
              <Link href="/cv-examples-uk" className="text-slate-200 hover:text-white">
                CV examples (UK)
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

            <div className="md:hidden">
              <Link
                href="/cv"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 font-semibold text-slate-950 hover:bg-slate-200 transition"
              >
                Build CV
              </Link>
            </div>
          </div>
        </header>

        <section className="px-6 pt-10 pb-16">
          <div className="mx-auto max-w-6xl">
            {/* subtle colour glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-[-120px] mx-auto h-[260px] max-w-6xl blur-3xl opacity-30"
              style={{
                background:
                  "radial-gradient(600px 220px at 15% 40%, rgba(16,185,129,.55), transparent 60%), radial-gradient(520px 220px at 85% 30%, rgba(59,130,246,.45), transparent 60%)",
              }}
            />

            <div className="relative">
              <nav className="text-sm text-slate-400">
                <Link href="/" className="hover:text-white underline underline-offset-4">
                  Home
                </Link>{" "}
                <span className="mx-2">→</span>
                <span className="text-slate-200">Start</span>
              </nav>

              <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
                Start here: CV → cover letter → export
              </h1>

              <p className="mt-4 max-w-3xl text-slate-300 text-lg leading-relaxed">
                This is the fastest way to finish an application without getting overwhelmed.
                Follow the steps below, and you’ll end up with a recruiter-ready CV and a matching cover letter.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/cv"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-slate-950 hover:bg-slate-200 transition"
                >
                  Step 1: Build my CV →
                </Link>

                <Link
                  href="/cover-letter"
                  className="inline-flex items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 px-6 py-4 font-semibold text-white hover:bg-white/10 transition"
                >
                  Step 2: Free cover letter →
                </Link>
              </div>

              <p className="mt-3 text-sm text-slate-300">
                Export/Print is available from the preview when you’re happy. (Paid pass — no subscriptions.)
              </p>

              <div className="mt-12 grid gap-5 lg:grid-cols-3">
                {/* Step cards */}
                <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
                  <div className="text-xs text-slate-300">STEP 1</div>
                  <h2 className="mt-2 text-xl font-semibold">Build your CV</h2>
                  <p className="mt-2 text-slate-300 leading-relaxed">
                    Add your role, experience highlights, and skills. Keep it simple — we’ll format it cleanly.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/cv"
                      className="text-sm font-semibold text-emerald-300 hover:text-emerald-200 underline underline-offset-4"
                    >
                      Open CV builder →
                    </Link>
                  </div>
                </div>

                <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
                  <div className="text-xs text-slate-300">STEP 2</div>
                  <h2 className="mt-2 text-xl font-semibold">Generate a cover letter (free)</h2>
                  <p className="mt-2 text-slate-300 leading-relaxed">
                    Use the same details and generate a matching cover letter in minutes. No signup.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/cover-letter"
                      className="text-sm font-semibold text-emerald-300 hover:text-emerald-200 underline underline-offset-4"
                    >
                      Open cover letter generator →
                    </Link>
                  </div>
                </div>

                <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
                  <div className="text-xs text-slate-300">STEP 3</div>
                  <h2 className="mt-2 text-xl font-semibold">Export when you’re happy</h2>
                  <p className="mt-2 text-slate-300 leading-relaxed">
                    When your CV looks right, export/print from preview. One simple pass — no subscriptions.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/pricing"
                      className="text-sm font-semibold text-emerald-300 hover:text-emerald-200 underline underline-offset-4"
                    >
                      See pricing →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Side paths */}
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
                  <h3 className="text-lg font-semibold">Need examples before you start?</h3>
                  <p className="mt-2 text-slate-300 leading-relaxed">
                    Browse job-specific UK CV examples (warehouse, retail, no experience, and more).
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/cv-examples-uk"
                      className="text-sm font-semibold text-slate-200 hover:text-white underline underline-offset-4"
                    >
                      Browse UK CV examples →
                    </Link>
                  </div>
                </div>

                <div className="rounded-3xl bg-emerald-500/10 ring-1 ring-emerald-500/20 p-6">
                  <h3 className="text-lg font-semibold">For schools & educators</h3>
                  <p className="mt-2 text-slate-200 leading-relaxed">
                    Run a one-hour session and students leave with a professional CV using classroom-safe modes.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/schools"
                      className="text-sm font-semibold text-emerald-200 hover:text-emerald-100 underline underline-offset-4"
                    >
                      Schools &amp; Educators →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-14 rounded-3xl bg-white/5 ring-1 ring-white/10 p-8 text-center">
                <h2 className="text-2xl font-bold">Ready?</h2>
                <p className="mt-3 text-slate-300">
                  Start with the CV builder — you can always come back here.
                </p>
                <div className="mt-6 flex justify-center gap-4 flex-wrap">
                  <Link
                    href="/cv"
                    className="rounded-2xl bg-white px-6 py-4 font-semibold text-slate-950 hover:bg-slate-200 transition"
                  >
                    Build my CV →
                  </Link>
                  <Link
                    href="/cover-letter"
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-6 py-4 font-semibold text-white hover:bg-white/10 transition"
                  >
                    Free cover letter →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="px-6 pb-10">
          <div className="mx-auto max-w-6xl border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} CVCraft. Built for speed. Built properly.
            </p>
            <div className="flex items-center gap-4 text-sm flex-wrap">
              <Link href="/cv" className="text-slate-300 hover:text-white">
                Build CV
              </Link>
              <Link href="/cover-letter" className="text-slate-300 hover:text-white">
                Cover letter
              </Link>
              <Link href="/pricing" className="text-slate-300 hover:text-white">
                Pricing
              </Link>
              <Link href="/cv-examples-uk" className="text-slate-300 hover:text-white">
                CV examples (UK)
              </Link>
              <Link href="/schools" className="text-slate-300 hover:text-white">
                Schools
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
