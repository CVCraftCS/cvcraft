import Head from "next/head";
import Link from "next/link";

export default function CvExamplePage({
  title,
  description,
  canonical,
  breadcrumbLabel = "UK CV Examples",
  h1,
  intro,
  profileTitle = "Professional Profile Example",
  profileText,
  skillsTitle = "Key Skills",
  skills = [],
  employmentTitle = "Employment History Example",
  jobTitle,
  jobMeta,
  bullets = [],
  qualificationsTitle = "Qualifications",
  qualifications = [],
  ctaTitle = "Create Your Own CV",
  ctaBody,
  ctaButton = "Build Your CV Now",
  ctaHref = "/cv",
}) {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content="CVCraft Classroom" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <main className="mx-auto max-w-4xl rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-200">
        <header>
          <p className="text-sm text-slate-500">
            <Link href="/cv-examples-uk" className="hover:underline">
              {breadcrumbLabel}
            </Link>{" "}
            <span aria-hidden="true">›</span> {h1}
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-slate-900">{h1}</h1>

          <p className="mt-4 text-slate-700">{intro}</p>
        </header>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-slate-900">{profileTitle}</h2>
          <div className="mt-3 rounded-xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <p className="text-slate-700">{profileText}</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-slate-900">{skillsTitle}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            {skills.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-slate-900">{employmentTitle}</h2>
          <div className="mt-4 rounded-xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <div className="font-semibold text-slate-900">{jobTitle}</div>
            <div className="mt-1 text-sm text-slate-600">{jobMeta}</div>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-700">
              {bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-slate-900">
            {qualificationsTitle}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            {qualifications.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-slate-900">{ctaTitle}</h2>
          <p className="mt-4 text-slate-700">{ctaBody}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={ctaHref}
              className="inline-block rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500"
            >
              {ctaButton}
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
