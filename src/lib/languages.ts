// src/lib/languages.ts

type UiStrings = {
  // Common UI labels
  backToBuilder: string;
  backToBuilderBtn: string;
  previewTitle: string;

  templateLabel: string;
  regionLabel: string;
  targetRoleLabel: string;

  // Export buttons / states
  downloadPdf: string;
  downloadPdfTitle: string;
  printSavePdf: string;
  printTitle: string;
  preparing: string;

  // Locked/export messaging
  exportLockedTitle: string;
  exportLockedBody: string;

  // Empty state + alerts
  noDataBody: string;
  noDataAlert: string;

  // PDF errors
  pdfFailed: string;
  pdfFailedHint: string;
  pdfFailedFallback: string;

  // Misc
  roleFallback: string;

  // Student Safe Mode exit overlay
  exitTitle: string;
  exitBody: string;
  exitBody2: string;
  returnToStart: string;

  // Notices
  teacherModeNotice: string;
  studentSafeModeNotice: string;

  // Tips
  tipDefault: string;
  tipTwoCol: string;

  // ✅ NEW: default references line (fixes stray English in Spanish preview)
  referencesDefaultText: string;
};

type SectionStrings = {
  summary: string;
  employment: string;
  qualifications: string;
  skills: string;
  references: string;
};

type LanguagePack = {
  label: string;
  currency: string;
  cvLabel: string;
  summaryLabel: string;
  spelling: "uk" | "us";
  referencesDefault: boolean;

  // ✅ Used by preview.js + future date formatting
  locale: string; // e.g., "en-GB"
  htmlLang: string; // e.g., "en-GB"

  // ✅ preview.js looks for these
  ui: UiStrings;
  sections: SectionStrings;
};

