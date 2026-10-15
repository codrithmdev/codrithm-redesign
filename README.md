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

## Configuration and deployment

There are no required application environment variables at present. The contact form validates input in the browser but deliberately does not send or store enquiries.

Production builds target Nitro's `cloudflare-module` preset. Deployment has not been configured; choose a host and verify its Cloudflare/Nitro compatibility before publishing.
