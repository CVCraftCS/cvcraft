import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          CVCraft
        </h1>

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

          <Link
            href="/schools"
            className="text-slate-300 hover:text-white underline underline-offset-4 text-sm"
          >
            For Schools & Educators
          </Link>
        </div>
      </div>
    </main>
  );
}
