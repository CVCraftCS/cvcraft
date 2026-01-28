# CVCraft — CV Builder + Classroom-Safe Mode

CVCraft is a fast, modern CV builder with beautiful templates, a polished preview/print flow, and a classroom-safe Schools mode (no student accounts, session-only gating, local-first storage). It also includes a **free Cover Letter generator** as the lead magnet.

## What it does
- Guided CV builder (clean UX, recruiter-friendly output)
- Multiple templates + thumbnail selection
- Preview page with PDF export (server-side)
- **Paid access gate** for exports (refund-safe validation against Stripe)
- Schools & Educators flow with **session-only access code** gate
- Teacher Mode controls (lockdown-style classroom delivery)

## Product model
- **Free:** Cover Letter generator
- **Paid:** CV export (PDF) + premium export flow (single 30-day access pass)

## Tech
- Next.js (hybrid Pages Router + App Router)
  - Pages Router: `src/pages/*` (builder, preview, schools, legacy APIs)
  - App Router: `app/*` (checkout, access, export, etc.)
- Stripe (Checkout + server verification)
- Resend (email receipts / notifications)
- Puppeteer (via `puppeteer-core` + `@sparticuz/chromium`) for Vercel-safe PDF generation

## Quick start (local)
1. Install deps
   ```bash
   npm install
