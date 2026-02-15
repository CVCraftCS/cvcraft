// src/pages/cover-letter-help.js
import Head from "next/head";
import Link from "next/link";

export default function CoverLetterHelpPage() {
  const title = "Cover Letter Help (UK) — Structure, Examples & Template | CVCraft";
  const description =
    "A practical UK cover letter guide: the best structure, what to include, what to avoid, and copy-paste examples. Use our free cover letter generator.";
  const canonical = "https://www.cvcraftclassroom.com/cover-letter-help";

  // Optional OG image (add this file later if you want)
  // Create: /public/og/og-default.png
  const ogImage = "https://www.cvcraftclassroom.com/og/og-default.png";

  const faqItems = [
    {
      q: "Do I always need a cover letter?",
      a: "If it’s optional, it can still help — especially for career changes, gaps, competitive roles, or when you want to explain why you’re a strong match. Keep it short and specific.",
    },
    {
      q: "Should I address it by name?",
      a: "Yes if you can. If you can’t find a name, “Dear Hiring Manager” (or “Dear Hiring Team”) is perfectly fine in the UK.",
    },
    {
      q: "How long should a UK cover letter be?",
      a: "Around half a page is ideal. Aim for 200–350 words, 3–5 short paragraphs (or a few bullets), and avoid long blocks of text.",
    },
    {
      q: "Should I repeat my CV in the cover letter?",
      a: "No. A cover letter should highlight the most relevant proof (2–3 points) and explain why you fit the role. It complements your CV — it doesn’t duplicate it.",
    },
    {
      q: "What is the best structure for a UK cover letter?",
      a: "Opening (role + fit), proof (2–3 outcomes), why them (one specific line), and a short close (availability + thank you).",
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
    dateModified: "2026-01-01",
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index,follow" />

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

        {/* Structured data */}
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
              <span className="text-xs font-bold">CL</span>
            </span>
            <span className="text-sm font-semibold tracking-tight">CVCraft</span>
          </Link>

          <nav className="flex items-center gap-4 text-sm text-white/80">
            <Link href="/cv" className="hover:text-white">
              Build CV
            </Link>
            <Link href="/cover-letter" className="hover:text-white">
              Cover letter (free)
            </Link>
            <Link href="/pricing" className="hover:text-white">
              Pricing
            </Link>
            <Link
              href="/cover-letter"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/90"
            >
              Start free
            </Link>
          </nav>
        </div>

        {/* Hero */}
        <header className="mx-auto max-w-5xl px-6 pb-10 pt-6">
          {/* Breadcrumbs */}
          <nav className="text-sm text-white/60">
            <Link href="/" className="hover:text-white underline underline-offset-4">
              Home
            </Link>{" "}
            <span className="mx-2">→</span>
            <Link
              href="/cover-letter"
              className="hover:text-white underline underline-offset-4"
            >
              Cover letter generator
            </Link>{" "}
            <span className="mx-2">→</span>
            <span className="text-white/85">Cover letter help</span>
          </nav>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            UK cover letter guidance
          </div>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Cover letter help — what to write (with examples)
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
            A good cover letter is short, specific, and makes it obvious why
            you’re a match. This guide gives you a simple structure, wording
            examples, and a copy-paste template.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/cover-letter"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
            >
              Use free cover letter generator
            </Link>
            <Link
              href="/cv"
              className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
            >
              Build my CV
            </Link>
            <Link
              href="/cover-letter-help#template"
              className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
            >
              Jump to template
            </Link>
          </div>

          {/* TOC */}
          <div className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="text-sm font-semibold text-white">On this page</div>
            <ul className="mt-3 grid gap-2 text-sm text-white/80 sm:grid-cols-2">
              <li>
                <a className="hover:text-white underline underline-offset-4" href="#structure">
                  Best structure
                </a>
              </li>
              <li>
                <a className="hover:text-white underline underline-offset-4" href="#include-avoid">
                  What to include & avoid
                </a>
              </li>
              <li>
                <a className="hover:text-white underline underline-offset-4" href="#template">
                  Copy-paste template
                </a>
              </li>
              <li>
                <a className="hover:text-white underline underline-offset-4" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>

            <p className="mt-4 text-sm text-white/70">
              For a full CV guide, see{" "}
              <Link
                href="/cv-writing-help"
                className="underline underline-offset-4 hover:text-white"
              >
                CV writing help
              </Link>{" "}
              and{" "}
              <Link
                href="/cv-format-uk"
                className="underline underline-offset-4 hover:text-white"
              >
                UK CV format
              </Link>
              . For role examples, see{" "}
              <Link
                href="/cv-examples-uk"
                className="underline underline-offset-4 hover:text-white"
              >
                CV examples UK
              </Link>
              .
            </p>
          </div>
        </header>

        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="grid gap-8 md:grid-cols-12">
            {/* Main content */}
            <article className="md:col-span-8">
              <div
                id="structure"
                className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 scroll-mt-24"
              >
                <h2 className="text-xl font-bold">The best cover letter structure (UK)</h2>
                <p className="mt-3 text-white/75 leading-relaxed">
                  Keep it to <b>200–350 words</b> (about half a page). Recruiters
                  scan quickly — your goal is clarity, not storytelling.
                </p>

                <ol className="mt-4 list-decimal space-y-2 pl-5 text-white/80">
                  <li>
                    <b>Opening:</b> role + where you found it + 1 line why you’re a fit.
                  </li>
                  <li>
                    <b>Proof:</b> 2–3 short bullets with outcomes (numbers if possible).
                  </li>
                  <li>
                    <b>Why them:</b> one specific line about the company/team.
                  </li>
                  <li>
                    <b>Close:</b> availability + thanks + call to action.
                  </li>
                </ol>
              </div>

              <div
                id="include-avoid"
                className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 scroll-mt-24"
              >
                <h2 className="text-xl font-bold">What to include (and avoid)</h2>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-emerald-500/10 p-4 ring-1 ring-emerald-500/20">
                    <div className="text-sm font-semibold text-emerald-200">
                      Include
                    </div>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                      <li>Exact job title + company name</li>
                      <li>2–3 achievements that match the role</li>
                      <li>Tools/skills they asked for (keywords)</li>
                      <li>Short, confident closing</li>
                    </ul>
                  </div>

                  <div className="rounded-xl bg-rose-500/10 p-4 ring-1 ring-rose-500/20">
                    <div className="text-sm font-semibold text-rose-200">
                      Avoid
                    </div>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                      <li>“I’m a hard worker” with no proof</li>
                      <li>Repeating your CV word-for-word</li>
                      <li>Long paragraphs or life story</li>
                      <li>Generic lines (“I’m passionate about your company”)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                id="template"
                className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 scroll-mt-24"
              >
                <h2 className="text-xl font-bold">Copy-paste template (UK)</h2>
                <p className="mt-3 text-white/75 leading-relaxed">
                  Replace the brackets, keep it tight, and tailor the proof
                  bullets to the job description.
                </p>

                <div className="mt-4 rounded-xl bg-black/30 p-4 ring-1 ring-white/10">
                  <pre className="whitespace-pre-wrap text-sm text-white/85">
{`Dear [Hiring Manager/Team],

I’m applying for the [Job Title] role at [Company]. I have [X years] experience in [relevant area], and I’m confident I can help you achieve [goal that matches the role].

In my recent role at [Company], I:
• [Achievement with number/result]
• [Achievement with number/result]
• [Achievement showing skill/tool you need]

I’m particularly interested in [Company] because [one specific reason: product, values, role scope, growth, etc.]. I’d welcome the chance to discuss how I can contribute to your team.

Thank you for your time — I’m available [availability], and I can interview at short notice.

Kind regards,
[Your Name]
[Phone] | [Email] | [Location]`}
                  </pre>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/cover-letter"
                    className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
                  >
                    Generate my cover letter (free)
                  </Link>
                  <Link
                    href="/cv"
                    className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
                  >
                    Build my CV
                  </Link>
                </div>
              </div>

              <div
                id="faq"
                className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 scroll-mt-24"
              >
                <h2 className="text-xl font-bold">FAQ</h2>

                <div className="mt-4 space-y-4">
                  {faqItems.map((x) => (
                    <details
                      key={x.q}
                      className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10"
                    >
                      <summary className="cursor-pointer font-semibold text-white">
                        {x.q}
                      </summary>
                      <p className="mt-2 text-sm text-white/75">{x.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="md:col-span-4">
              <div className="sticky top-6 space-y-6">
                <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <div className="text-sm font-semibold text-white">Quick actions</div>
                  <div className="mt-4 flex flex-col gap-3">
                    <Link
                      href="/cover-letter"
                      className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
                    >
                      Free cover letter generator
                    </Link>
                    <Link
                      href="/cv"
                      className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
                    >
                      Build CV
                    </Link>
                    <Link
                      href="/cv-writing-help"
                      className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
                    >
                      CV writing help
                    </Link>
                  </div>

                  <div className="mt-5 rounded-xl bg-emerald-500/10 p-4 ring-1 ring-emerald-500/20">
                    <div className="text-sm font-semibold text-emerald-200">
                      One-line upgrade
                    </div>
                    <p className="mt-1 text-sm text-white/80">
                      Swap “I’m hardworking” for proof: “I improved X by Y%” or “I handled 500+ orders/day”.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <div className="text-sm font-semibold">Related pages</div>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    <li>
                      <Link className="hover:text-white" href="/cv-format-uk">
                        UK CV format
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-white" href="/cv-examples-uk">
                        CV examples UK
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-white" href="/pricing">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-white" href="/schools">
                        Schools &amp; Educators
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
                <Link href="/cover-letter" className="hover:text-white">
                  Cover letter
                </Link>
                <Link href="/cv" className="hover:text-white">
                  Build CV
                </Link>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}
