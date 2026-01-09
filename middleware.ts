import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * CVCraft Access Gate (Middleware)
 * Access is granted if cookie "cvcraft_access_until" exists
 * AND its value (ms timestamp) is in the future.
 */

const ACCESS_UNTIL_COOKIE = "cvcraft_access_until";

/**
 * These require payment/access
 */
const PROTECTED_PREFIXES = [
  "/cv",
  "/preview",
  "/api/generate-cv",
  "/api/export/pdf",
];

/**
 * Always allow these (note: middleware only runs on paths in `config.matcher`)
 */
const ALWAYS_ALLOW_PREFIXES = [
  "/",
  "/pricing",
  "/cover-letter", // ✅ free
  "/checkout",
  "/api/checkout",
  "/api/access/grant",
  "/api/cover-letter", // ✅ free
  "/_next",
  "/favicon.ico",
  "/robots.txt",
  "/sitemap.xml",
];

function isPrefixMatch(pathname: string, prefixes: string[]) {
  return prefixes.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

function isApiPath(pathname: string) {
  return pathname.startsWith("/api/");
}

function hasValidAccess(req: NextRequest) {
  const raw = req.cookies.get(ACCESS_UNTIL_COOKIE)?.value;
  if (!raw) return false;

  const until = Number(raw);
  if (!Number.isFinite(until)) return false;

  // must be in the future
  return until > Date.now();
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Always allow public paths
  if (isPrefixMatch(pathname, ALWAYS_ALLOW_PREFIXES)) {
    return NextResponse.next();
  }

  // If not protected, allow
  const isProtected = isPrefixMatch(pathname, PROTECTED_PREFIXES);
  if (!isProtected) return NextResponse.next();

  // If user has valid access, allow
  if (hasValidAccess(req)) return NextResponse.next();

  // Otherwise block
  if (isApiPath(pathname)) {
    return NextResponse.json(
      { error: "Access required. Please purchase a 30-day access pass." },
      { status: 401 }
    );
  }

  const url = req.nextUrl.clone();
  url.pathname = "/pricing";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

/**
 * Only run middleware where needed.
 *
 * ✅ IMPORTANT:
 * We MUST include /cv and /preview here, otherwise users can access them without paying.
 * (Your earlier "Pricing → Back → Build CV/PDF without paying" happens when /cv isn't matched.)
 */
export const config = {
  matcher: ["/cv", "/cv/:path*", "/preview", "/preview/:path*", "/api/:path*"],
};
