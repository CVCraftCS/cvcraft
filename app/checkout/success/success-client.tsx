// app/checkout/success/success-client.tsx
"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SuccessClient() {
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const sessionId = params?.get("session_id"); // safe
    if (!sessionId) return;

    (async () => {
      try {
        const res = await fetch(`/api/verify-payment?session_id=${sessionId}`);
        const data = await res.json();

        if (res.ok && data?.valid) {
          localStorage.setItem(
            "cvcraft_access",
            JSON.stringify({
              paid: true,
              expiresAt: data.expiresAt,
            })
          );

          router.replace("/cv");
          return;
        }

        // If invalid, send to pricing (or /checkout/cancel if you prefer)
        router.replace("/pricing");
      } catch {
        router.replace("/pricing");
      }
    })();
  }, [params, router]);

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <p>Verifying your payment…</p>
    </main>
  );
}
