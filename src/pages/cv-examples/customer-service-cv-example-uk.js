// src/pages/customer-service-cv-example-uk.js
import Head from "next/head";
import Link from "next/link";

export default function CustomerServiceCvExampleUk() {
  const title =
    "Customer Service CV Example (UK 2026) | Sample & Writing Guide | CVCraft Classroom";
  const description =
    "Customer service CV example for UK roles. Includes a personal statement example, key skills list and employment section. Learn how to structure your customer service CV properly and build yours in minutes.";

  const canonical = "https://www.cvcraftclassroom.com/customer-service-cv-example-uk";

  // Optional OG image (add this file later if you want)
  // Create: /public/og/og-default.png
  const ogImage = "https://www.cvcraftclassroom.com/og/og-default.png";

  const faqItems = [
    {
      question: "What should a customer service CV include in the UK?",
      answer:
        "A strong UK customer service CV should include a short personal statement, key skills (communication, complaint handling, problem solving), employment history with measurable results (CSAT, call volume, resolution times), and any systems used (CRM tools).",
    },
    {
      question: "How long should a customer service CV be?",
      answer:
        "One page is ideal for entry-level roles. Two pages is fine if you have several years of relevant experience — keep it focused on customer-facing work and measurable outcomes.",
    },
    {
      question: "What skills do customer service employers look for most?",
      answer:
        "Employers typically look for communication, empathy, patience, listening skills, problem solving, reliability, and the ability to work to KPIs like call handling time, CSAT, and resolution targets.",
    },
    {
      question: "Should I include KPIs like CSAT and call volume on my CV?",
      answer:
        "Yes. Numbers make your CV much stronger. If you can include call volumes, customer satisfaction (CSAT), first contact resolution, or complaint resolution times, it helps employers trust your performance.",
    },
    {
      question: "Do I need call centre experience for customer service jobs?",
      answer:
        "Not always. Retail, hospitality and front desk roles are still customer service. Focus on transferable skills — handling complaints, staying calm, fixing problems, and communicating clearly.",
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
            <Link
              href="/cv-examples-uk"
              className="hover:text-white underline underline-offset-4"
            >
              CV Examples UK
            </Link>{" "}
            <span className="mx-2">→</span>
            <span className="text-slate-200">Customer Service CV Example</span>
          </nav>

          <h1 className="mt-4 text-4xl font-bold tracking-tight">
            Customer Service CV Example (UK 2026 Guide)
          </h1>

          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            A strong UK customer service CV should demonstrate communication
            skills, patience, problem solving and reliability. Employers want
            to see evidence of handling customers professionally and resolving
            issues efficiently. Below is a practical example you can adapt. If
            your background is retail-based, you might also like our{" "}
            <Link
              href="/retail-cv-example-uk"
              className="underline underline-offset-4 hover:text-white"
            >
              Retail CV example UK
            </Link>
            .
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/cv"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-200 transition"
            >
              Build your customer service CV now →
            </Link>

            <Link
              href="/cv-writing-help"
              className="inline-flex items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              CV writing help →
            </Link>
          </div>

          {/* Copy/paste layout */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">Copy/Paste Customer Service CV Layout (UK)</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Use this structure to keep your CV clear and easy to scan.
              Customer service employers usually look for KPIs and proof you can
              handle people professionally.
            </p>

            <div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <ol className="list-decimal pl-6 space-y-2 text-slate-200">
                <li>
                  <span className="font-semibold">Name + Contact Details</span>{" "}
                  (phone, email, town/city)
                </li>
                <li>
                  <span className="font-semibold">Personal Statement</span>{" "}
                  (3–5 lines with your strengths + environment)
                </li>
                <li>
                  <span className="font-semibold">Key Skills</span>{" "}
                  (communication, complaint handling, CRM, problem solving)
                </li>
                <li>
                  <span className="font-semibold">Employment History</span>{" "}
                  (bullets with results: CSAT, calls/day, resolution)
                </li>
                <li>
                  <span className="font-semibold">Tools / Systems</span>{" "}
                  (optional: CRM, ticketing tools, Office/Google)
                </li>
                <li>
                  <span className="font-semibold">Education</span>{" "}
                  (brief — unless you’re early-career)
                </li>
              </ol>
            </div>

            <p className="mt-4 text-slate-300 leading-relaxed">
              If you’re moving into hands-on logistics roles, our{" "}
              <Link
                href="/warehouse-cv-example-uk"
                className="underline underline-offset-4 hover:text-white"
              >
                Warehouse CV example UK
              </Link>{" "}
              may help with a different style of wording.
            </p>
          </section>

          {/* Personal Statement */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">
              Customer Service CV Personal Statement Example
            </h2>

            <p className="mt-3 text-slate-300 leading-relaxed">
              Keep your statement calm and professional. Mention the environment
              you’ve worked in (retail, contact centre, admin support) and include
              one or two performance indicators if you can.
            </p>

            <div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <p className="text-slate-200 leading-relaxed">
                Professional and approachable customer service advisor with 4+
                years experience in retail and contact centre environments.
                Skilled in handling complaints calmly, resolving issues quickly
                and maintaining high customer satisfaction scores. Confident
                using CRM systems and working towards daily performance targets.
              </p>
            </div>
          </section>

          {/* Employment Example */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">Employment History Example</h2>

            <div className="mt-6 space-y-6">
              <div className="rounded-2xl bg-black/20 ring-1 ring-white/10 p-6">
                <h3 className="text-xl font-semibold">
                  Customer Service Advisor | Call Centre | Birmingham
                </h3>
                <p className="text-slate-400 text-sm">Mar 2021 – Present</p>

                <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-300">
                  <li>Handled 60+ inbound customer calls per day across billing and delivery queries</li>
                  <li>Maintained customer satisfaction (CSAT) above 95% through clear, calm communication</li>
                  <li>Resolved complaints and processed refunds efficiently, escalating complex issues when required</li>
                  <li>Updated CRM records accurately after each interaction (notes, outcomes, next steps)</li>
                  <li>Worked to daily and weekly performance targets (call handling, quality, and resolution)</li>
                  <li>Supported new starters by sharing call scripts, best practices, and common fixes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Skills */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">Key Skills for a Customer Service CV</h2>

            <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-300">
              <li>Communication and listening skills</li>
              <li>Complaint handling</li>
              <li>Problem solving</li>
              <li>CRM systems</li>
              <li>Teamwork</li>
              <li>Time management</li>
              <li>Working to KPIs</li>
            </ul>
          </section>

          {/* Writing Tips */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">Tips for Writing a Strong Customer Service CV</h2>

            <p className="mt-3 text-slate-300 leading-relaxed">
              Customer service CVs should show measurable impact. If you can,
              include:
            </p>

            <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-300">
              <li>Call volume or customer numbers</li>
              <li>Customer satisfaction percentage (CSAT / NPS)</li>
              <li>Complaint resolution time or first-contact resolution</li>
              <li>Sales or upselling targets achieved (if relevant)</li>
              <li>Systems or tools used (CRM, ticketing, knowledge base)</li>
            </ul>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Want a matching cover letter? Use our{" "}
              <Link
                href="/cover-letter"
                className="underline underline-offset-4 hover:text-white"
              >
                free cover letter generator
              </Link>{" "}
              to tailor your application to customer service roles.
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

          {/* Related Links */}
          <section className="mt-14 rounded-3xl bg-white/5 ring-1 ring-white/10 p-8">
            <h2 className="text-2xl font-bold">Related UK CV Guides</h2>

            <div className="mt-6 space-y-3 text-slate-300">
              <div>
                <Link
                  href="/retail-cv-example-uk"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  Retail CV Example UK →
                </Link>
              </div>

              <div>
                <Link
                  href="/warehouse-cv-example-uk"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  Warehouse CV Example UK →
                </Link>
              </div>

              <div>
                <Link
                  href="/cv-for-16-year-old-uk"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  CV for 16 Year Old UK →
                </Link>
              </div>

              <div>
                <Link
                  href="/cv-writing-help"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  CV Writing Help →
                </Link>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mt-16 rounded-3xl bg-white/5 ring-1 ring-white/10 p-8 text-center">
            <h2 className="text-2xl font-bold">Ready to Build Your Customer Service CV?</h2>

            <p className="mt-3 text-slate-300">
              Use a structured template and generate your CV in under 20 minutes.
            </p>

            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <Link
                href="/cv"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-slate-950 hover:bg-slate-200 transition"
              >
                Build CV →
              </Link>

              <Link
                href="/cover-letter"
                className="rounded-xl bg-white/5 ring-1 ring-white/10 px-8 py-4 font-semibold text-white hover:bg-white/10 transition"
              >
                Free cover letter →
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
