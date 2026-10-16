# Codrithm

Codrithm's official website for technology and creative services, with a dedicated community experience.

## Stack

- React, TypeScript, Vite, TanStack Start and TanStack Router
- Tailwind CSS v4, GSAP, ScrollTrigger and Lenis
- Nitro SSR configured for the Cloudflare module preset
- Vitest and Testing Library

## Local development

Use npm exclusively.

```sh
npm install
npm run dev
```

Useful commands:

```sh
npm run build
npm test
npm run lint
npm run preview
```

## Project structure

- `src/routes/` — TanStack file-based routes
- `src/components/codrithm/` — shared site sections, navigation, motion and page UI
- `src/components/ui/` — reusable UI primitives
- `src/assets/` — bundled editorial imagery
- `public/brand/` — Codrithm and collaborator branding assets
- `team/` — local team portraits served at `/team/*`

## Static deployment

There are no required application environment variables at present. The contact form validates input in the browser but deliberately does not send or store enquiries.

`npm run build` prerenders every approved public route into `dist/client`. Upload the contents of that directory to a static host such as Spaceship Essential. It includes a host-compatible `404.html` and `.htaccess` error-document rule for unknown URLs.

The build fails if a required route cannot be prerendered. Do not upload `dist/server`, source files, `node_modules`, or `.git`.
