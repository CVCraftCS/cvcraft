// src/pages/schools.js
import Head from "next/head";
import Link from "next/link";

export default function SchoolsPage() {
  const title =
    "Schools & Educators | Classroom-Safe CV Builder for UK Schools | CVCraft Classroom";
  const description =
    "CVCraft Classroom is a classroom-safe CV builder designed for UK schools and colleges. Teacher Mode + Student Safe Mode. No student subscriptions. Buy an annual school licence for unlimited use.";
  const canonical = "https://www.cvcraftclassroom.com/schools";

  // Optional OG image (add later if you want)
  const ogImage = "https://www.cvcraftclassroom.com/og/og-default.png";

  // ⚠️ Replace with your real Stripe school licence checkout URL (or your internal /api/checkout route)
  // Best practice: keep this as a local checkout route so price IDs stay server-side.
  // Example: /api/checkout?product=school_licence  (you’ll wire this later)
  const SCHOOL_CHECKOUT_HREF = "/api/checkout?product=school_licence";

  // ✅ Teacher Mode entrypoint
  const TEACHER_BUILDER_HREF = "/cv?teacher=1";

  const faqItems = [
    {
      q: "Do students need to pay or create accounts?",
      a: "No. Students do not pay and do not need accounts. Schools purchase one annual licence and can use CVCraft Classroom across unlimited sessions.",
    },
    {
      q: "Is this GDPR-friendly for schools?",
      a: "Yes. Student Safe Mode is designed for classroom use and avoids storing student personal data long-term. Students can complete a CV session and download without creating accounts.",
    },
    {
      q: "What does the annual school licence include?",
      a: "The licence includes Teacher Mode, Student Safe Mode, unlimited student use, and unlimited CV downloads for 12 months.",
    },
    {
      q: "What age groups is this for?",
      a: "It’s ideal for UK secondary schools, sixth forms and colleges. It works well for first CVs, part-time job applications, and apprenticeship preparation.",
    },
    {
      q: "Can we use it across multiple classes?",
      a: "Yes. One school licence covers unlimited classroom sessions for your school during the licence period.",
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
    author: { "@type": "Organization", name: "CVCraft Classroom" },
    publisher: {
      "@type": "Organization",
      name: "CVCraft Classroom",
      logo: { "@type": "ImageObject", url: ogImage },
    },
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
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
              <span className="text-xs font-bold">CV</span>
            </span>
            <span className="text-sm font-semibold tracking-tight">
              CVCraft Classroom
            </span>
          </Link>

          <nav className="flex items-center gap-4 text-sm text-white/80">
            {/* ✅ Teacher Mode entry from Schools page */}
            <Link href={TEACHER_BUILDER_HREF} className="hover:text-white">
              CV Builder
            </Link>
            <Link href="/cover-letter" className="hover:text-white">
              Cover letter (free)
            </Link>
            <Link href="/cv-examples-uk" className="hover:text-white">
              CV examples
            </Link>
            <Link href="/pricing" className="hover:text-white">
              Pricing
            </Link>

            <a
              href={SCHOOL_CHECKOUT_HREF}
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/90"
            >
              Buy school licence
            </a>
          </nav>
        </div>

        {/* Hero */}
        <header className="mx-auto max-w-6xl px-6 pb-10 pt-4">
          <nav className="text-sm text-white/60">
            <Link
              href="/"
              className="hover:text-white underline underline-offset-4"
            >
              Home
            </Link>{" "}
            <span className="mx-2">→</span>
            <span className="text-white/85">Schools &amp; Educators</span>
          </nav>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Built for UK classrooms
          </div>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            The classroom-safe CV builder for UK schools &amp; colleges
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/75">
            CVCraft Classroom is designed for real UK classroom use. No student
            subscriptions. No student accounts. No messy formatting. Just clean,
            recruiter-ready CVs with a teacher-controlled structure and a
            privacy-friendly session mode.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SCHOOL_CHECKOUT_HREF}
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
            >
              Buy annual school licence — £500
            </a>
            <a
              href="#how-it-works"
              className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
            >
              How it works
            </a>

            {/* ✅ Teacher Mode entry from primary CTA */}
            <Link
              href={TEACHER_BUILDER_HREF}
              className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
            >
              View the CV builder
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold">Teacher Mode</div>
              <p className="mt-2 text-sm text-white/75">
                A teacher-controlled classroom code that locks structure and
                prevents students from breaking the format.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold">Student Safe Mode</div>
              <p className="mt-2 text-sm text-white/75">
                Designed for privacy-friendly classroom use — session based and
                built to avoid storing student personal data long-term.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold">No subscriptions</div>
              <p className="mt-2 text-sm text-white/75">
                One annual school licence. Unlimited classroom use. Students do
                not pay.
              </p>
            </div>
          </div>
        </header>

        {/* Body */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          {/* Problem */}
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <h2 className="text-2xl font-bold">
              Why most CV builders don’t work in schools
            </h2>
            <p className="mt-3 text-white/75 leading-relaxed">
              Most CV builders are designed for individual adults. In a
              classroom, that creates unnecessary friction and messy outcomes.
            </p>

            <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-white/80">
              <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                Students copy AI content without structure
              </li>
              <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                Subscriptions create payment barriers for families
              </li>
              <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                US-style résumé templates don’t match UK CV format
              </li>
              <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                No teacher control over layout and sections
              </li>
              <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                GDPR concerns around student accounts and stored data
              </li>
              <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                Formatting breaks when students edit freely
              </li>
            </ul>
          </div>

          {/* Differentiators */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-xl font-bold">Designed for UK classrooms</h2>

              <div className="mt-4 space-y-4">
                <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="text-sm font-semibold text-white">
                    Teacher Mode
                  </div>
                  <p className="mt-2 text-sm text-white/75">
                    Teachers can use a classroom code to lock the structure and
                    keep everyone on the same format during lessons.
                  </p>
                </div>

                <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="text-sm font-semibold text-white">
                    Student Safe Mode
                  </div>
                  <p className="mt-2 text-sm text-white/75">
                    Privacy-friendly session mode for classroom use. Designed to
                    avoid storing student personal data long-term.
                  </p>
                </div>

                <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="text-sm font-semibold text-white">
                    UK-focused templates
                  </div>
                  <p className="mt-2 text-sm text-white/75">
                    Built for UK employers and UK CV conventions — clear
                    headings, simple layout, and recruiter-friendly formatting.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-xl font-bold">No student subscriptions</h2>
              <p className="mt-3 text-white/75 leading-relaxed">
                Schools purchase one annual licence. Students do not pay, and
                you can run as many classroom sessions as you need.
              </p>

              <div className="mt-5 rounded-2xl bg-emerald-500/10 p-5 ring-1 ring-emerald-500/20">
                <div className="text-sm font-semibold text-emerald-200">
                  We do not charge students.
                </div>
                <p className="mt-2 text-sm text-white/80">
                  One licence covers unlimited classroom use for your school
                  during the licence period.
                </p>
              </div>

              <div className="mt-6">
                <a
                  href={SCHOOL_CHECKOUT_HREF}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
                >
                  Buy annual school licence — £500
                </a>
                <p className="mt-3 text-xs text-white/60">
                  After purchase, you’ll see confirmation on-screen. If you need
                  help setting up Teacher Mode for your classroom, contact us
                  via the details below.
                </p>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div
            id="how-it-works"
            className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold">How it works</h2>
            <ol className="mt-4 grid gap-3 md:grid-cols-2 text-sm text-white/80">
              <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <b>1.</b> School purchases the annual licence
              </li>
              <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <b>2.</b> You receive instant confirmation
              </li>
              <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <b>3.</b> Teachers run classroom sessions using Teacher Mode
              </li>
              <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <b>4.</b> Students create a structured CV and download a clean
                PDF
              </li>
            </ol>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SCHOOL_CHECKOUT_HREF}
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
              >
                Purchase licence
              </a>

              {/* ✅ Teacher Mode entry (useful in schools flow) */}
              <Link
                href={TEACHER_BUILDER_HREF}
                className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
              >
                Open Teacher Mode
              </Link>

              <Link
                href="/cv-format-uk"
                className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
              >
                Read the UK CV format guide
              </Link>
              <Link
                href="/cv-examples-uk"
                className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
              >
                Browse UK CV examples
              </Link>
            </div>
          </div>

          {/* Pricing */}
          <div className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <h2 className="text-2xl font-bold">Annual school licence</h2>
            <p className="mt-3 text-white/75 leading-relaxed">
              A single licence covers unlimited classroom use for your school.
            </p>

            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-black/25 p-6 ring-1 ring-white/10">
                <div className="text-sm text-white/70">Price</div>
                <div className="mt-1 text-3xl font-extrabold">£500</div>
                <div className="mt-1 text-sm text-white/70">per year</div>

                <ul className="mt-5 space-y-2 text-sm text-white/80">
                  <li>• Teacher Mode (classroom control)</li>
                  <li>• Student Safe Mode (privacy-friendly)</li>
                  <li>• Unlimited student use</li>
                  <li>• Unlimited CV downloads</li>
                  <li>• UK-focused templates</li>
                </ul>

                <a
                  href={SCHOOL_CHECKOUT_HREF}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
                >
                  Buy annual school licence
                </a>

                <p className="mt-3 text-xs text-white/60">
                  Need a VAT invoice or purchase order process? Contact us and
                  we’ll help.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="text-sm font-semibold">Good fit for</div>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  <li>• Careers lessons and CV workshops</li>
                  <li>• Sixth form job & apprenticeship preparation</li>
                  <li>• College employability programmes</li>
                  <li>• Students writing their first CV</li>
                  <li>• Work experience and placements</li>
                </ul>

                <div className="mt-6 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="text-sm font-semibold text-white">
                    Free cover letter generator included
                  </div>
                  <p className="mt-2 text-sm text-white/75">
                    Students can generate a cover letter for free to match their
                    CV.
                  </p>
                  <Link
                    href="/cover-letter"
                    className="mt-3 inline-flex text-sm text-white/80 hover:text-white underline underline-offset-4"
                  >
                    Try cover letter generator →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div
            id="faq"
            className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
          >
            <h2 className="text-2xl font-bold">Schools FAQ</h2>
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

          {/* Contact */}
          <div className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="mt-3 text-white/75 leading-relaxed">
              If your school needs help with a purchase order, VAT invoice, or
              classroom setup, contact us and we’ll respond quickly.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-sm font-semibold">Email</div>
                <div className="mt-1 text-sm text-white/80">
                  <a
                    className="underline underline-offset-4 hover:text-white"
                    href="mailto:cvcraftcs@outlook.com"
                  >
                    cvcraftcs@outlook.com
                  </a>
                </div>
              </div>
              <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-sm font-semibold">Quick links</div>
                <div className="mt-2 space-y-2 text-sm text-white/80">
                  <div>
                    {/* ✅ Teacher Mode entry from Quick links */}
                    <Link
                      className="hover:text-white underline underline-offset-4"
                      href={TEACHER_BUILDER_HREF}
                    >
                      CV Builder (Teacher Mode) →
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="hover:text-white underline underline-offset-4"
                      href="/cv-examples-uk"
                    >
                      UK CV Examples →
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="hover:text-white underline underline-offset-4"
                      href="/cv-format-uk"
                    >
                      UK CV Format Guide →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SCHOOL_CHECKOUT_HREF}
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
              >
                Buy annual school licence — £500
              </a>
              <Link
                href="/pricing"
                className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
              >
                Individual pricing
              </Link>
            </div>
          </div>

          <footer className="mt-14 border-t border-white/10 pt-8 text-sm text-white/60">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span>© {new Date().getFullYear()} CVCraft Classroom</span>
              <div className="flex flex-wrap gap-4">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>

                {/* ✅ Make footer "Build CV" go to Teacher Mode from Schools page */}
                <Link href={TEACHER_BUILDER_HREF} className="hover:text-white">
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
