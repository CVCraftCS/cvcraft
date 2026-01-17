// src/pages/cv.js
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import PaywallModal from "../components/PaywallModal";

const STORAGE_KEY = "cvcraft:lastResult";

// Pricing + access (single 30-day pass model)
const ACCESS_PRICE_LABEL = "£9.99";
const PRICING_PATH = "/pricing";

// ---- Teacher Mode ----
const TEACHER_MODE_SESSION_KEY = "cvcraft:teacherMode";
const TEACHER_PIN_SESSION_KEY = "cvcraft:teacherPinHash";

// ---- School access gate (session-only) ----
const SCHOOL_ACCESS_SESSION_KEY = "cvcraft:schoolAccess";

// Teacher Mode defaults (safe classroom preset)
const TEACHER_MODE_DEFAULTS = {
  template: "classic",
  region: "UK",

  // Locked features (for students)
  lockTemplate: true,
  lockOrdering: true,
  lockSectionToggles: true,
  lockPresets: true,
  lockRegion: true,
  lockStudentSafeMode: true,

  // Teacher-configurable (panel)
  enableEmployment: true,
  enableReferences: false,
};

// ---- Template meta (must match preview.js) ----
const TEMPLATE_META = {
  classic: { name: "Classic", premium: false },
  modern: { name: "Modern", premium: true },
  compact: { name: "Compact", premium: true },
};

// ---- helpers ----
function safeParse(jsonString) {
  try {
    return jsonString ? JSON.parse(jsonString) : null;
  } catch {
    return null;
  }
}

function skillsToText(skills) {
  if (!skills) return "";
  if (Array.isArray(skills)) return skills.join("\n");
  return String(skills);
}

