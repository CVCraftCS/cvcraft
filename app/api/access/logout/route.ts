// app/api/access/logout/route.ts
import { NextResponse } from "next/server";

const COOKIE_NAME = "cvcraft_access"; // <-- change if your cookie uses a different name

function baseUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    process.env.NEXTAUTH_URL ||
    process.env.VERCEL_URL ||
    "";

  const url = envUrl.startsWith("http")
    ? envUrl
    : envUrl
    ? `https://${envUrl}`
    : "";

  return url || "http://localhost:3000";
}

function clearCookie(res: NextResponse) {
  // Expire immediately
  res.cookies.set({
    name: COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  // Also set an explicit expired date for extra safety
  res.cookies.set({
    name: COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(0),
  });
}

export async function GET() {
  const res = NextResponse.redirect(new URL("/pricing", baseUrl()));
  clearCookie(res);
  return res;
}

export async function POST() {
  const res = NextResponse.json({ ok: true });
  clearCookie(res);
  return res;
}
