// src/pages/cv-writing-help.js
import Head from "next/head";
import Link from "next/link";

export default function CvWritingHelpPage() {
  const title = "How to Write a CV (UK) — Step-by-step Guide + Examples | CVCraft";
  const description =
    "A practical UK CV writing guide with examples: what to include, CV layout, personal statement tips, skills examples, and common mistakes. Built for real job applications.";
  const canonical = "https://www.cvcraftclassroom.com/cv-writing-help";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Canonical */}
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
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

            <section className="mt-10">
              <h2 className="text-xl font-bold">What is a CV?</h2>
              <p className="mt-3 text-slate-300 leading-relaxed">
                A CV (Curriculum Vitae) is a clear, structured summary of your skills,
                experience and education — written to help a recruiter quickly decide
                if you’re a good match for the job. In the UK, a CV is usually 1–2 pages.
              </p>
            </section>

            <section className="mt-10">
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
            </section>

            <section className="mt-10">
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
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-bold">How to write a personal statement</h2>
              <p className="mt-3 text-slate-300 leading-relaxed">
                Your personal statement is the “why you” section. Keep it short and specific:
              </p>

              <ul className="mt-4 list-disc pl-6 text-slate-300 space-y-2">
                <li>Start with who you are <span className="text-slate-200">(role/level)</span></li>
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
            </section>

            <section className="mt-10">
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

            <section className="mt-10">
              <h2 className="text-xl font-bold">Common CV mistakes (and quick fixes)</h2>

              <div className="mt-5 grid gap-4">
                {[
                  { bad: "It’s too long", fix: "Cut anything that doesn’t support your target job. Keep it focused." },
                  { bad: "It’s vague", fix: "Add proof: numbers, outcomes, responsibilities, tools, customers." },
                  { bad: "No structure", fix: "Use clear headings, bullet points, and reverse chronological order." },
                  { bad: "Weak wording", fix: "Swap ‘helped with’ for ‘managed’, ‘improved’, ‘delivered’, ‘reduced’." },
                  { bad: "Spelling/formatting issues", fix: "Keep font consistent, use one style, and run a final check." },
                ].map((x) => (
                  <div key={x.bad} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                    <p className="font-semibold text-white">{x.bad}</p>
                    <p className="mt-2 text-slate-300">{x.fix}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10">
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

            <section className="mt-10">
              <h2 className="text-xl font-bold">Quick FAQ</h2>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                  <p className="font-semibold">How long should a CV be in the UK?</p>
                  <p className="mt-2 text-slate-300">
                    Usually 1–2 pages. If you’re early in your career, 1 page is often enough.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                  <p className="font-semibold">Do I need a photo on my CV?</p>
                  <p className="mt-2 text-slate-300">
                    In the UK, usually no. Keep it professional and focused on your experience.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                  <p className="font-semibold">Should I include references?</p>
                  <p className="mt-2 text-slate-300">
                    Most people just write “References available on request.”
                  </p>
                </div>
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
                <Link href="/" className="text-slate-300 hover:text-white">Home</Link>
                <Link href="/cv" className="text-slate-300 hover:text-white">Build CV</Link>
                <Link href="/cover-letter" className="text-slate-300 hover:text-white">Cover letter</Link>
                <Link href="/pricing" className="text-slate-300 hover:text-white">Pricing</Link>
                <Link href="/schools" className="text-slate-300 hover:text-white">Schools</Link>
              </div>
            </footer>
          </div>
        </article>
      </main>
    </>
  );
}
