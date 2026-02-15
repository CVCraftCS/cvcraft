// src/pages/cv-for-16-year-old-uk.js
import Head from "next/head";
import Link from "next/link";

export default function CvFor16YearOldUk() {
  const title =
    "CV for 16 Year Old (UK 2026) | Example, Template & First Job Tips | CVCraft Classroom";
  const description =
    "How to write a CV for a 16 year old in the UK (2026). Includes a strong personal statement example, skills list, education section, and first job CV tips. Build a recruiter-ready CV in minutes.";

  const canonical = "https://www.cvcraftclassroom.com/cv-for-16-year-old-uk";

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
          <h1 className="text-4xl font-bold tracking-tight">
            CV for a 16 Year Old (UK 2026 Guide)
          </h1>

          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            Writing your first CV at 16 can feel awkward — but it’s absolutely
            doable. Employers hiring for weekend jobs, part-time roles or
            apprenticeships mainly want to see that you’re reliable, friendly,
            and willing to learn.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/cv"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-200 transition"
            >
              Build your CV now →
            </Link>

            <Link
              href="/cv-writing-help"
              className="inline-flex items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              CV writing help →
            </Link>
          </div>

          {/* Quick checklist */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">What a 16-Year-Old CV Should Include</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Keep it clear and simple. For most first jobs, a one-page CV is
              perfect.
            </p>

            <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-300">
              <li>Your name + contact details</li>
              <li>Short personal statement (3–5 lines)</li>
              <li>Education (GCSEs / predicted grades)</li>
              <li>Skills (with proof/examples)</li>
              <li>Any experience: volunteering, clubs, responsibilities</li>
              <li>References (optional: “available on request”)</li>
            </ul>
          </section>

          {/* Personal statement example */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">Personal Statement Example (Age 16)</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              This should be confident but honest. Mention what type of role
              you want (retail, café, warehouse, apprenticeship) and what makes
              you a good hire.
            </p>

            <div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <p className="text-slate-200 leading-relaxed">
                Reliable and hard-working student looking for a part-time role
                in retail or hospitality. Friendly and confident speaking to
                customers, with strong teamwork skills from school group
                projects and sports. Known for good timekeeping and a positive
                attitude. Ready to learn quickly and support the team during
                busy periods.
              </p>
            </div>
          </section>

          {/* Skills */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">Best Skills to Put on a 16-Year-Old CV</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Pick skills you can back up with real examples (school, clubs,
              helping family, sports).
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-black/20 ring-1 ring-white/10 p-5">
                <h3 className="font-semibold">Work-ready skills</h3>
                <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-300">
                  <li>Teamwork</li>
                  <li>Communication</li>
                  <li>Reliability &amp; timekeeping</li>
                  <li>Willingness to learn</li>
                  <li>Following instructions</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-black/20 ring-1 ring-white/10 p-5">
                <h3 className="font-semibold">Practical skills</h3>
                <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-300">
                  <li>Basic IT (email, Word/Docs)</li>
                  <li>Organisation</li>
                  <li>Problem solving</li>
                  <li>Customer service mindset</li>
                  <li>Fast learner</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education example */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">Education Section Example</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Employers expect education to be a main section at 16. Include
              predicted grades if you haven’t finished yet.
            </p>

            <div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <p className="text-slate-200 font-semibold">
                Secondary School — Manchester
              </p>
              <p className="mt-1 text-slate-300">
                GCSEs (in progress), 2024–2026
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-300">
                <li>English &amp; Maths — predicted grades (add if strong)</li>
                <li>Other subjects relevant to your job/apprenticeship</li>
                <li>Attendance award / prefect / responsibilities (if any)</li>
              </ul>
            </div>
          </section>

          {/* Experience alternatives */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">What Counts as “Experience” at 16?</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              You don’t need paid work to show experience. Any responsibility
              that proves you can be trusted helps.
            </p>

            <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-300">
              <li>Volunteering (school events, charity shops, community work)</li>
              <li>Babysitting / helping family</li>
              <li>Sports teams or clubs</li>
              <li>School roles (prefect, mentoring, library helper)</li>
              <li>Work experience placements</li>
            </ul>
          </section>

          {/* Tips */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">First Job CV Tips (UK)</h2>
            <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-300">
              <li>Keep it to 1 page if possible</li>
              <li>Use a clean format with clear headings</li>
              <li>Tailor your statement to the job (retail vs café vs warehouse)</li>
              <li>Use simple, confident wording (no exaggerations)</li>
              <li>Ask a parent/teacher to proofread spelling</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="mt-16 rounded-3xl bg-white/5 ring-1 ring-white/10 p-8 text-center">
            <h2 className="text-2xl font-bold">Ready to Build Your CV?</h2>
            <p className="mt-3 text-slate-300">
              Generate a clean, recruiter-ready UK CV in minutes — perfect for
              first jobs and apprenticeships.
            </p>

            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <Link
                href="/cv"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-200 transition"
              >
                Build CV →
              </Link>

              <Link
                href="/cover-letter"
                className="rounded-xl bg-white/5 ring-1 ring-white/10 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
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
