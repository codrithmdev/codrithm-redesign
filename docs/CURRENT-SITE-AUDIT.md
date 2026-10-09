# Codrithm — Current Site Audit

**Phase:** 0 — read-only repository audit  
**Reviewed:** 2026-10-10  
**Basis:** Current repository source plus the four v2 specifications in `docs/`.

## 1. Executive summary

The repository is a healthy, standalone TanStack Start concept site with a strong reusable visual foundation. It is currently a single community-led landing page, not a multi-route services website. The implementation already has the design system, responsive layout conventions, motion primitives, error boundaries, and Netlify-ready server baseline required for the planned direction.

The correct next step is an incremental adaptation, not a redesign or framework replacement. The main work is information architecture, verified content modelling, route creation, truthful conversion paths, and removal/hiding of prototype content that could be mistaken for evidence.

No source or deployment configuration was changed during this audit. The current working tree already contains user-authored modifications to the four specification documents.

## 2. Repository and runtime inventory

| Area | Current implementation | Audit finding |
| --- | --- | --- |
| App framework | TanStack Start + TanStack Router + React 19 + TypeScript | Keep. File-based routes are already in place. |
| Build/runtime | Vite 8, Nitro with Netlify preset by default | Keep. Verify deployed adapter behavior before adding contact handling. |
| Styling | Tailwind CSS v4, semantic CSS variables in `src/styles.css` | Keep. Brand blue `#0066FF` and green `#87FFBC` already exist as tokens. |
| Motion | Framer Motion utilities in `src/animations/` | Keep selectively; existing reduced-motion/mobile logic is a good base. |
| UI library | Local Radix/shadcn-style primitives under `src/components/ui/` | Reuse only as needed; many are currently unused by the landing page. |
| Server | `src/start.ts`, `src/server.ts`, server error capture/fallback | Keep. CSRF middleware is present; no application server functions or contact endpoint exist. |
| Public routes | `/` only, plus root 404/error components | Adapt. Required services, projects, community, about, contact and privacy routes do not exist yet. |
| Content/data | Component-local arrays and strings | Adapt. No typed content model, publishability control, URL configuration, or CMS/content source exists. |
| Verification | `npm run lint`, `npm run build`; no test/typecheck script | Lint completed without reported errors during audit. Add a dedicated typecheck/test strategy only if/when useful. |

## 3. Current page and reusable component inventory

The single homepage is assembled in `src/routes/index.tsx` in this order:

| Current section/component | File | Current role | Recommended disposition |
| --- | --- | --- | --- |
| Navigation | `src/components/site/Navbar.tsx` | Fixed section-anchor nav + responsive menu | **Adapt.** Convert to route navigation; retain layout, scroll treatment and menu visual language. |
| Hero | `src/components/site/Hero.tsx` | Community headline, two inert CTA buttons, dashboard mockup | **Adapt.** Preserve composition; use services-first copy, real `/contact` and `/projects` links, and community route. |
| Logo marquee | `src/components/site/LogoMarquee.tsx` | Animated text names for claimed organizations | **Retire/hide until verified.** Reintroduce only as approved community collaborations; pause on hover/focus if retained. |
| Values/community bento | `src/components/site/BentoSection.tsx` | Community values, member counter, collaboration visual | **Adapt.** Reuse card geometry for the four services or retain a factual community variant on `/community`. |
| Section heading | `src/components/site/SectionHeading.tsx` | Shared title/subtitle presentation | **Keep.** Use throughout new routes. |
| Feature split | `src/components/site/FeatureSplit.tsx` | Community learning/mentorship copy, abstract images, anchor CTA | **Adapt.** Use for service detail/process sections; replace `See Doc` and `#pricing` destination. |
| Statistics | `src/components/site/StatsSection.tsx` | Animated community figures | **Hide pending verified sourced metrics.** Current figures are not tied to an approved source. |
| Community pathway cards | `src/components/site/Pricing.tsx` | Learn/Build/Connect cards with inert buttons | **Adapt.** Strong fit for community teaser/page; connect only to verified community/partner paths. |
| Testimonials | `src/components/site/Testimonials.tsx` | Three anonymous, static testimonials | **Retire/hide until genuine approved quotes are supplied.** Controls can be reused for a verified carousel if necessary. |
| Blog/stories | `src/components/site/Blog.tsx` | Static story cards linking back to `#blog` | **Retire or replace.** Use as project cards only with approved real work, otherwise omit. |
| FAQ | `src/components/site/Faq.tsx` | Community-oriented accordion | **Adapt.** Replace content with verified services/contact FAQs and retain accessible native buttons. |
| Final CTA | `src/components/site/CtaSection.tsx` | Prevented email form; duplicated dashboard illustration | **Adapt.** Replace with project CTA and only activate a form after a verified delivery integration exists. |
| Footer | `src/components/site/Footer.tsx` | Link labels all point to `#home` | **Adapt.** Replace with actual routes and approved social/contact/legal URLs. |
| Dashboard mockup | `src/components/site/DashboardMockup.tsx` | Decorative community analytics UI | **Keep decoratively or relocate.** Must not be presented as live data or client evidence. |
| Animated button | `src/components/site/AnimatedButton.tsx` | Reusable blue button styling and motion | **Keep.** Must support semantic links as well as buttons when real navigation is added. |
| Logo | `src/components/site/Logo.tsx` | Shared brand mark/text | **Keep.** |

