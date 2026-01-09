import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "CVCraft",
  description: "Build your CV with confidence. No subscriptions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-white">
        <header className="border-b border-white/10 bg-slate-950">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <Link href="/" className="text-lg font-semibold text-white">
              CVCraft
            </Link>

            <div className="flex items-center gap-6">
              <Link
                href="/pricing"
                className="text-sm text-white/80 hover:text-white"
              >
                Pricing
              </Link>

              {/* ✅ NEW: Cover Letter link */}
              <Link
                href="/cover-letter"
                className="text-sm text-white/80 hover:text-white"
              >
                Cover Letter
              </Link>

              <Link
                href="/"
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/90"
              >
                Build CV
              </Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
