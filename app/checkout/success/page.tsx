"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function CheckoutSuccessPage() {
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const sessionId = params.get("session_id");
    if (!sessionId) return;

    fetch(`/api/verify-payment?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.valid) {
          localStorage.setItem(
            "cvcraft_access",
            JSON.stringify({
              paid: true,
              expiresAt: data.expiresAt,
            })
          );

          router.push("/cv");
        }
      });
  }, [params, router]);

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <p>Verifying your payment…</p>
    </main>
  );
}
