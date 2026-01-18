// src/lib/templates.ts
// Single source of truth for all CV templates

export type TemplateKey =
  | "classic"
  | "modern"
  | "compact"
  | "executive"
  | "minimal"
  | "two_column"
  | "technical"
  | "graduate"
  | "academic"
  | "bold";

export type TemplateMeta = {
  name: string;
  /**
   * Whether this template requires paid access to EXPORT (PDF/Print).
   * Your product decision: no free CV templates → keep this true for all templates.
   */
  paid: boolean;
};

export const TEMPLATE_META: Record<TemplateKey, TemplateMeta> = {
  classic: { name: "Classic", paid: true },
  modern: { name: "Modern", paid: true },
  compact: { name: "Compact", paid: true },
  executive: { name: "Executive", paid: true },
  minimal: { name: "Minimal", paid: true },
  two_column: { name: "Two-Column", paid: true },
  technical: { name: "Technical", paid: true },
  graduate: { name: "Graduate", paid: true },
  academic: { name: "Academic", paid: true },
  bold: { name: "Bold", paid: true },
};

export const TEMPLATE_ORDER: TemplateKey[] = [
  "classic",
  "modern",
  "compact",
  "executive",
  "minimal",
  "two_column",
  "technical",
  "graduate",
  "academic",
  "bold",
];

export function isTemplateKey(t: unknown): t is TemplateKey {
  return typeof t === "string" && (t as TemplateKey) in TEMPLATE_META;
}

export function normalizeTemplateKey(t: unknown): TemplateKey {
  return isTemplateKey(t) ? t : "classic";
}

export function templateLabel(t: TemplateKey | string) {
  const key = normalizeTemplateKey(t);
  return TEMPLATE_META[key].name;
}

export function isPaidTemplate(t: TemplateKey | string) {
  const key = normalizeTemplateKey(t);
  return !!TEMPLATE_META[key].paid;
}

export type TemplateUiClasses = {
  page: string;
  card: string;
  name: string;
  sectionTitle: string;
  body: string;
  meta: string;
  badge: string;
  sectionBox: string;
  skillPill: string;
};

/**
 * UI classes for on-screen preview / print
 * (Tailwind class bundles)
 *
 * NOTE: These classes style the "paper" look in /preview and keep templates visually distinct
 * without breaking the PDF export HTML pipeline.
 */
export function getTemplateUiClasses(t: TemplateKey | string): TemplateUiClasses {
  const key = normalizeTemplateKey(t);

  const base: TemplateUiClasses = {
    page: "bg-slate-50 text-slate-900",
    card:
      "rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 font-sans border-t-8 border-slate-800",
    name: "text-3xl font-extrabold tracking-tight text-slate-900",
    sectionTitle: "text-lg font-bold text-slate-900",
    body: "text-slate-700 leading-relaxed",
    meta: "text-sm text-slate-600",
    badge: "bg-slate-100 text-slate-900 ring-1 ring-slate-200",
    sectionBox: "bg-slate-50 ring-1 ring-slate-200",
    skillPill:
      "rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-900 ring-1 ring-slate-200",
  };

  switch (key) {
    case "modern":
      return {
        ...base,
        card:
          "rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 font-sans border-l-8 border-slate-900",
        name: "text-3xl font-extrabold tracking-tight text-slate-900",
        sectionTitle: "text-base font-extrabold uppercase tracking-wide text-slate-900",
        badge: "bg-slate-900 text-white ring-1 ring-slate-900/10",
        skillPill:
          "rounded-full bg-slate-900 px-3 py-1 text-sm text-white ring-1 ring-slate-900/10",
      };

    case "compact":
      return {
        ...base,
        card:
          "rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 font-sans border-t-8 border-slate-700",
        name: "text-2xl font-extrabold tracking-tight text-slate-900",
        sectionTitle: "text-base font-bold text-slate-900",
        body: "text-slate-700 leading-snug",
        meta: "text-xs text-slate-600",
        skillPill:
          "rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-900 ring-1 ring-slate-200",
      };

    case "executive":
      return {
        ...base,
        card:
          "rounded-2xl bg-white p-9 shadow-sm ring-1 ring-slate-200 font-serif border-t-8 border-slate-900",
        name: "text-3xl font-semibold tracking-tight text-slate-900",
        sectionTitle: "text-lg font-semibold text-slate-900",
        body: "text-slate-700 leading-relaxed",
        meta: "text-sm text-slate-600",
        badge: "bg-slate-100 text-slate-900 ring-1 ring-slate-200",
      };

    case "minimal":
      return {
        ...base,
        card:
          "rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 font-sans border-t-4 border-slate-200",
        name: "text-3xl font-extrabold tracking-tight text-slate-900",
        sectionTitle: "text-sm font-extrabold uppercase tracking-widest text-slate-800",
        body: "text-slate-700 leading-relaxed",
        meta: "text-sm text-slate-600",
        sectionBox: "bg-white ring-0",
      };

    case "two_column":
      return {
        ...base,
        card:
          "rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 font-sans border-t-8 border-slate-900",
        sectionTitle: "text-base font-extrabold text-slate-900",
        sectionBox: "bg-white ring-1 ring-slate-200",
      };

    case "technical":
      return {
        ...base,
        card:
          "rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 font-mono border-t-8 border-slate-900",
        name: "text-2xl font-extrabold tracking-tight text-slate-900",
        sectionTitle: "text-base font-bold text-slate-900",
        body: "text-slate-700 leading-relaxed",
        meta: "text-xs text-slate-600",
        skillPill:
          "rounded-full bg-slate-900 px-3 py-1 text-xs text-white ring-1 ring-slate-900/10",
      };

    case "graduate":
      return {
        ...base,
        card:
          "rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 font-sans border-t-8 border-slate-800",
        sectionTitle: "text-base font-extrabold text-slate-900",
        badge: "bg-slate-100 text-slate-900 ring-1 ring-slate-200",
      };

    case "academic":
      return {
        ...base,
        card:
          "rounded-2xl bg-white p-9 shadow-sm ring-1 ring-slate-200 font-serif border-t-8 border-slate-900",
        sectionTitle: "text-lg font-semibold text-slate-900",
        body: "text-slate-700 leading-relaxed",
        meta: "text-sm text-slate-600",
      };

    case "bold":
      return {
        ...base,
        card:
          "rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 font-sans border-t-8 border-black",
        name: "text-4xl font-black tracking-tight text-slate-900",
        sectionTitle: "text-base font-black uppercase tracking-wide text-slate-900",
        badge: "bg-black text-white ring-1 ring-black/10",
        skillPill:
          "rounded-full bg-black px-3 py-1 text-sm text-white ring-1 ring-black/10",
      };

    case "classic":
    default:
      return base;
  }
}

