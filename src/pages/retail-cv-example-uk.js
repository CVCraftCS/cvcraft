// src/pages/retail-cv-example-uk.js
import Head from "next/head";
import Link from "next/link";

export default function RetailCvExampleUk() {
  const title =
    "Retail CV Example (UK 2026) | Sample & Writing Guide | CVCraft Classroom";
  const description =
    "Retail CV example for UK roles. Includes a real personal statement example, skills list, and employment section. Learn the correct retail CV format and build yours in minutes.";

  const canonical = "https://www.cvcraftclassroom.com/retail-cv-example-uk";

  // Optional OG image (add this file later if you want)
  // Create: /public/og/og-default.png
  const ogImage = "https://www.cvcraftclassroom.com/og/og-default.png";

  const faqItems = [
    {
      question: "What should a retail CV include in the UK?",
      answer:
        "A strong UK retail CV should include a short personal statement, key skills (customer service, tills, stock, teamwork), employment history with measurable examples, and education. Keep it clear, structured, and easy to scan.",
    },
    {
      question: "How long should a retail CV be?",
      answer:
        "For most retail roles, one page is ideal (especially for entry-level). If you have several years of experience, two pages is still fine — but keep it relevant and avoid filler.",
    },
    {
      question: "What skills do retail employers look for most?",
      answer:
        "Retail employers usually look for customer service, reliability, teamwork, communication, confidence on tills/cash handling, stock replenishment, and the ability to stay calm during busy periods.",
    },
    {
      question: "Should I include sales targets or KPIs on my retail CV?",
      answer:
        "Yes, if you can. Even simple examples help — like meeting upsell targets, supporting promotions, handling peak queues, or receiving positive customer feedback. Numbers make your CV stronger.",
    },
    {
      question: "Do I need a photo on a UK retail CV?",
      answer:
        "No. In the UK, it’s usually best to leave photos off your CV. Focus on your skills, reliability, and evidence of customer service instead.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
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
            <span className="text-slate-200">Retail CV Example</span>
          </nav>

          <h1 className="mt-4 text-4xl font-bold tracking-tight">
            Retail CV Example (UK 2026 Guide)
          </h1>

          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            A strong UK retail CV should highlight customer service, reliability,
            teamwork, and (where possible) measurable results like sales targets,
            upsells, or positive feedback. Below is a practical retail CV example
            you can copy and adapt. If you’re writing your first CV, you might
            also like our{" "}
            <Link
              href="/no-experience-cv-uk"
              className="underline underline-offset-4 hover:text-white"
            >
              CV with no experience UK guide
            </Link>
            .
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/cv"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-200 transition"
            >
              Build your retail CV now →
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
            <h2 className="text-2xl font-bold">Copy/Paste Retail CV Layout (UK)</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Use this simple structure to keep your CV clear and easy for retail
              hiring managers to scan.
            </p>

            <div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <ol className="list-decimal pl-6 space-y-2 text-slate-200">
                <li>
                  <span className="font-semibold">Name + Contact Details</span>{" "}
                  (phone, email, town/city)
                </li>
                <li>
                  <span className="font-semibold">Personal Statement</span>{" "}
                  (3–5 lines)
                </li>
                <li>
                  <span className="font-semibold">Key Skills</span>{" "}
                  (customer service, tills, stock, teamwork)
                </li>
                <li>
                  <span className="font-semibold">Employment History</span>{" "}
                  (bullets with results where possible)
                </li>
                <li>
                  <span className="font-semibold">Education</span>{" "}
                  (keep it short if you’re experienced)
                </li>
                <li>
                  <span className="font-semibold">Optional</span>{" "}
                  (training, achievements, interests)
                </li>
              </ol>
            </div>
          </section>

          {/* Personal Statement */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">
              Retail CV Personal Statement Example
            </h2>

            <p className="mt-3 text-slate-300 leading-relaxed">
              A good retail personal statement should quickly show what you’re
              good at (customer service + reliability) and what you can handle
              (busy periods, tills, stock, teamwork).
            </p>

            <div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <p className="text-slate-200 leading-relaxed">
                Friendly and reliable retail assistant with 3+ years experience
                in fast-paced stores, delivering excellent customer service and
                supporting daily sales targets. Confident with tills, cash
                handling, stock replenishment and merchandising. Known for calm,
                professional communication and consistent shift attendance,
                including weekends and late shifts.
              </p>
            </div>
          </section>

          {/* Employment Example */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">Employment History Example</h2>

            <div className="mt-6 space-y-6">
              <div className="rounded-2xl bg-black/20 ring-1 ring-white/10 p-6">
                <h3 className="text-xl font-semibold">
                  Retail Assistant | High Street Store | Leeds
                </h3>
                <p className="text-slate-400 text-sm">Feb 2022 – Present</p>

                <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-300">
                  <li>Served customers quickly and professionally during peak periods</li>
                  <li>Operated tills confidently and handled cash responsibly</li>
                  <li>Replenished stock and maintained tidy, well-presented displays</li>
                  <li>Supported promotions and recommended add-on items when suitable</li>
                  <li>Resolved basic complaints politely and escalated when needed</li>
                  <li>Helped reduce queue times by supporting busy tills and self-checkout</li>
                </ul>
              </div>
            </div>

            <p className="mt-4 text-slate-300 leading-relaxed">
              If your background is more customer support than shop floor, see our{" "}
              <Link
                href="/customer-service-cv-example-uk"
                className="underline underline-offset-4 hover:text-white"
              >
                Customer Service CV example
              </Link>{" "}
              for better wording and skill ideas.
            </p>
          </section>

          {/* Skills */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">Key Skills for a Retail CV</h2>

            <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-300">
              <li>Customer service</li>
              <li>Cash handling and tills</li>
              <li>Stock replenishment</li>
              <li>Merchandising / shop floor standards</li>
              <li>Teamwork</li>
              <li>Timekeeping and reliability</li>
              <li>Communication and problem solving</li>
            </ul>
          </section>

          {/* Tips */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">Tips for a Strong UK Retail CV</h2>

            <p className="mt-3 text-slate-300 leading-relaxed">
              Retail employers love evidence of trust and consistency. If you can,
              mention:
            </p>

            <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-300">
              <li>Sales targets or KPIs you helped hit</li>
              <li>Busy periods (Christmas, sales events)</li>
              <li>Responsibility (closing shifts, keyholding, opening duties)</li>
              <li>Any training (new starters, safety, systems)</li>
              <li>Customer feedback or recognition</li>
            </ul>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Applying for hands-on roles instead? You might prefer our{" "}
              <Link
                href="/warehouse-cv-example-uk"
                className="underline underline-offset-4 hover:text-white"
              >
                Warehouse CV example UK
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

          {/* Related */}
          <section className="mt-14 rounded-3xl bg-white/5 ring-1 ring-white/10 p-8">
            <h2 className="text-2xl font-bold">Related UK CV Guides</h2>

            <div className="mt-6 space-y-3 text-slate-300">
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
                  href="/customer-service-cv-example-uk"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  Customer Service CV Example UK →
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

          {/* CTA */}
          <section className="mt-16 rounded-3xl bg-white/5 ring-1 ring-white/10 p-8 text-center">
            <h2 className="text-2xl font-bold">Ready to Build Your Retail CV?</h2>
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

          {/* Back link */}
          <div className="mt-12">
            <Link
              href="/cv-examples-uk"
              className="text-sm text-slate-300 hover:text-white underline underline-offset-4"
            >
              ← Back to CV Examples UK
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
