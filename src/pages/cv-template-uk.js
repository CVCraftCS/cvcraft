// src/pages/cv-template-uk.js
import Head from "next/head";
import Link from "next/link";

export default function CvTemplateUkPage() {
  const title = "CV Template UK (2026) | Free Layout + Example | CVCraft Classroom";
  const description =
    "Use this clean UK CV template (2026) with a formatted example layout. See what to include, the best structure, and build your CV instantly in CVCraft.";
  const canonical = "https://www.cvcraftclassroom.com/cv-template-uk";

  const ogImage = "https://www.cvcraftclassroom.com/og/og-default.png";

  const faq = [
    {
      q: "What is the best CV template in the UK?",
      a: "The best UK CV template is a clean, reverse-chronological layout with clear headings, bullet points, and simple formatting. Aim for 1 page (most roles) or 2 pages (senior/technical), and prioritise results and responsibilities.",
    },
    {
      q: "Should I use a fancy design CV template?",
      a: "Usually no. Most UK employers and recruiters prefer simple, readable templates. Fancy graphics can distract and may not pass well through ATS (applicant tracking systems). Use clean sections, consistent spacing, and clear bullet points.",
    },
    {
      q: "What sections should a UK CV include?",
      a: "Typical UK CV sections are: Name + contact details, personal statement, work experience, education, skills, and optional sections like certifications, volunteering, or interests (if relevant).",
    },
    {
      q: "How long should a CV be in the UK?",
      a: "Most UK CVs should be 1 page. 2 pages is common for more experienced candidates, technical roles, or when you have multiple relevant positions to include.",
    },
    {
      q: "Do I need a cover letter with my CV?",
      a: "Often yes. A short, tailored cover letter can increase your chances — especially for competitive roles. You can generate a free cover letter on CVCraft and match it to your CV.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.cvcraftclassroom.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "CV Template UK",
        item: canonical,
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

        <link rel="canonical" href={canonical} />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </Head>

      <main className="min-h-screen bg-slate-950 text-white">
        {/* Subtle background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10"
        >
          <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[90px]" />
          <div className="absolute top-40 right-[-140px] h-[520px] w-[520px] rounded-full bg-indigo-500/15 blur-[100px]" />
          <div className="absolute bottom-[-200px] left-[-160px] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[110px]" />
        </div>

        {/* Top bar (simple, matches site) */}
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
              <Link href="/start" className="text-slate-200 hover:text-white">
                Start here
              </Link>
              <Link
                href="/cover-letter"
                className="text-slate-200 hover:text-white"
              >
                Cover letter (free)
              </Link>
              <Link
                href="/cv-examples-uk"
                className="text-slate-200 hover:text-white"
              >
                CV examples (UK)
              </Link>
              <Link href="/pricing" className="text-slate-200 hover:text-white">
                Pricing
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

        {/* Content */}
        <section className="px-6 pt-6 pb-16">
          <div className="mx-auto max-w-6xl">
            {/* Breadcrumb */}
            <div className="text-xs text-slate-400">
              <Link
                href="/"
                className="hover:text-slate-200 underline underline-offset-4"
              >
                Home
              </Link>{" "}
              <span className="mx-2">→</span>
              <span className="text-slate-300">CV Template UK</span>
            </div>

            {/* Hero */}
            <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs text-slate-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  UK CV template (2026) — clean, recruiter-ready layout
                </div>

                <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
                  CV Template UK <span className="text-slate-200">(2026)</span>
                </h1>

                <p className="mt-4 text-slate-300 text-lg leading-relaxed">
                  Use this simple UK CV template layout to structure your CV
                  properly — with a formatted example you can follow. When you’re
                  ready, build it instantly in the CV builder (no subscriptions).
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/cv"
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-slate-950 hover:bg-slate-200 transition"
                  >
                    Build my CV using this template →
                  </Link>

                  <Link
                    href="/start"
                    className="inline-flex items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 px-6 py-4 font-semibold text-white hover:bg-white/10 transition"
                  >
                    Best flow: Start here →
                  </Link>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                    <p className="text-sm font-semibold text-white">
                      Clean formatting
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Clear headings, bullet points, easy to scan.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                    <p className="text-sm font-semibold text-white">
                      UK-friendly structure
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Personal statement, experience, education, skills.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 text-sm">
                  <Link
                    href="/cv-format-uk"
                    className="rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-slate-200 hover:text-white"
                  >
                    Best CV format (UK)
                  </Link>
                  <Link
                    href="/cv-writing-help"
                    className="rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-slate-200 hover:text-white"
                  >
                    CV writing help
                  </Link>
                  <Link
                    href="/personal-statement-examples"
                    className="rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-slate-200 hover:text-white"
                  >
                    Personal statement examples
                  </Link>
                  <Link
                    href="/cv-examples-uk"
                    className="rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-slate-200 hover:text-white"
                  >
                    CV examples UK
                  </Link>
                </div>
              </div>

              {/* Side card */}
              <aside className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8">
                <h2 className="text-xl font-semibold">Quick checklist</h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                    <span>
                      Keep it <strong className="text-white">1 page</strong> for
                      most roles (2 pages if you’re experienced).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo-300 shrink-0" />
                    <span>
                      Use{" "}
                      <strong className="text-white">
                        reverse-chronological
                      </strong>{" "}
                      work experience (latest first).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300 shrink-0" />
                    <span>
                      Bullet points:{" "}
                      <strong className="text-white">
                        results + responsibilities
                      </strong>
                      .
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300 shrink-0" />
                    <span>
                      Keep formatting simple:{" "}
                      <strong className="text-white">
                        no tables, no icons
                      </strong>{" "}
                      (usually).
                    </span>
                  </li>
                </ul>

                <div className="mt-6 rounded-2xl bg-indigo-500/10 ring-1 ring-indigo-400/20 p-4">
                  <p className="text-sm text-slate-200">
                    Want a matching letter? Use the free tool.
                  </p>
                  <div className="mt-3">
                    <Link
                      href="/cover-letter"
                      className="text-sm font-semibold text-indigo-200 hover:text-indigo-100 underline underline-offset-4"
                    >
                      Open cover letter generator →
                    </Link>
                  </div>
                </div>
              </aside>
            </div>

            {/* What to include */}
            <section className="mt-14">
              <h2 className="text-2xl font-bold">
                What a UK CV template should include
              </h2>
              <p className="mt-3 text-slate-300 max-w-3xl">
                A strong UK CV template is simple and consistent. Recruiters scan
                quickly — so your structure matters more than design. Here’s the
                core layout most UK employers expect.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                  <p className="font-semibold">1) Header</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Your name, phone number, email, town/city (not full address),
                    and optional LinkedIn.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                  <p className="font-semibold">2) Personal statement</p>
                  <p className="mt-1 text-sm text-slate-300">
                    A short, tailored intro (3–5 lines). Focus on role fit +
                    strengths.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                  <p className="font-semibold">3) Work experience</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Latest first. Use bullet points with impact (what you did +
                    results).
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                  <p className="font-semibold">4) Education</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Schools/college, qualifications, and dates. Keep it relevant
                    and clean.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                  <p className="font-semibold">5) Skills</p>
                  <p className="mt-1 text-sm text-slate-300">
                    A short skills list tailored to the job advert. Avoid generic
                    fluff.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                  <p className="font-semibold">6) Optional sections</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Certifications, volunteering, licences, or interests (only if
                    they add value).
                  </p>
                </div>
              </div>
            </section>

            {/* Formatted example block */}
            <section className="mt-14">
              <h2 className="text-2xl font-bold">
                Formatted UK CV template example
              </h2>
              <p className="mt-3 text-slate-300 max-w-3xl">
                This is a clean, UK-friendly CV layout. You can follow the
                structure exactly — then build it instantly in the CV builder.
              </p>

              <div className="mt-6 rounded-3xl bg-black/20 ring-1 ring-white/10 p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-300">
                      Example layout (replace with your details)
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      UK CV Template (Clean)
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/cv"
                      className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200 transition"
                    >
                      Build this template →
                    </Link>
                    <Link
                      href="/cv-examples-uk"
                      className="inline-flex items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
                    >
                      See more examples →
                    </Link>
                  </div>
                </div>

                <pre className="mt-6 whitespace-pre-wrap text-sm leading-relaxed text-slate-200">
{`YOUR NAME
Town/City • 07xxx xxxxxx • you@email.com • LinkedIn (optional)

PERSONAL STATEMENT
Reliable and hardworking [job title/target role] with experience in [industry/skills].
Known for [strength 1] and [strength 2]. Looking to bring strong work ethic and
attention to detail to [company/role].

KEY SKILLS
• Skill 1 (relevant to the job)      • Skill 2
• Skill 3                            • Skill 4
• Skill 5                            • Skill 6

WORK EXPERIENCE
Job Title — Company Name (Town/City) | Month YYYY – Month YYYY
• Bullet point describing responsibility + outcome (numbers if possible)
• Bullet point describing responsibility + outcome
• Bullet point describing responsibility + outcome

Job Title — Company Name (Town/City) | Month YYYY – Month YYYY
• Bullet point describing responsibility + outcome
• Bullet point describing responsibility + outcome

EDUCATION
Qualification — School/College | Year
• Key subject(s) / grade(s) (optional)

CERTIFICATIONS / LICENCES (optional)
• Forklift / SIA / First Aid / Driving Licence (only if relevant)

REFERENCES
Available on request`}
                </pre>

                <div className="mt-6 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                  <p className="text-sm text-slate-200">
                    Tip: Keep the layout simple and focus on strong bullet points.
                    If you want help writing a personal statement, use our examples
                    page.
                  </p>
                  <div className="mt-3">
                    <Link
                      href="/personal-statement-examples"
                      className="text-sm font-semibold text-emerald-200 hover:text-emerald-100 underline underline-offset-4"
                    >
                      Open personal statement examples →
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Simple CV template */}
            <section className="mt-14">
              <h2 className="text-2xl font-bold">
                Simple CV template (minimal layout)
              </h2>
              <p className="mt-3 text-slate-300 max-w-3xl">
                If you want the simplest possible structure, use: header → personal
                statement → experience → education → skills. Keep it clean, and only
                include what helps you get interviews.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                  <p className="font-semibold">Best for</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Entry-level roles, retail, warehouse, hospitality, admin, and
                    most general jobs.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                  <p className="font-semibold">Avoid</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Over-designed templates, heavy graphics, and long paragraphs.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/cv"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-slate-950 hover:bg-slate-200 transition"
                >
                  Build a simple UK CV →
                </Link>
                <Link
                  href="/cv-format-uk"
                  className="inline-flex items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 px-6 py-4 font-semibold text-white hover:bg-white/10 transition"
                >
                  Best CV format guide →
                </Link>
              </div>
            </section>

            {/* No experience */}
            <section className="mt-14">
              <h2 className="text-2xl font-bold">
                UK CV template with no experience
              </h2>
              <p className="mt-3 text-slate-300 max-w-3xl">
                If you don’t have work experience yet, don’t panic. Keep the same
                structure, but move skills and education higher, and include
                volunteering, projects, or school achievements.
              </p>

              <div className="mt-6 rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-black/20 ring-1 ring-white/10 p-5">
                    <p className="font-semibold">What to include instead</p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-300">
                      <li>• School projects and responsibilities</li>
                      <li>• Volunteering or helping family business</li>
                      <li>• Clubs, sports, leadership, achievements</li>
                      <li>• Short skills list matched to the role</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-black/20 ring-1 ring-white/10 p-5">
                    <p className="font-semibold">Keep it strong</p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-300">
                      <li>• Use action verbs in bullet points</li>
                      <li>• Show reliability, teamwork, and effort</li>
                      <li>• Keep it to one page</li>
                      <li>• Tailor the personal statement</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/no-experience-cv-uk"
                    className="inline-flex items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 px-6 py-4 font-semibold text-white hover:bg-white/10 transition"
                  >
                    No experience CV guide →
                  </Link>
                  <Link
                    href="/cv"
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-slate-950 hover:bg-slate-200 transition"
                  >
                    Build a no-experience CV →
                  </Link>
                </div>
              </div>
            </section>

            {/* Mistakes */}
            <section className="mt-14">
              <h2 className="text-2xl font-bold">
                Common UK CV template mistakes
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                  <p className="font-semibold">Too much design</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Heavy graphics can reduce readability. Keep it clean and
                    professional.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                  <p className="font-semibold">No results</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Add outcomes: speed, accuracy, targets, improvements, praise,
                    reliability.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                  <p className="font-semibold">Long paragraphs</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Bullet points scan better. Keep each point 1–2 lines.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                  <p className="font-semibold">Not tailored</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Match your statement + skills to the job advert (even small
                    changes help).
                  </p>
                </div>
              </div>
            </section>

            {/* CTA block */}
            <section className="mt-16">
              <div className="rounded-3xl bg-emerald-500/10 ring-1 ring-emerald-400/20 p-8">
                <h2 className="text-2xl font-bold">
                  Build your UK CV using this template
                </h2>
                <p className="mt-2 text-slate-200 max-w-2xl">
                  Use the template structure above, and turn it into a clean CV in
                  minutes. No subscriptions — export when you’re happy.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/cv"
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-slate-950 hover:bg-slate-200 transition"
                  >
                    Open CV builder →
                  </Link>
                  <Link
                    href="/cover-letter"
                    className="inline-flex items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 px-6 py-4 font-semibold text-white hover:bg-white/10 transition"
                  >
                    Generate a free cover letter →
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 px-6 py-4 font-semibold text-white hover:bg-white/10 transition"
                  >
                    See pricing →
                  </Link>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold">FAQ</h2>
              <div className="mt-6 grid gap-4">
                {faq.map((f) => (
                  <div
                    key={f.q}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6"
                  >
                    <p className="font-semibold text-white">{f.q}</p>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-sm text-slate-300">
                Want more help? Try:{" "}
                <Link
                  href="/cv-writing-help"
                  className="font-semibold text-slate-200 hover:text-white underline underline-offset-4"
                >
                  CV writing help
                </Link>{" "}
                •{" "}
                <Link
                  href="/cv-format-uk"
                  className="font-semibold text-slate-200 hover:text-white underline underline-offset-4"
                >
                  Best CV format (UK)
                </Link>{" "}
                •{" "}
                <Link
                  href="/cv-examples-uk"
                  className="font-semibold text-slate-200 hover:text-white underline underline-offset-4"
                >
                  CV examples (UK)
                </Link>
              </div>
            </section>

            {/* Footer */}
            <footer className="mt-16 pb-10">
              <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <p className="text-sm text-slate-400">
                  © {new Date().getFullYear()} CVCraft. Built for speed. Built
                  properly.
                </p>

                <div className="flex items-center gap-4 text-sm flex-wrap">
                  <Link href="/start" className="text-slate-300 hover:text-white">
                    Start here
                  </Link>
                  <Link
                    href="/cover-letter"
                    className="text-slate-300 hover:text-white"
                  >
                    Cover letter
                  </Link>
                  <Link
                    href="/cv-examples-uk"
                    className="text-slate-300 hover:text-white"
                  >
                    CV examples (UK)
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-slate-300 hover:text-white"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/schools"
                    className="text-slate-300 hover:text-white"
                  >
                    Schools
                  </Link>
                  <Link href="/cv" className="text-slate-300 hover:text-white">
                    Build CV
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
