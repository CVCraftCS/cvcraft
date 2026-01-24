// src/pages/cv-writing-help.js
import Head from "next/head";
import Link from "next/link";

export default function CvWritingHelpPage() {
  const title =
    "Struggling to write a CV? Simple help that actually sounds professional";
  const desc =
    "If wording, spelling, or confidence is holding you back, CVCraft helps you generate a professional CV in minutes.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Head>

      <main className="min-h-screen bg-white text-slate-900">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">
            ← Back
          </Link>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight">
            Struggling to write a CV?
          </h1>

          <p className="mt-3 text-lg text-slate-700">
            You’re not alone. Loads of capable people miss out on jobs because
            their CV wording doesn’t reflect who they really are — especially if
            spelling, confidence, or written English isn’t their strong point.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="font-semibold">CVCraft helps you:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>Generate a professional CV in minutes</li>
              <li>Get wording that sounds confident and clear</li>
              <li>Choose recruiter-safe layouts</li>
              <li>Keep it simple — no messing around</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/cv"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Generate my CV
            </Link>

            <Link
              href="/cover-letter"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Try the free cover letter generator
            </Link>
          </div>

          <p className="mt-8 text-sm text-slate-600">
            Built for people who want something that sounds professional — even
            if writing isn’t their strength.
          </p>
        </div>
      </main>
    </>
  );
}
