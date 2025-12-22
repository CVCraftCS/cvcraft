export default function CheckoutCancelPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-semibold">Payment cancelled</h1>

        <p className="mt-4 text-white/70">
          No payment was taken. You can return to pricing and try again whenever
          you’re ready.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/pricing"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-white/90"
          >
            Back to pricing
          </a>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/10"
          >
            Home
          </a>
        </div>
      </div>
    </main>
  );
}
