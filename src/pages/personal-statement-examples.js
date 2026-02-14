// src/pages/personal-statement-examples.js
import Head from "next/head";
import Link from "next/link";

export default function PersonalStatementExamplesPage() {
  const title =
    "Personal Statement Examples (UK) — 12 CV Profiles + Template | CVCraft";
  const description =
    "Copy-paste UK personal statement examples for your CV (career change, retail, warehouse, admin, management). Includes a simple template and what to avoid.";
  const canonical =
    "https://www.cvcraftclassroom.com/personal-statement-examples";

  const examples = [
    {
      title: "Warehouse / Logistics (high volume)",
      text:
        "Reliable warehouse operative with experience in fast-paced picking, packing and dispatch. Comfortable working to tight cut-offs while keeping accuracy high. Known for strong attendance, teamwork and maintaining safe working standards. Looking to bring pace, consistency and a positive attitude to a busy warehouse team.",
    },
    {
      title: "Customer Service (phone / email)",
      text:
        "Customer-focused professional with experience handling enquiries, resolving issues and keeping customers updated clearly and calmly. Confident using CRM systems and prioritising multiple cases at once. Known for staying professional under pressure and improving satisfaction through clear communication and follow-through.",
    },
    {
      title: "Retail Assistant (store / tills)",
      text:
        "Friendly retail assistant with experience supporting customers on the shop floor, operating tills and keeping shelves well presented. Quick to learn new systems, comfortable with busy weekends and strong on product knowledge. Looking to contribute dependable service and a positive customer experience.",
    },
    {
      title: "Admin / Office Support",
      text:
        "Organised administrator with experience managing inboxes, scheduling, updating records and producing accurate documents. Confident with Microsoft Office/Google Workspace and working to deadlines. Known for attention to detail, clear communication and keeping processes running smoothly.",
    },
    {
      title: "Supervisor / Team Leader",
      text:
        "Hands-on team leader with experience coordinating daily workload, supporting staff and keeping standards high. Comfortable planning shifts, coaching new starters and handling issues quickly. Known for improving morale, keeping teams focused and delivering consistent results against targets.",
    },
    {
      title: "Delivery Driver",
      text:
        "Dependable delivery driver with a strong focus on safety, customer service and route efficiency. Experienced with multi-drop deliveries, POD apps and time-critical schedules. Known for being reliable, professional and maintaining a clean driving record.",
    },
    {
      title: "Trades / Site Operative",
      text:
        "Practical, safety-minded operative with experience supporting site work, following instructions and keeping areas tidy and compliant. Comfortable using hand tools and working as part of a team. Known for good timekeeping, willingness to learn and a strong work ethic.",
    },
    {
      title: "Career Change (general)",
      text:
        "Motivated professional transitioning into a new role after building strong transferable skills in reliability, communication and problem-solving. I learn quickly, take feedback well and enjoy working towards clear targets. Looking for an opportunity to grow, contribute and build long-term value in a new field.",
    },
    {
      title: "Graduate / Entry Level",
      text:
        "Recent graduate with strong written and verbal communication and a solid foundation in research, analysis and presenting information clearly. Comfortable working to deadlines and collaborating with others. Looking for an entry-level role where I can learn fast and contribute with energy and attention to detail.",
    },
    {
      title: "Operations / Process (continuous improvement)",
      text:
        "Operations-minded professional with experience improving day-to-day processes, tracking performance and supporting teams to hit targets. Comfortable using data to spot issues and implementing practical fixes. Known for calm problem-solving, consistency and strong stakeholder communication.",
    },
    {
      title: "Sales Support / Account Support",
      text:
        "Customer and account support professional with experience managing enquiries, updating CRM records and ensuring smooth handovers between teams. Confident handling multiple priorities while keeping clients updated. Known for being organised, proactive and focused on outcomes.",
    },
    {
      title: "Manager (multi-site / high responsibility)",
      text:
        "Results-driven manager with experience leading teams, maintaining standards and delivering against operational targets. Strong on planning, accountability and keeping people motivated. Known for clear communication, practical leadership and creating stable day-to-day performance even during peak periods.",
    },
  ];

  const template =
    "I am a [job title] with experience in [1–2 key areas]. I’m known for [2–3 strengths] and delivering [outcome/target]. In my recent role, I [achievement]. I’m now looking for a [job title] position where I can help [company/team goal] and continue developing in [area].";

  const avoid = [
    "Too long (keep it 3–5 lines).",
    "Generic claims with no proof (“hard worker”, “team player”) — add an example or outcome.",
    "Listing every skill you have — focus on what matches the role.",
    "First-person life story — keep it professional and relevant.",
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <main className="min-h-screen bg-[#05070f] text-white">
        {/* Top bar */}
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
              <span className="text-xs font-bold">CV</span>
            </span>
            <span className="text-sm font-semibold tracking-tight">CVCraft</span>
          </Link>

          <nav className="flex items-center gap-4 text-sm text-white/80">
            <Link href="/cover-letter" className="hover:text-white">
              Cover letter (free)
            </Link>
            <Link href="/cv" className="hover:text-white">
              Build CV
            </Link>
            <Link href="/pricing" className="hover:text-white">
              Pricing
            </Link>
            <Link
              href="/cv"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/90"
            >
              Start
            </Link>
          </nav>
        </div>

        {/* Hero */}
        <header className="mx-auto max-w-5xl px-6 pb-10 pt-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            UK CV help
          </div>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Personal statement examples (UK)
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
            Your personal statement is the short profile at the top of your CV.
            Keep it <b>3–5 lines</b>, make it role-specific, and include one
            proof line. Below are copy-paste examples plus a simple template.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/cv"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
            >
              Build my CV
            </Link>
            <Link
              href="/cv-writing-help"
              className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
            >
              Full CV writing guide
            </Link>
          </div>
        </header>

        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="grid gap-8 md:grid-cols-12">
            {/* Main */}
            <article className="md:col-span-8">
              <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <h2 className="text-xl font-bold">The simple formula</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-white/80">
                  <li>
                    <b>Who you are:</b> job title / level and your core experience.
                  </li>
                  <li>
                    <b>What you’re good at:</b> 2–3 strengths that match the advert.
                  </li>
                  <li>
                    <b>Proof:</b> one outcome or responsibility (numbers if possible).
                  </li>
                  <li>
                    <b>What you want:</b> the role you’re applying for and why.
                  </li>
                </ul>
              </div>

              <div className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <h2 className="text-xl font-bold">Copy-paste template</h2>
                <p className="mt-3 text-white/75 leading-relaxed">
                  Replace the brackets, keep it tight, and tailor to the role.
                </p>
                <div className="mt-4 rounded-xl bg-black/30 p-4 ring-1 ring-white/10">
                  <pre className="whitespace-pre-wrap text-sm text-white/85">
                    {template}
                  </pre>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/cv"
                    className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
                  >
                    Build my CV now
                  </Link>
                  <Link
                    href="/pricing"
                    className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
                  >
                    See pricing
                  </Link>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <h2 className="text-xl font-bold">12 personal statement examples</h2>
                <p className="mt-3 text-white/75 leading-relaxed">
                  Pick the closest one and tweak the job title + proof line so it
                  matches your target role.
                </p>

                <div className="mt-6 space-y-4">
                  {examples.map((ex) => (
                    <div
                      key={ex.title}
                      className="rounded-xl bg-black/25 p-5 ring-1 ring-white/10"
                    >
                      <div className="text-sm font-semibold text-white">
                        {ex.title}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-white/80">
                        {ex.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <h2 className="text-xl font-bold">What to avoid</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-white/80">
                  {avoid.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <h2 className="text-xl font-bold">Next step</h2>
                <p className="mt-3 text-white/75 leading-relaxed">
                  Build your CV in CVCraft — paste a statement above, then generate
                  a clean CV in minutes.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/cv"
                    className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
                  >
                    Build CV
                  </Link>
                  <Link
                    href="/cover-letter"
                    className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
                  >
                    Free cover letter generator
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="md:col-span-4">
              <div className="sticky top-6 space-y-6">
                <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <div className="text-sm font-semibold text-white">Quick links</div>
                  <div className="mt-4 flex flex-col gap-3">
                    <Link
                      href="/cv"
                      className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
                    >
                      Build CV
                    </Link>
                    <Link
                      href="/cv-writing-help"
                      className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
                    >
                      CV writing help
                    </Link>
                    <Link
                      href="/cover-letter-help"
                      className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
                    >
                      Cover letter help
                    </Link>
                  </div>

                  <div className="mt-5 rounded-xl bg-emerald-500/10 p-4 ring-1 ring-emerald-500/20">
                    <div className="text-sm font-semibold text-emerald-200">
                      Quick win
                    </div>
                    <p className="mt-1 text-sm text-white/80">
                      Add one proof line: “Handled 500+ orders/day” or “Reduced
                      errors by 20%”.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <div className="text-sm font-semibold">Related</div>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    <li>
                      <Link className="hover:text-white" href="/pricing">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-white" href="/schools">
                        Schools &amp; Educators
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>

          <footer className="mt-14 border-t border-white/10 pt-8 text-sm text-white/60">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span>© {new Date().getFullYear()} CVCraft</span>
              <div className="flex flex-wrap gap-4">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <Link href="/cv" className="hover:text-white">
                  Build CV
                </Link>
                <Link href="/cover-letter" className="hover:text-white">
                  Cover letter
                </Link>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}