// Single source of truth
export const LANGUAGES: Record<string, LanguagePack> = {
  "en-GB": {
    label: "English (UK)",
    currency: "GBP",
    cvLabel: "CV",
    summaryLabel: "Personal Statement",
    spelling: "uk",
    referencesDefault: true,

    locale: "en-GB",
    htmlLang: "en-GB",

    ui: {
      backToBuilder: "Back to builder",
      backToBuilderBtn: "Back to builder",
      previewTitle: "CV Preview",

      templateLabel: "Template",
      regionLabel: "Region",
      targetRoleLabel: "Target Role:",

      downloadPdf: "Download PDF",
      downloadPdfTitle: "Downloads a clean PDF (recommended)",
      printSavePdf: "Print / Save PDF",
      printTitle: "Uses browser print dialog",
      preparing: "Preparing…",

      exportLockedTitle: "Purchase access to unlock export",
      exportLockedBody: "Export is locked. Purchase access to download/print your CV.",

      noDataBody: "No CV data found yet. Go back and generate one.",
      noDataAlert: "No CV data found yet. Go back and generate one.",

      pdfFailed: "PDF download failed on this device.",
      pdfFailedHint: "Use “Print / Save PDF” instead (choose “Save as PDF”).",
      pdfFailedFallback:
        "PDF download failed. Use “Print / Save PDF” instead (choose “Save as PDF”).",

      roleFallback: "Role",

      exitTitle: "Before you leave this computer",
      exitBody:
        "Your CV has been downloaded and all personal information has been removed from this device.",
      exitBody2:
        "You may now safely close this window or return the computer to the next student.",
      returnToStart: "Return to start",

      teacherModeNotice:
        "Teacher Mode is enabled — data will be cleared after download/print.",
      studentSafeModeNotice:
        "Student Safe Mode is enabled — data will be cleared after download/print.",

      tipDefault: "Tip: “Download PDF” uses your chosen section order and toggles.",
      tipTwoCol:
        "Tip: “Download PDF” uses your chosen toggles. Two-column uses a fixed column layout for clarity.",

      // ✅ Default references line (region/language controlled)
      referencesDefaultText: "References available on request.",
    },

    sections: {
      // NOTE: Summary label is region-aware elsewhere, but keep this consistent
      summary: "Professional Summary",
      employment: "Employment history",
      qualifications: "Qualifications & Certifications",
      skills: "Skills",
      references: "References",
    },
  },

  "en-US": {
    label: "English (US)",
    currency: "USD",
    cvLabel: "Resume", // prefer non-accent in UI consistency
    summaryLabel: "Professional Summary",
    spelling: "us",
    referencesDefault: false,

    locale: "en-US",
    htmlLang: "en-US",

    ui: {
      backToBuilder: "Back to builder",
      backToBuilderBtn: "Back to builder",
      previewTitle: "Resume Preview",

      templateLabel: "Template",
      regionLabel: "Region",
      targetRoleLabel: "Target Role:",

      downloadPdf: "Download PDF",
      downloadPdfTitle: "Downloads a clean PDF (recommended)",
      printSavePdf: "Print / Save PDF",
      printTitle: "Uses browser print dialog",
      preparing: "Preparing…",

      exportLockedTitle: "Purchase access to unlock export",
      exportLockedBody: "Export is locked. Purchase access to download/print your resume.",

      noDataBody: "No resume data found yet. Go back and generate one.",
      noDataAlert: "No resume data found yet. Go back and generate one.",

      pdfFailed: "PDF download failed on this device.",
      pdfFailedHint: "Use “Print / Save PDF” instead (choose “Save as PDF”).",
      pdfFailedFallback:
        "PDF download failed. Use “Print / Save PDF” instead (choose “Save as PDF”).",

      roleFallback: "Role",

      exitTitle: "Before you leave this computer",
      exitBody:
        "Your resume has been downloaded and all personal information has been removed from this device.",
      exitBody2:
        "You may now safely close this window or return the computer to the next student.",
      returnToStart: "Return to start",

      teacherModeNotice:
        "Teacher Mode is enabled — data will be cleared after download/print.",
      studentSafeModeNotice:
        "Student Safe Mode is enabled — data will be cleared after download/print.",

      tipDefault: "Tip: “Download PDF” uses your chosen section order and toggles.",
      tipTwoCol:
        "Tip: “Download PDF” uses your chosen toggles. Two-column uses a fixed column layout for clarity.",

      // ✅ Default references line (US wording)
      referencesDefaultText: "References available upon request.",
    },

    sections: {
      summary: "Professional Summary",
      employment: "Employment history",
      qualifications: "Education & Certifications",
      skills: "Skills",
      references: "References",
    },
  },

  "en-AU": {
    label: "English (Australia)",
    currency: "AUD",
    cvLabel: "Resume",
    summaryLabel: "Professional Summary",
    spelling: "uk",
    referencesDefault: true,

    locale: "en-AU",
    htmlLang: "en-AU",

    ui: {
      backToBuilder: "Back to builder",
      backToBuilderBtn: "Back to builder",
      previewTitle: "Resume Preview",

      templateLabel: "Template",
      regionLabel: "Region",
      targetRoleLabel: "Target Role:",

      downloadPdf: "Download PDF",
      downloadPdfTitle: "Downloads a clean PDF (recommended)",
      printSavePdf: "Print / Save PDF",
      printTitle: "Uses browser print dialog",
      preparing: "Preparing…",

      exportLockedTitle: "Purchase access to unlock export",
      exportLockedBody: "Export is locked. Purchase access to download/print your resume.",

      noDataBody: "No resume data found yet. Go back and generate one.",
      noDataAlert: "No resume data found yet. Go back and generate one.",

      pdfFailed: "PDF download failed on this device.",
      pdfFailedHint: "Use “Print / Save PDF” instead (choose “Save as PDF”).",
      pdfFailedFallback:
        "PDF download failed. Use “Print / Save PDF” instead (choose “Save as PDF”).",

      roleFallback: "Role",

      exitTitle: "Before you leave this computer",
      exitBody:
        "Your resume has been downloaded and all personal information has been removed from this device.",
      exitBody2:
        "You may now safely close this window or return the computer to the next student.",
      returnToStart: "Return to start",

      teacherModeNotice:
        "Teacher Mode is enabled — data will be cleared after download/print.",
      studentSafeModeNotice:
        "Student Safe Mode is enabled — data will be cleared after download/print.",

      tipDefault: "Tip: “Download PDF” uses your chosen section order and toggles.",
      tipTwoCol:
        "Tip: “Download PDF” uses your chosen toggles. Two-column uses a fixed column layout for clarity.",

      // ✅ Default references line (AU usually matches UK phrasing)
      referencesDefaultText: "References available on request.",
    },

    sections: {
      summary: "Professional Summary",
      employment: "Employment history",
      qualifications: "Qualifications & Certifications",
      skills: "Skills",
      references: "References",
    },
  },

  // Optional UI languages (labels only — CV content can still be generated in English for now)
  "es-ES": {
    label: "Español (ES)",
    currency: "EUR",
    cvLabel: "CV",
    summaryLabel: "Resumen profesional",
    spelling: "uk",
    referencesDefault: false,

    locale: "es-ES",
    htmlLang: "es-ES",

    ui: {
      backToBuilder: "Volver al editor",
      backToBuilderBtn: "Volver al editor",
      previewTitle: "Vista previa del CV",

      templateLabel: "Plantilla",
      regionLabel: "Región",
      targetRoleLabel: "Puesto objetivo:",

      downloadPdf: "Descargar PDF",
      downloadPdfTitle: "Descarga un PDF limpio (recomendado)",
      printSavePdf: "Imprimir / Guardar PDF",
      printTitle: "Usa el cuadro de impresión del navegador",
      preparing: "Preparando…",

      exportLockedTitle: "Compra acceso para desbloquear la exportación",
      exportLockedBody:
        "La exportación está bloqueada. Compra acceso para descargar o imprimir tu CV.",

      noDataBody: "Aún no hay datos del CV. Vuelve y genera uno.",
      noDataAlert: "Aún no hay datos del CV. Vuelve y genera uno.",

      pdfFailed: "La descarga del PDF ha fallado en este dispositivo.",
      pdfFailedHint: "Usa “Imprimir / Guardar PDF” (elige “Guardar como PDF”).",
      pdfFailedFallback:
        "La descarga del PDF ha fallado. Usa “Imprimir / Guardar PDF” (elige “Guardar como PDF”).",

      roleFallback: "Puesto",

      exitTitle: "Antes de dejar este ordenador",
      exitBody:
        "Tu CV se ha descargado y toda la información personal se ha eliminado de este dispositivo.",
      exitBody2:
        "Ahora puedes cerrar esta ventana con seguridad o devolver el ordenador al siguiente alumno.",
      returnToStart: "Volver al inicio",

      teacherModeNotice:
        "El Modo Profesor está activado — los datos se eliminarán tras descargar/imprimir.",
      studentSafeModeNotice:
        "El Modo Seguro para Estudiantes está activado — los datos se eliminarán tras descargar/imprimir.",

      tipDefault:
        "Consejo: “Descargar PDF” usa el orden y los interruptores que has elegido.",
      tipTwoCol:
        "Consejo: “Descargar PDF” usa tus ajustes. Dos columnas utiliza un diseño fijo para mayor claridad.",

      // ✅ Default references line (fix stray English)
      referencesDefaultText: "Referencias disponibles a solicitud.",
    },

    sections: {
      summary: "Resumen profesional",
      employment: "Experiencia laboral",
      qualifications: "Cualificaciones y certificaciones",
      skills: "Competencias",
      references: "Referencias",
    },
  },

  "fr-FR": {
    label: "Français (FR)",
    currency: "EUR",
    cvLabel: "CV",
    summaryLabel: "Résumé professionnel",
    spelling: "uk",
    referencesDefault: false,

    locale: "fr-FR",
    htmlLang: "fr-FR",

    ui: {
      backToBuilder: "Retour à l’éditeur",
      backToBuilderBtn: "Retour à l’éditeur",
      previewTitle: "Aperçu du CV",

      templateLabel: "Modèle",
      regionLabel: "Région",
      targetRoleLabel: "Poste ciblé :",

      downloadPdf: "Télécharger le PDF",
      downloadPdfTitle: "Télécharge un PDF propre (recommandé)",
      printSavePdf: "Imprimer / Enregistrer PDF",
      printTitle: "Utilise la boîte d’impression du navigateur",
      preparing: "Préparation…",

      exportLockedTitle: "Achetez l’accès pour déverrouiller l’export",
      exportLockedBody:
        "L’export est verrouillé. Achetez l’accès pour télécharger/imprimer votre CV.",

      noDataBody: "Aucune donnée de CV pour l’instant. Revenez et générez-en un.",
      noDataAlert: "Aucune donnée de CV pour l’instant. Revenez et générez-en un.",

      pdfFailed: "Le téléchargement PDF a échoué sur cet appareil.",
      pdfFailedHint:
        "Utilisez « Imprimer / Enregistrer PDF » (choisissez « Enregistrer au format PDF »).",
      pdfFailedFallback:
        "Le téléchargement PDF a échoué. Utilisez « Imprimer / Enregistrer PDF » (choisissez « Enregistrer au format PDF »).",

      roleFallback: "Poste",

      exitTitle: "Avant de quitter cet ordinateur",
      exitBody:
        "Votre CV a été téléchargé et toutes les informations personnelles ont été supprimées de cet appareil.",
      exitBody2:
        "Vous pouvez maintenant fermer cette fenêtre en toute sécurité ou rendre l’ordinateur au prochain élève.",
      returnToStart: "Retour au début",

      teacherModeNotice:
        "Le mode Enseignant est activé — les données seront supprimées après téléchargement/impression.",
      studentSafeModeNotice:
        "Le mode sécurisé élève est activé — les données seront supprimées après téléchargement/impression.",

      tipDefault:
        "Astuce : « Télécharger le PDF » utilise l’ordre et les options sélectionnés.",
      tipTwoCol:
        "Astuce : « Télécharger le PDF » utilise vos réglages. Deux colonnes utilise une mise en page fixe pour plus de clarté.",

      // ✅ Default references line
      referencesDefaultText: "Références disponibles sur demande.",
    },

    sections: {
      summary: "Résumé professionnel",
      employment: "Expérience professionnelle",
      qualifications: "Qualifications et certifications",
      skills: "Compétences",
      references: "Références",
    },
  },

  "de-DE": {
    label: "Deutsch (DE)",
    currency: "EUR",
    cvLabel: "Lebenslauf",
    summaryLabel: "Profil",
    spelling: "uk",
    referencesDefault: false,

    locale: "de-DE",
    htmlLang: "de-DE",

    ui: {
      backToBuilder: "Zurück zum Editor",
      backToBuilderBtn: "Zurück zum Editor",
      previewTitle: "Vorschau Lebenslauf",

      templateLabel: "Vorlage",
      regionLabel: "Region",
      targetRoleLabel: "Zielposition:",

      downloadPdf: "PDF herunterladen",
      downloadPdfTitle: "Lädt ein sauberes PDF herunter (empfohlen)",
      printSavePdf: "Drucken / Als PDF speichern",
      printTitle: "Öffnet den Druckdialog des Browsers",
      preparing: "Wird vorbereitet…",

      exportLockedTitle: "Zugriff kaufen, um Export freizuschalten",
      exportLockedBody:
        "Der Export ist gesperrt. Kaufen Sie Zugriff, um Ihren Lebenslauf herunterzuladen/zu drucken.",

      noDataBody: "Noch keine Lebenslaufdaten. Gehen Sie zurück und erstellen Sie einen.",
      noDataAlert: "Noch keine Lebenslaufdaten. Gehen Sie zurück und erstellen Sie einen.",

      pdfFailed: "PDF-Download ist auf diesem Gerät fehlgeschlagen.",
      pdfFailedHint:
        "Nutzen Sie „Drucken / Als PDF speichern“ (wählen Sie „Als PDF speichern“).",
      pdfFailedFallback:
        "PDF-Download fehlgeschlagen. Nutzen Sie „Drucken / Als PDF speichern“ (wählen Sie „Als PDF speichern“).",

      roleFallback: "Position",

      exitTitle: "Bevor Sie diesen Computer verlassen",
      exitBody:
        "Ihr Lebenslauf wurde heruntergeladen und alle persönlichen Informationen wurden von diesem Gerät entfernt.",
      exitBody2:
        "Sie können dieses Fenster jetzt sicher schließen oder den Computer an den nächsten Schüler weitergeben.",
      returnToStart: "Zurück zum Start",

      teacherModeNotice:
        "Lehrermodus ist aktiv — Daten werden nach Download/Druck gelöscht.",
      studentSafeModeNotice:
        "Schüler-Sicherheitsmodus ist aktiv — Daten werden nach Download/Druck gelöscht.",

      tipDefault:
        "Tipp: „PDF herunterladen“ verwendet Ihre ausgewählte Reihenfolge und Optionen.",
      tipTwoCol:
        "Tipp: „PDF herunterladen“ verwendet Ihre Einstellungen. Zwei Spalten nutzt ein festes Layout für bessere Klarheit.",

      // ✅ Default references line
      referencesDefaultText: "Referenzen auf Anfrage verfügbar.",
    },

    sections: {
      summary: "Profil",
      employment: "Berufserfahrung",
      qualifications: "Qualifikationen und Zertifikate",
      skills: "Kompetenzen",
      references: "Referenzen",
    },
  },
} as const;

