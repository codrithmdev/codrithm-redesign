# Codrithm — Website PRD & Technical Requirements

**Version:** 2.0 | **Status:** Implementation specification (business content awaiting final verification) | **Updated:** 2026-10-10

> **Source of truth:** This file defines WHAT to build and the technical constraints. `APP-FLOW.md` defines journeys, `DESIGN-BRIEF.md` defines HOW it should look and read, and `IMPLEMENTATION-PLAN.md` defines the build order. When an assumption conflicts with the codebase, inspect the actual code and document the discrepancy before altering architecture.

## 1. Product summary and positioning

Codrithm is one brand with two complementary offerings:

1. **Services (primary homepage intent):** Technical services for businesses, founders, organizations and teams: AI automation, custom software development, practical AI/ML solutions, and website/WordPress development.
2. **Community (distinct experience):** A technology community supporting learning, events, collaboration and practical experience for students and emerging developers.

The site must make business services understandable immediately without erasing the authentic community history. Codrithm is expanding from a community into a services business; do not imply an established agency track record, company registration status, or commercial client results that have not been verified.

**Suggested positioning statement (editable):** “Software, automation, and a community that builds.”

**Homepage headline (provisional):** “We build software that makes work easier.”

**Supporting copy:** “From business websites to custom applications and AI-assisted workflows, we help turn specific problems into working software.”

**Brand rule:** Be specific and human. No empty marketing phrases or guaranteed outcomes.

## 2. Goals, metrics and non-goals

### Goals (ordered)
- Convert qualified business visitors into legitimate project inquiries.
- Prove real delivery capability through clearly labeled projects and technical case studies.
- Communicate the four service groups in plain language and facilitate service discovery.
- Preserve a credible, independently useful community section and membership route.
- Provide fast, accessible, mobile-first pages with working links and trustworthy content.

### Measurement (instrument only with approved privacy approach)
- Project-inquiry submissions and submission success/error rate.
- Service-card → service-page clicks; services → contact progression.
- Project detail engagement and relevant CTA clicks.
- Community → join link clicks; partner inquiries.
- Technical performance, accessible UX, and site error rate.

Do not invent conversion targets or claim established historical baselines. Set targets after initial data collection.

### Out of scope for v1
Member login/dashboard, online payments, checkout, booking engine, public price calculator, full custom CMS/admin dashboard, automated event registration system, chat bot widget, decorative 3D scenes, fabricated company KPIs, and production-domain migration without approval. Blog is deferred unless real maintained content exists.

## 3. Audience and needs

| Audience | Question | Primary path |
|---|---|---|
| Small businesses and founders | Can you build/improve our website or automate our work? | Home → Services → Contact |
| Teams requiring custom applications | Can you implement this feature, tool, integration or platform? | Services → Project evidence → Contact |
| AI/ML buyers | Can you solve this specific AI/data use case responsibly? | AI/ML details → relevant evidence → inquiry |
| Prospective community members | What activities and people will I find here? | Community → Events/activities → Join |
| Partners/mentors | Is this community active and how can we collaborate? | Community/About → Partnership inquiry |

## 4. Service taxonomy (launch)

Service descriptions are scope examples, not a promise that each capability is already commercially delivered. Confirm team capacity before publishing each claim.

| Slug | Public label | Explain with practical examples | Action |
|---|---|---|---|
| `ai-automation` | AI Automation | Repetitive-task automation, workflow orchestration, AI-assisted processing, tool/API integrations; n8n where appropriate | Discuss an automation |
| `software-development` | Software Development | Internal tools, custom web apps, dashboards, backend APIs, integrations | Discuss software |
| `ai-ml` | AI & Machine Learning | Practical AI features, data analysis/processing, selected ML models, document or text processing; require feasibility review | Discuss an AI/ML use case |
| `websites-wordpress` | Websites & WordPress | Business websites, WordPress builds, landing pages, redesign, performance and maintenance | Discuss a website |

Do not present AI/ML or automation as a guaranteed substitute for human review. Do not promise universal model accuracy or specific ROI.

## 5. Information architecture and routes

Required routes:

