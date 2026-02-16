import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CVCraft Classroom",
    template: "%s | CVCraft Classroom",
  },
  description:
    "Build your CV with confidence. No subscriptions. Classroom-ready CV builder and free cover letter generator.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }, // Critical browser fallback
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="text-sm text-white/80 hover:text-white">
      {children}
    </Link>
  );
}

export default function RootLayout({
  children,
}: {
  children: ReactNode;
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
              <NavLink href="/pricing">Pricing</NavLink>

              {/* Cover Letter (Free) */}
              <Link
                href="/cover-letter"
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
              >
                <span>Cover Letter</span>
                <span className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-white/80">
                  FREE
                </span>
              </Link>

              {/* Always go to the builder */}
              <Link
                href="/cv"
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