## 4. Design and motion reuse map

### Keep

- Dark `#030A18` canvas, surface cards, rounded geometry, typography stack, spacing scale, soft borders and shadows from `src/styles.css`.
- Semantic action color `--primary` (`#0066FF`) and green supporting accent `--primary-glow` (`#87FFBC`).
- Existing `Reveal`, `Stagger`, `Counter`, `Float`, `Parallax`, `MouseDrift`, transition tokens, and `useMotionPrefs` organization.
- Responsive page shell, image sizing/lazy loading patterns, route-level metadata, custom 404/error screens, and the existing accessible names on icon controls.

### Adapt

- Hero and feature layouts: maintain their visual hierarchy while changing community-only messaging to services-first copy.
- Bento card layout: adapt to four service summaries or a combination of service/value cards.
- Learn/Build/Connect cards: move to a community teaser or `/community`, with distinguishable membership and partnership actions.
- FAQ accordion: update to approved business/service questions.
- Navigation, footer, and every CTA: replace fragment anchors/inert controls with TanStack route links or verified external destinations.
- Motion: retain entrance and small hover transitions; reduce continuous float/parallax/marquee effects per the design brief.

### Retire or hide pending verified content

- Static logo marquee organization names: `SUPERIOR`, `Inter AI Club`, `DeepCiphers`, `NYLP`, `MSA`, `CODRITHM`.
- Statistics: 600+ followers, 7+ core team, 100+ active members, 10+ sessions/events.
- Anonymous testimonial carousel and all quote copy.
- Static blog image cards and their self-linking anchors.
- Any dashboard metric wording that could be read as live or verified community/business analytics.

## 5. Actual UX, accessibility, and technical gaps

### User journey and content gaps

1. The homepage metadata, navigation, headings, features, plans, FAQ, CTA and footer all describe a community-only site; the planned services-first positioning is not implemented.
2. There is only one route. Required pages (`/services`, `/projects`, `/community`, `/about`, `/contact`, `/privacy`) and project detail handling are absent.
3. Hero buttons and navbar CTA are buttons without destinations. `FeatureSplit` links to `#pricing`; blog cards link to `#blog`; all footer links point to `#home`.
4. The final email form calls `preventDefault()` and silently does nothing. It must not be activated or present a false completion state before a real contact delivery route is approved.
5. Content is duplicated and component-local; there is no content model or safe `publishable` gate for projects, events, partner marks, external URLs, or factual metrics.

### Accessibility gaps

1. A skip link is absent, even though the app has a fixed global navigation and long single-page content.
2. Main CTAs are `button` elements but function conceptually as navigation. Route actions should use links for correct semantics/new-tab behavior.
3. The mobile menu toggles visually, but it does not close on Escape or return focus to the toggle; these are Phase 1 requirements.
4. The animated logo strip does not pause on keyboard focus or hover.
5. FAQ controls correctly use buttons and `aria-expanded`, but they animate the panel height. This is reasonable for short answers but should be minimized/checked with reduced-motion behavior.
6. Current blue FAQ rows use blue both as the row and plus control. This meets the user's solid-blue-button direction, but the eventual FAQ should visually distinguish the full disclosure control from primary conversion actions.
7. The root document currently lacks a skip-to-content target, and `main` has no explicit `id`.