/**
 * CSS for server-side PDF generation
 *
 * This is used when you POST `{ html }` to `/api/export/pdf`.
 * Keep it plain + predictable for Chromium/PDF rendering.
 */
export function getPdfCss(t: TemplateKey | string) {
  const key = normalizeTemplateKey(t);

  const base = `
@page { size: A4; margin: 12mm; }
* { box-sizing: border-box; }
html, body { height: 100%; }
body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: #0f172a;
  background: #ffffff;
}
#cv-paper {
  width: 100%;
  background: #ffffff;
}
h1, h2, h3 { margin: 0; }
a { color: inherit; text-decoration: none; }
.section { margin-top: 14px; }
.section-title {
  font-size: 14px;
  font-weight: 700;
  margin: 0 0 6px 0;
}
.meta { font-size: 12px; color: #475569; }
.body { font-size: 13px; line-height: 1.45; color: #334155; }
.pill {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  border: 1px solid #e2e8f0;
  background: #f1f5f9;
  color: #0f172a;
  margin: 3px 6px 0 0;
}
.hr {
  height: 1px;
  background: #e2e8f0;
  margin: 10px 0;
}
`;

  switch (key) {
    case "executive":
    case "academic":
      return (
        base +
        `
body { font-family: Georgia, "Times New Roman", Times, serif; }
.section-title { font-weight: 600; font-size: 15px; }
.body { font-size: 13px; line-height: 1.5; }
`
      );

    case "technical":
      return (
        base +
        `
body { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
.section-title { font-size: 13px; }
.meta { font-size: 11px; }
.pill { background: #0f172a; color: #ffffff; border-color: #0f172a; }
`
      );

    case "modern":
      return (
        base +
        `
.section-title { text-transform: uppercase; letter-spacing: .06em; font-size: 12px; font-weight: 800; }
.pill { background: #0f172a; color: #ffffff; border-color: #0f172a; }
`
      );

    case "compact":
      return (
        base +
        `
@page { size: A4; margin: 10mm; }
.body { font-size: 12.5px; line-height: 1.35; }
.meta { font-size: 11px; }
.section { margin-top: 10px; }
`
      );

    case "minimal":
      return (
        base +
        `
.section-title { text-transform: uppercase; letter-spacing: .12em; font-size: 11px; }
.pill { background: #ffffff; color: #0f172a; border-color: #e2e8f0; }
`
      );

    case "bold":
      return (
        base +
        `
.section-title { text-transform: uppercase; letter-spacing: .05em; font-weight: 900; }
.pill { background: #000000; color: #ffffff; border-color: #000000; }
`
      );

    case "two_column":
      // You can apply layout in your HTML structure; CSS here just supports columns if you use them.
      return (
        base +
        `
.columns { display: flex; gap: 14px; }
.col-left { width: 34%; }
.col-right { width: 66%; }
`
      );

    case "graduate":
    case "classic":
    default:
      return base;
  }
}
