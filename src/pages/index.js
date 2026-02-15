// src/pages/index.js
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const title = "Free CV Builder UK | CVCraft Classroom";
  const description =
    "Create a clean, recruiter-ready CV in minutes. UK, US and AU formats. Classroom-safe mode for teachers. Free cover letter generator included.";
  const canonical = "https://www.cvcraftclassroom.com/";

  // Default OG image (keep consistent with your public/og setup)
  const ogImage = "https://www.cvcraftclassroom.com/og/og-default.png";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "CVCraft Classroom",
        url: canonical,
      },
      {
        "@type": "WebSite",
        name: "CVCraft Classroom",
        url: canonical,
        potentialAction: {
          "@type": "SearchAction",
          target: `${canonical}?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        name: title,
        url: canonical,
        description,
      },
    ],
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />

        {/* Canonical */}
        <link rel="canonical" href={canonical} />

        {/* ✅ Help crawlers discover key pages */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

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
        <meta name="twitter:url" content={canonical} />
        <meta name="twitter:image" content={ogImage} />

        {/* Structured data */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

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

              {/* ✅ Help hub quick link */}
              <Link
                href="/cv-writing-help"
                className="text-slate-200 hover:text-white"
              >
                CV help
              </Link>

              {/* ✅ Examples hub quick link */}
              <Link
                href="/cv-examples-uk"
                className="text-slate-200 hover:text-white"
              >
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

                {/* ✅ Extra internal link (subtle + strong for SEO) */}
                <div className="mt-4">
                  <Link
                    href="/cv-examples-uk"
                    className="text-sm font-semibold text-emerald-300 hover:text-emerald-200 underline underline-offset-4"
                  >
                    Browse UK CV examples →
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

                {/* ✅ UK CV Examples promo (another internal link) */}
                <div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                  <p className="text-sm text-slate-200">
                    <span className="font-semibold text-white">Need examples?</span>{" "}
                    Browse UK CV examples for warehouse, retail and no experience.
                  </p>
                  <div className="mt-3">
                    <Link
                      href="/cv-examples-uk"
                      className="text-sm font-semibold text-slate-200 hover:text-white underline underline-offset-4"
                    >
                      Open CV examples (UK) →
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

            {/* ✅ Help hub (SEO internal linking) */}
            <section className="mt-16">
              <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
                <div className="flex items-end justify-between gap-6 flex-wrap">
                  <div>
                    <h2 className="text-2xl font-bold">
                      CV &amp; cover letter help
                    </h2>
                    <p className="mt-2 max-w-2xl text-slate-300">
                      Practical guides and examples — built to help you write
                      faster and apply with confidence.
                    </p>
                  </div>

                  <Link
                    href="/cv"
                    className="text-sm font-semibold text-white underline underline-offset-4 hover:text-slate-200"
                  >
                    Start building →
                  </Link>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <Link
                    href="/cv-writing-help"
                    className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/10 transition"
                  >
                    <div className="text-sm font-semibold text-white">
                      How to write a CV (UK)
                    </div>
                    <div className="mt-1 text-sm text-slate-300">
                      Step-by-step structure + tips
                    </div>
                  </Link>

                  <Link
                    href="/personal-statement-examples"
                    className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/10 transition"
                  >
                    <div className="text-sm font-semibold text-white">
                      Personal statement examples
                    </div>
                    <div className="mt-1 text-sm text-slate-300">
                      Copy-ready examples for roles
                    </div>
                  </Link>

                  <Link
                    href="/cv-format-uk"
                    className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/10 transition"
                  >
                    <div className="text-sm font-semibold text-white">
                      Best CV format (UK)
                    </div>
                    <div className="mt-1 text-sm text-slate-300">
                      Layout, length, and what to include
                    </div>
                  </Link>

                  <Link
                    href="/cover-letter-help"
                    className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/10 transition"
                  >
                    <div className="text-sm font-semibold text-white">
                      Cover letter help (UK)
                    </div>
                    <div className="mt-1 text-sm text-slate-300">
                      Structure + example letter
                    </div>
                  </Link>

                  <Link
                    href="/cover-letter"
                    className="rounded-2xl bg-emerald-500/15 p-5 ring-1 ring-emerald-400/20 hover:bg-emerald-500/20 transition"
                  >
                    <div className="text-sm font-semibold text-white">
                      Free cover letter generator
                    </div>
                    <div className="mt-1 text-sm text-slate-200">
                      Generate a tailored letter in seconds
                    </div>
                  </Link>

                  <Link
                    href="/pricing"
                    className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/10 transition"
                  >
                    <div className="text-sm font-semibold text-white">
                      Pricing
                    </div>
                    <div className="mt-1 text-sm text-slate-300">
                      One simple pass — export when you’re ready
                    </div>
                  </Link>

                  {/* ✅ CV Examples hub link (NEW) */}
                  <Link
                    href="/cv-examples-uk"
                    className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/10 transition sm:col-span-2 lg:col-span-3"
                  >
                    <div className="text-sm font-semibold text-white">
                      CV Examples UK (2026)
                    </div>
                    <div className="mt-1 text-sm text-slate-300">
                      Warehouse, retail, customer service, no experience, and
                      16-year-old CV examples.
                    </div>
                  </Link>
                </div>
              </div>
            </section>
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
              © {new Date().getFullYear()} CVCraft. Built for speed. Built
              properly.
            </p>
            <div className="flex items-center gap-4 text-sm flex-wrap">
              <Link
                href="/cover-letter"
                className="text-slate-300 hover:text-white"
              >
                Cover letter
              </Link>

              {/* ✅ Footer help links (more internal linking) */}
              <Link
                href="/cv-writing-help"
                className="text-slate-300 hover:text-white"
              >
                CV writing help
              </Link>
              <Link
                href="/personal-statement-examples"
                className="text-slate-300 hover:text-white"
              >
                Personal statements
              </Link>
              <Link
                href="/cover-letter-help"
                className="text-slate-300 hover:text-white"
              >
                Cover letter help
              </Link>

              {/* ✅ Footer examples link */}
              <Link
                href="/cv-examples-uk"
                className="text-slate-300 hover:text-white"
              >
                CV examples (UK)
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
    </>
  );
}
