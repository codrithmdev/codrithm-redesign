export type CommunityActivity = {
  title: string;
  description: string;
  publishable: boolean;
};

export type CommunityEvent = CommunityActivity & {
  date: string;
  status: "upcoming" | "past";
  speaker?: string;
  format?: string;
};

export type CommunityCollaboration = {
  name: string;
  relationship: "community collaborator";
  description?: string;
  logo?: { src: string; alt: string };
  url?: string;
  publishable: boolean;
};

// These records are source material supplied by Codrithm. They remain unpublished
// until their content and public-display approval are confirmed.
export const communityActivities: readonly CommunityActivity[] = [
  {
    title: "LinkedIn Optimization",
    description: "A previously organized learning session.",
    publishable: false,
  },
  { title: "GitHub", description: "A previously organized learning session.", publishable: false },
  {
    title: "Smart Career Direction",
    description: "A previously organized learning session.",
    publishable: false,
  },
];

export const communityEvents: readonly CommunityEvent[] = [
  {
    title: "Beyond Prompting: How to Build Reliable AI Workflows and Agents",
    description: "A session focused on AI workflows, intelligent agents, and practical automation.",
    date: "2026-09-05",
    speaker: "Shaafea Dawood",
    format: "Online session",
    status: "past",
    publishable: false,
  },
  {
    title: "Microsoft Learn & Copilot Workshop",
    description: "An online workshop involving MLSA Karachi.",
    date: "2026-08-14",
    format: "Online workshop",
    status: "past",
    publishable: false,
  },
];

export const communityCollaborations: readonly CommunityCollaboration[] = [
  { name: "UMT Inter AI Club", relationship: "community collaborator", publishable: false },
  { name: "EMMUverse Technologies", relationship: "community collaborator", publishable: false },
  { name: "DeepCiphers", relationship: "community collaborator", publishable: false },
];
