// app/checkout/success/page.tsx
import { Suspense } from "react";
import SuccessClient from "./success-client";

export const dynamic = "force-dynamic";

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full rounded-2xl bg-slate-950 text-white ring-1 ring-white/10 shadow-2xl p-6">
        <h1 className="text-xl font-semibold">Checkout</h1>
        <p className="mt-2 text-sm text-slate-300">Verifying your payment…</p>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Suspense fallback={<Loading />}>
        <SuccessClient />
      </Suspense>
    </main>
  );
}
