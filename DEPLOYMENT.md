

---



\## 2) `DEPLOYMENT.md`



```md

\# Deployment (Vercel)



CVCraft is designed for Vercel deployments. It uses:

\- Stripe Checkout (server-side verification)

\- Resend (receipt emails)

\- Server-side PDF export using puppeteer-core + @sparticuz/chromium (Vercel-safe)



\## 1) Create the Vercel project

\- Import the GitHub repo in Vercel

\- Framework: Next.js (auto-detected)

\- Build command: `npm run build` (default)

\- Output: Next.js (default)



\## 2) Set environment variables (Vercel)

In Vercel Project Settings → Environment Variables, add everything from `.env.example`.



Minimum required for core paid flow:

\- `NEXT\_PUBLIC\_SITE\_URL`

\- `STRIPE\_SECRET\_KEY`

\- `STRIPE\_PRICE\_ACCESS\_PASS`

\- `ACCESS\_COOKIE\_SECRET`



If you want receipts:

\- `RESEND\_API\_KEY`

\- `RESEND\_FROM\_EMAIL`



If you want schools gate:

\- `SCHOOL\_ACCESS\_CODE`



> Important: Set env vars in \*\*Production + Preview\*\* if you use preview deployments.



\## 3) Stripe setup

\### Products / Prices

This project expects a one-off “Access Pass” price ID:

\- `STRIPE\_PRICE\_ACCESS\_PASS=price\_...`



\### Checkout success flow

The success page verifies the Stripe session and sets an HttpOnly access cookie.

No webhook is required for granting access.



\### Refund-safe enforcement

Access is verified server-side and can be revoked/refunded by Stripe truth checks.

(So buyers can’t just keep a cookie forever if refunded.)



\## 4) Resend setup (optional but recommended)

\- Verify the sending domain in Resend

\- Set:

&nbsp; - `RESEND\_API\_KEY`

&nbsp; - `RESEND\_FROM\_EMAIL` (e.g. `CVCraft <receipts@yourdomain.com>`)



\## 5) Schools / Teacher flow

The Schools page is publicly visible, but “Open builder” uses a session-only code gate.



\- Set `SCHOOL\_ACCESS\_CODE` in Vercel env vars

\- Users visit `/cv?teacher=1`

\- They must enter the school access code to open the classroom builder



Note: This gate is \*\*session-only\*\* (refresh/back should re-prompt) and does not create student accounts.



\## 6) PDF export

Export is enforced server-side:

\- Unpaid users: export endpoints refuse access

\- Paid users: export works via Puppeteer on Vercel



If PDF fails in production:

\- Verify `ACCESS\_COOKIE\_SECRET` is set correctly

\- Verify host/cookie domain is consistent (www vs root)

\- Check Vercel logs for the `/api/export/pdf` route



\## 7) Recommended “seller-ready” checks

Before handing this repo to a buyer:

\- Confirm `.env.local` is ignored and NOT committed

\- Confirm `.env.example` exists

\- Run:

&nbsp; - `npm run build`

&nbsp; - `npm run lint` (if enabled)

\- Confirm paid flow:

&nbsp; - `/pricing` → Checkout → `/checkout/success` → `/cv` unlocked export

\- Confirm schools flow:

&nbsp; - `/schools` → “Open CV Builder” → code prompt works



\## 8) Branch / release strategy

\- `main`: stable production

\- `chore/seller-ready`: housekeeping + packaging improvements for handover

Merge via PR when ready.



