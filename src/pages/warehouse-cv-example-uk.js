// src/pages/warehouse-cv-example-uk.js
import Head from "next/head";
import Link from "next/link";

export default function WarehouseCvExampleUk() {
  const title =
    "Warehouse CV Example (UK 2026) | Sample & Writing Guide | CVCraft Classroom";
  const description =
    "Warehouse CV example for UK roles. See a real sample layout, personal statement example and skills section. Learn how to structure a warehouse CV properly and build yours in minutes.";

  const canonical = "https://www.cvcraftclassroom.com/warehouse-cv-example-uk";

  // Optional OG image (add this file later if you want)
  // Create: /public/og/og-default.png
  const ogImage = "https://www.cvcraftclassroom.com/og/og-default.png";

  const faqItems = [
    {
      question: "What should a warehouse CV include in the UK?",
      answer:
        "A strong UK warehouse CV should include a short personal statement, key skills (picking, packing, scanning, stock control, H&S), employment history with measurable results (units per shift, accuracy, productivity), and any licences or equipment experience where relevant.",
    },
    {
      question: "How long should a warehouse CV be?",
      answer:
        "For most warehouse roles, one page is ideal. If you have several years of experience, two pages is fine — keep it focused on the last 5–10 years and cut anything irrelevant.",
    },
    {
      question: "What skills do warehouse employers look for most?",
      answer:
        "Warehouse employers typically look for reliability, productivity, accuracy, safe manual handling, teamwork, and experience with scanning systems or warehouse management systems (WMS).",
    },
    {
      question: "Should I include performance numbers on my warehouse CV?",
      answer:
        "Yes, if you can. Simple numbers like units per shift, accuracy percentage, or meeting dispatch deadlines make your CV much stronger and help employers trust your performance.",
    },
    {
      question: "Do I need forklift experience for warehouse jobs?",
      answer:
        "Not always. Many roles don’t require forklift licences. If you do have forklift or MHE experience, include it clearly. If you don’t, focus on picking/packing, scanning, stock, and reliability.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

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
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Head>

      <main className="min-h-screen bg-slate-950 text-white px-6 py-14">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="text-sm text-slate-400">
            <Link href="/" className="hover:text-white underline underline-offset-4">
              Home
            </Link>{" "}
            <span className="mx-2">→</span>
            <Link
              href="/cv-examples-uk"
              className="hover:text-white underline underline-offset-4"
            >
              CV Examples UK
            </Link>{" "}
            <span className="mx-2">→</span>
            <span className="text-slate-200">Warehouse CV Example</span>
          </nav>

          <h1 className="mt-4 text-4xl font-bold tracking-tight">
            Warehouse CV Example (UK 2026 Guide)
          </h1>

          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            Writing a warehouse CV in the UK requires clarity, measurable
            performance and a strong focus on productivity and safety. Below is
            a practical warehouse CV example, followed by formatting tips to help
            you structure your own. If you’re writing your first CV, read our{" "}
            <Link
              href="/no-experience-cv-uk"
              className="underline underline-offset-4 hover:text-white"
            >
              CV with no experience UK guide
            </Link>
            .
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/cv"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-200 transition"
            >
              Build your warehouse CV now →
            </Link>

            <Link
              href="/cv-writing-help"
              className="inline-flex items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              CV writing help →
            </Link>
          </div>

          {/* Copy/paste layout */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">Copy/Paste Warehouse CV Layout (UK)</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Use this structure to keep your CV easy to scan. Most warehouse
              employers want proof of output, accuracy and reliability.
            </p>

            <div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <ol className="list-decimal pl-6 space-y-2 text-slate-200">
                <li>
                  <span className="font-semibold">Name + Contact Details</span>{" "}
                  (phone, email, town/city)
                </li>
                <li>
                  <span className="font-semibold">Personal Statement</span>{" "}
                  (3–5 lines with numbers if possible)
                </li>
                <li>
                  <span className="font-semibold">Key Skills</span>{" "}
                  (picking, packing, scanning, stock, H&amp;S)
                </li>
                <li>
                  <span className="font-semibold">Employment History</span>{" "}
                  (bullets with units per shift / accuracy)
                </li>
                <li>
                  <span className="font-semibold">Licences/Equipment</span>{" "}
                  (optional: forklift/MHE, pallet truck, LLOP, etc.)
                </li>
                <li>
                  <span className="font-semibold">Education</span>{" "}
                  (brief — unless you’re early-career)
                </li>
              </ol>
            </div>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Applying for shop-floor work instead? See our{" "}
              <Link
                href="/retail-cv-example-uk"
                className="underline underline-offset-4 hover:text-white"
              >
                Retail CV example UK
              </Link>
              .
            </p>
          </section>

          {/* Example Personal Statement */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">Warehouse CV Personal Statement Example</h2>

            <p className="mt-3 text-slate-300 leading-relaxed">
              Keep your warehouse statement practical. Mention the type of work
              you do (picking, packing, goods-in, dispatch), the pace you can
              handle, and your accuracy/safety focus.
            </p>

            <div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <p className="text-slate-200 leading-relaxed">
                Reliable and physically fit warehouse operative with 4+ years
                experience handling high-volume order picking and stock
                replenishment. Consistently maintained 99% order accuracy while
                processing up to 1,000 units per shift. Strong awareness of
                health and safety standards and experienced in operating pallet
                trucks and handheld scanners, with basic experience using
                warehouse management systems (WMS).
              </p>
            </div>
          </section>

          {/* Employment Example */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">Employment History Example</h2>

            <div className="mt-6 space-y-6">
              <div className="rounded-2xl bg-black/20 ring-1 ring-white/10 p-6">
                <h3 className="text-xl font-semibold">
                  Warehouse Operative | Distribution Centre | Manchester
                </h3>
                <p className="text-slate-400 text-sm">Jan 2021 – Present</p>

                <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-300">
                  <li>Picked and packed up to 1,000 items per shift using handheld scanners</li>
                  <li>Maintained a 99% order accuracy rate by double-checking pick locations and labels</li>
                  <li>Worked to dispatch deadlines and supported busy peak periods (including overtime)</li>
                  <li>Operated pallet trucks safely and followed manual handling guidance</li>
                  <li>Assisted with stock counts, inventory checks, and replenishment tasks</li>
                  <li>Followed strict UK health and safety procedures and kept work areas clean and tidy</li>
                </ul>
              </div>
            </div>

            <p className="mt-4 text-slate-300 leading-relaxed">
              If your work is more customer-facing, our{" "}
              <Link
                href="/customer-service-cv-example-uk"
                className="underline underline-offset-4 hover:text-white"
              >
                Customer Service CV example UK
              </Link>{" "}
              may be a better fit for wording and skills.
            </p>
          </section>

          {/* Skills Section */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">Key Skills for a Warehouse CV</h2>

            <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-300">
              <li>Order picking and packing</li>
              <li>Handheld scanners / RF scanning</li>
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
            <h2 className="text-2xl font-bold">Tips for Writing a Strong Warehouse CV</h2>

            <p className="mt-3 text-slate-300 leading-relaxed">
              Focus on measurable output. Employers want to see volume, accuracy
              and reliability. If possible, include:
            </p>

            <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-300">
              <li>Units processed per shift</li>
              <li>Accuracy percentage</li>
              <li>Safety record (near-miss reporting, tidy work areas, PPE)</li>
              <li>Equipment operated (pallet truck, scanners, MHE)</li>
              <li>Experience with large retailers or distribution chains</li>
            </ul>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Want a matching cover letter? Use our{" "}
              <Link
                href="/cover-letter"
                className="underline underline-offset-4 hover:text-white"
              >
                free cover letter generator
              </Link>{" "}
              and tailor it to warehouse roles.
            </p>
          </section>

          {/* FAQ (visible) */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold">FAQ</h2>
            <div className="mt-6 space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5"
                >
                  <summary className="cursor-pointer font-semibold text-slate-100">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-slate-300 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Internal Links */}
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
                  href="/no-experience-cv-uk"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  CV With No Experience UK →
                </Link>
              </div>

              <div>
                <Link
                  href="/cv-for-16-year-old-uk"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  CV for 16 Year Old UK →
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
          <section className="mt-16 rounded-3xl bg-white/5 ring-1 ring-white/10 p-8 text-center">
            <h2 className="text-2xl font-bold">Ready to Build Your Warehouse CV?</h2>

            <p className="mt-3 text-slate-300">
              Use a structured template and generate your CV in under 20 minutes
              with CVCraft Classroom.
            </p>

            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <Link
                href="/cv"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-slate-950 hover:bg-slate-200 transition"
              >
                Build CV →
              </Link>

              <Link
                href="/cover-letter"
                className="rounded-xl bg-white/5 ring-1 ring-white/10 px-8 py-4 font-semibold text-white hover:bg-white/10 transition"
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
