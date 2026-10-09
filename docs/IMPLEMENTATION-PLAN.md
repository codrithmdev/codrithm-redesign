# Codrithm — Codex Implementation Plan

**Version:** 2.0 | **Updated:** 2026-10-10 | **Target:** Iterative redesign of existing repository, no ground-up rebuild

## 0. Mandatory operating rules for Codex

1. Read all four `docs/` specification files before starting a phase.
2. Inspect repository code, package scripts and asset/layout components; codebase is authoritative for actual locations/versions.
3. **Preserve existing template character** and favor adaptations over replacement. No redesign from scratch; no framework migration.
4. Work on a dedicated branch and produce reviewable small changes. Do not publish to production or modify domain/deploy settings without explicit approval.
5. Do not invent facts, project metrics, client brands, testimonials, certifications, staff, addresses or working integrations.
6. No fake form successes or `href="#"` buttons. If a destination isn't approved, use a clearly documented disabled/fallback state.
7. Do not install large dependencies without explaining need; prefer already-installed libraries.
8. Run available lint/typecheck/tests/build after material changes; report actual outcomes and limitations.
9. At each checkpoint provide: changed files, changes made, visual impact, tests run, blockers, and next phase. Never silently proceed through an unapproved gate.
10. If docs and repo disagree, note the discrepancy and implement the minimum safe change consistent with user goals.

## Phase 0 — Repository audit (read-only first task)

**Goal:** Understand the existing design/template and avoid destructive refactoring.

Tasks:
- Read package manifest, routing setup, reusable UI components, CSS tokens, fonts, imagery, animation utilities, deployment configuration and test scripts.
- Capture existing sections and identify reused components including hero, bento, partner strip, stats, FAQ, cards, stories and footer.
- Audit dead links, mock forms, placeholder text, fake counters and inaccessible interaction patterns.
- Check the presence and feasibility of TanStack Start/React/Tailwind/Framer Motion and Netlify adapter.
- Produce a keep/adapt/retire table with file paths and dependencies; note actual existing routes.
- Gather a screenshot/visual reference of current desktop and mobile styling if a local browser workflow is available.

**Deliverable:** `docs/CURRENT-SITE-AUDIT.md` (new internal working file) with detailed observations. **Exit:** No code modification, reviewer approves reuse plan.

## Phase 1 — Architecture and content foundation

**Goal:** Add reliable information architecture without altering visual identity.

Tasks:
- Create routes: `/`, `/services`, `/projects`, `/community`, `/about`, `/contact`, `/privacy`, 404; implement verified project detail routes only when content exists.
- Refactor navbar/footer routes and primary CTA; retain existing menu visuals and motion if functional.
- Create typed content records for services, approved projects, events/collaborations, FAQs and site settings. Prefer existing content conventions.
- Create a single source for approved external URLs, contact destination and canonical domain (avoid duplicate hardcoded strings).
- Add visibility/publishability controls to avoid accidental display of placeholders.
- Document unknown source data in an internal content checklist, not public UI.

**Acceptance:** Routes load directly and through navigation, no dead nav, draft content cannot accidentally leak, project details safely 404.

## Phase 2 — Homepage transformation

**Goal:** Repurpose current sections for the services-first experience.

Execution order:
1. Hero copy/CTA and community mini-link: preserve hero layout and animation unless accessibility demands change.
2. Four service cards in existing bento/feature pattern.
3. Selected work section built from verified project data; hide when none approved, never invent.
4. Practical four-step process using existing card style.
5. Community teaser using Learn · Build · Connect.
6. Verified partner/collaboration strip with accurate labels.
7. Practical FAQ and business-oriented closing CTA.
8. Remove or relocate unrelated placeholder news/testimonials/counters instead of forcing content.

**Acceptance:** Services discoverable above fold on desktop/mobile, visible separate community path, primary links work, layout clearly recognizable as existing template.

## Phase 3 — Dedicated content pages

**Goal:** Give each audience enough detail without a generic bloated site.

Tasks:
- Services: four differentiated service sections; real examples, deliverables, scope notes and contact CTA with service query parameter.
- Projects: index + verified case studies; internal/client/community classification; honest project stage; screenshots and accessible labels.
- Community: mission, Learn · Build · Connect, real highlights/events, approved collaborators and verified joining URL.
- About: community origins, new service direction, appropriate team and values, no invented claims.
- Contact: clear selection of project, partnership and general inquiry, with content mapped to approved integration plan.
- Privacy + proper 404.

**Acceptance:** Each route has relevant unique content, useful CTA, mobile layout, logical heading structure, metadata and working internal navigation.

## Phase 4 — Forms and approved external integrations

**Goal:** Actual lead collection with truthful UX and secure delivery.

