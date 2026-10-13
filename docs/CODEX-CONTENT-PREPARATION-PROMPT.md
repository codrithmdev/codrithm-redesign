# Codex Prompt — Codrithm Content Preparation (Approval-Gated)

Repository: `https://github.com/codrithmdev/codrithm-redesign`

## Objective
Prepare the existing website to display Codrithm's genuine project, community events, collaborators, and team profiles once content is individually approved. **This task does not authorize any publication, deployment, or contact integration.** Keep the existing template and visual structure.

## Source of truth
1. Read the repository's `docs/` requirements, implementation plan, current content types, route components, and any audit report.
2. Read the accompanying `CONTENT-APPROVAL-DRAFT.md` and treat it as draft editorial input, not public approval.
3. When repository content differs from the draft, preserve factual uncertainty and report it rather than choosing whichever sounds better.
4. Do not treat examples or comments as permission to set publication flags to true.

## Records to prepare
- **Project:** Audit AI — internal project, status and stack require verification.
- **Events:** Beyond Prompting (2026-09-05, Shaafea Dawood); Microsoft Learn & Copilot (2026-08-14, MLSA Karachi collaboration attribution to verify); GitHub Session; LinkedIn Optimization; Smart Career Direction (the earlier title was 'Kickstart Your Journey with Smart Career Direction').
- **Collaborators:** UMT Inter AI Club; EMMUverse Technologies; DeepCiphers. These are community/technology relationships, not presumed paying customers.
- **Team:** Create candidate records or a structured team data model for confirmed individuals only. Previously discussed people include Atiq Umer, Umais, Zimran Sohail, Wajeeha, Iqra, and Aliza, but public roles, names, biographies, photography, and consent all require confirmation. Do not publish any of these profiles.

## Implementation requirements
1. Inspect and extend existing TypeScript models without breaking existing routes. Use stable slugs/IDs, content category, optional verified URLs, optional media paths, required `publishable: false`, and additional `verification` or `approvalNotes` metadata where useful.
2. Store draft records centrally in the existing `src/content/` model; do not duplicate editorial copy in components.
3. Render **only** `publishable === true` records on all public pages and components. Confirm this applies to SSR, cards, detail routes, related content, home preview sections, sitemap, and metadata. Unpublished detail slugs should return 404/not found, not draft text.
4. Build or refine event/project/collaborator/team presentation components using the existing dark-theme cards, typography, motion patterns and accessibility conventions. They should handle missing approved media gracefully without fictional placeholder photos.
5. Do not generate images, invent portfolio case studies, invent event numbers, or claim commercial relationships.
6. Do not create social/contact/join buttons without verified URLs. Avoid exposing hidden content in client-side JSON props, rendered page source, or public static data endpoints.
7. Add a private (non-routed) `docs/CONTENT-APPROVAL-CHECKLIST.md` with a record-by-record table of missing evidence/assets and who must approve them. This document contains no private contact details.
8. Keep project screenshots and team photos out of public deployment assets until permission is confirmed; an unpublished record flag alone does not prevent an asset inside `public/` from being directly accessible. Place unreleased materials outside publicly served paths or use clearly documented local-only references.
9. Preserve the existing homepage, Services page and Contact form behavior. Do not add third-party services, provider SDKs, databases, email delivery, or first-party form endpoints.
10. Do not change Git history, auto-commit, push, or deploy.

## Verification
- Run `npm run lint` and `npm run build`.
- Check type safety using the project's existing command/tooling.
- Check public rendering with all new flags false: zero draft cards, detail pages, SEO/social metadata, image URLs, or exposed private assets.
- If tooling supports browser testing, verify responsive card/layout states and accessibility. Report any tests not performed.
- Ensure existing services remain published as before; only new content remains hidden.

## Completion report
Provide: changed files; record inventory and `publishable` flags; draft-to-page mapping; missing factual approvals; asset permission checklist; lint/build/browser results; and exact next steps for owner approval. **Do not flip publication flags or deploy. Stop after preparation.**