| Route | Purpose |
|---|---|
| `/` | Services-led homepage with visible community link |
| `/services` | Service overview and benefits/outputs |
| `/projects` | Verified work index, labeled by project type and stage |
| `/projects/$slug` | Only for real projects with sufficient approved detail |
| `/community` | Community overview, activities, events, joining |
| `/about` | Origin, team, approach, values, honest organization status |
| `/contact` | Inquiry type selection + working contact workflow |
| `/privacy` | Real privacy statement before collecting personal information |
| not-found | Helpful 404 route and recovery link |

Prefer dedicated sections within `/services` for v1; add `/services/$slug` only if approved detailed content exists and duplicates are avoidable. Preserve existing router conventions rather than forcing literal filenames.

**Primary navbar:** Home · Services · Projects · Community · About · Contact. Prominent action: **Start a Project** → `/contact?type=project`. On mobile use an accessible menu with reliable close/focus behavior.

## 6. Homepage requirements and template mapping

**Hard constraint: adapt existing site/template rather than redesigning it from zero.** Inspect actual implementation and make a reusable-component inventory before changing code.

1. **Hero:** Preserve current composition, strong dark theme and restrained entrance motion. Replace community-only promise with precise services proposition; primary CTA Start a Project; secondary Explore Our Work; community mini-card or clearly visible route.
2. **Four service cards:** Adapt existing bento/feature-card components; label, real examples, benefit explained concretely, action to service details/inquiry.
3. **Selected work:** Reuse showcase/card patterns, display 2–3 verified projects (or fewer; never invent to fill). Each labeled `Internal project`, `Client project`, `Community project` or `Prototype` and status `In progress` as needed.
4. **How we work:** Discovery → Scope → Build → Review/Handover. Describe deliverables and expectation-setting, not vague methodology.
5. **Community teaser:** Preserve “Learn · Build · Connect” identity but point to full community page.
6. **Partners / collaborators:** Retain existing logo row only for verified permissions; community partners ≠ commercial client logos.
7. **FAQ:** Cover scope, WordPress, integrations, support, estimates, content ownership, communication, AI feasibility. No unapproved price/timeline promises.
8. **Final CTA:** Repurpose newsletter CTA for start-project inquiry; keep a secondary Join Community action.
9. **Footer:** Real destinations; no dead links or generic filler.

Previous template sections like blog/news/testimonials must be moved, condensed, or disabled when no credible content exists; do not populate them with invented text.

## 7. Page-specific functionality

### Services
- Four sections/cards that plainly describe common problems, typical deliverables, constraints, and example work if verified.
- Every service links to `/contact?type=project&service=<slug>`; prefilled selections must be editable.
- No “Get a quote” fixed-price implication unless price estimation process exists.

### Projects
- Structured project records: `slug`, `title`, `summary`, `classification`, `status`, `problem`, `approach`, `features`, `stack`, `roleOrTeamContribution`, `images`, `approvedExternalUrl`, `publishable`, `updatedAt`.
- Only `publishable: true` records appear publicly; status must be truthful.
- Show case study only with sufficient evidence. Project screenshots need alt text. Never generate fake product UIs and describe them as delivered client work.
- Audit AI is a *candidate internal project*, published only with confirmed status/content.

### Community
- Distinct page with mission, actual activities, real event highlights, approved partner logos, and join CTA to verified destination.
- Only show member counts, event counts, attendance, testimonials, or dates if approved and sourced. If verification is pending, hide the metric.
- A dated past event must not display as upcoming.

### About
- Tell the true history: community roots and expansion into services; do not invent dates, company registration, team biographies, offices, headcounts, or client wins.
- Team profiles only after consent; links must work.

### Contact
- Inquiry type: `Project`, `Partnership`, `General` (community join uses a verified external path; optional contact fallback).
- Fields for Project: name, email, service, short description, optional organization, optional budget range, consent checkbox.
- Fields for Partnership: name, email, organization, intent/message, consent.
- Fields for General: name, email, message, consent.
- Successful submission only after server/provider acknowledgement; errors retain draft fields and allow retry.
- Do not accept sensitive materials/files in v1.
- If a secure approved backend/provider is not configured, disable submit with an honest notice and provide a verified contact email. Do not simulate success.

