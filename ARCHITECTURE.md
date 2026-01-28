\# CVCraft Architecture (short)



CVCraft uses a hybrid Next.js setup:

\- \*\*Pages Router\*\* under `src/pages/\*` for core UI pages and some legacy APIs

\- \*\*App Router\*\* under `app/\*` for modern server routes (checkout, access, PDF export)



This is intentional and stable as long as you avoid duplicating the same route in both routers.



---



\## Main user flows



\## 1) Standard CV flow (consumer)

1\. User builds CV at `/cv` (Pages Router)

2\. Result saved client-side (local/session storage depending on mode)

3\. User previews at `/preview`

4\. Export (PDF) calls server route `/api/export/pdf`

5\. Server checks access cookie + Stripe truth

6\. Server generates PDF (Puppeteer) and returns download



\## 2) Paid access flow (Stripe Checkout)

1\. User clicks CTA → `/pricing` → “Get Access”

2\. Client hits `app/api/checkout/session` to create a Checkout Session

3\. Stripe redirects to `app/checkout/success`

4\. Success page verifies session server-side and sets HttpOnly cookie

5\. User returns to `/cv` and export unlocks



Access is \*\*refund-safe\*\* because server checks Stripe truth before exporting.



\## 3) Schools / classroom delivery

1\. Educator goes to `/schools`

2\. Clicks “Open CV Builder” → `/cv?teacher=1`

3\. User is prompted for the `SCHOOL\_ACCESS\_CODE`

4\. If verified, session flag is set and classroom builder opens

5\. No student accounts created; designed for shared devices



---



\## Route map (high level)



\### Pages Router (UI)

\- `src/pages/cv.js`

\- `src/pages/preview.js`

\- `src/pages/schools.js`



\### Pages Router API (schools gate)

\- `src/pages/api/school/verify.js`  

&nbsp; POST `{ code }` → `{ ok: true }` if matches `SCHOOL\_ACCESS\_CODE`



\### App Router (payments/access/export)

\- `app/api/checkout/session`

\- `app/checkout/success`

\- `app/api/access/status`

\- `app/api/export/pdf`



---



\## Important guardrails (avoid regressions)

1\. \*\*Do not duplicate routes\*\* between Pages + App routers.

&nbsp;  Example: don’t have both:

&nbsp;  - `src/pages/api/school/verify.js`

&nbsp;  - `app/api/school/verify/route.ts`

&nbsp;  for the same endpoint.



2\. Keep cookie scope consistent in production:

&nbsp;  - use a canonical host (www vs root)

&nbsp;  - set `NEXT\_PUBLIC\_SITE\_URL` correctly



3\. Never commit secrets:

&nbsp;  - `.env.local` must remain local-only

&nbsp;  - only ship `.env.example`



