# Nyanza Royal Gate Apartment & RGA Catering

A premium, fully responsive marketing website for **Nyanza Royal Gate Apartment** and **RGA Catering** — accommodation, dining, catering, events and wellness in Nyanza, Rwanda.

**Tagline:** _Taste, Class, Perfection._

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (CSS-first `@theme` configuration)
- React Router 7
- Lucide React icons

## Getting started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check (`tsc -b`) and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |
| `npm run check:render` | Server-render every route to catch runtime errors |
| `npm run check:content` | Assert key business info, links and forms are present |

## Pages

- **Home** — hero, welcome, featured services, catering/events splits, gallery preview, CTA
- **About** — story, brand mark, values, offerings
- **Accommodation** — room amenities, gallery strip, validated booking inquiry form
- **Services** — all 13 services with direct WhatsApp inquiry links
- **Catering** — offerings and a validated catering request form
- **Events** — occasion types and a validated event planning form
- **Gallery** — category filters with a keyboard-accessible lightbox
- **Contact** — phone, WhatsApp, email, social links and a general inquiry form
- **404** — friendly not-found page

## Imagery

The site uses **only the five client-provided photographs** in `public/assets`:

- `logo.jpg`
- `rooms.jpg`
- `conference hall.jpg`
- `massage-service.jpg`
- `weddings-preparation.jpg`

No stock photography is used. Because the conference file name contains a space, it is referenced through the encoded path `/assets/conference%20hall.jpg` in `src/lib/site.ts`.

## Business information

All contact details and WhatsApp message templates live in `src/lib/site.ts` as the single source of truth:

- Phone / WhatsApp: **0788 869 958** (`+250788869958`)
- Email: **nyanzaroyalgateapartment@gmail.com**
- Instagram: **@nyanzaroyalgateapartment**
- YouTube: search "nyanza royal gate apartment"
- Location: **Nyanza, Rwanda**

## Forms

Forms validate required fields and then open a pre-filled **WhatsApp** message (with an email fallback). No fake success messages are shown, and no prices, availability or room categories are invented — rates are confirmed on request.

## Deployment

The build output is a static site in `dist/`.

```bash
npm run build
npm run preview   # local production preview
```

Deploy `dist/` to any static host (Vercel, Netlify, Cloudflare Pages). For Vercel, import the repository and use the default Vite preset (`npm run build`, output `dist`). Ensure the SPA fallback rewrites unknown paths to `index.html` so client-side routes resolve.

## Credits

Powered by Maurice — All Rights Reserved © Copyright