## 8. Technical baseline and engineering decisions

Current documented baseline (verify in actual repo at start): **TanStack Start + React 19 + TypeScript; Vite/Nitro; TanStack Router; Tailwind CSS v4 with design tokens; Framer Motion; Netlify deployment preset**. Keep framework and design foundations unless a genuine blocking issue is demonstrated and approved.

- Prefer server rendering/SEO-capable routes already supported by TanStack Start.
- Reuse existing motion primitives and styles; avoid installing UI frameworks or animation libraries for aesthetic novelty.
- Organize content as typed TypeScript objects or validated Markdown/JSON and reuse across route components.
- Ensure route loaders/render paths handle missing/invalid slugs with real 404 status where supported.
- Use existing environment conventions; provide `.env.example` with placeholder keys only. Never commit secrets.
- Use approved Netlify-compatible server endpoint/function for contact requests; verify deployment runtime and adapter before implementing.
- Validated payload schemas on both sides (server is authoritative). Enforce length limits, honeypot and server-side rate limits/spam controls as supported. Escape output, avoid user HTML injection, protect endpoints against abuse and CSRF as appropriate.
- Log failures without logging sensitive contact message bodies or credentials.
- Prevent duplicate submissions, and include clear network-timeout/retry states.
- No client-side delivery tokens, and no fake analytics/events/forms.

### Suggested content model

```ts
type ServiceSlug = 'ai-automation' | 'software-development' | 'ai-ml' | 'websites-wordpress';
type ProjectKind = 'internal' | 'client' | 'community' | 'prototype';
type ProjectStatus = 'planned' | 'in-progress' | 'completed';
// Project content must include publishable/approved flags; no hidden private data in client bundles.
```

Build components in existing `src/` patterns; do not force a new folder layout if repo organization differs.

## 9. Accessibility, responsiveness and performance

- Responsive design at 320px, 375px, 768px, 1024px, 1440px and large screens; no horizontal overflow.
- Semantic headings, landmark regions, alt text, labels, focus states, skip link, sufficient contrast (WCAG 2.2 AA target), touch targets and keyboard support.
- `prefers-reduced-motion` must suppress nonessential animation; no animation-dependent content.
- Images sized/compressed, below-fold lazy loading, optimized font loading, no autoplay background video.
- Targets for representative production-like pages: Lighthouse >=90 in Performance, Accessibility, Best Practices, SEO where feasible; aim for Core Web Vitals LCP <=2.5s, INP <=200ms, CLS <=0.1 at p75 when field measurements become available. Targets are quality gates, not guaranteed outcomes.
- SEO: unique page titles/descriptions, canonical URLs once approved, sitemap, robots policy, social metadata, meaningful page copy and relevant structured data only where accurate.
- Privacy: transparent notice, collect minimum personal data, document provider/retention and consent decisions; avoid nonessential trackers before privacy review.

## 10. Content governance and launch blockers

**Required inputs:** approved services and actual delivery boundaries; approved contact address/destination; real company/team names and roles with consent; real project screenshots and classification; social links; community join destination; verified collaborators/logos; privacy/retention wording; approved canonical domain.

**No fabrication policy:** If any input is unavailable, use non-public TODO markers in structured content, remove the section from production, or use an explicitly labeled honest interim state. Never publish fake results, testimonials, inflated numbers, awards, clients, addresses, claims, or invented imagery of past events.

**Release gates:** All critical routes work, important CTAs resolve, project content accurate, contact submission verified end to end (or honest fallback), no obvious security issue, responsive + a11y checks pass, staging review approved, no unintended production changes.

## 11. Definition of done

- Both journeys (business and community) demonstrably complete end-to-end.
- No generic AI-generated-sounding promises or filler copy.
- Existing template identity recognizable, performance not regressed unnecessarily.
- No mock success screens or placeholder links on launch routes.
- Typecheck, lint, tests and production build pass using scripts present in the repo.
- Final change report documents files, tested commands, pending real-content approvals and explicit deployment status.
