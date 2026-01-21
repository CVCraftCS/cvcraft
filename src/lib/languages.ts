// src/lib/languages.ts

// Single source of truth
export const LANGUAGES = {
  "en-GB": {
    label: "English (UK)",
    currency: "GBP",
    cvLabel: "CV",
    summaryLabel: "Personal Statement",
    spelling: "uk",
    referencesDefault: true,
  },
  "en-US": {
    label: "English (US)",
    currency: "USD",
    cvLabel: "Resume", // prefer non-accent in UI consistency
    summaryLabel: "Professional Summary",
    spelling: "us",
    referencesDefault: false,
  },
  "en-AU": {
    label: "English (Australia)",
    currency: "AUD",
    cvLabel: "Resume",
    summaryLabel: "Professional Summary",
    spelling: "uk",
    referencesDefault: true,
  },

  // Optional UI languages (labels only — CV content can still be generated in English for now)
  "es-ES": {
    label: "Español (ES)",
    currency: "EUR",
    cvLabel: "CV",
    summaryLabel: "Resumen profesional",
    spelling: "uk",
    referencesDefault: false,
  },
  "fr-FR": {
    label: "Français (FR)",
    currency: "EUR",
    cvLabel: "CV",
    summaryLabel: "Résumé professionnel",
    spelling: "uk",
    referencesDefault: false,
  },
  "de-DE": {
    label: "Deutsch (DE)",
    currency: "EUR",
    cvLabel: "Lebenslauf",
    summaryLabel: "Profil",
    spelling: "uk",
    referencesDefault: false,
  },
} as const;

// ---- Compatibility exports ----
// Some parts of the app (or older code) expect these names:
export const LANGUAGE_PACKS = LANGUAGES;
export const languages = LANGUAGES;

// Normalise various user inputs into a supported key.
// We expose BOTH function names because your preview.js is defensive and
// some other file is clearly importing one of these by name.
export function normalizeLanguageKey(raw: unknown) {
  return normalizeLangKey(raw);
}

export function normalizeLangKey(raw: unknown) {
  const s = String(raw || "").trim();
  if (!s) return "en-GB";

  // Normalise common casing
  const m = s.match(/^([a-z]{2})[-_]?([a-z]{2})$/i);
  if (m) {
    const key = `${m[1].toLowerCase()}-${m[2].toUpperCase()}`;
    // If supported, return it; otherwise keep a sensible fallback
    return (key in LANGUAGES ? key : "en-GB") as keyof typeof LANGUAGES;
  }

  // Short forms
  const short = s.toLowerCase();
  if (short === "en" || short === "uk") return "en-GB";
  if (short === "us") return "en-US";
  if (short === "au") return "en-AU";
  if (short === "es") return "es-ES";
  if (short === "fr") return "fr-FR";
  if (short === "de") return "de-DE";

  // Last resort
  return "en-GB";
}