### Technical and quality gaps

1. No project data or content schema exists, so route/page rendering cannot safely filter draft versus approved work.
2. No contact server function, provider integration, environment configuration example, validation schema, spam defense, or error/success state exists.
3. There is no test script, explicit `tsc --noEmit` script, CI definition, sitemap, canonical URL configuration, social-image configuration, or privacy page.
4. `public/robots.txt` allows crawlers but there is no sitemap reference. Do not add production canonical URLs before domain approval.
5. The Vite configuration aliases `lucide-react` to a local `src/components/icons.tsx` module. This is intentional in the current concept and should be retained/verified during changes rather than bypassed with a new icon package.
6. `src/routeTree.gen.ts` is generated. It must be regenerated by the existing router toolchain after route creation rather than hand-edited.

## 6. Proposed route and content architecture

```text
src/
  content/
    services.ts        # four verified service records
    projects.ts        # only publishable, approved project records
    community.ts       # approved activities/events/collaborations
    site.ts            # approved internal/external destinations and site settings
  routes/
    index.tsx
    services.tsx
    projects/
      index.tsx
      $slug.tsx        # only after publishable project detail content exists
    community.tsx
    about.tsx
    contact.tsx
    privacy.tsx
    __root.tsx
  components/site/
    ...existing reusable layout components, incrementally adapted
```

Recommended content rules:

- Use typed objects and explicit `publishable` / `approved` flags.
- Render no external link unless a validated destination is present.
- Represent unknown content as internal data status, not public placeholder copy.
- Keep URL/query allowlists for `type` (`project`, `partnership`, `general`) and the four service slugs.
- Use a contact fallback only after the owner supplies a verified email/destination.

## 7. Dependencies, assumptions, and risks

| Item | Status | Effect on implementation |
| --- | --- | --- |
| Approved service delivery boundaries | Needed | Determines which service copy can be public. |
| Public projects/screenshots/repositories | Needed | Projects route and selected-work section must stay hidden without them. |
| Community joining URL | Needed | Membership CTA cannot be activated safely. |
| Contact recipient/provider and privacy language | Needed | Contact form remains an honest non-submitting/fallback state. |
| Approved partner marks and relationship classification | Needed | Logo strip/collaboration section remains hidden. |
| Verified community metrics, events, testimonials | Needed | Current stats/testimonials cannot be carried into production. |
| Canonical production domain | Needed | Canonical metadata, sitemap production URL and final SEO configuration wait. |
| Deployment authorization | Not granted | Do not modify production/hosting settings or deploy. |

## 8. Phase-by-phase delivery plan

| Phase | Scope after approval | Primary output | Validation |
| --- | --- | --- |
| 1 | Route/nav skeleton and typed draft-safe content foundation | Direct navigation across required routes; no draft leakage | `npm run lint`, `npm run build`, manual route checks |
| 2 | Services-first homepage transformation | Adapted hero, services, selected work gate, process, community teaser, truthful CTA | Desktop/mobile visual review, lint/build |
| 3 | Dedicated Services, Projects, Community, About, Contact, Privacy pages | Unique content/metadata and routed CTAs | Route/404/manual keyboard checks, lint/build |
| 4 | Secure form and approved integration | Server validation, spam controls, real success/error flow | Staging delivery/error tests plus lint/build |
| 5 | Accessibility, motion, performance and SEO refinement | Verified route metadata, reduced-motion and responsive quality | Keyboard/mobile/Lighthouse-style audit and build |
| 6 | Staging review and handover | Release checklist and rollback/content guide | Full route/link/form review with owner approval |

## 9. Validation commands currently available

```powershell
npm run lint
npm run build
npm run dev
```

`npm run lint` completed with no reported errors during this audit. The package manifest has no separate test or typecheck command. Before Phase 1, use the existing commands only; any new script should be a small, justified addition rather than a toolchain change.

## 10. Phase 0 exit decision

The template reuse plan is viable. I recommend approval to begin **Phase 1 only**: create the route/navigation skeleton and typed safe content foundation, while retaining the existing visual system and withholding unverified public evidence.
