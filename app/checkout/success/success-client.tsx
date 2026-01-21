"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function safeLocalPath(path: string | null, fallback: string) {
  if (!path) return fallback;
  if (!path.startsWith("/")) return fallback;
  if (path.startsWith("//")) return fallback;
  return path;
}

type Status = "verifying" | "ok" | "error";

export default function SuccessClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sessionId = useMemo(() => searchParams.get("session_id") || "", [searchParams]);

  const product = useMemo(
    () => (searchParams.get("product") || "access_pass") as string,
    [searchParams]
  );

  const returnTo = useMemo(
    () => safeLocalPath(searchParams.get("return"), "/cv"),
    [searchParams]
  );

  const [status, setStatus] = useState<Status>("verifying");
  const [message, setMessage] = useState<string>("Verifying your payment…");
  const [detail, setDetail] = useState<string | null>(null);

  useEffect(() => {
    // IMPORTANT:
    // Do NOT block double-run with a didRun ref.
    // In React Strict Mode (dev), effects mount -> cleanup -> mount again.
    // A "didRun" guard can prevent the second (real) run, leaving the UI stuck.
    if (!sessionId) {
      setStatus("error");
      setMessage("We couldn’t verify your payment.");
      setDetail("Missing session_id.");
      return;
    }

    const ac = new AbortController();
    let redirected = false;

    async function run() {
      try {
        setStatus("verifying");
        setMessage("Verifying your payment…");
        setDetail(null);

        const res = await fetch("/api/access/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          cache: "no-store",
          signal: ac.signal,
          body: JSON.stringify({ session_id: sessionId, product }),
        });

        // Try parse JSON, but don't crash if it's not JSON
        const data = await res.json().catch(() => ({} as any));

        if (!res.ok || !data?.ok) {
          setStatus("error");
          setMessage("Payment verification failed.");
          setDetail(data?.message || data?.error || `Access verify failed (${res.status}).`);
          return;
        }

        setStatus("ok");
        setMessage("Payment accepted ✅ Your access is now unlocked.");
        setDetail("Taking you back now…");

        // Small delay so Set-Cookie is definitely committed before navigation
        await new Promise((r) => setTimeout(r, 650));
        if (ac.signal.aborted) return;

        redirected = true;
        router.replace(returnTo);
      } catch (e: any) {
        if (ac.signal.aborted) return;
        setStatus("error");
        setMessage("Payment verification failed.");
        setDetail(e?.message || "Access verify failed.");
      }
    }

    run();

    return () => {
      // Abort fetch if Strict Mode remounts or user navigates away
      ac.abort();

      // If we were about to redirect but unmounted, do nothing.
      // (router.replace will happen on the active mount)
      void redirected;
    };
  }, [router, sessionId, product, returnTo]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full rounded-2xl bg-slate-950 text-white ring-1 ring-white/10 shadow-2xl p-6">
        <h1 className="text-xl font-semibold">Checkout</h1>

        <p className="mt-2 text-sm text-slate-300">{message}</p>

        {detail ? <p className="mt-2 text-xs text-slate-400">{detail}</p> : null}

        {status === "error" ? (
          <div className="mt-4 space-y-3">
            <p className="text-sm text-slate-200">
              If this keeps happening, go back to Pricing and try again.
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() =>
                  router.replace(`/pricing?return=${encodeURIComponent(returnTo)}`)
                }
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/90"
              >
                Back to Pricing
              </button>

              <button
                type="button"
                onClick={() => router.replace(returnTo)}
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                Back
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
