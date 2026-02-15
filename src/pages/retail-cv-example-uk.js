// src/pages/retail-cv-example-uk.js
import Head from "next/head";
import Link from "next/link";

export default function RetailCvExampleUk() {
  const title =
    "Retail CV Example (UK 2026) | Sample & Writing Guide | CVCraft Classroom";
  const description =
    "Retail CV example for UK roles. Includes a real personal statement example, skills list, and employment section. Learn the correct retail CV format and build yours in minutes.";

  const canonical = "https://www.cvcraftclassroom.com/retail-cv-example-uk";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonical} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
      </Head>

      <main className="min-h-screen bg-slate-950 text-white px-6 py-14">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight">
            Retail CV Example (UK 2026 Guide)
          </h1>

          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            A strong UK retail CV should highlight customer service, reliability,
            teamwork, and (where possible) measurable results like sales targets,
            upsells, or positive feedback. Below is a practical retail CV example
            you can copy and adapt.
          </p>

          <div className="mt-6">
            <Link
              href="/cv"
              className="inline-block rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-200 transition"
            >
              Build your retail CV now →
            </Link>
          </div>

          {/* Personal Statement */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">
              Retail CV Personal Statement Example
            </h2>

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
              <div>
                <h3 className="text-xl font-semibold">
                  Retail Assistant | High Street Store | Leeds
                </h3>
                <p className="text-slate-400 text-sm">Feb 2022 – Present</p>

                <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-300">
                  <li>Served customers quickly and professionally during peak periods</li>
                  <li>Operated tills confidently and handled cash responsibly</li>
                  <li>Replenished stock and maintained tidy, well-presented displays</li>
                  <li>Supported promotions and upsold add-on items where appropriate</li>
                  <li>Resolved basic complaints politely and escalated when needed</li>
                </ul>
              </div>
            </div>
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
            <h2 className="text-2xl font-bold">
              Tips for a Strong UK Retail CV
            </h2>

            <p className="mt-3 text-slate-300 leading-relaxed">
              Retail employers love evidence of trust and consistency. If you
              can, mention:
            </p>

            <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-300">
              <li>Sales targets or KPIs you helped hit</li>
              <li>Busy periods (Christmas, sales events)</li>
              <li>Responsibility (closing shifts, keyholding, opening duties)</li>
              <li>Any training (new starters, safety, systems)</li>
              <li>Customer feedback or recognition</li>
            </ul>
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
                  href="/cv-writing-help"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  CV Writing Help →
                </Link>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center">
            <h2 className="text-2xl font-bold">Ready to Build Your Retail CV?</h2>
            <p className="mt-3 text-slate-300">
              Use a structured template and generate your CV in under 20 minutes.
            </p>

            <div className="mt-6">
              <Link
                href="/cv"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-slate-950 hover:bg-slate-200 transition"
              >
                Build CV →
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
