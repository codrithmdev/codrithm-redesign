// Not imported by public routes. All records require individual approval.
export const communityEventDrafts = [
  {
    slug: "beyond-prompting",
    title: "Beyond Prompting: How to Build Reliable AI Workflows and Agents",
    description:
      "A session on moving beyond individual prompts to practical AI workflows and agents.",
    detail:
      "The announced session covered structured outputs, validation, guardrails, and human oversight through practical examples.",
    date: "2026-09-05",
    speaker: "Shaafea Dawood",
    speakerTitle: "Applied AI & Intelligent Systems Engineer",
    format: "Online session",
    completion: "to-confirm",
    sourceUrls: [
      "https://www.linkedin.com/posts/codrithmdev_codrithm-ai-promptengineering-activity-7500453832888606720-IFvf",
    ],
    publishable: false,
    approvalNotes: [
      "Confirm the session took place and approve media, speaker attribution, and any recording link.",
    ],
  },
  {
    slug: "microsoft-learn-copilot-workshop",
    title: "Microsoft Learn & Copilot Workshop",
    description:
      "An online workshop introducing Microsoft Learn and Copilot resources for practical technology learning.",
    date: "2026-08-14",
    format: "Online workshop",
    collaboration: "MLSA Karachi attribution to verify",
    completion: "to-confirm",
    sourceUrls: ["https://www.linkedin.com/company/codrithmdev/"],
    publishable: false,
    approvalNotes: [
      "Confirm the organizer wording, workshop completion, collaborator attribution, media, and links.",
    ],
  },
  {
    slug: "github-session",
    title: "GitHub Session",
    description:
      "A community learning session focused on GitHub and collaborative development practices.",
    completion: "to-confirm",
    publishable: false,
    approvalNotes: ["Confirm date, speaker, agenda, and event materials."],
  },
  {
    slug: "linkedin-optimization",
    title: "LinkedIn Optimization",
    description: "A session about presenting skills and experience on LinkedIn.",
    completion: "to-confirm",
    publishable: false,
    approvalNotes: ["Confirm date, speaker, agenda, and event materials."],
  },
  {
    slug: "smart-career-direction",
    title: "Kickstart Your Journey with Smart Career Direction",
    description: "A career-focused community session about early professional decisions.",
    completion: "to-confirm",
    publishable: false,
    approvalNotes: ["Confirm date, speaker, agenda, and event materials."],
  },
  {
    slug: "ai-applications-minal-anwar",
    title: "AI Applications",
    description:
      "A planned practical session on building and deploying production-ready AI applications.",
    date: "2026-10-02",
    speaker: "Minal Anwar",
    format: "Online session",
    completion: "scheduled-unverified",
    sourceUrls: ["https://www.linkedin.com/company/codrithmdev/"],
    publishable: false,
    approvalNotes: [
      "The official LinkedIn post announces the session; confirm completion, exact title, media, and any link before publication.",
    ],
  },
] as const;

export const communityCollaborationDrafts = [
  {
    slug: "umt-inter-ai-club",
    name: "UMT Inter AI Club",
    relationship: "community collaboration / MoU to confirm",
    sourceUrls: [
      "https://www.linkedin.com/posts/codrithmdev_laptop-locked-collaboration-unlocked-activity-7502629987225739264-JWbw",
    ],
    publishable: false,
    approvalNotes: [
      "Confirm approved relationship wording, logo rights, description, and verified URL.",
    ],
  },
  {
    slug: "emmuverse-technologies",
    name: "EMMUverse Technologies",
    relationship: "community collaboration",
    publishable: false,
    approvalNotes: [
      "Confirm organization description, exact collaboration scope, logo rights, and verified URL.",
    ],
  },
  {
    slug: "deepciphers",
    name: "DeepCiphers",
    relationship: "community/technology collaboration",
    publishable: false,
    approvalNotes: [
      "Confirm organization description, exact partnership scope, logo rights, and verified URL.",
    ],
  },
] as const;
