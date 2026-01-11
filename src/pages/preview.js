import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import PaywallModal from "../components/PaywallModal";

const STORAGE_KEY = "cvcraft:lastResult";
const ACCESS_KEY = "cvcraft_access";

// Teacher Mode flag (set by cv.js)
const TEACHER_MODE_SESSION_KEY = "cvcraft:teacherMode";
const TEACHER_PIN_SESSION_KEY = "cvcraft:teacherPinHash"; // optional cleanup

// defaults (must match builder)
const DEFAULT_SECTION_ORDER = ["summary", "employment", "qualifications", "skills", "references"];
const DEFAULT_SECTION_CONFIG = {
  summary: true,
  employment: true,
  qualifications: true,
  skills: true,
  references: false,
};

// Pro template meta (must match cv.js)
const TEMPLATE_META = {
  classic: { premium: false, name: "Classic" },
  modern: { premium: true, name: "Modern" },
  compact: { premium: true, name: "Compact" },
};

function safeParse(jsonString) {
  try {
    return jsonString ? JSON.parse(jsonString) : null;
  } catch {
    return null;
  }
}

function docLabel(region) {
  return region === "US" ? "Résumé" : "CV";
}

function regionLocale(region) {
  if (region === "US") return "en-US";
  if (region === "AU") return "en-AU";
  return "en-GB";
}

function sectionLabel(key, region) {
  if (key === "summary") return "Professional Summary";
  if (key === "employment") return "Employment history";
  if (key === "qualifications")
    return region === "US" ? "Education & Certifications" : "Qualifications & Certifications";
  if (key === "skills") return "Skills";
  if (key === "references") return "References";
  return key;
}

