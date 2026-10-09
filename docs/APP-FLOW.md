# Codrithm Website Concept — App Flow

## Public visitor journey

```text
Arrival
  ↓
Hero: “Where Coders Make History”
  ├─ Explore our work → projects/stories or featured work
  └─ Work with us → partner/contact workflow
  ↓
About: values and community proof
  ↓
Features: practical learning and peer growth
  ↓
Community evidence: stats, pathways, testimonials
  ↓
Intent choice
  ├─ Learn → join/member interest workflow
  ├─ Build → project/community workflow
  └─ Connect → partner/contact workflow
  ↓
FAQ resolves doubts
  ↓
Email CTA → validation → submission → confirmation
```

## Navigation map

| Navigation item | Current destination | Intended production destination |
| --- | --- | --- |
| Home | `#home` | Home/hero |
| Services | `#features` | Learning programmes and services |
| About | `#about` | Mission, values, and team/community story |
| Community | `#pricing` | Community pathways/membership information |
| Projects | `#blog` | Projects, stories, or blog index |
| Contact | `#contact` | FAQ plus a dedicated contact/partner form |

## Primary conversion flows

### 1. Prospective member

1. Visitor reads the hero and community promise.
2. Visitor evaluates sessions, mentorship, stats, testimonials, and FAQ.
3. Visitor selects a `Join Codrithm` or email CTA.
4. Form collects name, email, current learning stage, and consent.
5. Server validates input and stores/sends it to the approved CRM.
6. Visitor sees a confirmation and receives the next step by email.

### 2. Partner or collaborator

1. Visitor selects `Work with us` or `Connect`.
2. Partner page/form explains collaboration options.
3. Form collects organization, contact details, collaboration goal, and message.
4. Team receives a routed notification; visitor receives acknowledgement.

### 3. Content explorer

1. Visitor selects a story/project card or navigation item.
2. Site opens a content detail page or filtered content collection.
3. Each detail page offers a relevant next action: join, attend, collaborate, or read more.

## Interaction states

| Component | Required state |
| --- | --- |
| Mobile menu | Closed, open, keyboard-focusable links, closes after selection |
| FAQ | One item open at a time; correct `aria-expanded` state |
| Testimonial carousel | Previous/next, direct slide selection, keyboard labels |
| Forms | Empty, focused, validation error, submitting, success, server error |
| CTA links | Default, hover, focus-visible, active, disabled where needed |

## Exception flow

```text
Form submit failure → preserve entered values → show clear inline error → allow retry
Page failure → friendly error screen → retry or return home
Unknown route → 404 screen → return home
```
