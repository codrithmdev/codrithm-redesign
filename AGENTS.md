## Architecture rules

- Primary nav and the five service categories live in `src/components/codrithm/site.ts`; read order from there everywhere — keeps nav, services pages and future lists consistent.
- Service detail pages use one `/services/$slug` route validated against `SERVICES` (unknown slug → 404) — one template, no drift between five files.
- Work and service-detail placeholder pages use `PageShell` (Nav + site motion). Full non-home pages compose the shared `Nav`, page sections, and `Footer` directly.
- Home and Community reuse `Footer`, whose page links follow `NAV`; its optional CTA is hidden when a page already has a closing invitation — prevents duplicated footer markup and repeated invitations.
