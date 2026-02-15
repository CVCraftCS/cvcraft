// src/pages/cv-examples/care-assistant-cv-example-uk.js
import Head from "next/head";
import Link from "next/link";

export default function CareAssistantCvExampleUk() {
  const title =
    "Care Assistant CV Example UK (2026 Guide) | Free Template & Tips | CVCraft Classroom";
  const description =
    "See a professional care assistant CV example for the UK. Includes key skills, profile summary, employment history tips, and a free CV builder to create your own in minutes.";
  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/care-assistant-cv-example-uk";

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content="CVCraft Classroom" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* Optional: keep it simple; no image set here unless you have a specific OG for this page */}
      </Head>

      <main className="mx-auto max-w-4xl rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-200">
        <header>
          <p className="text-sm text-slate-500">
            <Link href="/cv-examples-uk" className="hover:underline">
              UK CV Examples
            </Link>{" "}
            <span aria-hidden="true">›</span> Care Assistant
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-slate-900">
            Care Assistant CV Example (UK)
          </h1>

          <p className="mt-4 text-slate-700">
            Writing a strong care assistant CV is essential if you want to stand
            out in the UK job market. Employers look for compassion, reliability,
            safeguarding awareness, and hands-on experience supporting
            vulnerable individuals.
          </p>
        </header>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-slate-900">
            Professional Profile Example
          </h2>

          <div className="mt-3 rounded-xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <p className="text-slate-700">
              Compassionate and reliable Care Assistant with over 3 years’
              experience supporting elderly residents in residential care homes.
              Skilled in personal care, medication assistance, safeguarding, and
              maintaining dignity and independence. Known for building positive
              relationships with residents and families while ensuring high
              standards of safety and wellbeing.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-slate-900">
            Key Skills for a Care Assistant CV
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            <li>Personal care and hygiene support</li>
            <li>Medication administration</li>
            <li>Safeguarding awareness</li>
            <li>Manual handling</li>
            <li>Dementia care</li>
            <li>Care planning documentation</li>
            <li>Communication with families</li>
            <li>Team collaboration</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-slate-900">
            Employment History Example
          </h2>

          <div className="mt-4 space-y-4">
            <div className="rounded-xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <div className="font-semibold text-slate-900">
                Care Assistant — Sunrise Residential Home
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Manchester | 2022 – Present
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-700">
                <li>Provided daily personal care to 15+ residents</li>
                <li>Supported mobility and assisted with manual handling</li>
                <li>Administered medication under supervision</li>
                <li>Maintained accurate care records and reports</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-slate-900">Qualifications</h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            <li>Level 2 Diploma in Health and Social Care</li>
            <li>First Aid Certification</li>
            <li>Manual Handling Training</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-slate-900">
            Create Your Own Care Assistant CV
          </h2>

          <p className="mt-4 text-slate-700">
            Use our UK CV builder to create a professional care assistant CV in
            minutes. Choose a recruiter-friendly template, add your experience,
            and download your CV as a clean PDF.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/cv"
              className="inline-block rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500"
            >
              Build Your Care Assistant CV Now
            </Link>

            <Link
              href="/cv-examples-uk"
              className="inline-block rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Browse more UK CV examples
            </Link>
          </div>
        </section>

        <footer className="mt-10 border-t pt-6 text-sm text-slate-500">
          Looking for other examples? Visit our{" "}
          <Link
            href="/cv-examples-uk"
            className="font-semibold text-emerald-600 hover:underline"
          >
            UK CV Examples hub
          </Link>
          .
        </footer>
      </main>
    </div>
  );
}
