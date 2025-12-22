"use client";

import { useState } from "react";

export default function PricingPage() {
  const [loading, setLoading] = useState<null | "access_pass" | "extension" | "second_role">(null);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout(product: "access_pass" | "extension" | "second_role") {
    try {
      setError(null);
      setLoading(product);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product }),
      });

      const data = await res.json();

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
            We want you to have everything you need to be successful on your very first attempt.
          </p>
        </header>

        {/* Error banner (only shows if something fails) */}
        {error ? (
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
            {error}
          </div>
        ) : null}

        {/* Main product */}
        <section className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">30-Day CV Access Pass</h2>
            <p className="text-white/80">£12.99 one-off</p>
            <p className="text-white/70">Pay once. Edit when it matters.</p>

            <button
              type="button"
              onClick={() => startCheckout("access_pass")}
              disabled={loading !== null}
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading === "access_pass" ? "Redirecting…" : "Buy your Access Pass"}
            </button>

            <p className="mt-3 text-center text-sm text-white/60">
              No subscriptions. No automatic renewals.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <h3 className="text-lg font-semibold">Days 1–14 — Full editing</h3>
            <ul className="mt-3 space-y-2 text-white/75">
              <li>• Unlimited edits</li>
              <li>• Switch templates</li>
              <li>• Tailor for different roles</li>
              <li>• Unlimited PDF downloads</li>
              <li>• Change region (UK / US / AU)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <h3 className="text-lg font-semibold">Days 15–28 — Minor tweaks</h3>
            <ul className="mt-3 space-y-2 text-white/75">
              <li>• Adjust wording and bullet points</li>
              <li>• Fix details before interviews</li>
              <li>• Re-download PDFs anytime</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <h3 className="text-lg font-semibold">After day 28 — View & download</h3>
            <ul className="mt-3 space-y-2 text-white/75">
              <li>• View and re-download your CV</li>
              <li>• Start a new access pass to edit again</li>
            </ul>
          </div>
        </section>

        {/* Reassurance */}
        <section className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
          <h3 className="text-xl font-semibold">Built for real job-search timelines</h3>
          <p className="mt-3 text-white/70">
            Most people don’t need a CV tool every month. They need it when applying and interviewing.
          </p>
          <p className="mt-3 text-white/70">
            <span className="font-medium text-white">CVCraft is pay-once, use-when-needed.</span>
          </p>
          <p className="mt-3 text-white/70">Most CV builders renew monthly. We don’t.</p>
        </section>

        {/* Optional extras */}
        <section className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
          <h3 className="text-xl font-semibold">Optional extras</h3>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-white">
                <span className="font-medium">+14 Day Extension</span>{" "}
                <span className="text-white/70">— £3.99</span>
              </p>
              <p className="mt-1 text-sm text-white/60">
                Extend your editing window before expiry.
              </p>
              <button
                type="button"
                onClick={() => startCheckout("extension")}
                disabled={loading !== null}
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white px-4 py-2 font-semibold text-slate-900 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading === "extension" ? "Redirecting…" : "Add extension"}
              </button>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-white">
                <span className="font-medium">Second Role CV Copy</span>{" "}
                <span className="text-white/70">— £4.99</span>
              </p>
              <p className="mt-1 text-sm text-white/60">
                Duplicate your CV for another role and tailor it fast.
              </p>
              <button
                type="button"
                onClick={() => startCheckout("second_role")}
                disabled={loading !== null}
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white px-4 py-2 font-semibold text-slate-900 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading === "second_role" ? "Redirecting…" : "Add second role copy"}
              </button>
            </div>
          </div>

          <p className="mt-3 text-sm text-white/60">Available before your access expires.</p>
        </section>

        {/* FAQ */}
        <section className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
          <h3 className="text-xl font-semibold">FAQ</h3>

          <div className="mt-5 space-y-5">
            <div>
              <p className="font-medium text-white">Is this a subscription?</p>
              <p className="mt-1 text-white/70">
                No. You pay once, and only when you need access.
              </p>
            </div>

            <div>
              <p className="font-medium text-white">Can I download my CV after access ends?</p>
              <p className="mt-1 text-white/70">
                Yes — you can always view and re-download your existing PDFs.
              </p>
            </div>

            <div>
              <p className="font-medium text-white">Can I get a refund?</p>
              <p className="mt-1 text-white/70">
                If you haven’t exported a CV, you can request a refund within 24 hours. Once exported,
                the service has been delivered.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
          <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Ready to get interview-ready?</h3>
              <p className="mt-1 text-sm text-white/60">
                No subscriptions. No automatic renewals.
              </p>
            </div>

            <button
              type="button"
              onClick={() => startCheckout("access_pass")}
              disabled={loading !== null}
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading === "access_pass" ? "Redirecting…" : "Buy your 30-Day CV Access Pass"}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
