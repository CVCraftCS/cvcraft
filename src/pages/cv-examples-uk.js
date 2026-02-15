// src/pages/cv-examples-uk.js
import Head from "next/head";
import Link from "next/link";

export default function CvExamplesUk() {
  const title =
    "CV Examples UK (2026) | Free CV Templates & Samples | CVCraft Classroom";
  const description =
    "Real UK CV examples for warehouse, retail, customer service, graduates and no-experience roles. See sample layouts and build your own professional CV in minutes.";

  const canonical = "https://www.cvcraftclassroom.com/cv-examples-uk";

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
      </Head>

      <main className="min-h-screen bg-slate-950 text-white px-6 py-14">
        <div className="mx-auto max-w-4xl">
          {/* H1 */}
          <h1 className="text-4xl font-bold tracking-tight">
            CV Examples UK (2026 Guide)
          </h1>

          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            Looking for real UK CV examples? Below you&apos;ll find practical
            examples for warehouse jobs, retail, customer service, graduates and
            candidates with no experience — plus guidance on formatting your CV
            correctly for UK employers.
          </p>

          <div className="mt-6">
            <Link
              href="/cv"
              className="inline-block rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-200 transition"
            >
              Build your CV now →
            </Link>
          </div>

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
              <li>Include measurable achievements</li>
              <li>Tailor it to the job role</li>
              <li>Use UK spelling and formatting</li>
            </ul>
          </section>

          {/* Section: Example Types */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">UK CV Example Types</h2>

            <div className="mt-6 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  Warehouse CV Example (UK)
                </h3>
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

              <div>
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

              <div>
                <h3 className="text-xl font-semibold">
                  Customer Service CV Example
                </h3>
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

              <div>
                <h3 className="text-xl font-semibold">
                  CV With No Experience (UK)
                </h3>
                <p className="mt-2 text-slate-300">
                  Emphasise transferable skills, volunteering, education and
                  personal strengths.
                </p>
                <Link
                  href="/no-experience-cv-uk"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 text-sm"
                >
                  View no experience CV guide →
                </Link>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  CV for 16 Year Old (UK)
                </h3>
                <p className="mt-2 text-slate-300">
                  Focus on school achievements, part-time work, teamwork and
                  reliability.
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
          </section>

          {/* CTA Section */}
          <section className="mt-16 rounded-3xl bg-white/5 ring-1 ring-white/10 p-8 text-center">
            <h2 className="text-2xl font-bold">Ready to Build Your UK CV?</h2>
            <p className="mt-3 text-slate-300">
              Use a structured, recruiter-ready template and generate your CV
              in under 20 minutes.
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
