# Codrithm — Design Brief & Content Direction

**Version:** 2.0 | **Updated:** 2026-10-10

## 1. Creative brief

**Design objective:** Preserve the existing Codrithm template and its identifiable design language, but evolve it from a community-only landing page into a trustworthy services-first website with a complete community page.

**Desired impression:** “These people build practical software and can explain their work clearly.” Professional, technical, considered, approachable. Not a generic AI agency landing page, not an over-decorated demo, and not a corporate stock template.

**Non-negotiable:** Reuse the current section structures, cards, typography, motion primitives, responsive design patterns, and visual cues wherever useful. Changing the order, purpose and content of existing sections is encouraged; a wholesale redesign is not.

## 2. Visual design system (keep)

| Token | Value | Use |
|---|---|---|
| Main background | `#030A18` | Dark canvas |
| Primary action | `#0066FF` | Solid CTA backgrounds, focus emphasis |
| Accent | `#87FFBC` | Small emphasis, status and technical cues |
| Primary foreground | `#F7FBFF` | High-priority text |
| Fonts | **Plus Jakarta Sans** heading, **Manrope** body | Preserve existing type stack |

Keep existing card radii, grid proportions, shadows, section padding and subdued borders after inspecting actual code. Avoid inventing token values that conflict with existing classes. All actionable buttons should read clearly with accessible contrast; primary buttons solid blue with legible white text. Green is not the default button color.

### Hierarchy
- Hero headline immediately visible, no typing effect that delays meaning.
- Clear 1 primary CTA per major section; secondary actions visually quieter.
- Short scannable headings and specific supporting text.
- Cards should include meaningful differences; don't repeat the same “modern solutions” copy four times.
- Space and negative space are intentional; avoid dense dashboard-style decorations.

## 3. Brand voice: anti-buzzword policy

**Write like an engineer explaining useful work to a thoughtful client.**

- Use verbs and objects: build a dashboard, connect a form to a CRM, reduce manual data entry, create an editable WordPress website.
- Name constraints when useful: scope and feasibility are confirmed before timelines or pricing.
- Do not use unsupported adjectives like world-class, award-winning, industry-leading, revolutionary, cutting-edge, best-in-class, seamless, game-changing, or transformative.
- Do not claim guaranteed revenue, guaranteed automation reliability or magical AI results.
- Avoid overusing em dashes, random title-case phrases, and pseudo-technical filler.
- Explain AI/ML honestly: sometimes a simple rule-based workflow is more appropriate than a model.
- Write concise service descriptions; detailed technical depth belongs on services/projects pages.

| Generic phrase to avoid | Better direction |
|---|---|
| “Unlock the power of AI” | “Connect repetitive tasks and tools into a workflow your team can review.” |
| “Transforming ideas into reality” | “We turn your requirements into websites and working applications.” |
| “Revolutionary solutions” | “A dashboard that replaces a spreadsheet-based approval process.” |
| “Scalable, robust and seamless” | Describe the load, reliability or integration need explicitly. |
| “Empowering next-gen innovators” | “We organize sessions, projects and opportunities for emerging developers.” |

## 4. Proposed content architecture and copy starters

These are recommended **drafts**, not claims of completed client work. Edit against confirmed capability.

### Hero
- Eyebrow: `SOFTWARE DEVELOPMENT · AI AUTOMATION · WEB`
- H1: **We build software that makes work easier.**
- Body: “From business websites to custom applications and AI-assisted workflows, Codrithm helps turn specific problems into working software.”
- Primary CTA: `Start a Project` → contact project form.
- Secondary CTA: `Explore Our Work` → projects.
- Distinct community mini-card: “We also bring students and developers together through sessions, projects and collaborations.” → Community.

### Services section
- Eyebrow: `WHAT WE DO`
- H2: **Useful software starts with a real problem.**
- Intro: “We build websites, applications and automations around how teams actually work.”
- Cards: 
  - **AI Automation:** “Connect tools and reduce repetitive steps with workflows your team can understand and manage.”
  - **Software Development:** “Custom web apps, dashboards and APIs built around specific requirements.”
  - **AI & Machine Learning:** “Practical AI features and data-driven applications, with feasibility and accuracy reviewed for each use case.”
  - **Websites & WordPress:** “Business websites and WordPress builds that are clear, responsive and easy to update.”
- Each card has example deliverables and a real CTA.

