// app/api/export/pdf/route.ts
import { NextRequest } from "next/server";
import chromium from "@sparticuz/chromium";
import puppeteerCore from "puppeteer-core";
import Stripe from "stripe";

// ✅ IMPORTANT: Do NOT use "@/..." aliases in server routes (Vercel build can fail).
import { readAccessCookieValue, getAccessCookieName } from "../../../lib/access";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  html?: string;
  filename?: string;
};

function safeFilename(name?: string) {
  return (name || "CVCraft-CV.pdf").replace(/["\r\n]/g, "").trim() || "CVCraft-CV.pdf";
}

function isVercelLike() {
  return process.env.VERCEL === "1" || process.env.VERCEL === "true";
}

function isWindows() {
  return process.platform === "win32";
}
function isMac() {
  return process.platform === "darwin";
}
function isLinux() {
  return process.platform === "linux";
}

/**
 * Try common Chrome install locations for local dev.
 * This avoids “set env var” pain on Windows/Mac, and prevents ENOENT.
 */
async function tryFindLocalChromeExecutable(): Promise<string | null> {
  try {
    const fs = await import("fs/promises");
    const candidates: string[] = [];

    if (isWindows()) {
      const programFiles = process.env.PROGRAMFILES || "C:\\Program Files";
      const programFilesx86 = process.env["PROGRAMFILES(X86)"] || "C:\\Program Files (x86)";
      const localAppData = process.env.LOCALAPPDATA;

      candidates.push(
        `${programFiles}\\Google\\Chrome\\Application\\chrome.exe`,
        `${programFilesx86}\\Google\\Chrome\\Application\\chrome.exe`,
        `${programFiles}\\Microsoft\\Edge\\Application\\msedge.exe`,
        `${programFilesx86}\\Microsoft\\Edge\\Application\\msedge.exe`
      );

      if (localAppData) {
        candidates.push(`${localAppData}\\Google\\Chrome\\Application\\chrome.exe`);
        candidates.push(`${localAppData}\\Microsoft\\Edge\\Application\\msedge.exe`);
      }
    }

    if (isMac()) {
      candidates.push(
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"
      );
    }

    if (isLinux()) {
      candidates.push(
        "/usr/bin/google-chrome",
        "/usr/bin/google-chrome-stable",
        "/usr/bin/chromium-browser",
        "/usr/bin/chromium",
        "/usr/bin/microsoft-edge",
        "/usr/bin/microsoft-edge-stable"
      );
    }

    for (const p of candidates) {
      try {
        await fs.access(p);
        return p;
      } catch {
        // keep trying
      }
    }

    return null;
  } catch {
    return null;
  }
}

async function launchBrowser() {
  // ------------------------------
  // PROD (Vercel): puppeteer-core + @sparticuz/chromium
  // ------------------------------
  if (isVercelLike()) {
    const executablePath = await chromium.executablePath();
    if (!executablePath) throw new Error("Chromium executablePath() returned empty on Vercel.");

    return puppeteerCore.launch({
      args: [
        ...chromium.args,
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-gpu",
      ],
      defaultViewport: chromium.defaultViewport,
      executablePath,
      headless: chromium.headless,
    });
  }

  // ------------------------------
  // LOCAL DEV:
  // 1) Prefer full puppeteer if installed (brings its own Chromium)
  // 2) Else, try installed Chrome/Edge automatically
  // 3) Else, fall back to explicit env path
  // ------------------------------
  try {
    const puppeteer = await import("puppeteer");
    return puppeteer.default.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  } catch (e) {
    const found = await tryFindLocalChromeExecutable();
    if (found) {
      return puppeteerCore.launch({
        headless: true,
        executablePath: found,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });
    }

    const explicitPath =
      process.env.PUPPETEER_EXECUTABLE_PATH ||
      process.env.CHROME_PATH ||
      process.env.GOOGLE_CHROME_BIN;

    if (!explicitPath) {
      throw new Error(
        [
          "Local PDF export needs a Chromium/Chrome executable.",
          "Fix options:",
          "1) npm i puppeteer   (recommended) — then restart dev server",
          "or",
          '2) set PUPPETEER_EXECUTABLE_PATH="C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe"',
          "",
          "Also checked common install paths for Chrome/Edge but none were found.",
          "Original error: " + (e instanceof Error ? e.message : String(e)),
        ].join("\n")
      );
    }

    return puppeteerCore.launch({
      headless: true,
      executablePath: explicitPath,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  }
}

// Stripe Checkout Session has no "refunded" field; refund truth is on Charge / Refund objects.
// We'll use Charge.amount_refunded and compare against PaymentIntent.amount_received/amount.
async function isSessionRefundedOrRevoked(sessionId: string): Promise<boolean> {
  const secretKey = (process.env.STRIPE_SECRET_KEY || "").trim();
  if (!secretKey) {
    // If Stripe isn't configured, do NOT falsely deny paid users.
    // (But refunds/revokes can't be checked without Stripe.)
    return false;
  }

  // ✅ DO NOT pin apiVersion — avoids Stripe type mismatches on Vercel
  const stripe = new Stripe(secretKey);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["payment_intent"],
  });

  // Server-truth revoke flag
  const revoked = session.metadata?.cvcraft_revoked === "1";
  if (revoked) return true;

  // PaymentIntent can be expanded object or string
  const pi = session.payment_intent;

  let paymentIntentId: string | null = null;

  if (pi && typeof pi === "object" && "id" in pi) {
    paymentIntentId = (pi as Stripe.PaymentIntent).id;
  } else if (typeof pi === "string" && pi) {
    paymentIntentId = pi;
  }

  if (!paymentIntentId) return false;

  // IMPORTANT: Expand charges so we can read amount_refunded from Charge (not PaymentIntent)
  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId, {
    expand: ["charges"],
  });

  const charge = paymentIntent.charges?.data?.[0] ?? null;

  // amount_refunded exists on Charge
  const amountRefunded = charge?.amount_refunded ?? 0;

  // Base amount: prefer amount_received; fallback to charge.amount; then amount
  const amountBase =
    paymentIntent.amount_received ??
    charge?.amount ??
    paymentIntent.amount ??
    0;

  // Fully refunded if refunded >= base (and base > 0)
  if (amountBase > 0 && amountRefunded >= amountBase) {
    return true;
  }

  return false;
}

export async function POST(req: NextRequest) {
  try {
    // ✅ HARD SERVER GATE: must have valid signed HttpOnly cookie
    const cookie = req.cookies.get(getAccessCookieName())?.value;
    const access = readAccessCookieValue(cookie);

    if (!access || access.paid !== true) {
      return Response.json(
        { ok: false, error: "Access required. Please purchase a 30-day pass to export PDFs." },
        { status: 403 }
      );
    }

    // Extra safety (readAccessCookieValue already checks expiry)
    if (typeof access.expiresAt === "number" && Date.now() > access.expiresAt) {
      return Response.json(
        { ok: false, error: "Access expired. Please purchase a new 30-day pass." },
        { status: 403 }
      );
    }

    // ✅ Refund/revoke-safe: if we have a sessionId, validate server-truth
    if (access.sessionId) {
      const blocked = await isSessionRefundedOrRevoked(access.sessionId);
      if (blocked) {
        return Response.json(
          { ok: false, error: "Access is no longer active (refunded or revoked)." },
          { status: 403 }
        );
      }
    }

    const body = (await req.json()) as Body;
    const html = body.html?.trim();

    if (!html) {
      return Response.json({ ok: false, error: "Missing html in request body" }, { status: 400 });
    }

    const browser = await launchBrowser();

    try {
      const page = await browser.newPage();

      await page.emulateMediaType("screen");
      await page.setContent(html, { waitUntil: ["load", "networkidle0"] });

      const pdfUint8 = await page.pdf({
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true,
      });

      const ab = pdfUint8.buffer.slice(
        pdfUint8.byteOffset,
        pdfUint8.byteOffset + pdfUint8.byteLength
      );

      return new Response(ab as unknown as BodyInit, {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="${safeFilename(body.filename)}"`,
          "Cache-Control": "no-store",
        },
      });
    } finally {
      await browser.close();
    }
  } catch (err) {
    console.error("PDF export failed:", err);
    return Response.json(
      {
        ok: false,
        error: "PDF export failed",
        message: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}
