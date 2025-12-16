import { useEffect, useMemo, useState } from "react";

type Config = {
  teacherMode?: boolean;
  studentSafeMode?: boolean;
  region?: "UK" | "US" | "AU";
  template?: "classic" | "modern" | "compact";
  sections?: Record<string, boolean>;
};

type CreateResponse = {
  class_code: string;
  teacher_secret: string;
  expires_at?: string;
};

const DEFAULT_CONFIG: Config = {
  teacherMode: true,
  studentSafeMode: true,
  region: "UK",
  template: "modern",
  sections: {
    summary: true,
    skills: true,
    experience: true,
    education: true,
    projects: false,
    certifications: false,
    hobbies: false,
    references: false,
  },
};

export default function TeacherPage() {
  const [classCode, setClassCode] = useState("");
  const [teacherSecret, setTeacherSecret] = useState("");
  const [expiresAt, setExpiresAt] = useState<string | undefined>(undefined);

  const [config, setConfig] = useState<Config>(DEFAULT_CONFIG);
  const [status, setStatus] = useState<string>("");
  const [busy, setBusy] = useState(false);

  const studentJoinUrl = useMemo(() => {
    if (!classCode) return "";
    return `${window.location.origin}/?class=${encodeURIComponent(classCode)}`;
  }, [classCode]);

  async function createClass() {
    try {
      setBusy(true);
      setStatus("Creating class…");
      const res = await fetch("/api/class/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });

      const data = (await res.json()) as CreateResponse & { error?: string };
      if (!res.ok || data.error) throw new Error(data.error || "Failed to create class");

      setClassCode(data.class_code);
      setTeacherSecret(data.teacher_secret);
      setExpiresAt(data.expires_at);
      setStatus("Class created ✅ Now click “Push update” to send initial config.");
    } catch (e: any) {
      setStatus(`❌ ${e.message}`);
    } finally {
      setBusy(false);
    }
  }

  async function loadConfig() {
    try {
      if (!classCode) return setStatus("Enter a class code first.");
      setBusy(true);
      setStatus("Loading config…");

      const res = await fetch(`/api/class/config?code=${encodeURIComponent(classCode)}`);
      const data = (await res.json()) as { config?: Config; error?: string };
      if (!res.ok || data.error) throw new Error(data.error || "Failed to load config");

      setConfig((prev) => ({ ...prev, ...(data.config || {}) }));
      setStatus("Config loaded ✅");
    } catch (e: any) {
      setStatus(`❌ ${e.message}`);
    } finally {
      setBusy(false);
    }
  }

  async function pushUpdate() {
    try {
      if (!classCode || !teacherSecret) return setStatus("Need class code + teacher secret.");

      setBusy(true);
      setStatus("Pushing update…");

      const res = await fetch("/api/class/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // IMPORTANT: keys must match your API expectations
        body: JSON.stringify({
          class_code: classCode,
          teacher_secret: teacherSecret,
          config,
        }),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || data.error || !data.ok) throw new Error(data.error || "Update failed");

      setStatus("Update pushed ✅ Students will pick this up on next poll.");
    } catch (e: any) {
      setStatus(`❌ ${e.message}`);
    } finally {
      setBusy(false);
    }
  }

  function setSection(key: string, value: boolean) {
    setConfig((prev) => ({
      ...prev,
      sections: {
        ...(prev.sections || {}),
        [key]: value,
      },
    }));
  }

  return (
    <div style={{ maxWidth: 900, margin: "30px auto", padding: 16, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>CVCraft Classroom — Teacher Panel</h1>
      <p style={{ marginTop: 0, opacity: 0.8 }}>
        Create a class, control the template/sections, and push updates to all students.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
        <button disabled={busy} onClick={createClass} style={btn()}>
          + Create class
        </button>
        <button disabled={busy} onClick={loadConfig} style={btnSecondary()}>
          Load config
        </button>
        <button disabled={busy} onClick={pushUpdate} style={btnPrimary()}>
          Push update
        </button>
      </div>

      <div style={card()}>
        <h2 style={h2()}>Class details</h2>

        <label style={label()}>Class code</label>
        <input value={classCode} onChange={(e) => setClassCode(e.target.value.toUpperCase())} style={input()} placeholder="e.g. KDH3PL" />

        <label style={label()}>Teacher secret</label>
        <input value={teacherSecret} onChange={(e) => setTeacherSecret(e.target.value)} style={input()} placeholder="paste teacher secret" />

        {expiresAt && <p style={{ opacity: 0.8 }}>Expires: {expiresAt}</p>}

        {classCode && (
          <>
            <label style={label()}>Student join link</label>
            <input readOnly value={studentJoinUrl} style={input()} />
            <p style={{ opacity: 0.8, marginTop: 6 }}>
              Students go to that link (or your homepage with <code>?class=CODE</code>).
            </p>
          </>
        )}
      </div>

      <div style={card()}>
        <h2 style={h2()}>Controls</h2>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Toggle
            label="Teacher Mode"
            value={!!config.teacherMode}
            onChange={(v) => setConfig((p) => ({ ...p, teacherMode: v }))}
          />
          <Toggle
            label="Student Safe Mode"
            value={!!config.studentSafeMode}
            onChange={(v) => setConfig((p) => ({ ...p, studentSafeMode: v }))}
          />
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
          <div>
            <label style={label()}>Region</label>
            <select
              value={config.region || "UK"}
              onChange={(e) => setConfig((p) => ({ ...p, region: e.target.value as any }))}
              style={input()}
            >
              <option value="UK">UK</option>
              <option value="US">US</option>
              <option value="AU">AU</option>
            </select>
          </div>

          <div>
            <label style={label()}>Template</label>
            <select
              value={config.template || "modern"}
              onChange={(e) => setConfig((p) => ({ ...p, template: e.target.value as any }))}
              style={input()}
            >
              <option value="classic">Classic</option>
              <option value="modern">Modern</option>
              <option value="compact">Compact</option>
            </select>
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <h3 style={{ marginBottom: 8 }}>Allowed sections</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10 }}>
            {Object.entries(config.sections || {}).map(([key, val]) => (
              <Toggle key={key} label={key} value={!!val} onChange={(v) => setSection(key, v)} />
            ))}
          </div>
        </div>

        <p style={{ opacity: 0.8, marginTop: 14 }}>
          After changing anything, click <b>Push update</b>.
        </p>
      </div>

      <div style={{ marginTop: 12, padding: 12, borderRadius: 10, background: "#f6f6f6" }}>
        <b>Status:</b> {status || "—"}
      </div>
    </div>
  );
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
      <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} />
      <span style={{ textTransform: "none" }}>{label}</span>
    </label>
  );
}

function card(): React.CSSProperties {
  return {
    marginTop: 16,
    padding: 16,
    border: "1px solid #e6e6e6",
    borderRadius: 14,
    background: "white",
  };
}
function h2(): React.CSSProperties {
  return { marginTop: 0, marginBottom: 10, fontSize: 18 };
}
function label(): React.CSSProperties {
  return { display: "block", marginTop: 10, marginBottom: 6, fontSize: 13, opacity: 0.85 };
}
function input(): React.CSSProperties {
  return { width: "100%", padding: "10px 12px", borderRadius: 10, border: "1px solid #ddd" };
}
function btn(): React.CSSProperties {
  return { padding: "10px 14px", borderRadius: 12, border: "1px solid #ddd", background: "white", cursor: "pointer" };
}
function btnSecondary(): React.CSSProperties {
  return { ...btn(), background: "#fafafa" };
}
function btnPrimary(): React.CSSProperties {
  return { padding: "10px 14px", borderRadius: 12, border: "1px solid #111", background: "#111", color: "white", cursor: "pointer" };
}
