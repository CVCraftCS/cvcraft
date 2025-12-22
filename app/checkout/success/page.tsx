import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-semibold">Payment successful 🎉</h1>

        <p className="mt-4 text-white/70">
          You’re all set — your access is now active.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-white/90"
        >
          Back to CVCraft
        </Link>
      </div>
    </main>
  );
}
