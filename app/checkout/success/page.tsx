export const dynamic = "force-dynamic";

import { Suspense } from "react";
import CheckoutSuccessClient from "./success-client";

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={<Loading />}>
      <CheckoutSuccessClient />
    </Suspense>
  );
}

function Loading() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <p>Verifying your payment…</p>
    </main>
  );
}