### Selected work
- H2: **A closer look at what we're building.**
- Explain project type/status accurately; use genuine UI screenshots and lessons learned.
- If Audit AI is approved for public mention: describe it as an internal project at its confirmed status.

### Process
- H2: **A straightforward way to work together.**
- Four steps: `Tell us the problem` → `Agree on scope` → `Build and review` → `Handover and support`.
- Avoid fake guarantees about response time or fixed timelines.

### Community teaser
- H2: **Built with a community behind us.**
- Body: “Codrithm began as a place for emerging developers to learn, build and connect. That work continues alongside our services.”
- Preserve Learn · Build · Connect visuals; separate CTA `Explore Community`.

### Collaboration strip
- Label: **Community collaborations** unless the logos actually represent paying clients. No implied endorsements without permission.

### FAQ
- Natural questions: `What kind of projects do you take on?`, `Can you work with an existing WordPress site?`, `Do you build custom automations?`, `How do you scope an AI feature?`, `How are timelines and pricing decided?`, `What happens after launch?`.
- Answers must match actual processes and team capacity.

### Final CTA
- H2: **Have a project in mind?**
- Body: “Tell us what you need, what's not working, or what you're considering building.”
- CTA: `Tell Us About Your Project`.
- Secondary link: `Looking for the community? Join us.`

## 5. Page-specific visual approach

### Home
Strong hero; bento services; project previews with actual UI; concise process; modest community teaser; collaborators; FAQ; final CTA. Do not keep every current section just to preserve scroll length.

### Services
Editorial sections with readable deliverables and example use cases. Avoid walls of icons or meaningless diagrams. A small amount of technical detail is welcome: integrations, admin workflows, APIs, model evaluation where relevant.

### Projects
Case-study-driven cards. Show full-width cropped real screenshots, clear project classification labels, concise problem/solution and honest status. Do not manufacture project pictures to imply shipping products.

### Community
Let the original youthful template character breathe here. Use actual past event photos, community activities, people, talks and approved collaborator marks. Retain `Learn · Build · Connect`, potentially retain “Where Coders Make History” as a secondary community-only expression if approved.

### About
Human and straightforward: origin, how services emerged, skills, values, real people. Don't show fictitious office photos or placeholder portraits.

### Contact
Plain, clear and calm. Form should feel reliable rather than like an animated experience. Avoid decorative effects distracting from completion.

## 6. Motion specification

**Keep selectively:** subtle hero entrance, staggered section reveals, understated card hover, tasteful logo movement, relevant accordion transitions.

**Reduce/remove:** always-on floating objects, heavy parallax, flashy 3D animation, typing headlines, bright gradient sweeps, continuous competing animated surfaces.

**Suggested limits (tune to existing primitives):** 150–250ms for interaction feedback; 300–600ms for entrance reveals; small movements (4–12px), no bounce by default; only animate opacity/transform where feasible. Avoid layout-shift-inducing height animation for large content.

Respect reduced-motion, preserve content when JS/motion is unavailable, allow marquee pause, and test at low-end mobile settings.

## 7. Responsive and accessibility guidance

- Preserve main hierarchy on mobile; don't stack decorative items before the hero CTA.
- Maintain comfortable reading width, sufficient heading wrap, consistent section gaps, and 44px-ish interactive targets.
- Contrast-safe text on dark backgrounds; visible keyboard focus.
- Never use motion or color alone to convey state.
- Content must be navigable if animation is disabled.
- Real alt text for event/project visuals; decorative accents hidden from assistive technology.

## 8. Image, social proof and evidence policy

Use priority: **actual product screenshots → actual team/event photographs → clear diagrams of real capabilities → restrained abstract decoration**.

No fake client quotes, fake companies, fictional team profiles, invented projects, inflated member stats, implied customer relationships, or AI-generated photos passed off as Codrithm events.

If an asset or permission is missing, leave an internal TODO and omit the public block until ready. This improves trust more than generic placeholder content.

## 9. Designer/engineer acceptance checklist

- A returning visitor recognizes the original Codrithm template.
- A new business visitor understands the offered work above the fold.
- Community remains clearly accessible and visually real, not an afterthought.
- Each service card is distinct and makes sense without jargon.
- Real work is never confused with mockups or community activities.
- Buttons and animations are consistent and restrained.
- No generic stock agency visuals or empty promises survive QA.
