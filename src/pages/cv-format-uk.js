// src/pages/cv-format-uk.js
import Head from "next/head";
import Link from "next/link";

export default function CvFormatUKPage() {
  const title = "UK CV Format (2026) — Layout, Sections & Examples | CVCraft";
  const description =
    "A clear UK CV format guide: best layout, ideal length, what sections to include, formatting rules, and copy-paste examples. Built for real applications.";
  const canonical = "https://www.cvcraftclassroom.com/cv-format-uk";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <main className="min-h-screen bg-[#05070f] text-white">
        {/* Top bar */}
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
              <span className="text-xs font-bold">CV</span>
            </span>
            <span className="text-sm font-semibold tracking-tight">CVCraft</span>
          </Link>

          <nav className="flex items-center gap-4 text-sm text-white/80">
            <Link href="/cover-letter" className="hover:text-white">
              Cover letter (free)
            </Link>
            <Link href="/pricing" className="hover:text-white">
              Pricing
            </Link>
            <Link href="/schools" className="hover:text-white">
              Schools &amp; Educators
            </Link>
            <Link
              href="/cv"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/90"
            >
              Build CV
            </Link>
          </nav>
        </div>

        {/* Hero */}
        <header className="mx-auto max-w-5xl px-6 pb-10 pt-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Updated for 2026 UK applications
          </div>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            UK CV format — the layout recruiters expect
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
            If you’re applying in the UK, your CV should be clean, easy to scan,
            and focused on results. This guide shows the best UK CV structure,
            what sections to include, and copy-paste examples.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/cv"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
            >
              Build my CV
            </Link>
            <Link
              href="/cv-writing-help"
              className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
            >
              CV writing help
            </Link>
            <Link
              href="/cover-letter"
              className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
            >
              Free cover letter generator
            </Link>
          </div>
        </header>

        {/* Content */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="grid gap-8 md:grid-cols-12">
            {/* Left: Main article */}
            <article className="md:col-span-8">
              <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <h2 className="text-xl font-bold">The ideal UK CV layout</h2>
                <p className="mt-3 text-white/75 leading-relaxed">
                  A UK CV is usually <b>1–2 pages</b>, reverse-chronological, and
                  designed for quick scanning. Use clear headings, consistent
                  formatting, and bullets focused on outcomes.
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="text-sm font-semibold">Best length</div>
                    <div className="mt-1 text-sm text-white/75">
                      1 page (early career) / 2 pages (experienced). Avoid 3+.
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="text-sm font-semibold">Best font</div>
                    <div className="mt-1 text-sm text-white/75">
                      Simple and readable: 10–11pt body, 14–18pt headings.
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="text-sm font-semibold">Margins</div>
                    <div className="mt-1 text-sm text-white/75">
                      ~1.5–2cm margins, enough white space to breathe.
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="text-sm font-semibold">File type</div>
                    <div className="mt-1 text-sm text-white/75">
                      PDF is best (unless the employer asks for Word).
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <h2 className="text-xl font-bold">UK CV structure (copy this)</h2>
                <p className="mt-3 text-white/75 leading-relaxed">
                  This is the most common and recruiter-friendly UK order:
                </p>

                <ol className="mt-4 list-decimal space-y-2 pl-5 text-white/80">
                  <li>
                    <b>Header</b>: name, phone, email, location (town/city).
                  </li>
                  <li>
                    <b>Personal statement</b> (UK) / professional summary (short).
                  </li>
                  <li>
                    <b>Key skills</b> (6–12 relevant skills).
                  </li>
                  <li>
                    <b>Employment history</b> (reverse-chronological).
                  </li>
                  <li>
                    <b>Qualifications</b> (education + certifications).
                  </li>
                  <li>
                    <b>References</b> (optional: “available on request”).
                  </li>
                </ol>
              </div>

              <div className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <h2 className="text-xl font-bold">What to include (and what to remove)</h2>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-emerald-500/10 p-4 ring-1 ring-emerald-500/20">
                    <div className="text-sm font-semibold text-emerald-200">
                      Include
                    </div>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                      <li>Measurable outcomes (numbers, speed, quality)</li>
                      <li>Role-relevant keywords from the job description</li>
                      <li>Recent experience first</li>
                      <li>Short, punchy bullet points</li>
                    </ul>
                  </div>

                  <div className="rounded-xl bg-rose-500/10 p-4 ring-1 ring-rose-500/20">
                    <div className="text-sm font-semibold text-rose-200">
                      Remove
                    </div>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                      <li>Full address (city/town is enough)</li>
                      <li>Date of birth, marital status</li>
                      <li>Photos (not standard in the UK)</li>
                      <li>Long paragraphs (hard to scan)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <h2 className="text-xl font-bold">Example UK CV section (Employment)</h2>
                <p className="mt-3 text-white/75 leading-relaxed">
                  Use bullets that show outcomes. This reads “credible” quickly.
                </p>

                <div className="mt-4 rounded-xl bg-black/30 p-4 ring-1 ring-white/10">
                  <pre className="whitespace-pre-wrap text-sm text-white/85">
{`Warehouse Supervisor — ExampleCo, Leeds | 2022 – 2025
• Led a day shift team of 12; improved pick accuracy from 98.4% to 99.3%
• Processed 500–1,000+ daily B2C orders while maintaining dispatch deadlines
• Supported B2B fulfilment (20–30 orders/day) including major retail clients
• Introduced simple checks that reduced returns and rework during peak periods`}
                  </pre>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/cv"
                    className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
                  >
                    Build a CV with this format
                  </Link>
                  <Link
                    href="/cv-writing-help"
                    className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
                  >
                    See full writing guide
                  </Link>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <h2 className="text-xl font-bold">UK CV FAQ (quick answers)</h2>

                <div className="mt-4 space-y-4 text-white/80">
                  <div>
                    <div className="font-semibold">Is a UK CV the same as a résumé?</div>
                    <div className="mt-1 text-sm text-white/75">
                      In the UK we usually say “CV”. In the US it’s typically “résumé”.
                      The layout is similar, but UK applications don’t expect photos or personal info.
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold">Should I put a personal statement?</div>
                    <div className="mt-1 text-sm text-white/75">
                      Yes — 3–5 lines max. It should match the role and highlight your strengths.
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold">Should I list every job?</div>
                    <div className="mt-1 text-sm text-white/75">
                      Not always. Keep older/less relevant roles short, and focus detail on recent relevant work.
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold">PDF or Word?</div>
                    <div className="mt-1 text-sm text-white/75">
                      PDF is best unless the employer specifically requests Word.
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Right: Sticky quick nav + CTA */}
            <aside className="md:col-span-4">
              <div className="sticky top-6 space-y-6">
                <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <div className="text-sm font-semibold text-white">Quick actions</div>
                  <div className="mt-4 flex flex-col gap-3">
                    <Link
                      href="/cv"
                      className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
                    >
                      Build CV now
                    </Link>
                    <Link
                      href="/cover-letter"
                      className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
                    >
                      Free cover letter generator
                    </Link>
                    <Link
                      href="/pricing"
                      className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
                    >
                      See pricing
                    </Link>
                  </div>

                  <div className="mt-5 rounded-xl bg-emerald-500/10 p-4 ring-1 ring-emerald-500/20">
                    <div className="text-sm font-semibold text-emerald-200">
                      Tip
                    </div>
                    <p className="mt-1 text-sm text-white/80">
                      Match your first 6–8 skills and your summary to the exact job description.
                      That’s the quickest “ATS win”.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <div className="text-sm font-semibold">Related guides</div>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    <li>
                      <Link className="hover:text-white" href="/cv-writing-help">
                        CV writing help (full guide)
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-white" href="/cover-letter">
                        Cover letter (free generator)
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-white" href="/schools">
                        Schools &amp; Educators (Teacher Mode)
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>

          <footer className="mt-14 border-t border-white/10 pt-8 text-sm text-white/60">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span>© {new Date().getFullYear()} CVCraft</span>
              <div className="flex flex-wrap gap-4">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <Link href="/cv" className="hover:text-white">
                  Build CV
                </Link>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
                <Link href="/schools" className="hover:text-white">
                  Schools
                </Link>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}
