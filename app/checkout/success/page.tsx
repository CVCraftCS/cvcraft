"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function CheckoutSuccessPage() {
  const router = useRouter();
  const params = useSearchParams();
  const [message, setMessage] = useState("Verifying your payment…");

  useEffect(() => {
    const sessionId = params?.get("session_id"); // ✅ guard for TS "possibly null"
    if (!sessionId) {
      setMessage("Missing session ID. Redirecting…");
      const t = setTimeout(() => router.replace("/pricing"), 1200);
      return () => clearTimeout(t);
    }

    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(
          `/api/verify-payment?session_id=${encodeURIComponent(sessionId)}`,
          { cache: "no-store" }
        );

        const data = await res.json().catch(() => ({}));

        if (cancelled) return;

        if (!res.ok || !data?.valid) {
          setMessage("We couldn’t verify that payment. Redirecting…");
          setTimeout(() => router.replace("/pricing"), 1500);
          return;
        }

        localStorage.setItem(
          "cvcraft_access",
          JSON.stringify({
            paid: true,
            expiresAt: Number(data.expiresAt || 0),
          })
        );

        setMessage("Payment verified — taking you to your CV builder…");
        setTimeout(() => router.replace("/cv"), 600);
      } catch (err) {
        if (cancelled) return;
        setMessage("Verification failed. Redirecting…");
        setTimeout(() => router.replace("/pricing"), 1500);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [params, router]);

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <p className="text-white/80">{message}</p>
    </main>
  );
}
