import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function SchoolsSuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const sessionId = searchParams?.session_id;

  if (!sessionId) {
    return (
      <main style={{ padding: 24 }}>
        <h1>Payment received</h1>
        <p>Missing session_id. Please contact support.</p>
        <Link href="/schools">Back to Schools</Link>
      </main>
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;
  const res = await fetch(`${siteUrl}/api/schools/provision`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify({ session_id: sessionId }),
  });

  const data = await res.json();

  if (!res.ok) {
    return (
      <main style={{ padding: 24 }}>
        <h1>Payment received</h1>
        <p>We couldn’t generate your school code automatically.</p>
        <pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(data, null, 2)}</pre>
        <Link href="/schools">Back to Schools</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: 24, maxWidth: 780 }}>
      <h1>School licence activated ✅</h1>
      <p>Here is your school access code (save it):</p>

      <div
        style={{
          padding: 16,
          border: "1px solid #ddd",
          borderRadius: 12,
          fontSize: 24,
          display: "inline-block",
        }}
      >
        <strong>{data.code}</strong>
      </div>

      {data.expiresAt && (
        <p style={{ marginTop: 10, opacity: 0.8 }}>
          Expires: {new Date(data.expiresAt).toLocaleDateString("en-GB")}
        </p>
      )}

      <p style={{ marginTop: 16 }}>
        Teachers can enter this code on the Schools page to unlock Teacher Mode.
      </p>

      <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
        <Link href="/schools">Go to Schools</Link>
        <Link href="/cv?teacher=1">Open Teacher Mode</Link>
      </div>
    </main>
  );
}
