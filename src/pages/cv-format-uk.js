// src/pages/cv-format-uk.js
import Head from "next/head";
import Link from "next/link";

export default function CvFormatUKPage() {
  const title = "UK CV Format (2026) — Layout, Sections & Examples | CVCraft";
  const description =
    "A clear UK CV format guide: best layout, ideal length, what sections to include, formatting rules, and copy-paste examples. Built for real applications.";
  const canonical = "https://www.cvcraftclassroom.com/cv-format-uk";

  // Optional OG image (add this file later if you want)
  // Create: /public/og/og-default.png
  const ogImage = "https://www.cvcraftclassroom.com/og/og-default.png";

  const faqItems = [
    {
      q: "What is the correct UK CV format in 2026?",
      a: "Most UK CVs follow a simple structure: contact details, personal statement, key skills, employment history, qualifications, and optional references. Keep it clear, 1–2 pages, and focused on results.",
    },
    {
      q: "Should a UK CV include a personal statement?",
      a: "Yes — keep it to 3–5 lines. It should match the role and highlight your strengths using the same language as the job description.",
    },
    {
      q: "How long should a UK CV be?",
      a: "One page is ideal for entry-level candidates. Two pages is fine for experienced candidates. Avoid 3+ pages unless you’re in a specialist academic or medical context.",
    },
    {
      q: "Do I need to include my full address or date of birth?",
      a: "No. In the UK, town/city is enough. Avoid date of birth, marital status, and photos — they’re not standard and add no value.",
    },
    {
      q: "Should I send my CV as a PDF or Word document?",
      a: "PDF is best unless the employer requests Word. PDF preserves formatting and prevents layout issues when opened on different devices.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: x.a,
      },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: canonical,
    url: canonical,
    image: ogImage,
    author: {
      "@type": "Organization",
      name: "CVCraft Classroom",
    },
    publisher: {
      "@type": "Organization",
      name: "CVCraft Classroom",
      logo: {
        "@type": "ImageObject",
        url: ogImage,
      },
    },
    // ✅ Keep this current (helps with SEO freshness signals)
    dateModified: "2026-02-17",
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
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
          {/* ✅ Breadcrumbs (fixed: this page is not under CV Examples UK) */}
          <nav className="text-sm text-white/60">
            <Link href="/" className="hover:text-white underline underline-offset-4">
              Home
            </Link>{" "}
            <span className="mx-2">→</span>
            <span className="text-white/85">UK CV Format</span>
          </nav>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">
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

          {/* TOC */}
          <div className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="text-sm font-semibold text-white">On this page</div>
            <ul className="mt-3 grid gap-2 text-sm text-white/80 sm:grid-cols-2">
              <li>
                <a
                  href="#ideal-layout"
                  className="hover:text-white underline underline-offset-4"
                >
                  The ideal UK CV layout
                </a>
              </li>
              <li>
                <a
                  href="#structure"
                  className="hover:text-white underline underline-offset-4"
                >
                  UK CV structure (copy this)
                </a>
              </li>
              <li>
                <a
                  href="#include-remove"
                  className="hover:text-white underline underline-offset-4"
                >
                  What to include (and remove)
                </a>
              </li>
              <li>
                <a
                  href="#employment-example"
                  className="hover:text-white underline underline-offset-4"
                >
                  Employment section example
                </a>
              </li>
              <li>
                <a
                  href="#examples"
                  className="hover:text-white underline underline-offset-4"
                >
                  UK CV examples by role
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white underline underline-offset-4">
                  UK CV FAQ
                </a>
              </li>
            </ul>
          </div>
        </header>

        {/* Content */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="grid gap-8 md:grid-cols-12">
            {/* Left: Main article */}
            <article className="md:col-span-8">
              <div
                id="ideal-layout"
                className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 scroll-mt-24"
              >
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

              <div
                id="structure"
                className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 scroll-mt-24"
              >
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

                <p className="mt-4 text-white/75 leading-relaxed">
                  If you have no work experience yet, use the same structure but
                  move <b>education</b> higher and add volunteering / school
                  responsibilities. See{" "}
                  <Link
                    href="/no-experience-cv-uk"
                    className="underline underline-offset-4 hover:text-white"
                  >
                    CV with no experience (UK)
                  </Link>
                  .
                </p>
              </div>

              <div
                id="include-remove"
                className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 scroll-mt-24"
              >
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

              <div
                id="employment-example"
                className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 scroll-mt-24"
              >
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

              {/* Examples cluster links */}
              <div
                id="examples"
                className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 scroll-mt-24"
              >
                <h2 className="text-xl font-bold">UK CV examples by role</h2>
                <p className="mt-3 text-white/75 leading-relaxed">
                  If you want role-specific wording, these examples make it easy
                  to copy the structure and match your situation:
                </p>

                {/* ✅ Updated links to the new folder-based routes */}
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/cv-examples/warehouse-cv-example-uk"
                    className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/10 transition"
                  >
                    <div className="text-sm font-semibold">Warehouse CV Example UK</div>
                    <div className="mt-1 text-sm text-white/75">
                      Productivity, safety, order volumes
                    </div>
                  </Link>

                  <Link
                    href="/cv-examples/retail-cv-example-uk"
                    className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/10 transition"
                  >
                    <div className="text-sm font-semibold">Retail CV Example UK</div>
                    <div className="mt-1 text-sm text-white/75">
                      Targets, tills, customer service
                    </div>
                  </Link>

                  <Link
                    href="/cv-examples/customer-service-cv-example-uk"
                    className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/10 transition"
                  >
                    <div className="text-sm font-semibold">
                      Customer Service CV Example UK
                    </div>
                    <div className="mt-1 text-sm text-white/75">
                      KPIs, resolution, communication
                    </div>
                  </Link>

                  <Link
                    href="/no-experience-cv-uk"
                    className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/10 transition"
                  >
                    <div className="text-sm font-semibold">No Experience CV UK</div>
                    <div className="mt-1 text-sm text-white/75">
                      Education, transferable skills
                    </div>
                  </Link>

                  <Link
                    href="/cv-for-16-year-old-uk"
                    className="sm:col-span-2 rounded-xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/10 transition"
                  >
                    <div className="text-sm font-semibold">CV for 16 Year Old UK</div>
                    <div className="mt-1 text-sm text-white/75">
                      First CV, weekend jobs, apprenticeships
                    </div>
                  </Link>
                </div>

                <div className="mt-5">
                  <Link
                    href="/cv-examples-uk"
                    className="text-sm text-white/80 hover:text-white underline underline-offset-4"
                  >
                    View all CV examples →
                  </Link>
                </div>
              </div>

              {/* FAQ */}
              <div
                id="faq"
                className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 scroll-mt-24"
              >
                <h2 className="text-xl font-bold">UK CV FAQ (quick answers)</h2>

                <div className="mt-4 space-y-4 text-white/80">
                  {faqItems.map((x) => (
                    <details
                      key={x.q}
                      className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10"
                    >
                      <summary className="cursor-pointer font-semibold">
                        {x.q}
                      </summary>
                      <div className="mt-2 text-sm text-white/75">{x.a}</div>
                    </details>
                  ))}
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
                      <Link className="hover:text-white" href="/cv-examples-uk">
                        CV examples UK (role guides)
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
