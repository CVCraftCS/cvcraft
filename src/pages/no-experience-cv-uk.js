// src/pages/no-experience-cv-uk.js
import Head from "next/head";
import Link from "next/link";

export default function NoExperienceCvUk() {
  const title =
    "CV With No Experience (UK 2026) | Example & Guide for Beginners | CVCraft Classroom";
  const description =
    "How to write a CV with no experience in the UK. Includes a proven personal statement example, skills list, education section and first-job tips. Build a recruiter-ready CV in minutes.";

  const canonical = "https://www.cvcraftclassroom.com/no-experience-cv-uk";

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
            CV With No Experience (UK 2026 Guide)
          </h1>

          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            If you have no work experience yet, you can still write a strong UK
            CV. The goal is to show you’re reliable, ready to learn and already
            have skills employers care about — even if they came from school,
            volunteering, hobbies or helping family.
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

          {/* What employers want */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">What Employers Want to See</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              For entry-level roles, most employers are looking for attitude and
              evidence you’ll show up, work hard and learn quickly.
            </p>

            <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-300">
              <li>Reliability and timekeeping</li>
              <li>Communication and teamwork</li>
              <li>Willingness to learn</li>
              <li>Basic numeracy and literacy</li>
              <li>Confidence following instructions</li>
            </ul>
          </section>

          {/* Personal statement example */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">
              Personal Statement Example (No Experience)
            </h2>

            <p className="mt-3 text-slate-300 leading-relaxed">
              Keep it short (3–5 lines). Mention your strengths, what you’re
              aiming for, and why you’ll be good to hire.
            </p>

            <div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <p className="text-slate-200 leading-relaxed">
                Motivated and reliable school leaver looking for a first job in a
                customer-facing role. Strong communication skills, confident
                working in a team and quick to learn new tasks. Known for good
                timekeeping and a positive attitude. Ready to work hard, follow
                instructions and develop professionally.
              </p>
            </div>
          </section>

          {/* Skills */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">
              Good Skills to Put on a CV With No Experience
            </h2>

            <p className="mt-3 text-slate-300 leading-relaxed">
              Choose skills you can back up with examples (even from school).
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-black/20 ring-1 ring-white/10 p-5">
                <h3 className="font-semibold">Work-ready skills</h3>
                <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-300">
                  <li>Teamwork</li>
                  <li>Communication</li>
                  <li>Time management</li>
                  <li>Following instructions</li>
                  <li>Problem solving</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-black/20 ring-1 ring-white/10 p-5">
                <h3 className="font-semibold">Practical skills</h3>
                <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-300">
                  <li>Basic IT (email, Word/Google Docs)</li>
                  <li>Numeracy (cash, stock, counting)</li>
                  <li>Organisation</li>
                  <li>Customer service mindset</li>
                  <li>Fast learner</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education section */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">Education Section Example</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              If you have no experience, education goes higher up the CV. Add
              subjects and achievements that relate to the job.
            </p>

            <div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <p className="text-slate-200 font-semibold">
                Secondary School / College — Leeds
              </p>
              <p className="mt-1 text-slate-300">
                GCSEs (or equivalent), 2024–2026
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-300">
                <li>English and Maths (include grades if strong)</li>
                <li>Attendance award / prefect / team captain (if applicable)</li>
                <li>Projects: presentations, group work, deadlines met</li>
              </ul>
            </div>
          </section>

          {/* Experience alternatives */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">
              What to Put Instead of Work Experience
            </h2>

            <p className="mt-3 text-slate-300 leading-relaxed">
              If you don’t have jobs to list yet, use any of the below. Employers
              still count this as evidence.
            </p>

            <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-300">
              <li>Volunteering</li>
              <li>Work experience placements</li>
              <li>Helping a family business</li>
              <li>School responsibilities (prefect, sports captain)</li>
              <li>Clubs, sports teams, cadets</li>
              <li>Personal projects (e.g. building, fixing, organising)</li>
            </ul>
          </section>

          {/* Common mistakes */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">Common Mistakes to Avoid</h2>
            <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-300">
              <li>Writing “no experience” and leaving it at that</li>
              <li>Adding skills with zero proof behind them</li>
              <li>Too much text — keep it easy to scan</li>
              <li>Missing contact details or messy formatting</li>
              <li>Using a generic CV for every job</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="mt-16 rounded-3xl bg-white/5 ring-1 ring-white/10 p-8 text-center">
            <h2 className="text-2xl font-bold">Build a CV That Gets You In</h2>
            <p className="mt-3 text-slate-300">
              CVCraft will generate a clean, recruiter-ready CV from your inputs.
              Perfect for first jobs.
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
        </div>
      </main>
    </>
  );
}
