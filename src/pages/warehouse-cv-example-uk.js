// src/pages/warehouse-cv-example-uk.js
import Head from "next/head";
import Link from "next/link";

export default function WarehouseCvExampleUk() {
  const title =
    "Warehouse CV Example (UK 2026) | Sample & Writing Guide | CVCraft Classroom";
  const description =
    "Warehouse CV example for UK roles. See a real sample layout, personal statement example and skills section. Learn how to structure a warehouse CV properly and build yours in minutes.";

  const canonical =
    "https://www.cvcraftclassroom.com/warehouse-cv-example-uk";

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
            Warehouse CV Example (UK 2026 Guide)
          </h1>

          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            Writing a warehouse CV in the UK requires clarity, measurable
            performance and a strong focus on productivity and safety.
            Below is a practical warehouse CV example, followed by
            formatting tips to help you structure your own.
          </p>

          <div className="mt-6">
            <Link
              href="/cv"
              className="inline-block rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-200 transition"
            >
              Build your warehouse CV now →
            </Link>
          </div>

          {/* Example Personal Statement */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">
              Warehouse CV Personal Statement Example
            </h2>

            <div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <p className="text-slate-200 leading-relaxed">
                Reliable and physically fit warehouse operative with 4+ years
                experience handling high-volume order picking and stock
                replenishment. Consistently maintained 99 percent order
                accuracy while processing up to 1,000 units per shift.
                Strong awareness of health and safety standards and
                experienced in operating pallet trucks and warehouse
                management systems.
              </p>
            </div>
          </section>

          {/* Employment Example */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">
              Employment History Example
            </h2>

            <div className="mt-6 space-y-6">

              <div>
                <h3 className="text-xl font-semibold">
                  Warehouse Operative | Distribution Centre | Manchester
                </h3>
                <p className="text-slate-400 text-sm">
                  Jan 2021 – Present
                </p>

                <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-300">
                  <li>Picked and packed up to 1,000 items per shift</li>
                  <li>Maintained 99 percent order accuracy rate</li>
                  <li>Operated pallet trucks and handheld scanners</li>
                  <li>Assisted with stock counts and inventory checks</li>
                  <li>Followed strict UK health and safety procedures</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Skills Section */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">
              Key Skills for a Warehouse CV
            </h2>

            <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-300">
              <li>Order picking and packing</li>
              <li>Stock control</li>
              <li>Manual handling</li>
              <li>Health and safety compliance</li>
              <li>Teamwork and reliability</li>
              <li>Time management</li>
              <li>Warehouse management systems (WMS)</li>
            </ul>
          </section>

          {/* Tips Section */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">
              Tips for Writing a Strong Warehouse CV
            </h2>

            <p className="mt-3 text-slate-300 leading-relaxed">
              Focus on measurable output. Employers want to see volume,
              accuracy and reliability. If possible, include:
            </p>

            <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-300">
              <li>Units processed per shift</li>
              <li>Accuracy percentage</li>
              <li>Safety record</li>
              <li>Equipment operated</li>
              <li>Experience with large retailers or distribution chains</li>
            </ul>
          </section>

          {/* Internal Links */}
          <section className="mt-14 rounded-3xl bg-white/5 ring-1 ring-white/10 p-8">
            <h2 className="text-2xl font-bold">
              Related UK CV Guides
            </h2>

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
                  href="/no-experience-cv-uk"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  CV With No Experience UK →
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
              Ready to Build Your Warehouse CV?
            </h2>

            <p className="mt-3 text-slate-300">
              Use a structured template and generate your CV in under 20
              minutes with CVCraft Classroom.
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
