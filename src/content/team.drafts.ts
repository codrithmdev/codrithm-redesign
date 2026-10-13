export type TeamProfileDraft = {
  name: string;
  role: string;
  biography: string;
  linkedinUrl: string;
  /** Local-only path. Never copy to public/ or assign as a public image URL before release approval. */
  portraitPath: string;
  portraitAlt: string;
  publishable: false;
  approvalNotes: readonly string[];
};

// This module is deliberately not imported by public routes or components.
// Portrait paths identify owner-confirmed local files only; they are not
// browser URLs and remain outside publicly served assets until final approval.
export const teamProfileDrafts: readonly TeamProfileDraft[] = [
  {
    name: "Muhammad Umais Adeel",
    role: "Founder",
    biography:
      "Muhammad Umais Adeel is the Founder of Codrithm, helping shape its direction and supporting its technology and community initiatives.",
    linkedinUrl: "https://www.linkedin.com/in/muhammad-umais-adeel/",
    portraitPath: "team_pics/Umais.webp",
    portraitAlt: "Portrait of Muhammad Umais Adeel, Founder at Codrithm",
    publishable: false,
    approvalNotes: ["Keep unpublished until final publication and deployment authorization."],
  },
  {
    name: "Atiq Umer",
    role: "Co-Founder",
    biography:
      "Atiq Umer is the Co-Founder of Codrithm, contributing to software development, technical projects, and community initiatives.",
    linkedinUrl: "https://www.linkedin.com/in/atiq-umer/",
    portraitPath: "team_pics/Atiq-studio.webp",
    portraitAlt: "Portrait of Atiq Umer, Co-Founder at Codrithm",
    publishable: false,
    approvalNotes: ["Keep unpublished until final publication and deployment authorization."],
  },
  {
    name: "Iqra Asghar",
    role: "Growth Lead",
    biography:
      "Iqra Asghar is the Growth Lead at Codrithm, supporting community outreach, engagement, and growth initiatives.",
    linkedinUrl: "https://www.linkedin.com/in/iqra-asghar/",
    portraitPath: "team_pics/Iqra-studio.webp",
    portraitAlt: "Portrait of Iqra Asghar, Growth Lead at Codrithm",
    publishable: false,
    approvalNotes: ["Keep unpublished until final publication and deployment authorization."],
  },
  {
    name: "Wajeeha Azeem",
    role: "Operations Lead",
    biography:
      "Wajeeha Azeem is the Operations Lead at Codrithm, helping coordinate team activities, internal workflows, and community operations.",
    linkedinUrl: "https://www.linkedin.com/in/wajeehaazeem/",
    portraitPath: "team_pics/Wajeeha-studio-v2.webp",
    portraitAlt: "Portrait of Wajeeha Azeem, Operations Lead at Codrithm",
    publishable: false,
    approvalNotes: ["Keep unpublished until final publication and deployment authorization."],
  },
  {
    name: "Zimran Sohail",
    role: "Technical Associate",
    biography:
      "Zimran Sohail is a Technical Associate at Codrithm, supporting technical initiatives and community learning activities.",
    linkedinUrl: "https://www.linkedin.com/in/zimransohail/",
    portraitPath: "team_pics/Zimran-studio.webp",
    portraitAlt: "Portrait of Zimran Sohail, Technical Associate at Codrithm",
    publishable: false,
    approvalNotes: ["Keep unpublished until final publication and deployment authorization."],
  },
  {
    name: "Aliza Afzal",
    role: "Research Lead",
    biography:
      "Aliza Afzal is the Research Lead at Codrithm, supporting research activities, exploring technical topics, and contributing to research-driven community initiatives.",
    linkedinUrl: "https://www.linkedin.com/in/alizaafzal/",
    portraitPath: "team_pics/Aliza-studio.webp",
    portraitAlt: "Portrait of Aliza Afzal, Research Lead at Codrithm",
    publishable: false,
    approvalNotes: ["Keep unpublished until final publication and deployment authorization."],
  },
  {
    name: "Rabia Ramzan",
    role: "Graphic Lead",
    biography:
      "Rabia Ramzan is the Graphic Lead at Codrithm, contributing to the community's visual identity, creative content, and graphic design activities.",
    linkedinUrl: "https://www.linkedin.com/in/rabia-ramzan1/",
    portraitPath: "team_pics/Rabia-studio.webp",
    portraitAlt: "Portrait of Rabia Ramzan, Graphic Lead at Codrithm",
    publishable: false,
    approvalNotes: ["Keep unpublished until final publication and deployment authorization."],
  },
];