Tasks:
- Decide approved receiving email/inbox/CRM and privacy language with owner before activating forms.
- Build Netlify/TanStack-compatible server handler or approved form integration without exposing secrets.
- Validate input server-side with length limits; accessible client validation for convenience.
- Add honeypot/rate limiting/abuse defense; avoid sending PII to logs/analytics.
- Support prefilled inquiry type/service from safe whitelist, submission spinner, true confirmation, retryable errors, accessible feedback.
- Verify with test messages in staging, including duplicates, rejection, provider downtime and invalid payloads.
- If unconfigured, provide verified email/contact fallback and do not display a false success state.

**Acceptance:** End-to-end verified delivery, abuse-resistance checks, secrets server-only, no fake success or dead form.

## Phase 5 — Motion, accessibility, performance and SEO

**Goal:** Refine; do not layer on gratuitous effects.

Tasks:
- Use existing motion primitives and reduce unnecessary continuous animations; respect reduced motion.
- Test keyboard focus, menu, accordions, form errors, contrast, semantic headings and screen reader announcements.
- Optimize media, font loading and route bundles; check for mobile layout shifts.
- Add title/description/canonical/social metadata, sitemap and robots rules after domain approval.
- Remove inaccurate JSON-LD; only add accurate organization/website structured data if appropriate.
- Test responsive layouts at 320/375/768/1024/1440 widths and realistic device performance.

**Acceptance:** No high-severity a11y failures or major overflow; build quality meets documented targets reasonably; results captured with genuine measurements, not invented numbers.

## Phase 6 — Release review and handover

**Goal:** Safe staging launch and clear handoff.

Tasks:
- Run repository scripts (lint/typecheck/test/build) and fix failures within scope.
- Test all routes, internal/external links, project filters if any, 404s, forms, reduced-motion and mobile nav.
- Confirm all statistics, partner claims, event dates, project details, contact/social URLs and privacy copy with owner.
- Deploy to a staging/preview environment only if authorized; do not touch active official domain without separate explicit approval.
- Prepare rollback instructions and simple content editing guide.

**Acceptance:** Manual approval, deployment plan and rollback owner, no unresolved launch blockers.

## Phase checklist and ticket IDs

| Ticket | Priority | Task | Dependency | Done when |
|---|---|---|---|---|
| CD-001 | P0 | Audit existing components and animations | None | Inventory and reuse map reviewed |
| CD-002 | P0 | Add typed content models and verified URL config | CD-001 | Draft content not public |
| CD-003 | P0 | Implement route/nav skeleton | CD-001 | All essential routes navigate |
| CD-004 | P0 | Update homepage hero and services | CD-002/003 | Correct services copy above fold |
| CD-005 | P0 | Add honest projects index/detail | CD-002/003 | Status/classification accurate |
| CD-006 | P1 | Build Community page | CD-003 | Activities/join route verified |
| CD-007 | P1 | Build About and Services pages | CD-003/004 | Unique content and CTAs |
| CD-008 | P0 | Implement secure contact flow | CD-003 + provider info | Tested true deliveries |
| CD-009 | P1 | Tune animations, a11y and responsive | Core pages | Reduced-motion + mobile passes |
| CD-010 | P1 | Metadata, SEO and privacy | Real domain/privacy inputs | Accurate metadata |
| CD-011 | P0 | Staging QA and release checklist | All others | Approved release checklist |

## Information required from Codrithm owner

- Which team services and examples are ready for paid work at launch?
- Which projects are public and which screenshots/repo links are approved?
- Approved email receiving address/provider, community join link and social profiles.
- Approved partner logos, team images/roles, community statistics, privacy/consent terms.
- Hosting/production domain approval and deploy permissions.

These are **content and activation gates**, not permission to invent replacements.

## First prompt to use in Codex (paste verbatim)

```text
Read docs/PRD-AND-TECHNICAL-REQUIREMENTS.md, docs/APP-FLOW.md,
docs/DESIGN-BRIEF.md and docs/IMPLEMENTATION-PLAN.md completely.
Start ONLY with Phase 0 (read-only audit). Inspect actual repository structure,
components, routes, animations, tokens, assets, package scripts and current UI.
Do not modify source files or deployment configuration yet.
Write docs/CURRENT-SITE-AUDIT.md describing:
1) the section/component inventory and file paths,
2) keep/adapt/retire map for the current template,
3) real UX, accessibility, placeholder and technical gaps,
4) proposed route/content architecture grounded in this repo,
5) dependencies and risks,
6) phase-by-phase change plan with validation commands.
Do not redesign from scratch or invent client evidence. Stop after presenting
Phase 0 findings for review.
```

## Codex continuation prompt (use only after audit approval)

```text
Follow the four approved docs and the Phase 0 audit. Implement Phase 1 only.
Retain the existing template design, motion and technology. Make minimal,
reviewable changes; do not invent content or activate unconfigured forms.
Show changed files and run available validations. Stop at Phase 1 exit gate.
```
