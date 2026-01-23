// src/lib/i18n.ts
import { LANGUAGES } from "./languages";

export type LangCode = keyof typeof LANGUAGES;

export const DEFAULT_LANG: LangCode = "en-GB";

export function isLangCode(x: unknown): x is LangCode {
  return typeof x === "string" && Object.prototype.hasOwnProperty.call(LANGUAGES, x);
}

export function safeLang(x: unknown): LangCode {
  return isLangCode(x) ? (x as LangCode) : DEFAULT_LANG;
}

export function getBrowserLang(): LangCode {
  if (typeof window === "undefined") return DEFAULT_LANG;

  const nav = (navigator.language || "").toLowerCase();

  // ✅ Expanded mapping
  if (nav.startsWith("en-us")) return "en-US";
  if (nav.startsWith("en-au")) return "en-AU";
  if (nav.startsWith("en-gb")) return "en-GB";
  if (nav.startsWith("en")) return "en-GB";

  if (nav.startsWith("es")) return "es-ES";
  if (nav.startsWith("fr")) return "fr-FR";
  if (nav.startsWith("de")) return "de-DE";

  return DEFAULT_LANG;
}
