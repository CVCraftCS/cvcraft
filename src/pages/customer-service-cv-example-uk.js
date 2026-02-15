// src/pages/customer-service-cv-example-uk.js
import Head from "next/head";
import Link from "next/link";

export default function CustomerServiceCvExampleUk() {
  const title =
    "Customer Service CV Example (UK 2026) | Sample & Writing Guide | CVCraft Classroom";
  const description =
    "Customer service CV example for UK roles. Includes a personal statement example, key skills list and employment section. Learn how to structure your customer service CV properly and build yours in minutes.";

  const canonical =
    "https://www.cvcraftclassroom.com/customer-service-cv-example-uk";

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
            Customer Service CV Example (UK 2026 Guide)
          </h1>

          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            A strong UK customer service CV should demonstrate communication
            skills, patience, problem solving and reliability. Employers want
            to see evidence of handling customers professionally and resolving
            issues efficiently. Below is a practical example you can adapt.
          </p>

          <div className="mt-6">
            <Link
              href="/cv"
              className="inline-block rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-200 transition"
            >
              Build your customer service CV now →
            </Link>
          </div>

          {/* Personal Statement */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">
              Customer Service CV Personal Statement Example
            </h2>

            <div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <p className="text-slate-200 leading-relaxed">
                Professional and approachable customer service advisor with
                4+ years experience in retail and contact centre environments.
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
              <div>
                <h3 className="text-xl font-semibold">
                  Customer Service Advisor | Call Centre | Birmingham
                </h3>
                <p className="text-slate-400 text-sm">Mar 2021 – Present</p>

                <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-300">
                  <li>Handled 60+ inbound customer calls per day</li>
                  <li>Maintained customer satisfaction score above 95 percent</li>
                  <li>Resolved complaints and processed refunds efficiently</li>
                  <li>Updated CRM systems accurately after each interaction</li>
                  <li>Worked to daily and weekly performance targets</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Skills */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">
              Key Skills for a Customer Service CV
            </h2>

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
            <h2 className="text-2xl font-bold">
              Tips for Writing a Strong Customer Service CV
            </h2>

            <p className="mt-3 text-slate-300 leading-relaxed">
              Customer service CVs should show measurable impact. Include:
            </p>

            <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-300">
              <li>Call volume or customer numbers</li>
              <li>Customer satisfaction percentage</li>
              <li>Complaint resolution time</li>
              <li>Sales or upselling targets achieved</li>
              <li>Systems or tools used</li>
            </ul>
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
                  href="/cv-writing-help"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  CV Writing Help →
                </Link>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mt-16 text-center">
            <h2 className="text-2xl font-bold">
              Ready to Build Your Customer Service CV?
            </h2>

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
