import Link from "next/link";

export default function SchoolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="text-slate-300 hover:text-white">
            ← Back
          </Link>
          <Link
            href="/cv"
            className="rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-slate-100"
          >
            Open CV Builder
          </Link>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight">
          CVCraft for Schools & Educators
        </h1>
        <p className="mt-3 text-slate-300 text-lg">
          Help ensure every student leaves school with a professional, interview-ready CV — built in
          minutes.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <h2 className="text-xl font-bold">Designed for the classroom</h2>
            <ul className="mt-4 space-y-2 text-slate-200">
              <li>• Simple, guided CV builder suitable for Year 10–13</li>
              <li>• Outputs a clean PDF that recruiters actually want to read</li>
              <li>• Works for work experience, apprenticeships, part-time jobs, and post-16 pathways</li>
              <li>• Supports employability lessons and careers programmes</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <h2 className="text-xl font-bold">GDPR & shared-device safe</h2>
            <ul className="mt-4 space-y-2 text-slate-200">
              <li>• Student info is saved locally in the browser (not uploaded)</li>
              <li>• No student accounts or logins required</li>
              <li>• “Clear saved data” button removes all saved information from that device</li>
              <li>• Suitable for shared PCs in schools, libraries, and job centres</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
          <h2 className="text-xl font-bold">Typical delivery model</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3 text-slate-200">
            <div>
              <div className="font-semibold">1) Lesson</div>
              <p className="mt-2 text-sm text-slate-300">
                Students complete the guided builder in a single session.
              </p>
            </div>
            <div>
              <div className="font-semibold">2) Export</div>
              <p className="mt-2 text-sm text-slate-300">
                Each student downloads a professional PDF CV for applications.
              </p>
            </div>
            <div>
              <div className="font-semibold">3) Improve</div>
              <p className="mt-2 text-sm text-slate-300">
                Teachers can run a second session focused on refinements and feedback.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-white p-6 text-slate-900">
          <h2 className="text-xl font-bold">Pilot opportunity</h2>
          <p className="mt-2 text-slate-700">
            If you’re a school, academy trust, or local authority, we can run a pilot programme and
            provide onboarding materials. The goal: measurable employability outcomes and every
            student leaving with a recruiter-ready CV.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 text-center"
              href="mailto:hello@cvcraft.uk?subject=CVCraft%20Schools%20Pilot"
            >
              Email about a pilot
            </a>

            <Link
              href="/cv"
              className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-200 text-center"
            >
              Try the builder
            </Link>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Note: Replace the email address with your preferred contact.
          </p>
        </div>

        <div className="mt-10 text-sm text-slate-300">
          Want a one-page PDF overview for headteachers/councils? Tell me and I’ll generate it next.
        </div>
      </div>
    </div>
  );
}
