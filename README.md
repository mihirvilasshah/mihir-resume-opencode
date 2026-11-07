# Mihir Shah — Portfolio

A single-page portfolio for **Mihir Vilaskumar Shah**, Principal Engineer at Tricon Infotech. Built as an editorial, Apple-meets-Stripe interface with a premium IDE-inspired dark theme, custom SVG artwork and zero external image dependencies.

## Stack

- **Next.js 14** (App Router, React 18, TypeScript)
- **Tailwind CSS 3.4** with a CSS-variable design token layer
- **Lucide React** for icons
- **next/font** — Inter, Instrument Serif, JetBrains Mono
- Deployed on **Vercel** with no extra configuration

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve the production build
```

## Deploy to Vercel

1. Push this folder to a Git repository (GitHub / GitLab / Bitbucket).
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js**. No environment variables, no build overrides.
4. Deploy.

Or from the CLI:

```bash
npx vercel --prod
```

## Structure

```
app/
  layout.tsx           metadata, fonts, theme bootstrap, JSON-LD
  page.tsx             section composition
  globals.css          design tokens, components, motion
  icon.svg             favicon
  opengraph-image.tsx  generated social share image
components/
  background.tsx       fixed gradient / grid / particle field
  nav.tsx              glass nav, scroll progress, mobile menu
  theme-toggle.tsx     light/dark toggle (localStorage + system default)
  hero.tsx             headline, terminal, parallax, stack marquee
  terminal.tsx         typing terminal animation
  metrics.tsx          animated impact counters
  story.tsx            operating principles + credentials
  timeline.tsx         filterable split-track timeline
  projects.tsx         interactive project grid + generated SVG art
  social.tsx           LinkedIn / Instagram personality cards
  contact.tsx          floating-label form + success state
  footer.tsx
  reveal.tsx           IntersectionObserver scroll reveal
  counter.tsx          viewport-triggered number count-up
lib/
  data.ts              all profile, metric, timeline, project content
```

## Content notes

All content is derived from the attached CV, resume and biodata:

- Experience is set to **8+ years** (July 2018 → present), correcting the older "6+ years" copy.
- Titles reflect the progression **Associate Software Engineer → Senior Software Engineer → Team Lead → Principal Engineer**.
- Metrics are sourced: **4 projects led**, **18 projects contributed to**, **48-hour IICE POC**.
- Projects, education, publication, languages, community work and hobbies are all real.

To edit content, change `lib/data.ts` only — sections read from it.

## Contact form

The site is fully static, so the form validates input and composes a pre-filled **mailto:** draft. Nothing is stored or transmitted from the page; the success state offers to open the draft in the visitor's mail app. To use a real form backend instead, replace the `handleSubmit` timeout in `components/contact.tsx` with a `fetch` to your endpoint (Formspree, Resend, etc.).
