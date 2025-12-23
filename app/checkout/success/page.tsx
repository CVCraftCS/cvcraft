// app/checkout/success/page.tsx
import { Suspense } from "react";
import SuccessClient from "./success-client";

export const dynamic = "force-dynamic";

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <Suspense fallback={<p>Verifying your payment…</p>}>
        <SuccessClient />
      </Suspense>
    </main>
  );
}
