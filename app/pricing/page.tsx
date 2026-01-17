import { Suspense } from "react";
import PricingClient from "./pricing-client";

export const dynamic = "force-dynamic";

export default function PricingPage() {
  return (
    <Suspense fallback={<PricingLoading />}>
      <PricingClient />
    </Suspense>
  );
}

function PricingLoading() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-white/70">
        Loading pricing…
      </div>
    </main>
  );
}