function escapeHtml(s) {
  return String(s || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function templateLabel(t) {
  if (t === "modern") return "Modern";
  if (t === "compact") return "Compact";
  return "Classic";
}

function getTemplateUiClasses(t) {
  if (t === "modern") {
    return {
      page: "bg-slate-50 text-slate-900",
      card:
        "rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-200 font-sans border-t-8 border-emerald-500",
      name: "text-4xl font-extrabold tracking-tight text-slate-900",
      sectionTitle: "text-sm uppercase tracking-widest font-bold text-emerald-700",
      body: "text-slate-700 leading-relaxed",
      meta: "text-sm text-slate-600",
      badge: "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200",
      sectionBox: "bg-emerald-50/40 ring-1 ring-emerald-100",
    };
  }

  if (t === "compact") {
    return {
      page: "bg-white text-slate-900",
      card:
        "rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 font-sans text-sm border-l-4 border-indigo-500",
      name: "text-2xl font-extrabold tracking-tight text-slate-900",
      sectionTitle: "text-base font-bold text-indigo-700",
      body: "text-slate-700 leading-snug",
      meta: "text-xs text-slate-600",
      badge: "bg-indigo-50 text-indigo-800 ring-1 ring-indigo-200",
      sectionBox: "bg-indigo-50/40 ring-1 ring-indigo-100",
    };
  }

  return {
    page: "bg-slate-50 text-slate-900",
    card:
      "rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 font-sans border-t-8 border-slate-800",
    name: "text-3xl font-extrabold tracking-tight text-slate-900",
    sectionTitle: "text-lg font-bold text-slate-900",
    body: "text-slate-700 leading-relaxed",
    meta: "text-sm text-slate-600",
    badge: "bg-slate-100 text-slate-900 ring-1 ring-slate-200",
    sectionBox: "bg-slate-50 ring-1 ring-slate-200",
  };
}

// ---- Paid access helpers (Option A) ----
function hasPaidAccessClient() {
  if (typeof window === "undefined") return false;
  try {
    const raw = localStorage.getItem(ACCESS_KEY) || sessionStorage.getItem(ACCESS_KEY);
    const access = JSON.parse(raw || "null");
    const paid = !!access?.paid;
    const expiresAt = Number(access?.expiresAt || 0);
    return paid && expiresAt > 0 && Date.now() < expiresAt;
  } catch {
    return false;
  }
}

function setPaidAccessClient(days = 30) {
  if (typeof window === "undefined") return;
  const expiresAt = Date.now() + days * 24 * 60 * 60 * 1000;
  localStorage.setItem(ACCESS_KEY, JSON.stringify({ paid: true, expiresAt }));
}

/**
 * Extract sections from markdown-ish output.
 * Supports both:
 *  - Your UI-friendly "### Professional Summary / ### Skills"
 *  - API output blocks like "PROFILE", "KEY SKILLS", "EMPLOYMENT HISTORY", etc.
 *
 * SAFETY: Skills are bullet-only (prevents Experience Summary leaking into skills pills).
 */
function extractSections(markdownText) {
  const text = (markdownText || "").trim();

  const out = {
    summary: "",
    experience: [],
    skills: [],
  };

  if (!text) return out;

  const normalized = text
    .replace(/\r\n/g, "\n")
    // Summary variants
    .replace(/\*\*Professional Summary:\*\*/gi, "### Professional Summary")
    .replace(/\*\*Summary:\*\*/gi, "### Professional Summary")
    .replace(/^###\s*Summary\s*$/gim, "### Professional Summary")
    // Experience variants
    .replace(/\*\*Key Experience:\*\*/gi, "### Key Experience")
    .replace(/\*\*Experience:\*\*/gi, "### Key Experience")
    .replace(/^###\s*Experience\s*$/gim, "### Key Experience")
    // Skills variants
    .replace(/\*\*Professional Skills:\*\*/gi, "### Skills")
    .replace(/\*\*Skills:\*\*/gi, "### Skills")
    .replace(/\*\*Core Skills:\*\*/gi, "### Skills")
    .replace(/\*\*Key Skills:\*\*/gi, "### Skills")
    .replace(
      /^###\s*(Professional\s+Skills|Skills|Core\s+Skills|Key\s+Skills)\s*$/gim,
      "### Skills"
    );

  // First try: "###" structured format
  const parts = normalized.split("\n### ").map((p, idx) => (idx === 0 ? p : "### " + p));

  for (const p of parts) {
    const lower = p.toLowerCase();

    if (lower.startsWith("### professional summary")) {
      out.summary = p.replace(/^### professional summary\s*/i, "").trim();
    }

    if (lower.startsWith("### key experience")) {
      const body = p.replace(/^### key experience\s*/i, "").trim();
      const lines = body
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);

      out.experience = lines
        .map((l) => l.replace(/^[•\-*]\s*/, "").trim())
        .filter(Boolean);
    }

    if (lower.startsWith("### skills")) {
      const body = p.replace(/^### skills\s*/i, "").trim();
      const lines = body
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);

      // SAFETY: bullet-first
      const bulletSkills = lines
        .filter((l) => /^[•\-*]\s+/.test(l))
        .map((l) => l.replace(/^[•\-*]\s+/, "").trim())
        .filter(Boolean);

      let skills = bulletSkills;

      // fallback: comma separated
      if (!skills.length) {
        const joined = lines.join(" ");
        if (joined.includes(",")) {
          skills = joined
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);
        } else {
          // last resort: each line
          skills = lines.map((l) => l.replace(/^[•\-*]\s*/, "").trim()).filter(Boolean);
        }
      }

      // de-dupe
      const seen = new Set();
      out.skills = skills.filter((s) => {
        const key = s.toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    }
  }

  // If the structured format didn't give us skills/summary, try API block format:
  // Detect headings like "PROFILE", "KEY SKILLS", "EXPERIENCE SUMMARY", etc.
  const lines = normalized.split("\n").map((l) => l.trim());

  const normalizeHeading = (s) =>
    String(s || "")
      .replace(/[:\-–—]+$/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .toUpperCase();

  const KNOWN_HEADINGS = new Set([
    "PROFILE",
    "PROFESSIONAL SUMMARY",
    "SUMMARY",
    "EXPERIENCE SUMMARY",
    "KEY SKILLS",
    "SKILLS",
    "EMPLOYMENT HISTORY",
    "EDUCATION",
    "QUALIFICATIONS & CERTIFICATIONS",
    "QUALIFICATIONS AND CERTIFICATIONS",
    "ADDITIONAL INFORMATION",
    "REFERENCES",
  ]);

  const isHeadingLine = (l) => {
    const h = normalizeHeading(l);
    return KNOWN_HEADINGS.has(h);
  };

  // Build a map of heading -> lines until next heading
  const sections = {};
  let current = null;

  for (const l of lines) {
    if (!l) continue;

    if (isHeadingLine(l)) {
      current = normalizeHeading(l);
      if (!sections[current]) sections[current] = [];
      continue;
    }

    if (current) sections[current].push(l);
  }

  // ✅ Summary fallback (MERGED): PROFILE + SUMMARY + EXPERIENCE SUMMARY
  if (!out.summary) {
    const merged = []
      .concat(
        sections["PROFESSIONAL SUMMARY"] || [],
        sections["SUMMARY"] || [],
        sections["PROFILE"] || [],
        sections["EXPERIENCE SUMMARY"] || []
      )
      .join("\n")
      .trim();

    if (merged) out.summary = merged.replace(/^[•\-*]\s*/gm, "").trim();
  }

  // Skills fallback (KEY SKILLS / SKILLS) — BULLET ONLY!
  if (!out.skills.length) {
    const skillsBlock = sections["KEY SKILLS"] || sections["SKILLS"] || null;
    if (skillsBlock) {
      const raw = skillsBlock.join("\n");

      // ✅ Only accept BULLET lines as skills (prevents headings/paragraphs leaking in)
      const bulletOnly = raw
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean)
        .filter((l) => /^[•\-*]\s+/.test(l))
        .map((l) => l.replace(/^[•\-*]\s+/, "").trim())
        .filter(Boolean);

      let cleaned = bulletOnly;

      // If no bullets were found, fall back to comma-separated single line (rare)
      if (!cleaned.length) {
        const fallback = raw
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean)
          .join(" ");
        if (fallback.includes(",")) {
          cleaned = fallback
            .split(",")
            .map((x) => x.trim())
            .filter(Boolean);
        }
      }

      // Final de-dupe
      const seen = new Set();
      out.skills = cleaned.filter((s) => {
        const key = s.toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    }
  }

  return out;
}

function getPdfCss(template) {
  if (template === "modern") {
    return `
      @page { size: A4; margin: 12mm; }
      body { margin: 0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; color: #0f172a; background: #ffffff; }
      .page { width: 210mm; box-sizing: border-box; }
      .card { border: 1px solid #e2e8f0; border-top: 8px solid #10b981; border-radius: 18px; padding: 24px 26px; }
      h1 { font-size: 30px; margin: 0; letter-spacing: -0.02em; }
      .meta { margin-top: 10px; font-size: 12.5px; color: #475569; }
      .meta b { color: #334155; }
      hr { border: none; border-top: 1px solid #e2e8f0; margin: 16px 0 18px; }
      h2 { font-size: 11.5px; margin: 0 0 8px; letter-spacing: .14em; text-transform: uppercase; color: #047857; }
      p { margin: 0; font-size: 13px; line-height: 1.55; color: #334155; }
      .list { margin: 6px 0 0; padding-left: 18px; font-size: 13px; line-height: 1.55; color: #334155; }
      .list li { margin: 3px 0; }
      .section { margin-top: 16px; break-inside: avoid; }
      .pillRow { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
      .pill { display: inline-block; padding: 6px 10px; border-radius: 999px; background: #ecfdf5; border: 1px solid #a7f3d0; font-size: 12px; color: #064e3b; }
      .muted { color: #64748b; font-size: 12px; }
      .job { margin-top: 10px; padding-top: 8px; border-top: 1px solid #e2e8f0; }
      .jobTitle { font-weight: 800; font-size: 13.5px; color: #0f172a; }
      .jobMeta { margin-top: 2px; font-size: 12px; color: #64748b; }
      .smallNote { margin-top: 14px; font-size: 11.5px; color: #64748b; }
    `;
  }

  if (template === "compact") {
    return `
      @page { size: A4; margin: 10mm; }
      body { margin: 0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; color: #0f172a; background: #ffffff; }
      .page { width: 210mm; box-sizing: border-box; }
      .card { border: 1px solid #e2e8f0; border-left: 6px solid #6366f1; border-radius: 14px; padding: 18px 20px; }
      h1 { font-size: 24px; margin: 0; letter-spacing: -0.02em; }
      .meta { margin-top: 8px; font-size: 11.5px; color: #475569; }
      .meta b { color: #334155; }
      hr { border: none; border-top: 1px solid #e2e8f0; margin: 12px 0 14px; }
      h2 { font-size: 13px; margin: 0 0 6px; color: #4338ca; }
      p { margin: 0; font-size: 12.3px; line-height: 1.4; color: #334155; }
      .list { margin: 6px 0 0; padding-left: 16px; font-size: 12.3px; line-height: 1.4; color: #334155; }
      .list li { margin: 2px 0; }
      .section { margin-top: 12px; break-inside: avoid; }
      .pillRow { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
      .pill { display: inline-block; padding: 5px 8px; border-radius: 999px; background: #eef2ff; border: 1px solid #c7d2fe; font-size: 11px; color: #3730a3; }
      .muted { color: #64748b; font-size: 11px; }
      .job { margin-top: 8px; padding-top: 6px; border-top: 1px solid #e2e8f0; }
      .jobTitle { font-weight: 800; font-size: 12.8px; color: #0f172a; }
      .jobMeta { margin-top: 2px; font-size: 11px; color: #64748b; }
      .smallNote { margin-top: 10px; font-size: 10.5px; color: #64748b; }
    `;
  }

  return `
    @page { size: A4; margin: 12mm; }
    body { margin: 0; font-family: Arial, sans-serif; color: #0f172a; background: #ffffff; }
    .page { width: 210mm; box-sizing: border-box; }
    .card { border: 1px solid #e2e8f0; border-top: 8px solid #0f172a; border-radius: 16px; padding: 20px 22px; }
    h1 { font-size: 28px; margin: 0; letter-spacing: -0.02em; }
    .meta { margin-top: 10px; font-size: 12.5px; color: #475569; }
    .meta b { color: #334155; }
    hr { border: none; border-top: 1px solid #e2e8f0; margin: 16px 0 18px; }
    h2 { font-size: 14.5px; margin: 0 0 8px; color: #0f172a; }
    p { margin: 0; font-size: 13px; line-height: 1.48; color: #334155; }
    .list { margin: 6px 0 0; padding-left: 18px; font-size: 13px; line-height: 1.48; color: #334155; }
    .list li { margin: 3px 0; }
    .section { margin-top: 16px; break-inside: avoid; }
    .pillRow { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
    .pill { display: inline-block; padding: 6px 10px; border-radius: 999px; background: #f1f5f9; border: 1px solid #e2e8f0; font-size: 12px; color: #0f172a; }
    .muted { color: #64748b; font-size: 12px; }
    .job { margin-top: 10px; padding-top: 8px; border-top: 1px solid #e2e8f0; }
    .jobTitle { font-weight: 700; font-size: 13.5px; color: #0f172a; }
    .jobMeta { margin-top: 2px; font-size: 12px; color: #64748b; }
    .smallNote { margin-top: 14px; font-size: 11.5px; color: #64748b; }
  `;
}

export default function PreviewPage() {
  const [saved, setSaved] = useState(null);

  // Teacher Mode detection (reliable on mount)
  const [teacherMode, setTeacherMode] = useState(false);

  // Student Safe Mode controls
  const [safeModeActive, setSafeModeActive] = useState(false);
  const [showExitNotice, setShowExitNotice] = useState(false);

  // Track when we should clear after print (reliable via afterprint)
  const [pendingClearAfterPrint, setPendingClearAfterPrint] = useState(false);

  // ✅ Paid access (Option A) — replaces legacy proUnlock gating
  const [paidAccess, setPaidAccess] = useState(false);

  // Paywall state (hard gate export)
  const [paywallOpen, setPaywallOpen] = useState(false);

  // UI state
  const [exportBusy, setExportBusy] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Paid access (Option A)
    setPaidAccess(hasPaidAccessClient());

    // Support dev/manual unlock via ?unlocked=true
    const url = new URL(window.location.href);
    if (url.searchParams.get("unlocked") === "true") {
      setPaidAccessClient(30);
      setPaidAccess(true);
      url.searchParams.delete("unlocked");
      window.history.replaceState({}, "", url.toString());
    }

    const tm = sessionStorage.getItem(TEACHER_MODE_SESSION_KEY) === "1";
    setTeacherMode(tm);

    const ss = sessionStorage.getItem(STORAGE_KEY);
    const ls = localStorage.getItem(STORAGE_KEY);

    const parsed = safeParse(ss) || safeParse(ls);
    setSaved(parsed);

    // Safe Mode active if Student Safe Mode OR Teacher Mode
    if (parsed?.input?.studentSafeMode || tm) {
      setSafeModeActive(true);
    }
  }, []);

  const sections = useMemo(() => extractSections(saved?.result), [saved]);

  const input = saved?.input || {};
  const region = input.region || "UK";
  const labelDoc = docLabel(region);

  const generatedAt = saved?.createdAt ? new Date(saved.createdAt) : null;
  const generatedLabel = generatedAt
    ? new Intl.DateTimeFormat(regionLocale(region), {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(generatedAt)
    : "";

  const template = input.template || "classic";
  const ui = getTemplateUiClasses(template);

  const cfg =
    input.sectionConfig && typeof input.sectionConfig === "object"
      ? { ...DEFAULT_SECTION_CONFIG, ...input.sectionConfig }
      : DEFAULT_SECTION_CONFIG;

  const order =
    Array.isArray(input.sectionOrder) && input.sectionOrder.length
      ? (() => {
          const cleaned = input.sectionOrder.filter((k) => DEFAULT_SECTION_ORDER.includes(k));
          for (const k of DEFAULT_SECTION_ORDER) if (!cleaned.includes(k)) cleaned.push(k);
          return cleaned;
        })()
      : DEFAULT_SECTION_ORDER;

  const referencesText = (
    input.referencesText ||
    (region === "US" ? "References available upon request." : "References available on request.")
  ).trim();

  const targetRole = input.role || "";
  const fullName = input.name || "Your Name";
  const email = input.email || "";
  const phone = input.phone || "";
  const location = input.location || "";

  const qualifications = Array.isArray(input.qualifications) ? input.qualifications : [];
  const employmentHistory = Array.isArray(input.employmentHistory) ? input.employmentHistory : [];

  const fallbackSkills = Array.isArray(input.skills) ? input.skills : [];
  const skillsForDisplay =
    Array.isArray(sections.skills) && sections.skills.length ? sections.skills : fallbackSkills;

  // ---- Paid access gating (hard gate export on premium templates) ----
  const templateIsPremium = !!TEMPLATE_META[template]?.premium;
  const exportLocked = !teacherMode && templateIsPremium && !paidAccess;

  const requestExportUnlock = () => {
    // Teacher Mode never paywalls (classroom safe)
    if (teacherMode) return false;

    if (exportLocked) {
      setPaywallOpen(true);
      return true; // blocked
    }
    return false; // allowed
  };

  // Clear storage (and teacher flag), show notice first
  const clearStoredDataAndShowNotice = () => {
    if (typeof window === "undefined") return;

    setShowExitNotice(true);

    setTimeout(() => {
      try {
        localStorage.removeItem(STORAGE_KEY);
        sessionStorage.removeItem(STORAGE_KEY);

        // ✅ Important: also remove Teacher Mode session flags so the next student isn't stuck
        sessionStorage.removeItem(TEACHER_MODE_SESSION_KEY);

        // Optional: also clear the teacher pin hash (session only anyway)
        sessionStorage.removeItem(TEACHER_PIN_SESSION_KEY);
      } catch {}
    }, 50);
  };

  // Clear after print using afterprint (more reliable than timeouts)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onAfterPrint = () => {
      if (pendingClearAfterPrint && safeModeActive) {
        setPendingClearAfterPrint(false);
        clearStoredDataAndShowNotice();
      }
    };

    window.addEventListener("afterprint", onAfterPrint);
    return () => window.removeEventListener("afterprint", onAfterPrint);
  }, [pendingClearAfterPrint, safeModeActive]);

  /**
   * Build a clean, export-only HTML document (no UI labels like Template/Region/Tip)
   * This is used for server PDF generation (/api/export/pdf)
   */
  const buildExportHtml = () => {
    const css = getPdfCss(template);

    const contactLine =
      email || phone || location
        ? `${email ? escapeHtml(email) : ""}${email && (phone || location) ? " · " : ""}${
            phone ? escapeHtml(phone) : ""
          }${phone && location ? " · " : ""}${location ? escapeHtml(location) : ""}`
        : "";

    const summaryHtml =
      cfg.summary && (sections.summary || "").trim()
        ? `<div class="section">
             <h2>${escapeHtml(sectionLabel("summary", region))}</h2>
             <p>${escapeHtml(sections.summary).replaceAll("\n", "<br/>")}</p>
           </div>`
        : "";

    const jobsHtml =
      cfg.employment && employmentHistory.length
        ? `<div class="section">
             <h2>${escapeHtml(sectionLabel("employment", region))}</h2>
             ${employmentHistory
               .map((j) => {
                 const titleLine = [j.title, j.company].filter(Boolean).join(" — ");
                 const dateLine = [j.location, [j.start, j.end].filter(Boolean).join(" – ")]
                   .filter(Boolean)
                   .join(" | ");
                 const bullets = Array.isArray(j.bullets) ? j.bullets : [];
                 return `
                   <div class="job">
                     <div class="jobTitle">${escapeHtml(titleLine || "Role")}</div>
                     ${dateLine ? `<div class="jobMeta">${escapeHtml(dateLine)}</div>` : ``}
                     ${
                       bullets.length
                         ? `<ul class="list">${bullets
                             .map((b) => `<li>${escapeHtml(b)}</li>`)
                             .join("")}</ul>`
                         : ``
                     }
                   </div>
                 `;
               })
               .join("")}
           </div>`
        : "";

    const qualsHeading = escapeHtml(sectionLabel("qualifications", region));
    const qualsHtml =
      cfg.qualifications && qualifications.length
        ? `<div class="section">
             <h2>${qualsHeading}</h2>
             <ul class="list">
               ${qualifications
                 .map((q) => {
                   const left = [q.title, q.provider].filter(Boolean).join(" — ");
                   const right = [q.year, q.grade].filter(Boolean).join(" · ");
                   return `<li>${escapeHtml(left)}${
                     right ? ` <span class="muted">(${escapeHtml(right)})</span>` : ""
                   }</li>`;
                 })
                 .join("")}
             </ul>
           </div>`
        : "";

    const skillsHtml =
      cfg.skills && skillsForDisplay.length
        ? `<div class="section">
             <h2>${escapeHtml(sectionLabel("skills", region))}</h2>
             <div class="pillRow">
               ${skillsForDisplay.map((x) => `<span class="pill">${escapeHtml(x)}</span>`).join("")}
             </div>
           </div>`
        : "";

    const refsHtml =
      cfg.references && referencesText
        ? `<div class="section">
             <h2>${escapeHtml(sectionLabel("references", region))}</h2>
             <p>${escapeHtml(referencesText).replaceAll("\n", "<br/>")}</p>
           </div>`
        : "";

    const sectionMap = {
      summary: summaryHtml,
      employment: jobsHtml,
      qualifications: qualsHtml,
      skills: skillsHtml,
      references: refsHtml,
    };

    const assembledSections = order.map((k) => sectionMap[k] || "").filter(Boolean).join("\n");

    // ✅ Clean export: name + contacts + generated date + content ONLY
    return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(fullName)} - ${escapeHtml(labelDoc)}</title>
  <style>${css}</style>
</head>
<body>
  <div class="page">
    <div class="card">
      <h1>${escapeHtml(fullName)}</h1>

      <div class="meta">
        ${contactLine ? `<div>${contactLine}</div>` : ""}
        ${targetRole ? `<div><b>Target Role:</b> ${escapeHtml(targetRole)}</div>` : ""}
        ${generatedLabel ? `<div><b>Generated:</b> ${escapeHtml(generatedLabel)}</div>` : ""}
      </div>

      <hr />

      ${assembledSections}
    </div>
  </div>
</body>
</html>`;
  };

  const onPrint = () => {
    // Hard gate print export when template is premium and access not paid
    if (requestExportUnlock()) return;

    if (safeModeActive) setPendingClearAfterPrint(true);

    // ✅ Print ONLY the CV “paper” on this page (CSS below enforces this)
    window.print();
  };

  const downloadPdf = async () => {
    // Hard gate download export when template is premium and access not paid
    if (requestExportUnlock()) return;

    if (!saved) {
      alert(`No ${labelDoc} data found yet. Go back and generate one.`);
      return;
    }

    if (exportBusy) return;
    setExportBusy(true);

    const filename = region === "US" ? "CVCraft-Resume.pdf" : "CVCraft-CV.pdf";
    const html = buildExportHtml();

    try {
      const res = await fetch("/api/export/pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ html, filename }),
      });

      if (!res.ok) {
        let detail = "";
        try {
          const ct = res.headers.get("content-type") || "";
          if (ct.includes("application/json")) {
            const j = await res.json();
            detail = String(j?.message || j?.error || "");
          }
        } catch {}

        console.warn("PDF export failed:", res.status, detail);

        alert(
          [
            "PDF download failed on this device.",
            "Use “Print / Save PDF” instead (choose “Save as PDF”).",
            detail ? "" : "",
            detail ? "Details: " + detail : "",
          ]
            .filter(Boolean)
            .join("\n")
        );
        return;
      }

      const blob = await res.blob();

      // ✅ Trigger a download WITHOUT opening any tabs/windows
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();

      // Give the browser a moment before revoking the URL
      setTimeout(() => URL.revokeObjectURL(url), 1200);

      if (safeModeActive) {
        // Ensure download has started before wiping
        setTimeout(() => clearStoredDataAndShowNotice(), 250);
      }
    } catch (e) {
      console.warn("PDF export request crashed:", e);
      alert("PDF download failed. Use “Print / Save PDF” instead (choose “Save as PDF”).");
    } finally {
      setExportBusy(false);
    }
  };

  const renderSection = (key) => {
    if (!cfg[key]) return null;

    if (key === "summary") {
      const content = (sections.summary || "").trim();
      if (!content) return null;
      return (
        <section>
          <h2 className={ui.sectionTitle}>{sectionLabel("summary", region)}</h2>
          <p className={`mt-2 whitespace-pre-line ${ui.body}`}>{content}</p>
        </section>
      );
    }

    if (key === "employment") {
      if (!employmentHistory.length) return null;
      return (
        <section>
          <h2 className={ui.sectionTitle}>{sectionLabel("employment", region)}</h2>
          <div className="mt-2 space-y-4">
            {employmentHistory.map((j, idx) => {
              const titleLine = [j.title, j.company].filter(Boolean).join(" — ");
              const dateLine = [j.location, [j.start, j.end].filter(Boolean).join(" – ")]
                .filter(Boolean)
                .join(" | ");
              const bullets = Array.isArray(j.bullets) ? j.bullets : [];
              return (
                <div key={idx} className={`rounded-xl p-4 ${ui.sectionBox}`}>
                  <div className="font-semibold text-slate-900">{titleLine || "Role"}</div>
                  {dateLine ? <div className={`mt-1 ${ui.meta}`}>{dateLine}</div> : null}
                  {bullets.length ? (
                    <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
                      {bullets.map((b, bi) => (
                        <li key={bi}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>
      );
    }

    if (key === "qualifications") {
      if (!qualifications.length) return null;
      return (
        <section>
          <h2 className={ui.sectionTitle}>{sectionLabel("qualifications", region)}</h2>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
            {qualifications.map((q, idx) => {
              const left = [q.title, q.provider].filter(Boolean).join(" — ");
              const right = [q.year, q.grade].filter(Boolean).join(" · ");
              return (
                <li key={idx}>
                  {left}
                  {right ? <span className="text-slate-500"> ({right})</span> : null}
                </li>
              );
            })}
          </ul>
        </section>
      );
    }

    if (key === "skills") {
      if (!skillsForDisplay.length) return null;
      return (
        <section>
          <h2 className={ui.sectionTitle}>{sectionLabel("skills", region)}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {skillsForDisplay.map((s, idx) => (
              <span
                key={idx}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-800 ring-1 ring-slate-200"
              >
                {s}
              </span>
            ))}
          </div>
        </section>
      );
    }

    if (key === "references") {
      const txt = (referencesText || "").trim();
      if (!txt) return null;
      return (
        <section>
          <h2 className={ui.sectionTitle}>{sectionLabel("references", region)}</h2>
          <p className={`mt-2 whitespace-pre-line ${ui.body}`}>{txt}</p>
        </section>
      );
    }

    return null;
  };

  return (
    <div className={`min-h-screen px-6 py-10 ${ui.page}`}>
      {/* Student Safe Mode exit notice */}
      {showExitNotice ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900 px-6">
          <div className="max-w-lg rounded-2xl bg-white p-8 text-center shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Before you leave this computer</h2>

            <p className="text-slate-700 mb-6">
              Your {labelDoc} has been downloaded and all personal information has been removed from this device.
            </p>

            <p className="text-sm text-slate-500 mb-6">
              You may now safely close this window or return the computer to the next student.
            </p>

            <button
              onClick={() => (window.location.href = "/")}
              className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800"
            >
              Return to start
            </button>
          </div>
        </div>
      ) : null}

      <div className="mx-auto max-w-4xl">
        {/* ✅ Actions row is explicitly non-print */}
        <div className="mb-6 flex items-center justify-between gap-3 print:hidden">
          <Link href="/cv" className="text-sm text-slate-600 hover:text-slate-900">
            ← Back to builder
          </Link>

          <div className="flex gap-2">
            <button
              onClick={downloadPdf}
              disabled={exportLocked || exportBusy}
              className={`rounded-lg px-4 py-2 text-sm font-semibold text-white transition ${
                exportLocked || exportBusy
                  ? "opacity-60 cursor-not-allowed bg-emerald-600"
                  : "bg-emerald-600 hover:bg-emerald-500"
              }`}
              title="Downloads a clean PDF (recommended)"
            >
              {exportBusy ? "Preparing…" : `Download PDF${exportLocked ? " 🔒" : ""}`}
            </button>

            <button
              onClick={onPrint}
              disabled={exportLocked}
              className={`rounded-lg px-4 py-2 text-sm font-semibold text-white transition ${
                exportLocked ? "opacity-60 cursor-not-allowed bg-slate-900" : "bg-slate-900 hover:bg-slate-800"
              }`}
              title="Uses browser print dialog"
            >
              Print / Save PDF{exportLocked ? " 🔒" : ""}
            </button>
          </div>
        </div>

        {/* ✅ This is the ONLY thing that should appear in browser print */}
        <div id="cv-print-root" className={ui.card}>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className={ui.name}>{fullName}</h1>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
                {email && <span>{email}</span>}
                {phone && <span>{phone}</span>}
                {location && <span>{location}</span>}
              </div>
            </div>

            {/* Badge stays in print (it’s part of the CV styling) */}
            <div className={`rounded-xl px-4 py-3 ${ui.badge}`}>
              <div className="text-xs font-semibold uppercase tracking-wider">Template</div>
              <div className="text-sm font-bold">{templateLabel(template)}</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wider">Region</div>
              <div className="text-sm font-bold">{region}</div>
            </div>
          </div>

          <div className="mt-4 space-y-1 text-sm text-slate-600">
            <div>
              <span className="font-semibold text-slate-700">Target Role:</span>{" "}
              {targetRole ? targetRole : "—"}
            </div>
            <div>
              <span className="font-semibold text-slate-700">Generated:</span>{" "}
              {generatedLabel ? generatedLabel : "—"}
            </div>

            {/* ✅ Notices should NOT print */}
            {safeModeActive ? (
              <div className="mt-2 rounded-xl bg-amber-50 px-3 py-2 text-amber-900 ring-1 ring-amber-200 print:hidden">
                {teacherMode
                  ? "Teacher Mode is enabled — data will be cleared after download/print."
                  : "Student Safe Mode is enabled — data will be cleared after download/print."}
              </div>
            ) : null}

            {exportLocked ? (
              <div className="mt-2 rounded-xl bg-slate-100 px-3 py-2 text-slate-800 ring-1 ring-slate-200 print:hidden">
                Export is locked for <b>{templateLabel(template)}</b>. Unlock Pro to download/print.
              </div>
            ) : null}
          </div>

          <hr className="my-6 border-slate-200" />

          {!saved ? (
            <div className="print:hidden">
              <h2 className="text-xl font-bold">{labelDoc} Preview</h2>
              <p className="mt-2 text-slate-600">
                No {labelDoc} data found yet. Go back and generate one.
              </p>

              <div className="mt-6">
                <Link
                  href="/cv"
                  className="inline-block rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Back to builder
                </Link>
              </div>
            </div>
          ) : (
            <div className={`${template === "compact" ? "space-y-6" : "space-y-8"}`}>
              {order.map((key) => (
                <div key={key}>{renderSection(key)}</div>
              ))}

              {/* ✅ Tip should never print */}
              <p className="text-sm text-slate-500 print:hidden">
                Tip: “Download PDF” uses your chosen section order and toggles.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Hard-gate paywall modal for export */}
      <PaywallModal
        open={paywallOpen}
        reason="export"
        onClose={() => setPaywallOpen(false)}
        onPreviewAnyway={() => {
          // Not used for export, but modal component expects it
          setPaywallOpen(false);
        }}
        onUnlockClick={() => {
          const link = process.env.NEXT_PUBLIC_STRIPE_CV_PRO_LINK;

          // If link is missing (dev), simulate a 30-day access pass
          if (!link) {
            console.warn("Stripe link missing — simulating access pass for dev");
            setPaidAccessClient(30);
            setPaidAccess(true);
            setPaywallOpen(false);
            return;
          }

          window.location.href = link;
        }}
      />

      <style jsx global>{`
        /* ------------------------------------------------------------
           PRINT FIX (CRITICAL):
           - Only print #cv-print-root (no back link, no buttons, no tips)
           ------------------------------------------------------------ */
        @media print {
          html,
          body {
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          /* Hide everything by default */
          body * {
            visibility: hidden !important;
          }

          /* Show only the CV print root */
          #cv-print-root,
          #cv-print-root * {
            visibility: visible !important;
          }

          /* Position the CV at the top-left and use full width */
          #cv-print-root {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            box-shadow: none !important;
          }

          /* Remove any shadows/rings in print (cleaner) */
          .shadow-sm,
          [class*="shadow"] {
            box-shadow: none !important;
          }

          /* Make ring look like border */
          .ring-1 {
            border: 1px solid #e5e7eb !important;
          }

          /* Don’t print links as URLs in some browsers */
          a[href]::after {
            content: "" !important;
          }
        }
      `}</style>
    </div>
  );
}
