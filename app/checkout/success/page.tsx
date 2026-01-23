// app/checkout/success/page.tsx
import SuccessClient from "./success-client";

export const dynamic = "force-dynamic";

type SP = Record<string, string | string[] | undefined>;

function first(sp: SP, key: string): string {
  const v = sp?.[key];
  if (Array.isArray(v)) return v[0] ?? "";
  return typeof v === "string" ? v : "";
}

function safeLocalPath(path: string, fallback: string) {
  if (!path) return fallback;
  if (!path.startsWith("/")) return fallback;
  if (path.startsWith("//")) return fallback;
  return path;
}

function normalizeProduct(p: string) {
  // keep strict, but don’t break if someone passes weird stuff
  const x = String(p || "").trim();
  if (x === "access_pass" || x === "extension" || x === "second_role") return x;
  return "access_pass";
}

export default function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: SP;
}) {
  const sessionId = first(searchParams, "session_id");
  const product = normalizeProduct(first(searchParams, "product") || "access_pass");
  const returnTo = safeLocalPath(first(searchParams, "return") || "/cv", "/cv");

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SuccessClient sessionId={sessionId} product={product} returnTo={returnTo} />
    </main>
  );
}
