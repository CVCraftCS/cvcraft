// src/pages/preview.js
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import PaywallModal from "../components/PaywallModal";

// ✅ Single source of truth for template keys + labels
import {
  normalizeTemplateKey,
  templateLabel as templateLabelFromLib,
} from "../lib/templates";

// 🌍 Languages (Phase 1 wired; Phase 2 generation handled server-side)
import { LANGUAGES, normalizeLangKey } from "../lib/languages";

const STORAGE_KEY = "cvcraft:lastResult";

// Teacher Mode flag (set by cv.js)
const TEACHER_MODE_SESSION_KEY = "cvcraft:teacherMode";
const TEACHER_PIN_SESSION_KEY = "cvcraft:teacherPinHash"; // optional cleanup
const SCHOOL_ACCESS_SESSION_KEY = "cvcraft:schoolAccess"; // optional cleanup

// Pricing + access (single 30-day pass model)
const ACCESS_PRICE_LABEL = "£9.99";
const PRICING_PATH = "/pricing";

// defaults (must match builder)
const DEFAULT_SECTION_ORDER = [
  "summary",
  "employment",
  "qualifications",
  "skills",
  "references",
];
const DEFAULT_SECTION_CONFIG = {
  summary: true,
  employment: true,
  qualifications: true,
  skills: true,
  references: false,
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

// Locale for dates etc
function regionLocale(region) {
  if (region === "US") return "en-US";
  if (region === "AU") return "en-AU";
  return "en-GB";
}

// ✅ Human-friendly region names (prettier than "UK/US/AU")
function regionDisplay(region) {
  const r = String(region || "").toUpperCase();
  if (r === "UK") return "United Kingdom";
  if (r === "US") return "United States";
  if (r === "AU") return "Australia";
  return region || "";
}

// Small i18n getter: supports pack.ui.<key> or pack.<key>
function t(L, key, fallback) {
  const v = L?.ui?.[key] ?? L?.[key];
  return typeof v === "string" && v.trim() ? v : fallback;
}

// Section label can come from language pack, otherwise region-aware fallback (match cv.js)
function sectionLabel(key, region, L) {
  const fromPack = L?.sections?.[key] ?? L?.sectionLabels?.[key];
  if (typeof fromPack === "string" && fromPack.trim()) return fromPack.trim();

  const summaryLabel =
    L?.summaryLabel ||
    (region === "UK" ? "Personal Statement" : "Professional Summary");

  if (key === "summary") return summaryLabel;
  if (key === "employment") return "Employment history";
  if (key === "qualifications")
    return region === "US"
      ? "Education & Certifications"
      : "Qualifications & Certifications";
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

/**
 * ✅ Template label from src/lib/templates.ts
 * (keeps everything consistent with cv.js and any saved payloads)
 */
function templateLabel(tpl) {
  return templateLabelFromLib(tpl);
}

function getTemplateUiClasses(t) {
  // ✅ Keep it simple: 10 templates = variations of spacing, borders, typography, and accents.
  // All remain recruiter-safe and printable.

  if (t === "modern") {
    return {
      page: "bg-slate-50 text-slate-900",
      card:
        "rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-200 font-sans border-t-8 border-emerald-500",
      name: "text-4xl font-extrabold tracking-tight text-slate-900",
      sectionTitle:
        "text-sm uppercase tracking-widest font-bold text-emerald-700",
      body: "text-slate-700 leading-relaxed",
      meta: "text-sm text-slate-600",
      badge: "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200",
      sectionBox: "bg-emerald-50/40 ring-1 ring-emerald-100",
      skillPill:
        "rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-900 ring-1 ring-emerald-200",
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
      skillPill:
        "rounded-full bg-indigo-50 px-3 py-1 text-xs text-indigo-900 ring-1 ring-indigo-200",
    };
  }

  if (t === "executive") {
    return {
      page: "bg-slate-50 text-slate-900",
      card:
        "rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-200 font-sans border-t-8 border-slate-900",
      name: "text-4xl font-black tracking-tight text-slate-900",
      sectionTitle:
        "text-sm uppercase tracking-widest font-bold text-slate-900",
      body: "text-slate-700 leading-relaxed",
      meta: "text-sm text-slate-600",
      badge: "bg-slate-100 text-slate-900 ring-1 ring-slate-200",
      sectionBox: "bg-slate-50 ring-1 ring-slate-200",
      skillPill:
        "rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-900 ring-1 ring-slate-200",
    };
  }

  if (t === "minimal") {
    return {
      page: "bg-white text-slate-900",
      card: "bg-white p-8 ring-1 ring-slate-200 font-sans",
      name: "text-3xl font-bold tracking-tight text-slate-900",
      sectionTitle:
        "text-sm font-bold uppercase tracking-widest text-slate-700",
      body: "text-slate-800 leading-relaxed",
      meta: "text-sm text-slate-600",
      badge: "bg-slate-50 text-slate-800 ring-1 ring-slate-200",
      sectionBox: "bg-white",
      skillPill:
        "rounded-full bg-white px-3 py-1 text-sm text-slate-900 ring-1 ring-slate-200",
    };
  }

  if (t === "two_column") {
    return {
      page: "bg-slate-50 text-slate-900",
      card:
        "rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-200 font-sans border-t-8 border-blue-700",
      name: "text-4xl font-extrabold tracking-tight text-slate-900",
      sectionTitle:
        "text-sm uppercase tracking-widest font-bold text-blue-800",
      body: "text-slate-700 leading-relaxed",
      meta: "text-sm text-slate-600",
      badge: "bg-blue-50 text-blue-900 ring-1 ring-blue-200",
      sectionBox: "bg-blue-50/30 ring-1 ring-blue-100",
      skillPill:
        "rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-900 ring-1 ring-blue-200",
    };
  }

  if (t === "technical") {
    return {
      page: "bg-slate-50 text-slate-900",
      card:
        "rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-200 font-sans border-t-8 border-cyan-600",
      name: "text-4xl font-extrabold tracking-tight text-slate-900",
      sectionTitle:
        "text-sm uppercase tracking-widest font-bold text-cyan-700",
      body: "text-slate-700 leading-relaxed",
      meta: "text-sm text-slate-600",
      badge: "bg-cyan-50 text-cyan-900 ring-1 ring-cyan-200",
      sectionBox: "bg-cyan-50/30 ring-1 ring-cyan-100",
      skillPill:
        "rounded-full bg-cyan-50 px-3 py-1 text-sm text-cyan-900 ring-1 ring-cyan-200",
    };
  }

  if (t === "graduate") {
    return {
      page: "bg-slate-50 text-slate-900",
      card:
        "rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-200 font-sans border-t-8 border-rose-500",
      name: "text-4xl font-extrabold tracking-tight text-slate-900",
      sectionTitle:
        "text-sm uppercase tracking-widest font-bold text-rose-700",
      body: "text-slate-700 leading-relaxed",
      meta: "text-sm text-slate-600",
      badge: "bg-rose-50 text-rose-900 ring-1 ring-rose-200",
      sectionBox: "bg-rose-50/30 ring-1 ring-rose-100",
      skillPill:
        "rounded-full bg-rose-50 px-3 py-1 text-sm text-rose-900 ring-1 ring-rose-200",
    };
  }

  if (t === "academic") {
    return {
      page: "bg-slate-50 text-slate-900",
      card:
        "rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-200 border-t-8 border-stone-700",
      name: "text-4xl font-bold tracking-tight text-slate-900",
      sectionTitle:
        "text-sm uppercase tracking-widest font-bold text-stone-700",
      body: "text-slate-700 leading-relaxed",
      meta: "text-sm text-slate-600",
      badge: "bg-stone-50 text-stone-900 ring-1 ring-stone-200",
      sectionBox: "bg-stone-50/40 ring-1 ring-stone-100",
      skillPill:
        "rounded-full bg-stone-50 px-3 py-1 text-sm text-stone-900 ring-1 ring-stone-200",
    };
  }

  if (t === "bold") {
    return {
      page: "bg-slate-50 text-slate-900",
      card:
        "rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-200 font-sans border-t-8 border-slate-950",
      name: "text-5xl font-black tracking-tight text-slate-950",
      sectionTitle:
        "text-sm uppercase tracking-widest font-black text-slate-950",
      body: "text-slate-700 leading-relaxed",
      meta: "text-sm text-slate-600",
      badge: "bg-slate-100 text-slate-950 ring-1 ring-slate-200",
      sectionBox: "bg-slate-50 ring-1 ring-slate-200",
      skillPill:
        "rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-950 ring-1 ring-slate-200",
    };
  }

  // classic default
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
    skillPill:
      "rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-900 ring-1 ring-slate-200",
  };
}

/**
 * ✅ Paid access: SOURCE OF TRUTH is server cookie via /api/access/status
 * We keep the old ?unlocked=true dev helper, but ONLY in development.
 */
async function fetchPaidAccessStatus() {
  try {
    const r = await fetch("/api/access/status", {
      method: "GET",
      credentials: "include",
      cache: "no-store",
      headers: { "Cache-Control": "no-store" },
    });
    const j = await r.json().catch(() => ({}));
    return !!j?.ok;
  } catch {
    return false;
  }
}

/**
 * Legacy/old default references lines that may be stored in input.referencesText.
 * If we see these, we treat them as "not custom" and prefer the language pack default.
 */
function isLegacyDefaultReferencesText(text) {
  const s = String(text || "").trim().toLowerCase();
  if (!s) return true;
  return (
    s === "references available on request." ||
    s === "references available upon request." ||
    // tolerate missing period
    s === "references available on request" ||
    s === "references available upon request"
  );
}

/**
 * Extract sections from markdown-ish output.
 * Supports both:
 *  - UI-friendly "### Professional Summary / ### Skills"
 *  - API output blocks like "PROFILE", "KEY SKILLS", "EMPLOYMENT HISTORY", etc.
 *
 * ✅ Updated: supports Spanish (Phase 2) headings too, so we don't lose content.
 *
 * SAFETY: Skills are bullet-only.
 */
function extractSections(markdownText) {
  const text = (markdownText || "").trim();

  const out = {
    summary: "",
    experience: [],
    skills: [],
  };

  if (!text) return out;

  // Normalize common "pretty" headings into a consistent marker format
  const normalized = text
    .replace(/\r\n/g, "\n")
    // English Summary variants
    .replace(/\*\*Professional Summary:\*\*/gi, "### Professional Summary")
    .replace(/\*\*Summary:\*\*/gi, "### Professional Summary")
    .replace(/^###\s*Summary\s*$/gim, "### Professional Summary")
    // English Experience variants
    .replace(/\*\*Key Experience:\*\*/gi, "### Key Experience")
    .replace(/\*\*Experience:\*\*/gi, "### Key Experience")
    .replace(/^###\s*Experience\s*$/gim, "### Key Experience")
    // English Skills variants
    .replace(/\*\*Professional Skills:\*\*/gi, "### Skills")
    .replace(/\*\*Skills:\*\*/gi, "### Skills")
    .replace(/\*\*Core Skills:\*\*/gi, "### Skills")
    .replace(/\*\*Key Skills:\*\*/gi, "### Skills")
    .replace(
      /^###\s*(Professional\s+Skills|Skills|Core\s+Skills|Key\s+Skills)\s*$/gim,
      "### Skills"
    )
    // ✅ Spanish "pretty" headings (if model outputs ### style)
    .replace(/^###\s*Resumen\s+profesional\s*$/gim, "### Professional Summary")
    .replace(/^###\s*Perfil\s*$/gim, "### Professional Summary")
    .replace(/^###\s*Resumen\s+de\s+experiencia\s*$/gim, "### Key Experience")
    .replace(/^###\s*Competencias\s+clave\s*$/gim, "### Skills")
    .replace(/^###\s*Competencias\s*$/gim, "### Skills")
    .replace(/^###\s*Habilidades\s*$/gim, "### Skills");

  // First try: "###" structured format
  const parts = normalized
    .split("\n### ")
    .map((p, idx) => (idx === 0 ? p : "### " + p));

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
          skills = lines
            .map((l) => l.replace(/^[•\-*]\s*/, "").trim())
            .filter(Boolean);
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

  // If structured format didn't give us skills/summary, try API block format:
  const lines = normalized.split("\n").map((l) => l.trim());

  // Alias headings (Spanish -> English canonical)
  const HEADING_ALIASES = {
    // Spanish
    PERFIL: "PROFILE",
    "RESUMEN PROFESIONAL": "PROFESSIONAL SUMMARY",
    "RESUMEN DE EXPERIENCIA": "EXPERIENCE SUMMARY",
    "COMPETENCIAS CLAVE": "KEY SKILLS",
    "EXPERIENCIA LABORAL": "EMPLOYMENT HISTORY",
    "CUALIFICACIONES Y CERTIFICACIONES": "QUALIFICATIONS & CERTIFICATIONS",
    "INFORMACIÓN ADICIONAL": "ADDITIONAL INFORMATION",
    "INFORMACION ADICIONAL": "ADDITIONAL INFORMATION",
    REFERENCIAS: "REFERENCES",
    EDUCACIÓN: "EDUCATION",
    EDUCACION: "EDUCATION",
  };

  const normalizeHeading = (s) =>
    String(s || "")
      // remove leading markdown heading markers
      .replace(/^#+\s*/g, "")
      // remove surrounding bold markers
      .replace(/^\*\*+/, "")
      .replace(/\*\*+$/g, "")
      // normalize whitespace/punctuation
      .replace(/[:\-–—]+$/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .toUpperCase();

  const canonicalHeading = (line) => {
    const h = normalizeHeading(line);
    return HEADING_ALIASES[h] || h;
  };

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
    const h = canonicalHeading(l);
    return KNOWN_HEADINGS.has(h);
  };

  const sections = {};
  let current = null;

  for (const l of lines) {
    if (!l) continue;

    if (isHeadingLine(l)) {
      current = canonicalHeading(l);
      if (!sections[current]) sections[current] = [];
      continue;
    }

    if (current) sections[current].push(l);
  }

  if (!out.summary) {
    // Prefer proper summary blocks, but fall back gracefully
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

  if (!out.skills.length) {
    const skillsBlock = sections["KEY SKILLS"] || sections["SKILLS"] || null;
    if (skillsBlock) {
      const raw = skillsBlock.join("\n");

      const bulletOnly = raw
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean)
        .filter((l) => /^[•\-*]\s+/.test(l))
        .map((l) => l.replace(/^[•\-*]\s+/, "").trim())
        .filter(Boolean);

      let cleaned = bulletOnly;

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

// Simple PDF CSS generator for templates (keeps A4-safe + ATS-safe)
function getPdfCss(template) {
  const t = String(template || "classic");

  const base = ({
    margin = "12mm",
    borderTop = "#0f172a",
    borderLeft = null,
    pillBg = "#f1f5f9",
    pillBorder = "#e2e8f0",
    pillText = "#0f172a",
    heading = "#0f172a",
    sectionTitle = "#0f172a",
    compact = false,
    minimal = false,
    twoCol = false,
  }) => {
    const pad = compact ? "18px 20px" : "24px 26px";
    const radius = compact ? "14px" : "18px";
    const h1 = compact ? "24px" : "30px";
    const meta = compact ? "11.5px" : "12.5px";
    const p = compact ? "12.3px" : "13px";
    const lh = compact ? "1.4" : "1.55";
    const sectionMt = compact ? "12px" : "16px";

    const borderRule = borderLeft
      ? `border-left: ${borderLeft}; border-top: 1px solid #e2e8f0;`
      : `border: 1px solid #e2e8f0; border-top: 8px solid ${borderTop};`;

    const sectionTitleCss = compact
      ? `h2 { font-size: 13px; margin: 0 0 6px; color: ${sectionTitle}; }`
      : `h2 { font-size: 11.5px; margin: 0 0 8px; letter-spacing: .14em; text-transform: uppercase; color: ${sectionTitle}; }`;

    return `
      @page { size: A4; margin: ${margin}; }
      body { margin: 0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; color: #0f172a; background: #ffffff; }
      .page { width: 210mm; box-sizing: border-box; }
      .card { ${
        minimal
          ? "padding: 0; border: none;"
          : `${borderRule} border-radius: ${radius}; padding: ${pad};`
      } }
      h1 { font-size: ${h1}; margin: 0; letter-spacing: -0.02em; color: ${heading}; }
      .meta { margin-top: ${
        compact ? "8px" : "10px"
      }; font-size: ${meta}; color: #475569; }
      .meta b { color: #334155; }
      hr { border: none; border-top: 1px solid #e2e8f0; margin: ${
        compact ? "12px 0 14px" : "16px 0 18px"
      }; }
      ${sectionTitleCss}
      p { margin: 0; font-size: ${p}; line-height: ${lh}; color: #334155; }
      .list { margin: 6px 0 0; padding-left: ${
        compact ? "16px" : "18px"
      }; font-size: ${p}; line-height: ${lh}; color: #334155; }
      .list li { margin: ${compact ? "2px 0" : "3px 0"}; }
      .section { margin-top: ${sectionMt}; break-inside: avoid; }
      .pillRow { display: flex; flex-wrap: wrap; gap: ${
        compact ? "6px" : "8px"
      }; margin-top: ${compact ? "8px" : "10px"}; }
      .pill { display: inline-block; padding: ${
        compact ? "5px 8px" : "6px 10px"
      }; border-radius: 999px; background: ${pillBg}; border: 1px solid ${pillBorder}; font-size: ${
        compact ? "11px" : "12px"
      }; color: ${pillText}; }
      .muted { color: #64748b; font-size: ${compact ? "11px" : "12px"}; }
      .job { margin-top: ${
        compact ? "8px" : "10px"
      }; padding-top: ${
        compact ? "6px" : "8px"
      }; border-top: 1px solid #e2e8f0; }
      .jobTitle { font-weight: 800; font-size: ${
        compact ? "12.8px" : "13.5px"
      }; color: #0f172a; }
      .jobMeta { margin-top: 2px; font-size: ${
        compact ? "11px" : "12px"
      }; color: #64748b; }
      .smallNote { margin-top: ${
        compact ? "10px" : "14px"
      }; font-size: ${compact ? "10.5px" : "11.5px"}; color: #64748b; }
      ${
        twoCol
          ? `
        .cols { display: flex; gap: 18px; }
        .left { width: 36%; }
        .right { width: 64%; }
      `
          : ""
      }
    `;
  };

  if (t === "minimal") {
    return base({
      margin: "12mm",
      minimal: true,
      heading: "#0f172a",
      sectionTitle: "#334155",
      pillBg: "#ffffff",
      pillBorder: "#e2e8f0",
      pillText: "#0f172a",
    });
  }

  if (t === "two_column") {
    return base({
      margin: "12mm",
      borderTop: "#1d4ed8",
      sectionTitle: "#1e40af",
      pillBg: "#eff6ff",
      pillBorder: "#bfdbfe",
      pillText: "#1e3a8a",
      twoCol: true,
    });
  }

  if (t === "compact") {
    return base({
      margin: "10mm",
      borderLeft: "6px solid #6366f1",
      compact: true,
      sectionTitle: "#4338ca",
      pillBg: "#eef2ff",
      pillBorder: "#c7d2fe",
      pillText: "#3730a3",
    });
  }

  if (t === "modern") {
    return base({
      borderTop: "#10b981",
      sectionTitle: "#047857",
      pillBg: "#ecfdf5",
      pillBorder: "#a7f3d0",
      pillText: "#064e3b",
    });
  }

  if (t === "executive") {
    return base({
      borderTop: "#0f172a",
      sectionTitle: "#0f172a",
      pillBg: "#f1f5f9",
      pillBorder: "#e2e8f0",
      pillText: "#0f172a",
    });
  }

  if (t === "technical") {
    return base({
      borderTop: "#0891b2",
      sectionTitle: "#0e7490",
      pillBg: "#ecfeff",
      pillBorder: "#a5f3fc",
      pillText: "#155e75",
    });
  }

  if (t === "graduate") {
    return base({
      borderTop: "#f43f5e",
      sectionTitle: "#be123c",
      pillBg: "#fff1f2",
      pillBorder: "#fecdd3",
      pillText: "#9f1239",
    });
  }

  if (t === "academic") {
    return base({
      borderTop: "#57534e",
      sectionTitle: "#57534e",
      pillBg: "#fafaf9",
      pillBorder: "#e7e5e4",
      pillText: "#1c1917",
    });
  }

  if (t === "bold") {
    return base({
      borderTop: "#020617",
      sectionTitle: "#020617",
      pillBg: "#f1f5f9",
      pillBorder: "#e2e8f0",
      pillText: "#020617",
      heading: "#020617",
    });
  }

  // classic default
  return base({
    borderTop: "#0f172a",
    sectionTitle: "#0f172a",
    pillBg: "#f1f5f9",
    pillBorder: "#e2e8f0",
    pillText: "#0f172a",
  });
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

  // ✅ Paid access (server cookie status)
  const [paidAccess, setPaidAccess] = useState(false);

  // Paywall state (hard gate export)
  const [paywallOpen, setPaywallOpen] = useState(false);

  // UI state
  const [exportBusy, setExportBusy] = useState(false);

  // Print guard state (helps a few browsers re-render print view)
  const [printIntercepted, setPrintIntercepted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const init = async () => {
      // Support dev/manual unlock via ?unlocked=true (DEV ONLY)
      const url = new URL(window.location.href);
      const unlocked = url.searchParams.get("unlocked") === "true";

      if (unlocked && process.env.NODE_ENV !== "production") {
        setPaidAccess(true);
        url.searchParams.delete("unlocked");
        window.history.replaceState({}, "", url.toString());
      } else {
        const ok = await fetchPaidAccessStatus();
        setPaidAccess(ok);
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
    };

    init();
  }, []);

  // Keep paid status fresh when returning from checkout / tab focus
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onVis = async () => {
      if (document.visibilityState !== "visible") return;
      const ok = await fetchPaidAccessStatus();
      setPaidAccess(ok);
    };

    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const sections = useMemo(() => extractSections(saved?.result), [saved]);

  const input = saved?.input || {};
  const region = input.region || "UK";

  // ✅ Language pack (Phase 1)
  const { L, htmlLang } = useMemo(() => {
    const raw =
      input?.lang || input?.language || input?.locale || input?.i18n || "";

    // normalize language robustly (supports "es", "es-es", "ES", etc.)
    const key = normalizeLangKey(raw || regionLocale(region));
    const pack = (LANGUAGES && LANGUAGES[key]) || LANGUAGES?.["en-GB"] || null;

    // HTML lang attribute (best effort)
    const html = pack?.htmlLang || pack?.lang || key || regionLocale(region);
    return { L: pack, htmlLang: html };
  }, [input?.lang, input?.language, input?.locale, input?.i18n, region]);

  const labelDoc = (L?.cvLabel || docLabel(region)).trim();

  // ✅ Normalize template key so new templates always render cleanly
  const template = normalizeTemplateKey(input.template || "classic");
  const ui = getTemplateUiClasses(template);

  const cfg =
    input.sectionConfig && typeof input.sectionConfig === "object"
      ? { ...DEFAULT_SECTION_CONFIG, ...input.sectionConfig }
      : DEFAULT_SECTION_CONFIG;

  const order =
    Array.isArray(input.sectionOrder) && input.sectionOrder.length
      ? (() => {
          const cleaned = input.sectionOrder.filter((k) =>
            DEFAULT_SECTION_ORDER.includes(k)
          );
          for (const k of DEFAULT_SECTION_ORDER)
            if (!cleaned.includes(k)) cleaned.push(k);
          return cleaned;
        })()
      : DEFAULT_SECTION_ORDER;

  // ✅ FIX: references default respects language pack AND overrides legacy stored English defaults
  const referencesText = useMemo(() => {
    const candidate = String(input.referencesText || "").trim();

    const shouldUsePackDefault =
      !candidate || isLegacyDefaultReferencesText(candidate);

    const packDefault = String(
      t(
        L,
        "referencesDefaultText",
        region === "US"
          ? "References available upon request."
          : "References available on request."
      )
    ).trim();

    return (shouldUsePackDefault ? packDefault : candidate).trim();
  }, [input.referencesText, L, region]);

  const targetRole = input.role || "";
  const fullName = input.name || "Your Name";
  const email = input.email || "";
  const phone = input.phone || "";
  const location = input.location || "";

  const qualifications = Array.isArray(input.qualifications)
    ? input.qualifications
    : [];
  const employmentHistory = Array.isArray(input.employmentHistory)
    ? input.employmentHistory
    : [];

  const fallbackSkills = Array.isArray(input.skills) ? input.skills : [];
  const skillsForDisplay =
    Array.isArray(sections.skills) && sections.skills.length
      ? sections.skills
      : fallbackSkills;

  // ✅ NEW RULE: Export is paid (teacher bypass allowed for classroom flows)
  const exportLocked = !teacherMode && !paidAccess;

  // ✅ Always re-check Stripe truth before exporting/printing (handles refunds while tab is open)
  const ensureExportAllowed = async () => {
    if (teacherMode) return true;
    const ok = await fetchPaidAccessStatus();
    setPaidAccess(ok);
    if (!ok) setPaywallOpen(true);
    return ok;
  };

  const requestExportUnlock = () => {
    if (teacherMode) return false;
    if (exportLocked) {
      setPaywallOpen(true);
      return true;
    }
    return false;
  };

  // ------------------------------------------------------------
  // HARD PRINT GATE (Ctrl+P / Cmd+P / beforeprint)
  // - We cannot stop the browser print dialog reliably everywhere
  // - But we CAN ensure the PRINTED OUTPUT is a lock page if locked
  // ------------------------------------------------------------
  useEffect(() => {
    if (typeof window === "undefined") return;

    const setLockedAttr = (locked) => {
      try {
        if (locked) document.body.setAttribute("data-export-locked", "1");
        else document.body.removeAttribute("data-export-locked");
      } catch {}
    };

    // keep attribute in sync
    setLockedAttr(exportLocked);

    const onBeforePrint = () => {
      if (exportLocked) {
        setLockedAttr(true);
        setPrintIntercepted(true);
        setPaywallOpen(true);
      } else {
        setLockedAttr(false);
        setPrintIntercepted(false);
      }
    };

    const onAfterPrint = () => {
      // restore after print (in case paid state changed)
      setLockedAttr(exportLocked);
      setTimeout(() => setPrintIntercepted(false), 250);
    };

    const onKeyDown = (e) => {
      const k = String(e.key || "").toLowerCase();
      const isPrint = (e.ctrlKey || e.metaKey) && k === "p";
      if (!isPrint) return;

      if (exportLocked) {
        e.preventDefault();
        e.stopPropagation();
        setLockedAttr(true);
        setPrintIntercepted(true);
        setPaywallOpen(true);
        return false;
      }
    };

    window.addEventListener("beforeprint", onBeforePrint);
    window.addEventListener("afterprint", onAfterPrint);
    window.addEventListener("keydown", onKeyDown, true);

    return () => {
      window.removeEventListener("beforeprint", onBeforePrint);
      window.removeEventListener("afterprint", onAfterPrint);
      window.removeEventListener("keydown", onKeyDown, true);
    };
  }, [exportLocked]);

  // Clear storage (and teacher flag), show notice first
  const clearStoredDataAndShowNotice = () => {
    if (typeof window === "undefined") return;

    setShowExitNotice(true);

    setTimeout(() => {
      try {
        localStorage.removeItem(STORAGE_KEY);
        sessionStorage.removeItem(STORAGE_KEY);

        // ✅ Remove Teacher Mode session flags so the next student isn't stuck
        sessionStorage.removeItem(TEACHER_MODE_SESSION_KEY);
        sessionStorage.removeItem(TEACHER_PIN_SESSION_KEY);
        sessionStorage.removeItem(SCHOOL_ACCESS_SESSION_KEY);
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
   * Used for server PDF generation (/api/export/pdf)
   *
   * IMPORTANT:
   * - Do NOT include any "Generated" timestamp in export output (human CV expectation).
   */
  const buildExportHtml = () => {
    const css = getPdfCss(template);

    const contactLine =
      email || phone || location
        ? `${email ? escapeHtml(email) : ""}${
            email && (phone || location) ? " · " : ""
          }${phone ? escapeHtml(phone) : ""}${phone && location ? " · " : ""}${
            location ? escapeHtml(location) : ""
          }`
        : "";

    const summaryHtml =
      cfg.summary && (sections.summary || "").trim()
        ? `<div class="section">
             <h2>${escapeHtml(sectionLabel("summary", region, L))}</h2>
             <p>${escapeHtml(sections.summary).replaceAll("\n", "<br/>")}</p>
           </div>`
        : "";

    const jobsHtml =
      cfg.employment && employmentHistory.length
        ? `<div class="section">
             <h2>${escapeHtml(sectionLabel("employment", region, L))}</h2>
             ${employmentHistory
               .map((j) => {
                 const titleLine = [j.title, j.company]
                   .filter(Boolean)
                   .join(" — ");
                 const dateLine = [
                   j.location,
                   [j.start, j.end].filter(Boolean).join(" – "),
                 ]
                   .filter(Boolean)
                   .join(" | ");
                 const bullets = Array.isArray(j.bullets) ? j.bullets : [];
                 return `
                   <div class="job">
                     <div class="jobTitle">${escapeHtml(
                       titleLine || t(L, "roleFallback", "Role")
                     )}</div>
                     ${
                       dateLine
                         ? `<div class="jobMeta">${escapeHtml(dateLine)}</div>`
                         : ``
                     }
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

    const qualsHeading = escapeHtml(sectionLabel("qualifications", region, L));
    const qualsHtml =
      cfg.qualifications && qualifications.length
        ? `<div class="section">
             <h2>${qualsHeading}</h2>
             <ul class="list">
               ${qualifications
                 .map((q) => {
                   const left = [q.title, q.provider]
                     .filter(Boolean)
                     .join(" — ");
                   const right = [q.year, q.grade]
                     .filter(Boolean)
                     .join(" · ");
                   return `<li>${escapeHtml(left)}${
                     right
                       ? ` <span class="muted">(${escapeHtml(right)})</span>`
                       : ""
                   }</li>`;
                 })
                 .join("")}
             </ul>
           </div>`
        : "";

    const skillsHtml =
      cfg.skills && skillsForDisplay.length
        ? `<div class="section">
             <h2>${escapeHtml(sectionLabel("skills", region, L))}</h2>
             <div class="pillRow">
               ${skillsForDisplay
                 .map((x) => `<span class="pill">${escapeHtml(x)}</span>`)
                 .join("")}
             </div>
           </div>`
        : "";

    const refsHtml =
      cfg.references && referencesText
        ? `<div class="section">
             <h2>${escapeHtml(sectionLabel("references", region, L))}</h2>
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

    // ✅ Two-column export layout (fixed buckets, still respects section toggles)
    const isTwoColumn = template === "two_column";

    let assembledSections = "";
    if (!isTwoColumn) {
      assembledSections = order
        .map((k) => sectionMap[k] || "")
        .filter(Boolean)
        .join("\n");
    } else {
      const leftKeys = ["skills", "qualifications", "references"];
      const rightKeys = ["summary", "employment"];

      const leftHtml = leftKeys
        .map((k) => sectionMap[k] || "")
        .filter(Boolean)
        .join("\n");
      const rightHtml = rightKeys
        .map((k) => sectionMap[k] || "")
        .filter(Boolean)
        .join("\n");

      assembledSections = `<div class="cols">
        <div class="left">${leftHtml}</div>
        <div class="right">${rightHtml}</div>
      </div>`;
    }

    return `<!doctype html>
<html lang="${escapeHtml(htmlLang || regionLocale(region))}">
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
        ${
          targetRole
            ? `<div><b>${escapeHtml(
                t(L, "targetRoleLabel", "Target Role:")
              )}</b> ${escapeHtml(targetRole)}</div>`
            : ""
        }
      </div>

      <hr />

      ${assembledSections}
    </div>
  </div>
</body>
</html>`;
  };

  const onPrint = async () => {
    // Quick gate (UI) + hard truth check (refund-safe)
    if (requestExportUnlock()) return;
    const ok = await ensureExportAllowed();
    if (!ok) return;

    if (safeModeActive) setPendingClearAfterPrint(true);
    window.print();
  };

  const downloadPdf = async () => {
    // Quick gate (UI) + hard truth check (refund-safe)
    if (requestExportUnlock()) return;
    const ok = await ensureExportAllowed();
    if (!ok) return;

    if (!saved) {
      alert(
        t(
          L,
          "noDataAlert",
          `No ${labelDoc} data found yet. Go back and generate one.`
        )
      );
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
            t(L, "pdfFailed", "PDF download failed on this device."),
            t(
              L,
              "pdfFailedHint",
              "Try again, or use a different device/browser."
            ),
            detail ? "Details: " + detail : "",
          ]
            .filter(Boolean)
            .join("\n")
        );
        return;
      }

      const blob = await res.blob();

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();

      setTimeout(() => URL.revokeObjectURL(url), 1200);

      if (safeModeActive) {
        setTimeout(() => clearStoredDataAndShowNotice(), 250);
      }
    } catch (e) {
      console.warn("PDF export request crashed:", e);
      alert(
        t(
          L,
          "pdfFailedFallback",
          "PDF download failed. Please try again or use a different browser."
        )
      );
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
          <h2 className={ui.sectionTitle}>
            {sectionLabel("summary", region, L)}
          </h2>
          <p className={`mt-2 whitespace-pre-line ${ui.body}`}>{content}</p>
        </section>
      );
    }

    if (key === "employment") {
      if (!employmentHistory.length) return null;
      return (
        <section>
          <h2 className={ui.sectionTitle}>
            {sectionLabel("employment", region, L)}
          </h2>
          <div className="mt-2 space-y-4">
            {employmentHistory.map((j, idx) => {
              const titleLine = [j.title, j.company].filter(Boolean).join(" — ");
              const dateLine = [
                j.location,
                [j.start, j.end].filter(Boolean).join(" – "),
              ]
                .filter(Boolean)
                .join(" | ");
              const bullets = Array.isArray(j.bullets) ? j.bullets : [];
              return (
                <div key={idx} className={`rounded-xl p-4 ${ui.sectionBox}`}>
                  <div className="font-semibold text-slate-900">
                    {titleLine || t(L, "roleFallback", "Role")}
                  </div>
                  {dateLine ? (
                    <div className={`mt-1 ${ui.meta}`}>{dateLine}</div>
                  ) : null}
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
          <h2 className={ui.sectionTitle}>
            {sectionLabel("qualifications", region, L)}
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
            {qualifications.map((q, idx) => {
              const left = [q.title, q.provider].filter(Boolean).join(" — ");
              const right = [q.year, q.grade].filter(Boolean).join(" · ");
              return (
                <li key={idx}>
                  {left}
                  {right ? (
                    <span className="text-slate-500"> ({right})</span>
                  ) : null}
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
          <h2 className={ui.sectionTitle}>
            {sectionLabel("skills", region, L)}
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {skillsForDisplay.map((s, idx) => (
              <span key={idx} className={ui.skillPill}>
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
          <h2 className={ui.sectionTitle}>
            {sectionLabel("references", region, L)}
          </h2>
          <p className={`mt-2 whitespace-pre-line ${ui.body}`}>{txt}</p>
        </section>
      );
    }

    return null;
  };

  const isTwoColumn = template === "two_column";
  const regionPretty = regionDisplay(region);
  const regionCode = String(region || "").toUpperCase();

  const seoTitle = saved
    ? `${fullName} — ${labelDoc} Preview | CVCraft`
    : `${labelDoc} Preview | CVCraft`;

  return (
    <div className={`min-h-screen px-6 py-10 ${ui.page}`}>
      <Head>
        {/* ✅ Prevent indexing (fixes Google showing /preview, /thumbs, etc.) */}
        <meta name="robots" content="noindex,nofollow" />
        <title>{seoTitle}</title>
      </Head>

      {/* Student Safe Mode exit notice */}
      {showExitNotice ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900 px-6">
          <div className="max-w-lg rounded-2xl bg-white p-8 text-center shadow-xl">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              {t(L, "exitTitle", "Before you leave this computer")}
            </h2>

            <p className="mb-6 text-slate-700">
              {t(
                L,
                "exitBody",
                `Your ${labelDoc} has been downloaded and all personal information has been removed from this device.`
              )}
            </p>

            <p className="mb-6 text-sm text-slate-500">
              {t(
                L,
                "exitBody2",
                "You may now safely close this window or return the computer to the next student."
              )}
            </p>

            <button
              type="button"
              onClick={() => (window.location.href = "/")}
              className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800"
            >
              {t(L, "returnToStart", "Return to start")}
            </button>
          </div>
        </div>
      ) : null}

      <div className="mx-auto max-w-4xl">
        {/* ✅ Actions row is explicitly non-print */}
        <div className="mb-6 flex items-center justify-between gap-3 print:hidden">
          <Link
            href="/cv"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            ← {t(L, "backToBuilder", "Back to builder")}
          </Link>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={downloadPdf}
              disabled={exportBusy} // ONLY disable while actually generating
              className={`rounded-lg px-4 py-2 text-sm font-semibold text-white transition ${
                exportBusy
                  ? "cursor-not-allowed bg-emerald-600 opacity-60"
                  : "bg-emerald-600 hover:bg-emerald-500"
              }`}
              title={
                exportLocked
                  ? t(L, "exportLockedTitle", "Purchase access to unlock export")
                  : t(
                      L,
                      "downloadPdfTitle",
                      "Downloads a clean PDF (recommended)"
                    )
              }
            >
              {exportBusy
                ? t(L, "preparing", "Preparing…")
                : `${t(L, "downloadPdf", "Download PDF")}${
                    exportLocked ? " 🔒" : ""
                  }`}
            </button>

            <button
              type="button"
              onClick={onPrint}
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              title={
                exportLocked
                  ? t(L, "exportLockedTitle", "Purchase access to unlock export")
                  : t(L, "printTitle", "Uses browser print dialog")
              }
            >
              {t(L, "printSavePdf", "Print / Save PDF")}
              {exportLocked ? " 🔒" : ""}
            </button>
          </div>
        </div>

        {/* PRINT-LOCK PAGE (only printed when export is locked) */}
        <div id="print-lock-root" className="hidden print:block">
          <div className="rounded-2xl bg-white p-10 ring-1 ring-slate-200">
            <h1 className="text-3xl font-extrabold text-slate-900">
              {t(L, "printLockedTitle", "Export locked")}
            </h1>
            <p className="mt-3 text-slate-700">
              {t(
                L,
                "printLockedBody",
                `Printing / saving PDF is available after purchase (${ACCESS_PRICE_LABEL}).`
              )}
            </p>

            <div className="mt-6 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <div className="text-sm font-semibold text-slate-900">
                {t(L, "unlockHow", "To unlock:")}
              </div>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-700">
                <li>
                  {t(L, "unlockHow1", "Return to the page (don’t print).")}
                </li>
                <li>{t(L, "unlockHow2", "Purchase access.")}</li>
                <li>{t(L, "unlockHow3", "Then export from Preview.")}</li>
              </ol>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              {t(
                L,
                "printLockedNote",
                "This page is shown to protect paid exports."
              )}
            </p>
          </div>
        </div>

        {/* ✅ This is the ONLY thing that should appear in browser print (when unlocked) */}
        <div
          id="cv-print-root"
          className={ui.card}
          // small nudge to re-render in a few browsers when interception happens
          data-print-intercepted={printIntercepted ? "1" : "0"}
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className={ui.name}>{fullName}</h1>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
                {email && <span>{email}</span>}
                {phone && <span>{phone}</span>}
                {location && <span>{location}</span>}
              </div>
            </div>

            {/* Badge stays in print (part of CV styling) */}
            <div className={`rounded-xl px-4 py-3 ${ui.badge}`}>
              <div className="text-xs font-semibold uppercase tracking-wider">
                {t(L, "templateLabel", "Template")}
              </div>
              <div className="text-sm font-bold">{templateLabel(template)}</div>

              <div className="mt-2 text-xs font-semibold uppercase tracking-wider">
                {t(L, "regionLabel", "Region")}
              </div>

              {/* ✅ Pretty region name (and keep code subtly) */}
              <div className="text-sm font-bold">
                {regionPretty || regionCode || "—"}
                {regionCode ? (
                  <span className="ml-2 text-xs font-semibold opacity-80">
                    ({regionCode})
                  </span>
                ) : null}
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-1 text-sm text-slate-600">
            <div>
              <span className="font-semibold text-slate-700">
                {t(L, "targetRoleLabel", "Target Role:")}
              </span>{" "}
              {targetRole ? targetRole : "—"}
            </div>

            {/* Notices should NOT print */}
            {safeModeActive ? (
              <div className="mt-2 rounded-xl bg-amber-50 px-3 py-2 text-amber-900 ring-1 ring-amber-200 print:hidden">
                {teacherMode
                  ? t(
                      L,
                      "teacherModeNotice",
                      "Teacher Mode is enabled — data will be cleared after download/print."
                    )
                  : t(
                      L,
                      "studentSafeModeNotice",
                      "Student Safe Mode is enabled — data will be cleared after download/print."
                    )}
              </div>
            ) : null}

            {exportLocked ? (
              <div className="mt-2 rounded-xl bg-slate-100 px-3 py-2 text-slate-800 ring-1 ring-slate-200 print:hidden">
                {t(
                  L,
                  "exportLockedBody",
                  `Export is locked. Purchase access to download/print your ${labelDoc}.`
                )}
              </div>
            ) : null}
          </div>

          <hr className="my-6 border-slate-200" />

          {!saved ? (
            <div className="print:hidden">
              <h2 className="text-xl font-bold">
                {t(L, "previewTitle", `${labelDoc} Preview`)}
              </h2>
              <p className="mt-2 text-slate-600">
                {t(
                  L,
                  "noDataBody",
                  `No ${labelDoc} data found yet. Go back and generate one.`
                )}
              </p>

              <div className="mt-6">
                <Link
                  href="/cv"
                  className="inline-block rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  {t(L, "backToBuilderBtn", "Back to builder")}
                </Link>
              </div>
            </div>
          ) : isTwoColumn ? (
            // ✅ Two-column on-screen layout
            <div className="grid gap-8 md:grid-cols-12">
              <div className="space-y-8 md:col-span-4">
                {cfg.skills ? <div>{renderSection("skills")}</div> : null}
                {cfg.qualifications ? (
                  <div>{renderSection("qualifications")}</div>
                ) : null}
                {cfg.references ? (
                  <div>{renderSection("references")}</div>
                ) : null}
              </div>

              <div className="space-y-8 md:col-span-8">
                {cfg.summary ? <div>{renderSection("summary")}</div> : null}
                {cfg.employment ? <div>{renderSection("employment")}</div> : null}

                <p className="text-sm text-slate-500 print:hidden">
                  {t(
                    L,
                    "tipTwoCol",
                    "Tip: “Download PDF” uses your chosen toggles. Two-column uses a fixed column layout for clarity."
                  )}
                </p>
              </div>
            </div>
          ) : (
            <div
              className={`${
                template === "compact" ? "space-y-6" : "space-y-8"
              }`}
            >
              {order.map((key) => (
                <div key={key}>{renderSection(key)}</div>
              ))}

              {/* Tip should never print */}
              <p className="text-sm text-slate-500 print:hidden">
                {t(
                  L,
                  "tipDefault",
                  "Tip: “Download PDF” uses your chosen section order and toggles."
                )}
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
        onPreviewAnyway={() => setPaywallOpen(false)}
        onUnlockClick={() => {
          // Preserve return path so user can come back to preview after paying
          const params = new URLSearchParams();
          params.set("return", "/preview");
          params.set("intent", "access");
          params.set("price", ACCESS_PRICE_LABEL);
          window.location.href = `${PRICING_PATH}?${params.toString()}`;
        }}
      />

      <style jsx global>{`
        /* ------------------------------------------------------------
           PRINT FIX (CRITICAL):
           - Default: Only print #cv-print-root (no back link, no buttons, no tips)
           - If export locked: print lock page instead
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

          /* Default: show only the CV print root */
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

          /* ------------------------------------------------------------
             HARD LOCK: if export is locked, do NOT print the CV.
             Print the lock page instead.
             ------------------------------------------------------------ */
          body[data-export-locked="1"] #cv-print-root {
            display: none !important;
          }

          body[data-export-locked="1"] #print-lock-root {
            display: block !important;
            visibility: visible !important;
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
          }

          body[data-export-locked="1"] #print-lock-root,
          body[data-export-locked="1"] #print-lock-root * {
            visibility: visible !important;
          }
        }
      `}</style>
    </div>
  );
}
