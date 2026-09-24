# fyp-service-page-v2 — FYP Desk (Next.js)

The private FYP Desk web app. Replaces the static `fyp-service-page`
(GitHub Pages, now unpublished) with a **complete server-side lock**:

- **Next.js (App Router) + TypeScript + Tailwind** — scaffolded with the
  official `create-next-app@latest`
- **One server-side session cookie gate** — `middleware.ts` redirects every
  visitor without a valid session to `/login`; the password is compared on
  the server only (`app/actions.ts` + `lib/auth.ts`, both server-only)
- **`FYP_PASSWORD` env var** — the A3 "Recommended" path. Set it in Vercel
  → Settings → Environment Variables → Production, then redeploy. Never in
  git (`.env*` is git-ignored).

## Run locally

```bash
npm install
cp .env.example .env.local   # then set FYP_PASSWORD in .env.local
npm run dev
```

## Deploy (Vercel)

1. Push this repo to GitHub (private).
2. Vercel → Add New Project → import the repo.
3. Add `FYP_PASSWORD` in project settings → redeploy.
4. Share the link + password over the WhatsApp Business number.

## Structure

```
app/
├── layout.tsx        root layout — title "FYP Desk", noindex, fonts, theme script
├── page.tsx          protected home (plans, offer, process, FAQ, CTA)
├── guide/page.tsx    protected guide (docs + the Guidance Kit + Ask-an-AI)
├── login/page.tsx    the ONLY public route — the gate form
├── actions.ts        login server action (server-side password check)
├── site-chrome.tsx   header (DESK wordmark, bell, toggle) + footer
├── plan-tabs.tsx     plan tab selector
├── faq.tsx           FAQ accordion
└── globals.css       brand styles (Certainty Blue / Midnight Certainty)
lib/
├── auth.ts           session cookie + password verification (server-only)
├── ai-context.ts     the expanded AI-assistant context (Q4)
├── offer-data.ts     offer spot counter data
└── brand.tsx         WhatsApp Business links + lucide icons
middleware.ts         the gate — protects every non-public route
```

## Brand notes

- Wordmark is **DESK** (+ bouncing emerald dot); the title stays **FYP Desk**.
- Every WhatsApp link uses the **WhatsApp Business number** (0311 6554362).
- Colors, buttons, and tokens follow the brand foundations (BCE palette —
  styling rules only, no identity assets).
- Q4 fix: the theme toggle, offer bell, and hamburger are all exactly
  32px tall — one consistent header control size.
