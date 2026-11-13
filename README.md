# FORMA — Interior Architecture (frontend)

A responsive React + Tailwind + GSAP landing page inspired by the supplied FORMA reference.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Stack
- React + Vite
- Tailwind CSS (utility setup; custom editorial styling in `src/styles.css`)
- GSAP + ScrollTrigger for intro, reveal, image parallax and manifesto motion
- Lucide React icons

## Customize
- Replace project content and image URLs in `src/App.jsx`.
- Update typography, spacing and responsive rules in `src/styles.css`.
- The contact link is currently a `mailto:` placeholder (`hello@forma.studio`).
- This is a frontend-only implementation; no CMS, database, authentication or form submission is connected.

## Notes
The page is an original implementation based on the requested visual direction, not a copy of proprietary source code or assets. Replace demo photography with licensed project imagery before production.
