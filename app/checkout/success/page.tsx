// app/checkout/success/page.tsx
import { Suspense } from "react";
import SuccessClient from "./success-client";

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
          <p>Loading…</p>
        </main>
      }
    >
      <SuccessClient />
    </Suspense>
  );
}
