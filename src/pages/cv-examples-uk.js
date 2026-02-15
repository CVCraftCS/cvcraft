// src/pages/cv-examples-uk.js
import Head from "next/head";
import Link from "next/link";

export default function CvExamplesUk() {
  const title =
    "CV Examples UK (2026) | Free CV Templates & Samples | CVCraft Classroom";
  const description =
    "Real UK CV examples for warehouse, retail, customer service, and no-experience roles. See sample layouts and build your own professional CV in minutes.";

  const canonical = "https://www.cvcraftclassroom.com/cv-examples-uk";

  // Optional OG image (add this file later if you want)
  // Create: /public/og/og-default.png
  const ogImage = "https://www.cvcraftclassroom.com/og/og-default.png";

  const faqItems = [
    {
      question: "What is the best CV format in the UK?",
      answer:
        "Most UK CVs follow a simple structure: contact details, personal statement, employment history, education/qualifications, skills, and optional references. Keep it clear, easy to scan, and tailored to the role.",
    },
    {
      question: "How long should a UK CV be?",
      answer:
        "For most people, one page is ideal (especially entry-level). Two pages is also acceptable for experienced candidates — keep it relevant and avoid filler.",
    },
    {
      question: "Do employers prefer a CV or a résumé in the UK?",
      answer:
        "In the UK, employers usually use the term CV. The layout is similar to a résumé, but UK CVs typically don’t include a photo and often include more detail about education and roles.",
    },
    {
      question: "Should I include a photo on a UK CV?",
      answer:
        "No. In the UK, it’s usually best not to include a photo. Focus on your skills, achievements, and experience instead.",
    },
    {
      question: "Can I use a CV example and copy the structure?",
      answer:
        "Yes — that’s the point of examples. Copy the structure, then rewrite the content to match your real skills, experience and the job you’re applying for.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
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
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Head>

      <main className="min-h-screen bg-slate-950 text-white px-6 py-14">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="text-sm text-slate-400">
            <Link href="/" className="hover:text-white underline underline-offset-4">
              Home
            </Link>{" "}
            <span className="mx-2">→</span>
            <span className="text-slate-200">CV Examples UK</span>
          </nav>

          {/* H1 */}
          <h1 className="mt-4 text-4xl font-bold tracking-tight">
            CV Examples UK (2026 Guide)
          </h1>

          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            Looking for real UK CV examples? Below you&apos;ll find practical
            examples for warehouse jobs, retail, customer service and candidates
            with no experience — plus guidance on formatting your CV correctly
            for UK employers.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/cv"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-200 transition"
            >
              Build your CV now →
            </Link>

            <Link
              href="/cover-letter"
              className="inline-flex items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Free cover letter →
            </Link>
          </div>

          {/* Table of contents */}
          <section className="mt-10 rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
            <h2 className="text-xl font-bold">Jump to a CV example</h2>
            <p className="mt-2 text-slate-300">
              Use the links below to jump straight to the example you need.
            </p>

            <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm">
              <li>
                <a
                  href="#warehouse"
                  className="block rounded-xl bg-black/20 ring-1 ring-white/10 p-4 hover:bg-black/30 transition"
                >
                  <span className="font-semibold">Warehouse CV Example</span>
                  <span className="mt-1 block text-slate-300">
                    Productivity, safety, order volumes
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="#retail"
                  className="block rounded-xl bg-black/20 ring-1 ring-white/10 p-4 hover:bg-black/30 transition"
                >
                  <span className="font-semibold">Retail CV Example</span>
                  <span className="mt-1 block text-slate-300">
                    Customer service, targets, tills
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="#customer-service"
                  className="block rounded-xl bg-black/20 ring-1 ring-white/10 p-4 hover:bg-black/30 transition"
                >
                  <span className="font-semibold">Customer Service CV Example</span>
                  <span className="mt-1 block text-slate-300">
                    KPIs, resolution, communication
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="#no-experience"
                  className="block rounded-xl bg-black/20 ring-1 ring-white/10 p-4 hover:bg-black/30 transition"
                >
                  <span className="font-semibold">No Experience CV</span>
                  <span className="mt-1 block text-slate-300">
                    Transferable skills, education
                  </span>
                </a>
              </li>

              <li className="sm:col-span-2">
                <a
                  href="#age-16"
                  className="block rounded-xl bg-black/20 ring-1 ring-white/10 p-4 hover:bg-black/30 transition"
                >
                  <span className="font-semibold">CV for 16 Year Old</span>
                  <span className="mt-1 block text-slate-300">
                    First CV, school achievements, reliability
                  </span>
                </a>
              </li>
            </ul>
          </section>

          {/* How to use these examples */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">How to Use These UK CV Examples</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              The best way to use a CV example is to copy the structure, then
              rewrite the wording so it matches your real experience. Aim for:
              clear headings, short bullet points, and proof you can do the job.
              If you’re stuck on layout and wording, you can generate a clean CV
              quickly with the{" "}
              <Link
                href="/cv"
                className="underline underline-offset-4 hover:text-white"
              >
                CVCraft builder
              </Link>
              .
            </p>
          </section>

          {/* Section: What makes a good UK CV */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">What Makes a Good UK CV?</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              A strong UK CV should be clear, structured and easy to scan. Most
              recruiters spend less than 30 seconds reviewing a CV. That means
              formatting and clarity matter just as much as content.
            </p>

            <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-300">
              <li>Keep it to 1–2 pages maximum</li>
              <li>Use clear section headings</li>
              <li>Include measurable achievements (numbers help)</li>
              <li>Tailor it to the job role</li>
              <li>Use UK spelling and formatting</li>
            </ul>
          </section>

          {/* Section: Example Types */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">UK CV Example Types</h2>

            <div className="mt-6 space-y-10">
              <div id="warehouse">
                <h3 className="text-xl font-semibold">Warehouse CV Example (UK)</h3>
                <p className="mt-2 text-slate-300">
                  Focus on productivity, order accuracy, safety awareness and
                  teamwork. Mention daily order volumes, stock control systems
                  and physical workload.
                </p>
                <Link
                  href="/warehouse-cv-example-uk"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 text-sm"
                >
                  View warehouse CV guide →
                </Link>
              </div>

              <div id="retail">
                <h3 className="text-xl font-semibold">Retail CV Example (UK)</h3>
                <p className="mt-2 text-slate-300">
                  Highlight customer service, sales targets, cash handling, and
                  teamwork. Quantify performance where possible.
                </p>
                <Link
                  href="/retail-cv-example-uk"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 text-sm"
                >
                  View retail CV guide →
                </Link>
              </div>

              <div id="customer-service">
                <h3 className="text-xl font-semibold">Customer Service CV Example</h3>
                <p className="mt-2 text-slate-300">
                  Demonstrate communication skills, conflict resolution, and
                  problem solving. Mention KPIs or satisfaction scores.
                </p>
                <Link
                  href="/customer-service-cv-example-uk"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 text-sm"
                >
                  View customer service CV guide →
                </Link>
              </div>

              <div id="no-experience">
                <h3 className="text-xl font-semibold">CV With No Experience (UK)</h3>
                <p className="mt-2 text-slate-300">
                  Emphasise transferable skills, volunteering, education and
                  personal strengths. This is ideal for first jobs and entry-level
                  applications.
                </p>
                <Link
                  href="/no-experience-cv-uk"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 text-sm"
                >
                  View no experience CV guide →
                </Link>
              </div>

              <div id="age-16">
                <h3 className="text-xl font-semibold">CV for 16 Year Old (UK)</h3>
                <p className="mt-2 text-slate-300">
                  Focus on school achievements, teamwork, reliability and a clear
                  personal statement. Perfect for weekend jobs and apprenticeships.
                </p>
                <Link
                  href="/cv-for-16-year-old-uk"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 text-sm"
                >
                  View 16 year old CV guide →
                </Link>
              </div>
            </div>
          </section>

          {/* Formatting Section */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">Correct UK CV Format</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Standard UK CV structure:
            </p>

            <ol className="mt-4 list-decimal pl-6 space-y-2 text-slate-300">
              <li>Full Name &amp; Contact Details</li>
              <li>Personal Statement</li>
              <li>Employment History</li>
              <li>Qualifications &amp; Certifications</li>
              <li>Skills</li>
              <li>References (optional)</li>
            </ol>

            <p className="mt-4 text-slate-300 leading-relaxed">
              If you want a deeper breakdown (length, layout, and what to
              include), see{" "}
              <Link
                href="/cv-format-uk"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
              >
                Best CV format (UK)
              </Link>
              .
            </p>
          </section>

          {/* FAQ (visible) */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold">FAQ</h2>
            <div className="mt-6 space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5"
                >
                  <summary className="cursor-pointer font-semibold text-slate-100">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-slate-300 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 rounded-3xl bg-white/5 ring-1 ring-white/10 p-8 text-center">
            <h2 className="text-2xl font-bold">Ready to Build Your UK CV?</h2>
            <p className="mt-3 text-slate-300">
              Use a structured, recruiter-ready template and generate your CV in
              under 20 minutes.
            </p>

            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <Link
                href="/cv"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-200 transition"
              >
                Build CV →
              </Link>

              <Link
                href="/cv-writing-help"
                className="rounded-xl bg-white/5 ring-1 ring-white/10 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
              >
                CV Writing Help →
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
