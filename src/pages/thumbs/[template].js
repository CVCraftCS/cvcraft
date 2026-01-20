import React from "react";
import {
  TEMPLATE_META,
  normalizeTemplateKey,
  getTemplateUiClasses,
} from "../../lib/templates";

const SAMPLE = {
  name: "Alex Smith",
  email: "alex@email.com",
  phone: "07xxx xxx xxx",
  location: "Rotherham, UK",
  role: "Warehouse Supervisor",
  summary:
    "Reliable, safety-focused supervisor with experience leading small teams, improving picking accuracy and keeping targets on track.",
  skills: [
    "Team leadership",
    "Stock control",
    "Forklift (RTITB)",
    "WMS systems",
    "Health & Safety",
  ],
  employment: [
    {
      title: "Warehouse Team Lead",
      company: "LogiCo",
      location: "Sheffield",
      start: "2022",
      end: "Present",
      bullets: [
        "Led a team of 6 across pick/pack and goods-in",
        "Improved pick accuracy by 12% with QC checks",
        "Trained new starters and supported rota planning",
      ],
    },
  ],
  qualifications: [
    {
      title: "Forklift Licence (RTITB)",
      provider: "RTITB",
      year: "2023",
    },
    {
      title: "NVQ Level 2 – Warehousing",
      provider: "Local College",
      year: "2021",
    },
  ],
};

function Section({ title, children }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="hr" />
      {children}
    </section>
  );
}

export default function TemplateThumbPage({ templateKey }) {
  const ui = getTemplateUiClasses(templateKey);

  return (
    <div className={`min-h-screen p-10 ${ui.page}`}>
      <div
        id="cv-paper"
        style={{ width: 900 }}
        className={ui.card}
      >
        <header className="flex items-start justify-between gap-6">
          <div>
            <div className={ui.name}>{SAMPLE.name}</div>
            <div className={`${ui.meta} mt-2`}>
              {SAMPLE.location} • {SAMPLE.phone} • {SAMPLE.email}
            </div>
            <div className={`${ui.meta} mt-1 font-semibold`}>
              {SAMPLE.role}
            </div>
          </div>

          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${ui.badge}`}>
            {TEMPLATE_META[templateKey]?.name}
          </div>
        </header>

        <Section title="Professional Summary">
          <p className={ui.body}>{SAMPLE.summary}</p>
        </Section>

        <Section title="Skills">
          <div className="flex flex-wrap gap-2">
            {SAMPLE.skills.map((s) => (
              <span key={s} className={ui.skillPill}>
                {s}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Employment History">
          {SAMPLE.employment.map((j, idx) => (
            <div key={idx} className="section">
              <div className="flex items-baseline justify-between">
                <div className="font-semibold text-slate-900">
                  {j.title} — {j.company}
                </div>
                <div className="meta">
                  {j.start} – {j.end}
                </div>
              </div>
              <div className="meta">{j.location}</div>
              <ul className={`mt-2 ${ui.body}`} style={{ paddingLeft: 18 }}>
                {j.bullets.map((b, i) => (
                  <li key={i} style={{ listStyle: "disc" }}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section title="Qualifications">
          {SAMPLE.qualifications.map((q, i) => (
            <div key={i} className="flex items-baseline justify-between">
              <div>
                <span className="font-semibold text-slate-900">
                  {q.title}
                </span>
                <span className="meta"> • {q.provider}</span>
              </div>
              <div className="meta">{q.year}</div>
            </div>
          ))}
        </Section>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const raw = ctx.params?.template;
  const key = normalizeTemplateKey(raw);
  return { props: { templateKey: key } };
}
