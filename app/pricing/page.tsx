"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type ProductKey = "access_pass" | "extension" | "second_role";

export default function PricingPage() {
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState<null | ProductKey>(null);
  const [error, setError] = useState<string | null>(null);

  // ✅ Safe internal return path (default to /cv)
  const returnTo = useMemo(() => {
    const raw = searchParams?.get("return") || "/cv";

    // Only allow internal paths like "/cv" or "/preview"
    if (typeof raw !== "string") return "/cv";
    if (!raw.startsWith("/")) return "/cv";
    if (raw.startsWith("//")) return "/cv";
    return raw;
  }, [searchParams]);

  async function startCheckout(product: ProductKey) {
    try {
      setError(null);
      setLoading(product);

      // ✅ Correct API route (matches /app/api/checkout/route.ts)
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // ✅ Keys must match route.ts: { product, return, cancel }
        body: JSON.stringify({
          product,
          return: returnTo,
          cancel: "/pricing",
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Unable to start checkout");
      }

      if (data?.url) {
        window.location.href = data.url;
        return;
      }

      throw new Error("No checkout URL returned");
    } catch (e: any) {
      setError(e?.message || "Something went wrong");
      setLoading(null);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Hero */}
        <header className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight">
            Simple. Fair. No subscriptions.
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Everything you need to create a professional CV fast — with one simple payment.
          </p>
        </header>

        {/* Error banner */}
        {error ? (
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
            {error}
          </div>
        ) : null}

        {/* Main product */}
        <section className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">30-Day CV Access</h2>

            <p className="text-white/80">£9.99 one-off</p>
            <p className="text-white/70">
              Full access for 30 days. Unlimited edits. No subscriptions.
            </p>

            <ul className="mt-4 space-y-2 text-white/75">
              <li>• Unlimited CV edits for 30 days</li>
              <li>• Unlimited PDF downloads</li>
              <li>• Switch templates anytime</li>
              <li>• Region presets (UK / US / AU)</li>
              <li>• ✅ Free cover letter included</li>
            </ul>

            <button
              type="button"
              onClick={() => startCheckout("access_pass")}
              disabled={loading !== null}
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading === "access_pass" ? "Redirecting…" : "Get 30-Day Access — £9.99"}
            </button>

            <p className="mt-3 text-center text-sm text-white/60">
              One payment. No renewals. No recurring charges.
            </p>
          </div>
        </section>

        {/* Reassurance */}
        <section className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
          <h3 className="text-xl font-semibold">Built for real job-search timelines</h3>
          <p className="mt-3 text-white/70">
            Most people don’t need a CV tool every month — they need it when applying,
            interviewing, and improving.
          </p>
          <p className="mt-3 text-white/70">
            <span className="font-medium text-white">CVCraft is pay-once, use-when-needed.</span>
          </p>
          <p className="mt-3 text-white/70">Most CV builders renew monthly. We don’t.</p>
        </section>

        {/* FAQ */}
        <section className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
          <h3 className="text-xl font-semibold">FAQ</h3>

          <div className="mt-5 space-y-5">
            <div>
              <p className="font-medium text-white">Is this a subscription?</p>
              <p className="mt-1 text-white/70">No. You pay once for 30 days of full access.</p>
            </div>

            <div>
              <p className="font-medium text-white">What do I get in the 30 days?</p>
              <p className="mt-1 text-white/70">
                Unlimited edits, templates, PDF exports, region presets — and a free cover letter generator.
              </p>
            </div>

            <div>
              <p className="font-medium text-white">Can I download my CV during access?</p>
              <p className="mt-1 text-white/70">
                Yes — download as many times as you like while your access is active.
              </p>
            </div>

            <div>
              <p className="font-medium text-white">Can I get a refund?</p>
              <p className="mt-1 text-white/70">
                If you haven’t exported a CV, you can request a refund within 24 hours. Once exported, the service has
                been delivered.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
          <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Ready to get interview-ready?</h3>
              <p className="mt-1 text-sm text-white/60">One payment. No renewals. No recurring charges.</p>
            </div>

            <button
              type="button"
              onClick={() => startCheckout("access_pass")}
              disabled={loading !== null}
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading === "access_pass" ? "Redirecting…" : "Get 30-Day Access — £9.99"}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
