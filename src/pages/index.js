import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6 py-16">
      <div className="text-center max-w-3xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">CVCraft</h1>

        <p className="text-slate-300 text-lg mb-8">
          AI-powered CVs, built fast, built properly.
        </p>

        <div className="flex flex-col items-center gap-4">
          <Link
            href="/cv"
            className="inline-block px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-200 transition"
          >
            Build my CV
          </Link>

          {/* Schools should go to /schools first (then that page goes to /cv?teacher=1) */}
          <Link
            href="/schools"
            className="text-slate-300 hover:text-white underline underline-offset-4 text-sm"
          >
            For Schools &amp; Educators
          </Link>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 text-left">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <p className="text-slate-100 leading-relaxed">
              “This is great — so efficient, easy to use and saved me hours, worth the money alone
              just for the convenience.”
            </p>
            <p className="mt-4 text-sm text-slate-300">— Danny</p>
          </div>

          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <p className="text-slate-100 leading-relaxed">
              “I hate writing CVs. This made it simple and actually gave me something I felt
              confident sending out.”
            </p>
            <p className="mt-4 text-sm text-slate-300">— Recent jobseeker</p>
          </div>
        </div>
      </div>
    </main>
  );
}
