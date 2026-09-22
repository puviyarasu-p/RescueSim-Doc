# RescueSim Documentation

A Next.js documentation site for **RescueSim**, covering both product variants:

- **RescueSIM Lite** — PC-based instructor-led CPR training
- **RescueSIM XR** — Meta Quest VR training

along with the shared Manikin Wi-Fi setup, Software Downloads, CPR Training Modes, and the
Admin Panel (including where to generate device activation / license codes).

## Content sourced from

`../Doc/RescueSim_User_Manual.docx` — screenshots were extracted from the document and placed
in `public/images/docs/`.

## Structure

- `src/lib/nav.ts` — single source of truth for the sidebar, breadcrumbs, and prev/next links.
- `src/components/DocArticle.tsx` — shared page wrapper (breadcrumb + prose + prev/next).
- `src/components/Figure.tsx` + `src/lib/image-sizes.ts` — screenshots rendered at their real
  aspect ratio.
- `src/app/**/page.tsx` — one route per doc page.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds a static export and
publishes it to GitHub Pages. Enable Pages once in the repo settings: **Settings → Pages →
Source: GitHub Actions**.

## Still to fill in

The **Software Downloads** page intentionally has no hardcoded installer/APK URLs or Admin
Panel URL — those are organization-specific and should be added once known (see
`src/app/downloads/page.tsx`).