function parseSkills(text) {
  return (text || "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

function parseBullets(text) {
  return (text || "")
    .split("\n")
    .map((l) => l.trim())
    .map((l) => l.replace(/^[•\-*]\s*/, "").trim())
    .filter(Boolean);
}

// Used to feed the AI if user doesn't paste a big experience blob
function jobsToExperienceText(jobs) {
  if (!Array.isArray(jobs) || !jobs.length) return "";

  const lines = [];
  for (const j of jobs) {
    const headerParts = [
      j.title ? j.title.trim() : "",
      j.company ? j.company.trim() : "",
    ].filter(Boolean);

    const metaParts = [
      j.location ? j.location.trim() : "",
      j.start ? j.start.trim() : "",
      j.end ? j.end.trim() : "",
    ].filter(Boolean);

    if (headerParts.length) lines.push(headerParts.join(" — "));
    if (metaParts.length) lines.push(metaParts.join(" | "));

    const bullets = Array.isArray(j.bullets) ? j.bullets : [];
    for (const b of bullets) lines.push(`- ${b}`);

    lines.push("");
  }

  return lines.join("\n").trim();
}

// ---- Teacher PIN helpers (session-only, hashed) ----
async function sha256Hex(str) {
  const enc = new TextEncoder().encode(str);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  return [...new Uint8Array(buf)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function getTeacherPinHash() {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(TEACHER_PIN_SESSION_KEY);
}

function setTeacherPinHash(hash) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(TEACHER_PIN_SESSION_KEY, hash);
}

async function verifyTeacherPin(pin) {
  const stored = getTeacherPinHash();
  if (!stored) return false;
  const hash = await sha256Hex(pin);
  return hash === stored;
}

// ---- school access helpers ----
function hasSchoolAccess() {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(SCHOOL_ACCESS_SESSION_KEY) === "1";
}

// ---- region helpers ----
function docLabel(region) {
  return region === "US" ? "Résumé" : "CV";
}

function locationPlaceholder(region) {
  if (region === "US") return "For example: Austin, TX";
  if (region === "AU") return "For example: Sydney, AU";
  return "For example: Rotherham, UK";
}

function phonePlaceholder(region) {
  if (region === "US") return "(555) 123-4567";
  if (region === "AU") return "04xx xxx xxx";
  return "07xxx xxx xxx";
}

function regionDefaults(region) {
  if (region === "US") {
    return {
      referencesEnabled: false,
      referencesText: "References available upon request.",
    };
  }
  return {
    referencesEnabled: true,
    referencesText: "References available on request.",
  };
}

// ---- section config defaults (must match preview.js) ----
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

function sectionLabel(key, region) {
  if (key === "summary") return "Professional Summary";
  if (key === "employment") return "Employment history";
  if (key === "qualifications")
    return region === "US" ? "Education & Certifications" : "Qualifications & Certifications";
  if (key === "skills") return "Skills";
  if (key === "references") return "References";
  return key;
}

/**
 * Region-aware presets.
 * NOTE: These presets only change presentation + what sections are shown.
 * They do not delete your entered data.
 */
function getPresetConfig(presetName, region) {
  const def = regionDefaults(region);

  const base = {
    referencesText: def.referencesText,
    referencesEnabled: def.referencesEnabled,
  };

  if (presetName === "student") {
    if (region === "US") {
      return {
        ...base,
        template: "compact",
        sectionConfig: {
          summary: true,
          skills: true,
          qualifications: true,
          employment: false,
          references: false,
        },
        sectionOrder: ["summary", "skills", "qualifications", "employment", "references"],
        notice: "Student Mode (US Résumé) applied — short, skills + education focused.",
      };
    }
    return {
      ...base,
      template: "compact",
      sectionConfig: {
        summary: true,
        skills: true,
        qualifications: true,
        employment: false,
        references: def.referencesEnabled,
      },
      sectionOrder: ["summary", "skills", "qualifications", "references", "employment"],
      notice: "Student Mode applied — ideal for school leavers and first jobs.",
    };
  }

  if (presetName === "apprenticeship") {
    if (region === "US") {
      return {
        ...base,
        template: "modern",
        sectionConfig: {
          summary: true,
          skills: true,
          qualifications: true,
          employment: true,
          references: false,
        },
        sectionOrder: ["summary", "skills", "qualifications", "employment", "references"],
        notice: "Apprenticeship Mode (US) applied — skills + education forward.",
      };
    }
    return {
      ...base,
      template: "modern",
      sectionConfig: {
        summary: true,
        skills: true,
        qualifications: true,
        employment: true,
        references: def.referencesEnabled,
      },
      sectionOrder: ["summary", "skills", "qualifications", "employment", "references"],
      notice: "Apprenticeship Mode applied — skills + qualifications forward.",
    };
  }

  if (presetName === "jobseeker") {
    if (region === "US") {
      return {
        ...base,
        template: "modern",
        sectionConfig: {
          summary: true,
          employment: true,
          skills: true,
          qualifications: true,
          references: false,
        },
        sectionOrder: ["summary", "employment", "skills", "qualifications", "references"],
        notice: "Jobseeker Mode (US Résumé) applied — experience-forward, references hidden.",
      };
    }
    return {
      ...base,
      template: "modern",
      sectionConfig: {
        summary: true,
        employment: true,
        skills: true,
        qualifications: true,
        references: def.referencesEnabled,
      },
      sectionOrder: ["summary", "employment", "skills", "qualifications", "references"],
      notice: "Jobseeker Mode applied — best for general applications.",
    };
  }

  return null;
}

export default function CVBuilderPage() {
  const router = useRouter();

  /**
   * ✅ HYDRATION FIX (critical)
   * We render a stable placeholder until the component mounts on the client.
   */
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // ✅ Paid access is cookie-verified ONLY (source of truth: /api/access/status)
  const [paidAccess, setPaidAccess] = useState(false);

  // Keep track of a requested template via URL (eg /cv?template=modern)
  const [urlTemplateRequest, setUrlTemplateRequest] = useState(null);

  const refreshPaidAccess = useCallback(async () => {
    if (typeof window === "undefined") return;

    try {
      const r = await fetch("/api/access/status", {
        method: "GET",
        credentials: "include",
        cache: "no-store",
        headers: { "Cache-Control": "no-store" },
      });

      const data = await r.json().catch(() => ({}));
      setPaidAccess(!!data?.ok);
    } catch {
      // If status endpoint fails, default to locked (secure-by-default)
      setPaidAccess(false);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Capture any template request from the URL once (client-only)
    try {
      const url = new URL(window.location.href);
      const t = (url.searchParams.get("template") || "").trim();
      if (t && TEMPLATE_META[t]) {
        setUrlTemplateRequest(t);
      }
    } catch {
      // ignore
    }

    refreshPaidAccess();

    // Keep access status fresh after returning from checkout / switching tabs
    const onVis = () => {
      if (document.visibilityState === "visible") refreshPaidAccess();
    };

    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [mounted, refreshPaidAccess]);

  // ---- Paywall state ----
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [paywallReason, setPaywallReason] = useState("template");
  const [pendingTemplate, setPendingTemplate] = useState(null);

  // Teacher UI availability gate
  const [teacherUiAllowed, setTeacherUiAllowed] = useState(false);

  // Region / template / sections
  const [region, setRegion] = useState("UK");
  const [template, setTemplate] = useState("classic");
  const [sectionConfig, setSectionConfig] = useState(DEFAULT_SECTION_CONFIG);
  const [sectionOrder, setSectionOrder] = useState(DEFAULT_SECTION_ORDER);
  const [referencesText, setReferencesText] = useState("References available on request.");

  // Safe modes
  const [studentSafeMode, setStudentSafeMode] = useState(false);
  const [teacherMode, setTeacherMode] = useState(false);

  // Teacher config + unlock
  const [teacherConfig, setTeacherConfig] = useState({ ...TEACHER_MODE_DEFAULTS });
  const [teacherUnlocked, setTeacherUnlocked] = useState(false);

  // Preset feedback
  const [presetNotice, setPresetNotice] = useState("");

  // Personal details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  // CV inputs
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [skillsText, setSkillsText] = useState("");

  // Qualifications (stable initial ids to avoid hydration mismatch)
  const [qualifications, setQualifications] = useState([
    { id: "q-1", title: "", provider: "", year: "", grade: "" },
  ]);

  // Employment History (stable initial ids to avoid hydration mismatch)
  const [employmentHistory, setEmploymentHistory] = useState([
    {
      id: "job-1",
      title: "",
      company: "",
      location: "",
      start: "",
      end: "",
      bulletsText: "",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const cleanedQualifications = useMemo(() => {
    return (qualifications || [])
      .map((q) => ({
        title: (q.title || "").trim(),
        provider: (q.provider || "").trim(),
        year: (q.year || "").trim(),
        grade: (q.grade || "").trim(),
      }))
      .filter((q) => q.title || q.provider || q.year || q.grade);
  }, [qualifications]);

  const cleanedJobs = useMemo(() => {
    return (employmentHistory || [])
      .map((j) => ({
        title: (j.title || "").trim(),
        company: (j.company || "").trim(),
        location: (j.location || "").trim(),
        start: (j.start || "").trim(),
        end: (j.end || "").trim(),
        bullets: parseBullets(j.bulletsText || ""),
      }))
      .filter((j) => j.title || j.company || j.location || j.start || j.end || j.bullets.length);
  }, [employmentHistory]);

  // Apply region defaults (references behaviour)
  const applyRegionDefaults = useCallback((nextRegion) => {
    const def = regionDefaults(nextRegion);
    setSectionConfig((prev) => ({
      ...prev,
      references: def.referencesEnabled,
    }));
    setReferencesText(def.referencesText);
  }, []);

  // Teacher lock helper
  const isTeacherLocked = (key) => {
    if (!teacherMode) return false;

    if (teacherUnlocked && key !== "studentSafeMode") return false;

    if (key === "template") return !!teacherConfig.lockTemplate;
    if (key === "ordering") return !!teacherConfig.lockOrdering;
    if (key === "sectionToggles") return !!teacherConfig.lockSectionToggles;
    if (key === "presets") return !!teacherConfig.lockPresets;
    if (key === "region") return !!teacherConfig.lockRegion;
    if (key === "studentSafeMode") return !!teacherConfig.lockStudentSafeMode;
    return false;
  };

  // ---- Paywall helpers ----
  const openPaywall = (reason) => {
    setPaywallReason(reason);
    setPaywallOpen(true);
  };

  const requestTemplateChange = (nextTemplate) => {
    if (!nextTemplate || !TEMPLATE_META[nextTemplate]) return;

    if (teacherMode && isTeacherLocked("template")) return;

    if (teacherMode) {
      setTemplate(nextTemplate);
      return;
    }

    const meta = TEMPLATE_META[nextTemplate] || { premium: false };

    // Premium templates require the 30-day pass (paid access)
    if (meta.premium && !paidAccess) {
      setPendingTemplate(nextTemplate);
      openPaywall("template");
      return;
    }

    setTemplate(nextTemplate);
  };

  // If the URL requested a template, apply it once we know access status.
  useEffect(() => {
    if (!mounted) return;
    if (teacherMode) return;
    if (!urlTemplateRequest) return;

    const t = urlTemplateRequest;
    const meta = TEMPLATE_META[t] || { premium: false };

    if (meta.premium && !paidAccess) {
      setPendingTemplate(t);
      openPaywall("template");
      return;
    }

    setTemplate(t);
    setUrlTemplateRequest(null);
  }, [mounted, teacherMode, paidAccess, urlTemplateRequest]);

  // ---- Teacher Mode actions ----
  const applyTeacherPreset = useCallback(
    (cfgOverride) => {
      const next = { ...teacherConfig, ...(cfgOverride || {}) };

      // Teacher Mode forces Student Safe Mode ON
      setStudentSafeMode(true);

      // Region + defaults
      setRegion(next.region);
      applyRegionDefaults(next.region);

      // Template
      setTemplate(next.template);

      // Sections baseline
      setSectionConfig((prev) => ({
        ...DEFAULT_SECTION_CONFIG,
        ...prev,
        summary: true,
        qualifications: true,
        skills: true,
        employment: !!next.enableEmployment,
        references: !!next.enableReferences,
      }));

      // Ordering: standard safe order
      setSectionOrder(DEFAULT_SECTION_ORDER);

      // References text follows region defaults
      const def = regionDefaults(next.region);
      setReferencesText(def.referencesText);
    },
    [teacherConfig, applyRegionDefaults]
  );

  const setTeacherModeEnabled = (enabled) => {
    setTeacherMode(enabled);

    if (typeof window !== "undefined") {
      if (enabled) {
        sessionStorage.setItem(TEACHER_MODE_SESSION_KEY, "1");
      } else {
        sessionStorage.removeItem(TEACHER_MODE_SESSION_KEY);
        // do NOT remove TEACHER_PIN_SESSION_KEY here
      }
    }

    if (enabled) {
      setTeacherUnlocked(false);
      applyTeacherPreset();
      setPresetNotice("Teacher Mode applied — locked classroom-safe settings.");
      setTimeout(() => setPresetNotice(""), 4500);
    } else {
      setTeacherUnlocked(false);
      setPresetNotice("Teacher Mode disabled.");
      setTimeout(() => setPresetNotice(""), 2500);
    }
  };

  const enableTeacherModeWithPin = async (pin) => {
    if (!/^\d{4}$/.test(pin)) {
      throw new Error("PIN must be exactly 4 digits.");
    }
    const hash = await sha256Hex(pin);
    setTeacherPinHash(hash);
    setTeacherModeEnabled(true);
  };

  const disableTeacherModeWithPin = async (pin) => {
    const ok = await verifyTeacherPin(pin);
    if (!ok) throw new Error("Incorrect PIN.");
    setTeacherModeEnabled(false);
  };

  const unlockTeacherControlsWithPin = async () => {
    try {
      const pin = window.prompt("Enter Teacher PIN to unlock teacher controls:");
      if (!pin) return;
      const ok = await verifyTeacherPin(pin);
      if (!ok) throw new Error("Incorrect PIN.");
      setTeacherUnlocked(true);
    } catch (e) {
      window.alert(e?.message || "Could not unlock teacher controls.");
    }
  };

  const lockTeacherControls = () => setTeacherUnlocked(false);

  const handleEnableTeacherMode = async () => {
    try {
      const existing = getTeacherPinHash();
      if (!existing) {
        const pin = window.prompt("Set a 4-digit Teacher PIN (session only):");
        if (!pin) return;
        await enableTeacherModeWithPin(pin);
        return;
      }
      setTeacherModeEnabled(true);
    } catch (e) {
      window.alert(e?.message || "Could not enable Teacher Mode.");
    }
  };

  const handleDisableTeacherMode = async () => {
    try {
      const pin = window.prompt("Enter Teacher PIN to disable Teacher Mode:");
      if (!pin) return;
      await disableTeacherModeWithPin(pin);
    } catch (e) {
      window.alert(e?.message || "Could not disable Teacher Mode.");
    }
  };

  // Apply a preset with region-awareness
  const applyPreset = (presetName) => {
    if (teacherMode && isTeacherLocked("presets")) return;

    const cfg = getPresetConfig(presetName, region);
    if (!cfg) return;

    if (!teacherMode) {
      const meta = TEMPLATE_META[cfg.template] || { premium: false };
      if (meta.premium && !paidAccess) {
        setPendingTemplate(cfg.template);
        openPaywall("template");
      } else {
        setTemplate(cfg.template);
      }
    } else {
      setTemplate(cfg.template);
    }

    setSectionConfig({ ...DEFAULT_SECTION_CONFIG, ...cfg.sectionConfig });

    const known = DEFAULT_SECTION_ORDER;
    const cleaned = (cfg.sectionOrder || []).filter((k) => known.includes(k));
    for (const k of known) if (!cleaned.includes(k)) cleaned.push(k);
    setSectionOrder(cleaned);

    setReferencesText(cfg.referencesText);

    setPresetNotice(cfg.notice || "Preset applied.");
    setTimeout(() => setPresetNotice(""), 4500);
  };

  /**
   * Teacher Mode UI is only available when visiting /cv?teacher=1
   * School gate should NEVER send user to /pricing from /cv.
   */
  const teacherGateRanRef = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (teacherGateRanRef.current) return;
    teacherGateRanRef.current = true;

    const url = new URL(window.location.href);
    const teacherParam = url.searchParams.get("teacher");
    const teacherUi = teacherParam === "1" || teacherParam === "true";
    if (!teacherUi) return;

    if (hasSchoolAccess()) return;

    (async () => {
      const code = window.prompt("Enter School Access Code:");
      if (!code) {
        router.replace("/cv");
        return;
      }

      try {
        const r = await fetch("/api/school/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        });

        const data = await r.json().catch(() => ({}));
        if (r.ok && data?.ok) {
          sessionStorage.setItem(SCHOOL_ACCESS_SESSION_KEY, "1");
          return;
        }

        router.replace("/cv");
      } catch (err) {
        console.error("School verify failed:", err);
        router.replace("/cv");
      }
    })();
  }, [router]);

  // Prefill form from last saved CV (sessionStorage first, then localStorage)
  // If Teacher Mode is active, do NOT prefill.
  const initPrefillRanRef = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!mounted) return;
    if (initPrefillRanRef.current) return;
    initPrefillRanRef.current = true;

    // Gate teacher UI via URL
    const url = new URL(window.location.href);
    const teacherParam = url.searchParams.get("teacher");
    const allowTeacherUi = teacherParam === "1" || teacherParam === "true";
    setTeacherUiAllowed(allowTeacherUi);

    // If public user (no ?teacher=1), hard-clear any old teacher flags so /cv never gets stuck.
    if (!allowTeacherUi) {
      sessionStorage.removeItem(TEACHER_MODE_SESSION_KEY);
      sessionStorage.removeItem(TEACHER_PIN_SESSION_KEY);
      sessionStorage.removeItem(SCHOOL_ACCESS_SESSION_KEY);
      setTeacherMode(false);
      setTeacherUnlocked(false);
    }

    const tmEnabled = sessionStorage.getItem(TEACHER_MODE_SESSION_KEY) === "1";
    if (tmEnabled) {
      setTeacherMode(true);
      setTeacherUnlocked(false);
      applyTeacherPreset();
      return;
    }

    const ss = sessionStorage.getItem(STORAGE_KEY);
    const ls = localStorage.getItem(STORAGE_KEY);
    const saved = safeParse(ss) || safeParse(ls);

    if (!saved?.input) return;

    const input = saved.input;

    const safeModeOn = !!input.studentSafeMode;
    setStudentSafeMode(safeModeOn);

    const r = input.region || "UK";
    setRegion(r);
    applyRegionDefaults(r);

    setTemplate(input.template || "classic");

    const incomingCfg =
      input.sectionConfig && typeof input.sectionConfig === "object" ? input.sectionConfig : null;
    if (incomingCfg) {
      setSectionConfig({ ...DEFAULT_SECTION_CONFIG, ...incomingCfg });
    }

    const incomingOrder = Array.isArray(input.sectionOrder) ? input.sectionOrder : null;
    if (incomingOrder && incomingOrder.length) {
      const known = DEFAULT_SECTION_ORDER;
      const cleaned = incomingOrder.filter((k) => known.includes(k));
      for (const k of known) if (!cleaned.includes(k)) cleaned.push(k);
      setSectionOrder(cleaned);
    }

    setReferencesText(input.referencesText || regionDefaults(r).referencesText);

    setName(input.name || "");
    setEmail(input.email || "");
    setPhone(input.phone || "");
    setLocation(input.location || "");

    setRole(input.role || "");
    setExperience(input.experience || "");
    setSkillsText(skillsToText(input.skills));

    const incomingQ = Array.isArray(input.qualifications) ? input.qualifications : [];
    if (incomingQ.length) {
      setQualifications(
        incomingQ.map((q, idx) => ({
          id: `q-${idx + 1}`,
          title: q.title || "",
          provider: q.provider || "",
          year: q.year || "",
          grade: q.grade || "",
        }))
      );
    }

    const incomingJobs = Array.isArray(input.employmentHistory) ? input.employmentHistory : [];
    if (incomingJobs.length) {
      setEmploymentHistory(
        incomingJobs.map((j, idx) => ({
          id: `job-${idx + 1}`,
          title: j.title || "",
          company: j.company || "",
          location: j.location || "",
          start: j.start || "",
          end: j.end || "",
          bulletsText: Array.isArray(j.bullets) ? j.bullets.join("\n") : j.bulletsText || "",
        }))
      );
    }

    // If safe mode was on, make sure we don't accidentally keep a persisted copy.
    if (safeModeOn) {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // ignore
      }
    }
  }, [mounted, applyTeacherPreset, applyRegionDefaults]);

  // ---- clear helpers ----
  const clearForm = () => {
    setErrorMsg("");
    setPresetNotice("");

    setTemplate("classic");
    setSectionConfig(DEFAULT_SECTION_CONFIG);
    setSectionOrder(DEFAULT_SECTION_ORDER);

    const def = regionDefaults(region);
    setReferencesText(def.referencesText);
    setSectionConfig((prev) => ({ ...prev, references: def.referencesEnabled }));

    setName("");
    setEmail("");
    setPhone("");
    setLocation("");

    setRole("");
    setExperience("");
    setSkillsText("");

    setQualifications([{ id: "q-1", title: "", provider: "", year: "", grade: "" }]);

    setEmploymentHistory([
      { id: "job-1", title: "", company: "", location: "", start: "", end: "", bulletsText: "" },
    ]);
  };

  const clearSavedData = () => {
    if (typeof window === "undefined") return;

    const ok = window.confirm("This will remove all saved information from this device. Continue?");
    if (!ok) return;

    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(STORAGE_KEY);

    clearForm();
  };

  // ---- section controls ----
  const toggleSection = (key) => {
    if (teacherMode && isTeacherLocked("sectionToggles")) return;
    setSectionConfig((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const moveSection = (key, dir) => {
    if (teacherMode && isTeacherLocked("ordering")) return;

    setSectionOrder((prev) => {
      const arr = [...prev];
      const idx = arr.indexOf(key);
      if (idx === -1) return arr;
      const nextIdx = dir === "up" ? idx - 1 : idx + 1;
      if (nextIdx < 0 || nextIdx >= arr.length) return arr;
      const tmp = arr[idx];
      arr[idx] = arr[nextIdx];
      arr[nextIdx] = tmp;
      return arr;
    });
  };

  async function handleGenerate(e) {
    e.preventDefault();
    setErrorMsg("");
    setIsLoading(true);

    const trimmedExperience = (experience || "").trim();
    const autoExperience = jobsToExperienceText(cleanedJobs);
    const experienceForAI = trimmedExperience || autoExperience;

    if (!experienceForAI) {
      setErrorMsg("Please add either experience text OR at least one job in Employment History.");
      setIsLoading(false);
      return;
    }

    const payload = {
      region,
      template,

      sectionConfig,
      sectionOrder,
      referencesText: (referencesText || "").trim() || regionDefaults(region).referencesText,

      // force true if Teacher Mode (safety)
      studentSafeMode: studentSafeMode || teacherMode,

      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      location: location.trim(),

      role: role.trim(),
      experience: trimmedExperience,
      skills: parseSkills(skillsText),

      qualifications: cleanedQualifications,
      employmentHistory: cleanedJobs,
    };

    const apiPayload = {
      role: payload.role,
      experience: experienceForAI,
      skills: payload.skills,
    };

    try {
      const res = await fetch("/api/generate-cv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(apiPayload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const msg = data?.error || `Request failed (${res.status})`;
        throw new Error(msg);
      }

      const resultText = data?.result;
      if (!resultText || typeof resultText !== "string") {
        throw new Error("API returned no result text (expected { result: string }).");
      }

      const saved = {
        input: payload,
        result: resultText,
        createdAt: new Date().toISOString(),
      };

      // Always store for preview in session
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(saved));

      // NEVER persist in Student Safe Mode OR Teacher Mode
      const persistAllowed = !studentSafeMode && !teacherMode;
      if (persistAllowed) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }

      router.push("/preview");
    } catch (err) {
      setErrorMsg(err?.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }

  const labelDoc = docLabel(region);

  // Teacher panel change handlers (teacher-only)
  const teacherSetRegion = (nextRegion) => {
    setTeacherConfig((prev) => {
      const next = { ...prev, region: nextRegion };
      applyTeacherPreset(next);
      return next;
    });
  };

  const teacherToggleEmployment = () => {
    setTeacherConfig((prev) => {
      const next = { ...prev, enableEmployment: !prev.enableEmployment };
      applyTeacherPreset(next);
      return next;
    });
  };

  const teacherToggleReferences = () => {
    setTeacherConfig((prev) => {
      const next = { ...prev, enableReferences: !prev.enableReferences };
      applyTeacherPreset(next);
      return next;
    });
  };

  // Locked flags (keep logic, but we won't show padlock icons)
  const modernLocked = !teacherMode && TEMPLATE_META.modern.premium && !paidAccess;
  const compactLocked = !teacherMode && TEMPLATE_META.compact.premium && !paidAccess;

  // ✅ Hydration guard
  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="text-slate-300 hover:text-white"
            type="button"
          >
            ← Back
          </button>

          <div className="flex items-center gap-4">
            {teacherUiAllowed ? (
              teacherMode ? (
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-emerald-400/20 text-emerald-200 ring-1 ring-emerald-400/30 px-3 py-1 text-xs font-semibold">
                    🔒 Teacher Mode Active
                  </span>

                  {!teacherUnlocked ? (
                    <button
                      type="button"
                      onClick={unlockTeacherControlsWithPin}
                      className="text-sm text-emerald-200 hover:text-emerald-100 underline underline-offset-4"
                      title="Unlock teacher-only controls (PIN required)"
                    >
                      Teacher controls
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={lockTeacherControls}
                      className="text-sm text-emerald-200 hover:text-emerald-100 underline underline-offset-4"
                      title="Hide/lock teacher controls"
                    >
                      Lock controls
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={handleDisableTeacherMode}
                    className="text-sm text-emerald-200 hover:text-emerald-100 underline underline-offset-4"
                    title="Disable Teacher Mode (PIN required)"
                  >
                    Disable Teacher Mode
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleEnableTeacherMode}
                  className="text-sm text-emerald-200 hover:text-emerald-100 underline underline-offset-4"
                  title="Enable Teacher Mode (PIN protected, session only)"
                >
                  Enable Teacher Mode
                </button>
              )
            ) : null}

            <button
              onClick={clearForm}
              type="button"
              className="text-sm text-slate-300 hover:text-white underline underline-offset-4"
              title="Clears the current form fields"
            >
              Clear form
            </button>

            <button
              onClick={clearSavedData}
              type="button"
              className="text-sm text-red-300 hover:text-red-200 underline underline-offset-4"
              title="Removes all saved information from this device"
            >
              Clear saved data
            </button>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-2">Build your {labelDoc}</h1>
        <p className="text-slate-300 mb-6">
          Add your details, build your history, and generate a recruiter-ready {labelDoc}.
        </p>

        {teacherMode ? (
          <div className="mb-4 rounded-2xl bg-emerald-950/40 border border-emerald-400/30 px-4 py-3 text-emerald-100">
            🔒 Teacher Mode is active. Student Safe Mode is locked ON and no data is saved to this device.
          </div>
        ) : null}

        {/* Teacher Control Panel (PIN-gated) */}
        {teacherUiAllowed && teacherMode && teacherUnlocked ? (
          <div className="mb-8 rounded-2xl bg-emerald-950/30 border border-emerald-400/20 p-6 space-y-4">
            <h2 className="text-lg font-semibold">Teacher controls</h2>
            <p className="text-sm text-emerald-100/90">
              These settings are teacher-only (PIN unlocked). They do not disable safety features.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold mb-2">Classroom region</label>
                <select
                  value={teacherConfig.region}
                  onChange={(e) => teacherSetRegion(e.target.value)}
                  className="w-full rounded-xl px-4 py-3 text-black"
                >
                  <option value="UK">United Kingdom (UK)</option>
                  <option value="US">United States (US)</option>
                  <option value="AU">Australia (AU)</option>
                </select>
              </div>

              <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 text-sm text-emerald-100">
                <div className="font-semibold mb-1">What this affects:</div>
                <div>Headings + conventions (CV vs Résumé, references norms)</div>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <button
                type="button"
                onClick={teacherToggleEmployment}
                className={`rounded-xl px-4 py-3 text-sm font-semibold ring-1 transition ${
                  teacherConfig.enableEmployment
                    ? "bg-white text-slate-900 ring-white"
                    : "bg-white/5 text-white ring-white/10 hover:bg-white/10"
                }`}
              >
                {teacherConfig.enableEmployment ? "✓ Employment enabled" : "Employment disabled"}
              </button>

              <button
                type="button"
                onClick={teacherToggleReferences}
                className={`rounded-xl px-4 py-3 text-sm font-semibold ring-1 transition ${
                  teacherConfig.enableReferences
                    ? "bg-white text-slate-900 ring-white"
                    : "bg-white/5 text-white ring-white/10 hover:bg-white/10"
                }`}
              >
                {teacherConfig.enableReferences ? "✓ References enabled" : "References disabled"}
              </button>
            </div>

            <div className="text-xs text-emerald-100/80">
              Safety note: Student Safe Mode remains locked ON and local storage remains disabled in Teacher Mode.
            </div>
          </div>
        ) : null}

        {/* --- FORM --- */}
        <form onSubmit={handleGenerate} className="space-y-8">
          {/* Region */}
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 space-y-3">
            <h2 className="text-lg font-semibold">Region</h2>
            <p className="text-sm text-slate-300">
              Adjusts wording and default conventions (CV vs Résumé, references norms, headings).
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold mb-2">Select region</label>
                <select
                  value={region}
                  onChange={(e) => {
                    if (teacherMode && isTeacherLocked("region")) return;
                    const next = e.target.value;
                    setRegion(next);
                    applyRegionDefaults(next);
                  }}
                  disabled={teacherMode && isTeacherLocked("region")}
                  className={`w-full rounded-xl px-4 py-3 text-black ${
                    teacherMode && isTeacherLocked("region") ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  <option value="UK">United Kingdom (UK)</option>
                  <option value="US">United States (US)</option>
                  <option value="AU">Australia (AU)</option>
                </select>
              </div>

              <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 text-sm text-slate-200">
                <div className="font-semibold mb-1">Current output:</div>
                <div>{labelDoc}</div>
                <div className="text-slate-300 mt-2">
                  Presets below will adapt to this region automatically.
                </div>
              </div>
            </div>
          </div>

          {/* Presets */}
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 space-y-4">
            <h2 className="text-lg font-semibold">Quick start presets (region-aware)</h2>
            <p className="text-sm text-slate-300">
              One-click setup for common use cases. These adapt to {region} conventions.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <button
                type="button"
                onClick={() => applyPreset("student")}
                disabled={teacherMode && isTeacherLocked("presets")}
                className={`rounded-2xl bg-white text-slate-900 p-4 text-left font-semibold hover:bg-slate-100 transition ${
                  teacherMode && isTeacherLocked("presets") ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                Student Mode
                <div className="mt-1 text-sm font-normal text-slate-700">
                  Skills + education forward. Great for first CVs.
                </div>
              </button>

              <button
                type="button"
                onClick={() => applyPreset("apprenticeship")}
                disabled={teacherMode && isTeacherLocked("presets")}
                className={`rounded-2xl bg-white text-slate-900 p-4 text-left font-semibold hover:bg-slate-100 transition ${
                  teacherMode && isTeacherLocked("presets") ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                Apprenticeship Mode
                <div className="mt-1 text-sm font-normal text-slate-700">
                  Skills + qualifications high priority.
                </div>
              </button>

              <button
                type="button"
                onClick={() => applyPreset("jobseeker")}
                disabled={teacherMode && isTeacherLocked("presets")}
                className={`rounded-2xl bg-white text-slate-900 p-4 text-left font-semibold hover:bg-slate-100 transition ${
                  teacherMode && isTeacherLocked("presets") ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                Jobseeker Mode
                <div className="mt-1 text-sm font-normal text-slate-700">
                  Experience-forward for general applications.
                </div>
              </button>
            </div>

            {presetNotice ? (
              <div className="rounded-xl bg-emerald-950/40 border border-emerald-400/40 px-4 py-3 text-emerald-100">
                {presetNotice}
              </div>
            ) : null}
          </div>

          {/* Student Safe Mode */}
          <div className="rounded-2xl bg-amber-950/30 p-6 ring-1 ring-amber-400/30 space-y-3">
            <h2 className="text-lg font-semibold text-amber-200">
              Student Safe Mode (recommended for schools)
            </h2>

            <p className="text-sm text-amber-100">
              Prevents personal information from being stored on shared computers. When enabled, data is
              saved temporarily for preview, then cleared automatically after PDF download/print.
            </p>

            <button
              type="button"
              onClick={() => {
                if (teacherMode && isTeacherLocked("studentSafeMode")) return;
                setStudentSafeMode((v) => !v);
              }}
              disabled={teacherMode && isTeacherLocked("studentSafeMode")}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold ring-1 transition ${
                studentSafeMode || teacherMode
                  ? "bg-amber-400 text-amber-950 ring-amber-400"
                  : "bg-white/5 text-white ring-white/10 hover:bg-white/10"
              } ${teacherMode && isTeacherLocked("studentSafeMode") ? "opacity-60 cursor-not-allowed" : ""}`}
              aria-pressed={studentSafeMode || teacherMode ? "true" : "false"}
              title={teacherMode ? "Locked in Teacher Mode" : undefined}
            >
              {studentSafeMode || teacherMode ? "✓ Enabled" : "Enable Student Safe Mode"}
            </button>
          </div>

          {/* Template selector */}
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 space-y-4">
            <h2 className="text-lg font-semibold">{labelDoc} template</h2>
            <p className="text-sm text-slate-300">
              Choose a style. This affects both the preview and the PDF.
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              <button
                type="button"
                onClick={() => requestTemplateChange("classic")}
                disabled={teacherMode && isTeacherLocked("template")}
                className={`rounded-2xl p-4 text-left ring-1 transition ${
                  template === "classic"
                    ? "bg-white text-slate-900 ring-white"
                    : "bg-white/5 text-white ring-white/10 hover:bg-white/10"
                } ${teacherMode && isTeacherLocked("template") ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                <div className="font-semibold">Classic</div>
                <div className={`${template === "classic" ? "text-slate-700" : "text-slate-300"} text-sm mt-1`}>
                  Traditional, safe, recruiter-friendly.
                </div>
              </button>

              <button
                type="button"
                onClick={() => requestTemplateChange("modern")}
                disabled={teacherMode && isTeacherLocked("template")}
                className={`rounded-2xl p-4 text-left ring-1 transition ${
                  template === "modern"
                    ? "bg-white text-slate-900 ring-white"
                    : "bg-white/5 text-white ring-white/10 hover:bg-white/10"
                } ${teacherMode && isTeacherLocked("template") ? "opacity-60 cursor-not-allowed" : ""}`}
                aria-disabled={teacherMode && isTeacherLocked("template")}
                title={modernLocked ? `Premium template — unlock for ${ACCESS_PRICE_LABEL}` : undefined}
              >
                <div className="font-semibold">Modern</div>
                <div className={`${template === "modern" ? "text-slate-700" : "text-slate-300"} text-sm mt-1`}>
                  Cleaner typography, stronger hierarchy.
                </div>
              </button>

              <button
                type="button"
                onClick={() => requestTemplateChange("compact")}
                disabled={teacherMode && isTeacherLocked("template")}
                className={`rounded-2xl p-4 text-left ring-1 transition ${
                  template === "compact"
                    ? "bg-white text-slate-900 ring-white"
                    : "bg-white/5 text-white ring-white/10 hover:bg-white/10"
                } ${teacherMode && isTeacherLocked("template") ? "opacity-60 cursor-not-allowed" : ""}`}
                aria-disabled={teacherMode && isTeacherLocked("template")}
                title={compactLocked ? `Premium template — unlock for ${ACCESS_PRICE_LABEL}` : undefined}
              >
                <div className="font-semibold">Compact</div>
                <div className={`${template === "compact" ? "text-slate-700" : "text-slate-300"} text-sm mt-1`}>
                  Tighter spacing for 1-page outputs.
                </div>
              </button>
            </div>
          </div>

          {/* Section builder */}
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 space-y-4">
            <h2 className="text-lg font-semibold">Sections</h2>
            <p className="text-sm text-slate-300">
              Toggle sections on/off and choose the order shown in Preview + PDF.
            </p>

            <div className="space-y-3">
              {sectionOrder.map((key) => (
                <div
                  key={key}
                  className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => toggleSection(key)}
                      disabled={teacherMode && isTeacherLocked("sectionToggles")}
                      className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold ring-1 transition ${
                        sectionConfig[key]
                          ? "bg-white text-slate-900 ring-white"
                          : "bg-white/5 text-white ring-white/10 hover:bg-white/10"
                      } ${teacherMode && isTeacherLocked("sectionToggles") ? "opacity-60 cursor-not-allowed" : ""}`}
                      aria-pressed={sectionConfig[key] ? "true" : "false"}
                      title={teacherMode ? "Locked in Teacher Mode" : undefined}
                    >
                      {sectionConfig[key] ? "✓ Enabled" : "Disabled"}
                    </button>

                    <div>
                      <div className="font-semibold">{sectionLabel(key, region)}</div>
                      {key === "references" ? (
                        <div className="text-xs text-slate-300">
                          Region note: US résumés usually hide references.
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => moveSection(key, "up")}
                      disabled={teacherMode && isTeacherLocked("ordering")}
                      className={`rounded-xl bg-white/5 px-3 py-2 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10 ${
                        teacherMode && isTeacherLocked("ordering") ? "opacity-60 cursor-not-allowed" : ""
                      }`}
                      title={teacherMode ? "Locked in Teacher Mode" : "Move up"}
                    >
                      ↑
                    </button>
                    <button
                      type="button"
                      onClick={() => moveSection(key, "down")}
                      disabled={teacherMode && isTeacherLocked("ordering")}
                      className={`rounded-xl bg-white/5 px-3 py-2 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10 ${
                        teacherMode && isTeacherLocked("ordering") ? "opacity-60 cursor-not-allowed" : ""
                      }`}
                      title={teacherMode ? "Locked in Teacher Mode" : "Move down"}
                    >
                      ↓
                    </button>
                  </div>

                  {key === "references" && sectionConfig.references ? (
                    <div className="sm:col-span-2 w-full">
                      <label className="block text-sm font-semibold mb-2">References text</label>
                      <input
                        value={referencesText}
                        onChange={(e) => setReferencesText(e.target.value)}
                        placeholder={regionDefaults(region).referencesText}
                        className="w-full rounded-xl px-4 py-3 text-black placeholder:text-slate-400"
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          {/* Personal details */}
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 space-y-3">
            <h2 className="text-lg font-semibold">Personal details</h2>
            <p className="text-sm text-slate-300">
              Saved locally in your browser (not uploaded). If you are using this service on a shared computer,
              enable “Student Safe Mode”.
            </p>

            <div className="space-y-5 pt-2">
              <div>
                <label className="block text-sm font-semibold mb-2">Full name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="For example: Alex Smith"
                  className="w-full rounded-xl px-4 py-3 text-black placeholder:text-slate-400"
                  required
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com"
                    className="w-full rounded-xl px-4 py-3 text-black placeholder:text-slate-400"
                    type="email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={phonePlaceholder(region)}
                    className="w-full rounded-xl px-4 py-3 text-black placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Location</label>
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder={locationPlaceholder(region)}
                  className="w-full rounded-xl px-4 py-3 text-black placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold">{sectionLabel("qualifications", region)}</h2>
                <p className="text-sm text-slate-300">
                  Add any qualifications, courses, licences, or certificates (optional).
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setQualifications((prev) => [
                    ...(prev || []),
                    {
                      id: `q-${(prev?.length || 0) + 1}`,
                      title: "",
                      provider: "",
                      year: "",
                      grade: "",
                    },
                  ])
                }
                className="rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-slate-100"
              >
                + Add
              </button>
            </div>

            <div className="space-y-4">
              {qualifications.map((q, idx) => (
                <div key={q.id} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-slate-200">Item {idx + 1}</div>

                    <button
                      type="button"
                      onClick={() => {
                        setQualifications((prev) => {
                          const next = (prev || []).filter((x) => x.id !== q.id);
                          return next.length
                            ? next
                            : [{ id: "q-1", title: "", provider: "", year: "", grade: "" }];
                        });
                      }}
                      className="text-sm text-slate-300 hover:text-white underline underline-offset-4"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2">
                        {region === "US" ? "Education / Certificate" : "Qualification / Certificate"}
                      </label>
                      <input
                        value={q.title}
                        onChange={(e) =>
                          setQualifications((prev) =>
                            (prev || []).map((x) => (x.id === q.id ? { ...x, title: e.target.value } : x))
                          )
                        }
                        placeholder={
                          region === "US"
                            ? "e.g. High School Diploma, OSHA 10, CPR"
                            : "e.g. GCSEs, NVQ Level 2, First Aid"
                        }
                        className="w-full rounded-xl px-4 py-3 text-black placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">School / College / Provider</label>
                      <input
                        value={q.provider}
                        onChange={(e) =>
                          setQualifications((prev) =>
                            (prev || []).map((x) => (x.id === q.id ? { ...x, provider: e.target.value } : x))
                          )
                        }
                        placeholder={region === "US" ? "e.g. Lincoln High School" : "e.g. College Name"}
                        className="w-full rounded-xl px-4 py-3 text-black placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Year</label>
                      <input
                        value={q.year}
                        onChange={(e) =>
                          setQualifications((prev) =>
                            (prev || []).map((x) => (x.id === q.id ? { ...x, year: e.target.value } : x))
                          )
                        }
                        placeholder="e.g. 2025"
                        className="w-full rounded-xl px-4 py-3 text-black placeholder:text-slate-400"
                        inputMode="numeric"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2">Grade / Result (optional)</label>
                      <input
                        value={q.grade}
                        onChange={(e) =>
                          setQualifications((prev) =>
                            (prev || []).map((x) => (x.id === q.id ? { ...x, grade: e.target.value } : x))
                          )
                        }
                        placeholder={region === "US" ? "e.g. GPA 3.6, Honors" : "e.g. Grade 6, Pass"}
                        className="w-full rounded-xl px-4 py-3 text-black placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Employment history */}
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold">Employment history</h2>
                <p className="text-sm text-slate-300">
                  Add roles one-by-one. If you fill this in, you can leave the “Experience text” box empty.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setEmploymentHistory((prev) => [
                    ...(prev || []),
                    {
                      id: `job-${(prev?.length || 0) + 1}`,
                      title: "",
                      company: "",
                      location: "",
                      start: "",
                      end: "",
                      bulletsText: "",
                    },
                  ])
                }
                className="rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-slate-100"
              >
                + Add role
              </button>
            </div>

            <div className="space-y-4">
              {employmentHistory.map((j, idx) => (
                <div key={j.id} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-slate-200">Role {idx + 1}</div>

                    <button
                      type="button"
                      onClick={() => {
                        setEmploymentHistory((prev) => {
                          const next = (prev || []).filter((x) => x.id !== j.id);
                          return next.length
                            ? next
                            : [
                                {
                                  id: "job-1",
                                  title: "",
                                  company: "",
                                  location: "",
                                  start: "",
                                  end: "",
                                  bulletsText: "",
                                },
                              ];
                        });
                      }}
                      className="text-sm text-slate-300 hover:text-white underline underline-offset-4"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Job title</label>
                      <input
                        value={j.title}
                        onChange={(e) =>
                          setEmploymentHistory((prev) =>
                            (prev || []).map((x) => (x.id === j.id ? { ...x, title: e.target.value } : x))
                          )
                        }
                        placeholder="e.g. Retail Assistant"
                        className="w-full rounded-xl px-4 py-3 text-black placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Company</label>
                      <input
                        value={j.company}
                        onChange={(e) =>
                          setEmploymentHistory((prev) =>
                            (prev || []).map((x) => (x.id === j.id ? { ...x, company: e.target.value } : x))
                          )
                        }
                        placeholder="e.g. Tesco"
                        className="w-full rounded-xl px-4 py-3 text-black placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Location (optional)</label>
                      <input
                        value={j.location}
                        onChange={(e) =>
                          setEmploymentHistory((prev) =>
                            (prev || []).map((x) => (x.id === j.id ? { ...x, location: e.target.value } : x))
                          )
                        }
                        placeholder={
                          region === "US"
                            ? "e.g. Dallas, TX"
                            : region === "AU"
                            ? "e.g. Brisbane"
                            : "e.g. Sheffield"
                        }
                        className="w-full rounded-xl px-4 py-3 text-black placeholder:text-slate-400"
                      />
                    </div>

                    <div className="grid gap-4 grid-cols-2">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Start</label>
                        <input
                          value={j.start}
                          onChange={(e) =>
                            setEmploymentHistory((prev) =>
                              (prev || []).map((x) => (x.id === j.id ? { ...x, start: e.target.value } : x))
                            )
                          }
                          placeholder="e.g. 2024"
                          className="w-full rounded-xl px-4 py-3 text-black placeholder:text-slate-400"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">End</label>
                        <input
                          value={j.end}
                          onChange={(e) =>
                            setEmploymentHistory((prev) =>
                              (prev || []).map((x) => (x.id === j.id ? { ...x, end: e.target.value } : x))
                            )
                          }
                          placeholder="e.g. Present"
                          className="w-full rounded-xl px-4 py-3 text-black placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2">
                        Responsibilities / achievements (one per line)
                      </label>
                      <textarea
                        value={j.bulletsText}
                        onChange={(e) =>
                          setEmploymentHistory((prev) =>
                            (prev || []).map((x) => (x.id === j.id ? { ...x, bulletsText: e.target.value } : x))
                          )
                        }
                        placeholder={`For example:
Served customers and handled payments
Maintained stock and kept displays tidy
Worked as part of a team under pressure`}
                        className="w-full min-h-[120px] rounded-xl px-4 py-3 text-black placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Remaining inputs */}
          <div>
            <label className="block text-sm font-semibold mb-2">Target role title</label>
            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="For example: Warehouse Supervisor"
              className="w-full rounded-xl px-4 py-3 text-black placeholder:text-slate-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Experience text (optional if you filled in Employment history)
            </label>
            <textarea
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Optional: paste your work history as one block (or leave blank if you added roles above)."
              className="w-full min-h-[180px] rounded-xl px-4 py-3 text-black placeholder:text-slate-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Skills (one per line, optional)</label>
            <textarea
              value={skillsText}
              onChange={(e) => setSkillsText(e.target.value)}
              placeholder={`For example:
Teamwork
Communication
Timekeeping`}
              className="w-full min-h-[110px] rounded-xl px-4 py-3 text-black placeholder:text-slate-400"
            />
          </div>

          {errorMsg ? (
            <div className="rounded-xl border border-red-400 bg-red-950/40 px-4 py-3 text-red-200">
              {errorMsg}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={isLoading}
            className="rounded-xl bg-white text-black px-6 py-3 font-semibold disabled:opacity-60"
          >
            {isLoading ? "Generating..." : `Generate ${labelDoc}`}
          </button>
        </form>

        {/* Paywall modal */}
        <PaywallModal
          open={paywallOpen}
          reason={paywallReason}
          onClose={() => {
            setPaywallOpen(false);
            setPendingTemplate(null);
          }}
          onPreviewAnyway={() => {
            if (pendingTemplate) setTemplate(pendingTemplate);
            setPendingTemplate(null);
            setPaywallOpen(false);
          }}
          onUnlockClick={() => {
            const returnPath = pendingTemplate
              ? `/cv?template=${encodeURIComponent(pendingTemplate)}`
              : "/cv";

            const params = new URLSearchParams();
            params.set("return", returnPath);
            params.set("intent", "access");
            params.set("price", ACCESS_PRICE_LABEL);
            if (pendingTemplate) params.set("template", pendingTemplate);

            router.push(`${PRICING_PATH}?${params.toString()}`);
          }}
        />
      </div>
    </div>
  );
}
