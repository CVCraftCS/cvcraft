// src/pages/cv-writing-help.js
import Head from "next/head";
import Link from "next/link";

export default function CvWritingHelpPage() {
  const title = "How to Write a CV (UK) — Step-by-step Guide + Examples | CVCraft";
  const description =
    "A practical UK CV writing guide with examples: what to include, CV layout, personal statement tips, skills examples, and common mistakes. Built for real job applications.";
  const canonical = "https://www.cvcraftclassroom.com/cv-writing-help";

  // Optional OG image (add this file later if you want)
  // Create: /public/og/og-default.png
  const ogImage = "https://www.cvcraftclassroom.com/og/og-default.png";

  const faqItems = [
    {
      q: "How long should a CV be in the UK?",
      a: "Usually 1–2 pages. If you’re early in your career, one page is often enough. If you have years of relevant experience, two pages is fine — keep it focused.",
    },
    {
      q: "What is the best UK CV structure?",
      a: "Most UK CVs use: contact details, personal statement, employment history, education/qualifications, skills, and optional references. Keep headings clear and use bullet points.",
    },
    {
      q: "Do I need a photo on my CV in the UK?",
      a: "Usually no. UK CVs typically do not include photos. Focus on skills, achievements, and experience instead.",
    },
    {
      q: "Should I include references on my CV?",
      a: "It’s optional. Most UK applicants write “References available on request”. If you list a referee, ask permission first.",
    },
    {
      q: "How do I write a strong personal statement?",
      a: "Keep it to 3–5 lines. Start with who you are, add 2–3 strengths that match the job, prove it with a responsibility or result, and finish with what role you want next.",
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
        <meta name="robots" content="index,follow" />

        {/* Canonical */}
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Head>

      <main className="min-h-screen bg-slate-950 text-white">
        {/* Header */}
        <header className="w-full px-6 py-5 border-b border-white/10">
          <div className="mx-auto max-w-5xl flex items-center justify-between">
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
              <Link href="/pricing" className="text-slate-200 hover:text-white">
                Pricing
              </Link>
              <Link href="/schools" className="text-slate-200 hover:text-white">
                Schools
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

        {/* Content */}
        <article className="px-6 py-12">
          <div className="mx-auto max-w-3xl">
            {/* Breadcrumb */}
            <div className="text-sm text-slate-300">
              <Link href="/" className="hover:text-white underline underline-offset-4">
                Home
              </Link>{" "}
              <span className="opacity-70">/</span>{" "}
              <span className="text-slate-200">CV writing help</span>
            </div>

            {/* Hero */}
            <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
              How to Write a CV (UK) — a practical guide with examples
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              If you’re staring at a blank page and overthinking every line, you’re not
              alone. This guide shows you exactly what to include in a UK CV, how to
              structure it, and how to write wording that sounds confident (without
              sounding fake).
            </p>

            {/* Quick CTA */}
            <div className="mt-6 rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
              <p className="text-slate-200">
                Want the fastest route? Use the builder and we’ll structure it properly for you.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/cv"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 hover:bg-slate-200 transition"
                >
                  Build my CV
                </Link>
                <Link
                  href="/cover-letter"
                  className="inline-flex items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 px-5 py-3 font-semibold text-white hover:bg-white/10 transition"
                >
                  Free cover letter generator
                </Link>
              </div>
            </div>

            {/* TOC */}
            <div className="mt-8 rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
              <div className="font-semibold text-slate-100">On this page</div>
              <ul className="mt-3 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                <li>
                  <a className="hover:text-white underline underline-offset-4" href="#what-is-a-cv">
                    What is a CV?
                  </a>
                </li>
                <li>
                  <a className="hover:text-white underline underline-offset-4" href="#what-to-include">
                    What to include
                  </a>
                </li>
                <li>
                  <a className="hover:text-white underline underline-offset-4" href="#layout-example">
                    CV layout example
                  </a>
                </li>
                <li>
                  <a className="hover:text-white underline underline-offset-4" href="#personal-statement">
                    Personal statement
                  </a>
                </li>
                <li>
                  <a className="hover:text-white underline underline-offset-4" href="#skills-examples">
                    Skills examples
                  </a>
                </li>
                <li>
                  <a className="hover:text-white underline underline-offset-4" href="#mistakes">
                    Common mistakes
                  </a>
                </li>
                <li>
                  <a className="hover:text-white underline underline-offset-4" href="#templates">
                    Should you use a template?
                  </a>
                </li>
                <li>
                  <a className="hover:text-white underline underline-offset-4" href="#faq">
                    FAQ
                  </a>
                </li>
              </ul>

              <p className="mt-4 text-sm text-slate-300">
                Want role-specific wording? See{" "}
                <Link
                  href="/cv-examples-uk"
                  className="underline underline-offset-4 hover:text-white"
                >
                  CV examples UK
                </Link>{" "}
                or the full{" "}
                <Link
                  href="/cv-format-uk"
                  className="underline underline-offset-4 hover:text-white"
                >
                  UK CV format guide
                </Link>
                .
              </p>
            </div>

            <section id="what-is-a-cv" className="mt-10 scroll-mt-24">
              <h2 className="text-xl font-bold">What is a CV?</h2>
              <p className="mt-3 text-slate-300 leading-relaxed">
                A CV (Curriculum Vitae) is a clear, structured summary of your skills,
                experience and education — written to help a recruiter quickly decide
                if you’re a good match for the job. In the UK, a CV is usually 1–2 pages.
              </p>
            </section>

            <section id="what-to-include" className="mt-10 scroll-mt-24">
              <h2 className="text-xl font-bold">What to include in a UK CV</h2>
              <p className="mt-3 text-slate-300 leading-relaxed">
                Most UK CVs follow the same core layout. Keep it simple and easy to scan.
              </p>

              <div className="mt-5 grid gap-4">
                {[
                  {
                    t: "1) Contact details",
                    d: "Name, phone number, email, and location (town/city is enough).",
                  },
                  {
                    t: "2) Personal statement",
                    d: "A short paragraph that sells you for the job you’re applying for.",
                  },
                  {
                    t: "3) Employment history",
                    d: "Your roles in reverse-chronological order, with results and responsibilities.",
                  },
                  {
                    t: "4) Qualifications & certifications",
                    d: "Degrees, college, GCSEs (if relevant), and any job-specific certificates.",
                  },
                  {
                    t: "5) Skills",
                    d: "A tight list of role-relevant skills (not a huge waffle list).",
                  },
                  {
                    t: "6) References",
                    d: "Usually ‘References available on request’ is enough in the UK.",
                  },
                ].map((x) => (
                  <div key={x.t} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                    <div className="font-semibold">{x.t}</div>
                    <div className="mt-2 text-slate-300">{x.d}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-amber-500/10 ring-1 ring-amber-500/20 p-5">
                <p className="text-slate-200">
                  <span className="font-semibold text-white">Quick rule:</span> if it doesn’t
                  help you get this job, remove it. A focused CV beats a long CV every time.
                </p>
              </div>

              <p className="mt-6 text-slate-300 leading-relaxed">
                If you’re applying with no work history, use the same structure but put
                <b className="text-slate-200"> education higher </b>
                and add volunteering/school responsibilities. See{" "}
                <Link
                  href="/no-experience-cv-uk"
                  className="underline underline-offset-4 hover:text-white"
                >
                  CV with no experience (UK)
                </Link>{" "}
                and{" "}
                <Link
                  href="/cv-for-16-year-old-uk"
                  className="underline underline-offset-4 hover:text-white"
                >
                  CV for 16 year old (UK)
                </Link>
                .
              </p>
            </section>

            <section id="layout-example" className="mt-10 scroll-mt-24">
              <h2 className="text-xl font-bold">CV layout example (UK format)</h2>
              <p className="mt-3 text-slate-300 leading-relaxed">
                Here’s a simple structure that works for most jobs. You can copy this format.
              </p>

              <div className="mt-5 rounded-2xl bg-black/30 ring-1 ring-white/10 p-5 overflow-x-auto">
                <pre className="text-sm text-slate-200 whitespace-pre-wrap">
{`YOUR NAME
Phone • Email • Town/City

PERSONAL STATEMENT
2–4 lines that match the job and prove your value.

EMPLOYMENT HISTORY
Job Title — Company (Town/City) | Month Year – Month Year
• Achievement/result (numbers help)
• Responsibility + impact
• Systems/tools used (if relevant)

EDUCATION / QUALIFICATIONS
Qualification — School/College/Provider (Year) [optional grade]

SKILLS
• Skill 1 • Skill 2 • Skill 3 • Skill 4

REFERENCES
References available on request.`}
                </pre>
              </div>

              <p className="mt-4 text-slate-300 leading-relaxed">
                Want the full layout rules (length, margins, what to remove)? See{" "}
                <Link
                  href="/cv-format-uk"
                  className="underline underline-offset-4 hover:text-white"
                >
                  UK CV format (2026)
                </Link>
                .
              </p>
            </section>

            <section id="personal-statement" className="mt-10 scroll-mt-24">
              <h2 className="text-xl font-bold">How to write a personal statement</h2>
              <p className="mt-3 text-slate-300 leading-relaxed">
                Your personal statement is the “why you” section. Keep it short and specific:
              </p>

              <ul className="mt-4 list-disc pl-6 text-slate-300 space-y-2">
                <li>
                  Start with who you are{" "}
                  <span className="text-slate-200">(role/level)</span>
                </li>
                <li>Add 2–3 strengths that match the job</li>
                <li>Prove it with a result or responsibility</li>
                <li>End with what you’re targeting next</li>
              </ul>

              <div className="mt-6 rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                <p className="text-slate-200 font-semibold">Example personal statement (UK)</p>
                <p className="mt-3 text-slate-300 leading-relaxed">
                  “Reliable warehouse and dispatch team leader with 5+ years’ experience
                  managing day shifts, high-volume B2C orders and B2B customer fulfilment.
                  Strong on accuracy, organisation and team morale, with proven results
                  during peak periods. Now seeking a stable leadership role in logistics or
                  operations.”
                </p>
              </div>

              <p className="mt-5 text-slate-300 leading-relaxed">
                If you’re applying for customer-facing roles, compare the tone with our{" "}
                <Link
                  href="/customer-service-cv-example-uk"
                  className="underline underline-offset-4 hover:text-white"
                >
                  customer service CV example
                </Link>{" "}
                or{" "}
                <Link
                  href="/retail-cv-example-uk"
                  className="underline underline-offset-4 hover:text-white"
                >
                  retail CV example
                </Link>
                .
              </p>
            </section>

            <section id="skills-examples" className="mt-10 scroll-mt-24">
              <h2 className="text-xl font-bold">CV skills examples (pick what fits)</h2>
              <p className="mt-3 text-slate-300 leading-relaxed">
                Only include skills that are relevant to the job you want. Mix practical skills
                with a few strong “work habits”.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                  <p className="font-semibold">Practical skills</p>
                  <ul className="mt-3 list-disc pl-6 text-slate-300 space-y-1">
                    <li>Customer service</li>
                    <li>Stock control</li>
                    <li>Scheduling & rota planning</li>
                    <li>Order processing</li>
                    <li>Excel / Google Sheets</li>
                    <li>Cash handling / POS systems</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                  <p className="font-semibold">Strong work habits</p>
                  <ul className="mt-3 list-disc pl-6 text-slate-300 space-y-1">
                    <li>Reliable & punctual</li>
                    <li>Calm under pressure</li>
                    <li>Attention to detail</li>
                    <li>Team leadership</li>
                    <li>Clear communication</li>
                    <li>Problem solving</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="mistakes" className="mt-10 scroll-mt-24">
              <h2 className="text-xl font-bold">Common CV mistakes (and quick fixes)</h2>

              <div className="mt-5 grid gap-4">
                {[
                  {
                    bad: "It’s too long",
                    fix: "Cut anything that doesn’t support your target job. Keep it focused.",
                  },
                  {
                    bad: "It’s vague",
                    fix: "Add proof: numbers, outcomes, responsibilities, tools, customers.",
                  },
                  {
                    bad: "No structure",
                    fix: "Use clear headings, bullet points, and reverse chronological order.",
                  },
                  {
                    bad: "Weak wording",
                    fix: "Swap ‘helped with’ for ‘managed’, ‘improved’, ‘delivered’, ‘reduced’.",
                  },
                  {
                    bad: "Spelling/formatting issues",
                    fix: "Keep font consistent, use one style, and run a final check.",
                  },
                ].map((x) => (
                  <div key={x.bad} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                    <p className="font-semibold text-white">{x.bad}</p>
                    <p className="mt-2 text-slate-300">{x.fix}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="templates" className="mt-10 scroll-mt-24">
              <h2 className="text-xl font-bold">Should you use a CV template?</h2>
              <p className="mt-3 text-slate-300 leading-relaxed">
                Yes — if it’s clean, recruiter-safe and prints properly. A template helps you
                avoid messy formatting and makes your CV faster to scan.
              </p>

              <div className="mt-6 rounded-2xl bg-emerald-500/10 ring-1 ring-emerald-500/20 p-5">
                <p className="text-slate-200">
                  If you want it done quickly, CVCraft builds a structured CV for you and keeps
                  it in a proper format ready to export.
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/cv"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 hover:bg-slate-200 transition"
                  >
                    Build my CV
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 px-5 py-3 font-semibold text-white hover:bg-white/10 transition"
                  >
                    See pricing
                  </Link>
                </div>
              </div>
            </section>

            <section id="faq" className="mt-10 scroll-mt-24">
              <h2 className="text-xl font-bold">FAQ</h2>

              <div className="mt-5 space-y-4">
                {faqItems.map((x) => (
                  <details
                    key={x.q}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5"
                  >
                    <summary className="cursor-pointer font-semibold text-white">
                      {x.q}
                    </summary>
                    <p className="mt-2 text-slate-300">{x.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
                <h2 className="text-xl font-bold">Ready to build yours?</h2>
                <p className="mt-2 text-slate-300">
                  Use the builder, pick a template, and export when you’re happy.
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
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
                </div>
              </div>
            </section>

            <footer className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p>© {new Date().getFullYear()} CVCraft</p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/" className="text-slate-300 hover:text-white">
                  Home
                </Link>
                <Link href="/cv-examples-uk" className="text-slate-300 hover:text-white">
                  CV examples UK
                </Link>
                <Link href="/cv-format-uk" className="text-slate-300 hover:text-white">
                  UK CV format
                </Link>
                <Link href="/cv" className="text-slate-300 hover:text-white">
                  Build CV
                </Link>
                <Link href="/pricing" className="text-slate-300 hover:text-white">
                  Pricing
                </Link>
              </div>
            </footer>
          </div>
        </article>
      </main>
    </>
  );
}
