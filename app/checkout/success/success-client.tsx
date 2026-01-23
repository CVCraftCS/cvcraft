"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Status = "verifying" | "ok" | "error";

type Props = {
  sessionId: string;
  product: string;
  returnTo: string;
};

export default function SuccessClient({ sessionId, product, returnTo }: Props) {
  const router = useRouter();

  const [status, setStatus] = useState<Status>("verifying");
  const [message, setMessage] = useState<string>("Verifying your payment…");
  const [detail, setDetail] = useState<string | null>(null);

  // prevent duplicate requests in dev strict mode
  const didAutoRun = useRef(false);

  const prettySession = useMemo(() => {
    if (!sessionId) return "(missing)";
    return sessionId.length > 18 ? sessionId.slice(0, 18) + "…" : sessionId;
  }, [sessionId]);

  const runVerify = useCallback(async () => {
    if (!sessionId) {
      setStatus("error");
      setMessage("We couldn’t verify your payment.");
      setDetail("Missing session_id in the URL.");
      return;
    }

    setStatus("verifying");
    setMessage("Verifying your payment…");
    setDetail(null);

    const ac = new AbortController();
    const timeout = setTimeout(() => ac.abort(), 15000); // 15s hard stop

    try {
      const res = await fetch("/api/access/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        cache: "no-store",
        signal: ac.signal,
        body: JSON.stringify({ session_id: sessionId, product }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.ok) {
        setStatus("error");
        setMessage("Payment verification failed.");
        setDetail(String(data?.message || data?.error || `HTTP ${res.status}`));
        return;
      }

      setStatus("ok");
      setMessage("Payment accepted ✅ Your access is now unlocked.");
      setDetail("Taking you back now…");

      // small pause so user sees success
      await new Promise((r) => setTimeout(r, 900));

      // go back to where they wanted
      router.replace(returnTo);
    } catch (e: any) {
      const aborted =
        e?.name === "AbortError" || String(e?.message || "").toLowerCase().includes("abort");

      setStatus("error");
      setMessage(aborted ? "Verification timed out." : "Payment verification failed.");
      setDetail(
        aborted
          ? "The server took too long to respond. Click Retry."
          : String(e?.message || "Access verify failed.")
      );
    } finally {
      clearTimeout(timeout);
    }
  }, [router, returnTo, sessionId, product]);

  useEffect(() => {
    if (didAutoRun.current) return;
    didAutoRun.current = true;

    // If this never runs, you’ll know hydration isn’t happening
    // (but with props + no useSearchParams, this is very reliable)
    runVerify();
  }, [runVerify]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full rounded-2xl bg-slate-950 text-white ring-1 ring-white/10 shadow-2xl p-6">
        <h1 className="text-xl font-semibold">Checkout</h1>

        <p className="mt-2 text-sm text-slate-300">{message}</p>

        {/* tiny debug line — safe to keep in dev; remove later if you want */}
        <p className="mt-2 text-xs text-slate-500">
          session: {prettySession} • product: {product} • return: {returnTo}
        </p>

        {detail ? <p className="mt-2 text-xs text-slate-400">{detail}</p> : null}

        {status === "error" ? (
          <div className="mt-4 space-y-3">
            <p className="text-sm text-slate-200">
              If this keeps happening, your payment is likely fine — it’s just the verification step
              failing to complete. Retry below.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={runVerify}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
              >
                Retry verification
              </button>

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