// ---- Compatibility exports ----
// Some parts of the app (or older code) expect these names:
export const LANGUAGE_PACKS = LANGUAGES;
export const languages = LANGUAGES;

/**
 * Normalise various user inputs into a supported key.
 * (Kept for backwards compatibility)
 */
export function normalizeLanguageKey(raw: unknown) {
  return normalizeLangKey(raw);
}

/**
 * ✅ Single source of truth: normalizeLangKey
 * (preview.js imports this name)
 */
export function normalizeLangKey(raw: unknown) {
  const s = String(raw || "").trim();
  if (!s) return "en-GB";

  // Normalise common casing: en-gb, en_GB, EN-gb, etc.
  const m = s.match(/^([a-z]{2})[-_]?([a-z]{2})$/i);
  if (m) {
    const key = `${m[1].toLowerCase()}-${m[2].toUpperCase()}`;
    return (key in LANGUAGES ? key : "en-GB") as keyof typeof LANGUAGES;
  }

  // Short forms / common inputs
  const short = s.toLowerCase();
  if (short === "en" || short === "uk") return "en-GB";
  if (short === "us") return "en-US";
  if (short === "au") return "en-AU";
  if (short === "es" || short === "es-es" || short === "español" || short === "espanol")
    return "es-ES";
  if (short === "fr" || short === "fr-fr") return "fr-FR";
  if (short === "de" || short === "de-de") return "de-DE";

  // Last resort
  return "en-GB";
}
