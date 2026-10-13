# Codex Handoff — Seven-Member Team Profiles (Read-only Verification)

## Context

The owner has preliminarily approved seven Codrithm team profiles, their roles, the exact short biographies, supplied LinkedIn links, and publication consent. Read `docs/SEVEN-MEMBER-TEAM-APPROVAL-CHECKLIST.md` as the authoritative team-record approval ledger alongside the existing consolidated content handoff and the site's content specifications.

**No final permission to publish has been given. All records remain `publishable: false`.**

## Task — inspection only

1. Inspect the current repository and locate `team_pics`. List the **exact paths and filenames** of the seven reported portraits and inspect file types, dimensions, sizes, naming, and image quality where possible.
2. Cross-reference the existing typed team drafts with the seven approved records in the checklist. Provide a field-level diff for any missing name, role, biography, or profile URL. Preserve approved biographies verbatim and note that `Wajeeha Azeem`'s approved public role is **Operations Lead**.
3. Propose an explicit filename-to-person mapping **only where filenames or an existing verified mapping establish identity**. Mark the rest `unmatched / needs owner confirmation`; do not recognize faces or guess.
4. Identify whether the folder is publicly served by the framework or build pipeline. **Do not move or copy files to `public/` or include unapproved images in public bundles.** Flag any already-public portrait assets as a publication/privacy risk for owner review.
5. Assess how the existing Team section can display seven cards using the current design system without adding new layout libraries or changing the site's visual identity. Offer only targeted improvement recommendations.
6. List the remaining items for final release: approved image-to-profile map, authorized specific portrait files, browser QA, final publication approval and separate deployment authorization.
7. If local checks are appropriate, run `npm run lint` and `npm run build`, clearly reporting the results and any limits.

## Hard constraints

- **Read-only:** do not edit any repository file, Git state, publication flags, build configuration, or website content.
- Do not commit, push, or deploy.
- Do not enable profile links, images, or team cards on public routes.
- Do not invent duties, technical qualifications, identity mappings, or additional team members.
- Do not introduce third-party services.
- Existing event and collaborator approval states are unchanged.

## Deliverable

Return a concise report with (a) photo inventory, (b) safely identified mappings and unresolved filenames, (c) exact differences from approved profile data, (d) any public asset-exposure risk, (e) readiness checklist, and (f) next recommended owner approvals. Stop there.
