"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SuccessClient() {
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const sessionId = params?.get("session_id") || "";
    if (!sessionId) return;

    fetch(`/api/verify-payment?session_id=${encodeURIComponent(sessionId)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.valid) {
          localStorage.setItem(
            "cvcraft_access",
            JSON.stringify({
              paid: true,
              expiresAt: data.expiresAt,
            })
          );

          router.replace("/cv");
        }
      })
      .catch(() => {
        // Fail silently; user can refresh or go to /pricing
      });
  }, [params, router]);

  return <p>Verifying your payment…</p>;
}
