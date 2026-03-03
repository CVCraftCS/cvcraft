// src/pages/cv-examples/warehouse-operative-cv-example-uk.js
import Head from "next/head";
import Link from "next/link";

export default function WarehouseOperativeCvExampleUk() {
  const title =
    "Warehouse Operative CV Example UK (2026) | Free Template + Skills | CVCraft Classroom";
  const description =
    "A full Warehouse Operative CV example for the UK with skills, duties, and a copy-paste template. Built for warehouse, picker/packer, and logistics roles in 2026.";
  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/warehouse-operative-cv-example-uk";
  const ogImage = "https://www.cvcraftclassroom.com/og/og-default.png";

  const faqItems = [
    {
      q: "What skills should a Warehouse Operative put on a UK CV?",
      a: "Focus on picking/packing accuracy, stock control, scanning (RF), goods-in/out, health & safety, manual handling, teamwork, timekeeping, and meeting targets. If relevant, add forklift experience, WMS familiarity, or shift flexibility.",
    },
    {
      q: "Do I need experience to apply for Warehouse Operative jobs?",
      a: "Not always. Many roles are entry-level. Show reliability, physical stamina, willingness to learn, and any transferable experience such as retail stock work, cleaning, hospitality back-of-house, or production line work.",
    },
    {
      q: "How long should a Warehouse Operative CV be in the UK?",
      a: "One page is ideal for most entry-level and junior roles. Two pages can be fine if you have multiple relevant jobs, certifications (e.g., FLT), or measurable achievements.",
    },
    {
      q: "Should I include targets and metrics on my CV?",
      a: "Yes. Warehouse hiring managers like numbers. Add pick rates, accuracy %, pallets moved, orders per shift, zero-error stretches, attendance, or training completed.",
    },
    {
      q: "What if I’ve had lots of short warehouse jobs?",
      a: "Keep it honest and tidy. Group agency work (e.g., “Agency Assignments”) and list the key sites/roles briefly, focusing on duties and performance rather than dates taking up space.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  // Copy-paste CV example (edit the placeholders)
  const cvExample = `WAREHOUSE OPERATIVE | PICKER / PACKER
[Your Name]
[Town/City] • [Phone] • [Email] • [LinkedIn (optional)]

PERSONAL PROFILE
Reliable and safety-focused Warehouse Operative with experience in fast-paced picking, packing and goods-in operations. Consistently meets productivity targets while maintaining high accuracy and clean, organised work areas. Comfortable with RF scanners and manual handling, and known for strong timekeeping, teamwork and a “get it done” attitude across day and night shifts.

KEY SKILLS
• Picking & packing (single/multi-order, batch, zone picking)
• RF scanning, labels, dispatch documentation
• Goods-in / goods-out, put-away, replenishment
• Stock checks, cycle counts, basic inventory control
• Quality checks, damage reporting, returns handling
• Health & Safety, manual handling, PPE compliance
• Working to KPIs, accuracy, speed, attendance
• Teamwork, shift flexibility, following SOPs

WORK EXPERIENCE

Warehouse Operative (Picker/Packer) — [Company], [Location]
[Month YYYY] – Present
• Picked and packed customer orders using RF scanner, ensuring correct items, quantities and labels.
• Worked to daily KPIs for pick rate and accuracy; maintained a tidy, safe workstation.
• Completed quality checks and flagged damaged/missing items to team leaders quickly.
• Assisted with loading/unloading, pallet movement and dispatch prep during peak periods.
• Followed site SOPs and H&S rules, including manual handling and PPE requirements.

Key achievements (optional):
• Maintained strong pick accuracy over busy peak periods.
• Helped train new starters on scanner use and packing standards.

Warehouse Assistant — [Company], [Location]
[Month YYYY] – [Month YYYY]
• Supported goods-in: checked deliveries, matched paperwork, and stored stock correctly.
• Performed stock rotation and basic cycle counts to keep locations accurate.
• Replenished pick faces and supported returns processing when required.
• Worked collaboratively with supervisors and colleagues to keep orders flowing.

EDUCATION
[Qualification] — [School/College], [Town]
[Year]
(Examples: GCSEs / NVQ / Functional Skills / Apprenticeship)

CERTIFICATIONS (optional)
• Manual Handling — [Provider], [Year]
• Health & Safety — [Provider], [Year]
• FLT Licence (Counterbalance/Reach) — [Provider], [Year]

ADDITIONAL INFORMATION (optional)
• Available for shifts: days/nights/weekends • Right to work in the UK
• References available on request
`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <main style={{ maxWidth: 920, margin: "0 auto", padding: "28px 16px" }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: 14, marginBottom: 14, opacity: 0.85 }}>
          <Link href="/" style={{ textDecoration: "underline" }}>
            Home
          </Link>{" "}
          <span style={{ margin: "0 6px" }}>›</span>
          <Link href="/cv-examples-uk" style={{ textDecoration: "underline" }}>
            CV Examples UK
          </Link>{" "}
          <span style={{ margin: "0 6px" }}>›</span>
          <span>Warehouse Operative</span>
        </nav>

        <header style={{ marginBottom: 18 }}>
          <h1 style={{ fontSize: 34, lineHeight: 1.15, margin: "10px 0" }}>
            Warehouse Operative CV Example (UK) + Free Copy-Paste Template (2026)
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, margin: "10px 0 0" }}>
            Use this example to build a strong UK warehouse CV fast. It includes a
            ready-to-copy template, the best skills to list, and tips to help you
            get interviews for warehouse operative, picker/packer, and logistics
            roles.
          </p>

          <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link
              href="/cv"
              style={{
                display: "inline-block",
                padding: "10px 14px",
                borderRadius: 10,
                border: "1px solid rgba(0,0,0,0.15)",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Build my CV
            </Link>
            <Link
              href="/cover-letter"
              style={{
                display: "inline-block",
                padding: "10px 14px",
                borderRadius: 10,
                border: "1px solid rgba(0,0,0,0.15)",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Free cover letter
            </Link>
          </div>
        </header>

        {/* What employers want */}
        <section style={{ marginTop: 22 }}>
          <h2 style={{ fontSize: 24, margin: "0 0 8px" }}>
            What UK warehouse employers look for
          </h2>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
            <li>
              <strong>Reliability:</strong> timekeeping, attendance, and shift
              flexibility.
            </li>
            <li>
              <strong>Accuracy:</strong> correct picks, correct labels, low error
              rate.
            </li>
            <li>
              <strong>Safety:</strong> manual handling, PPE, clean working
              practices.
            </li>
            <li>
              <strong>Speed:</strong> working to KPIs without cutting corners.
            </li>
            <li>
              <strong>Teamwork:</strong> supporting goods-in/out and helping during
              peak.
            </li>
          </ul>
        </section>

        {/* CV Example */}
        <section style={{ marginTop: 24 }}>
          <h2 style={{ fontSize: 24, margin: "0 0 8px" }}>
            Warehouse Operative CV example (copy & edit)
          </h2>

          <div
            style={{
              border: "1px solid rgba(0,0,0,0.14)",
              borderRadius: 12,
              padding: 14,
              background: "rgba(0,0,0,0.02)",
            }}
          >
            <pre
              style={{
                margin: 0,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              {cvExample}
            </pre>
          </div>

          <p style={{ marginTop: 10, lineHeight: 1.6, opacity: 0.9 }}>
            Tip: keep your profile to 3–4 lines and add 2–3 measurable results
            (accuracy %, targets, pick rate, or peak performance).
          </p>
        </section>

        {/* Tips */}
        <section style={{ marginTop: 24 }}>
          <h2 style={{ fontSize: 24, margin: "0 0 8px" }}>
            Quick tips to improve your Warehouse Operative CV
          </h2>
          <ol style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
            <li>
              Put your <strong>most relevant warehouse keywords</strong> near the
              top: picking, packing, RF scanner, goods-in/out.
            </li>
            <li>
              Add <strong>numbers</strong> where possible: “100+ orders per shift”,
              “high pick accuracy”, “met daily KPIs”.
            </li>
            <li>
              Keep work history bullet points <strong>task + tool + outcome</strong>
              (e.g., “picked using RF scanner to meet dispatch deadlines”).
            </li>
            <li>
              If you’re new, highlight reliability: <strong>timekeeping</strong>,
              shift flexibility, physical stamina, willingness to learn.
            </li>
            <li>
              Include any training: manual handling, H&S, FLT (if you have it).
            </li>
          </ol>
        </section>

        {/* Internal links */}
        <section style={{ marginTop: 26 }}>
          <h2 style={{ fontSize: 22, margin: "0 0 10px" }}>
            More UK CV examples
          </h2>
          <div style={{ display: "grid", gap: 10 }}>
            <Link href="/cv-examples/order-picker-cv-example-uk">
              Order Picker CV Example (UK)
            </Link>
            <Link href="/cv-examples/construction-labourer-cv-example-uk">
              Construction Labourer CV Example (UK)
            </Link>
            <Link href="/cv-examples/cleaner-cv-example-uk">
              Cleaner CV Example (UK)
            </Link>
            <Link href="/cv-examples-uk">Browse all CV examples</Link>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginTop: 30 }}>
          <h2 style={{ fontSize: 24, margin: "0 0 10px" }}>
            Warehouse Operative CV FAQs
          </h2>
          <div style={{ display: "grid", gap: 12 }}>
            {faqItems.map((f) => (
              <details
                key={f.q}
                style={{
                  border: "1px solid rgba(0,0,0,0.14)",
                  borderRadius: 12,
                  padding: "12px 14px",
                  background: "white",
                }}
              >
                <summary style={{ cursor: "pointer", fontWeight: 700 }}>
                  {f.q}
                </summary>
                <p style={{ margin: "10px 0 0", lineHeight: 1.7 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            marginTop: 30,
            padding: 16,
            borderRadius: 14,
            border: "1px solid rgba(0,0,0,0.14)",
            background: "rgba(0,0,0,0.02)",
          }}
        >
          <h2 style={{ fontSize: 22, margin: "0 0 8px" }}>
            Build your CV in minutes
          </h2>
          <p style={{ margin: "0 0 12px", lineHeight: 1.6 }}>
            Use the builder to generate a recruiter-ready CV with clean UK
            formatting.
          </p>
          <Link
            href="/cv"
            style={{
              display: "inline-block",
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid rgba(0,0,0,0.15)",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Open CV Builder
          </Link>
        </section>
      </main>
    </>
  );
}