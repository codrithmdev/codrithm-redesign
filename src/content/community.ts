export type CommunityActivity = {
  title: string;
  description: string;
  sourceUrls?: readonly string[];
  publishable: boolean;
};

export type CommunityEvent = CommunityActivity & {
  slug: string;
  date: string;
  status: "upcoming" | "completed";
  speaker?: string;
  attribution?: string;
  format?: string;
  category?: string;
  featured?: boolean;
  media?: readonly {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  recordingUrl?: string;
};

export type CommunityCollaboration = {
  name: string;
  relationship: "community collaborator";
  relationshipLabel?: string;
  description?: string;
  logo?: { src: string; alt: string; width: number; height: number };
  url?: string;
  sourceUrls?: readonly string[];
  publishable: boolean;
};

// This module is imported by public routes. Keep drafts in `*.drafts.ts` so
// unapproved copy, people, media, and sources cannot reach a client bundle.
export const communityActivities: readonly CommunityActivity[] = [];
export const communityEvents: readonly CommunityEvent[] = [
  {
    slug: "from-classroom-project-to-production-ready-ai-systems",
    title: "From Classroom Project to Production-Ready AI Systems",
    description:
      "A technical learning session focused on building and deploying AI applications, helping participants understand the practical steps involved in taking an AI application from development to deployment.",
    date: "2026-10-02",
    status: "completed",
    speaker: "Minal Anwar",
    format: "Online session",
    featured: true,
    sourceUrls: ["https://www.linkedin.com/company/codrithmdev/"],
    media: [
      {
        src: "/images/events/ai-production.webp",
        alt: "Poster for From Classroom Project to Production-Ready AI Systems featuring Minal Anwar",
        width: 1080,
        height: 1080,
      },
    ],
    publishable: true,
  },
  {
    slug: "beyond-prompting-reliable-ai-workflows-and-agents",
    title: "Beyond Prompting: How to Build Reliable AI Workflows and Agents",
    description:
      "Beyond Prompting: How to Build Reliable AI Workflows and Agents was a Codrithm community session featuring Shaafea Dawood. The discussion focused on moving beyond individual prompts toward practical AI workflows, intelligent agents, and reliable automation.",
    date: "2026-09-05",
    status: "completed",
    speaker: "Shaafea Dawood",
    format: "Online session",
    sourceUrls: ["https://www.linkedin.com/company/codrithmdev/"],
    media: [
      {
        src: "/images/events/beyond-prompting.webp",
        alt: "Poster for Beyond Prompting: How to Build Reliable AI Workflows and Agents featuring Shaafea Dawood",
        width: 1080,
        height: 1080,
      },
    ],
    publishable: true,
  },
  {
    slug: "microsoft-learn-and-copilot-workshop",
    title: "Microsoft Learn & Copilot Workshop",
    description:
      "A collaborative online workshop exploring Microsoft Learn and Copilot, organized with MLSA Karachi involvement and Codrithm participation. The workshop introduced participants to Microsoft's learning ecosystem and practical AI tools.",
    date: "2026-08-14",
    status: "completed",
    attribution: "MLSA Karachi involvement; Noman Zulfiqar and Codrithm co-host Zimran Sohail",
    format: "Online workshop",
    sourceUrls: ["https://www.linkedin.com/company/codrithmdev/"],
    media: [
      {
        src: "/images/events/microsoft-copilot.webp",
        alt: "Poster for Microsoft Learn and Copilot Workshop featuring Noman Zulfiqar and Zimran Sohail",
        width: 1080,
        height: 1080,
      },
    ],
    publishable: true,
  },
  {
    slug: "github-session",
    title: "GitHub Session",
    description:
      "A practical learning session introducing participants to GitHub, version control, and collaborative development practices.",
    date: "2026-07-10",
    status: "completed",
    speaker: "Ghafeer Ahmad",
    format: "Community session",
    sourceUrls: ["https://www.linkedin.com/company/codrithmdev/"],
    media: [
      {
        src: "/images/events/github-session.webp",
        alt: "Poster for the GitHub Session featuring Ghafeer Ahmad",
        width: 1080,
        height: 1080,
      },
    ],
    publishable: true,
  },
  {
    slug: "kickstart-your-journey-with-smart-career-direction",
    title: "Kickstart Your Journey with Smart Career Direction",
    description:
      "A career-focused session helping students and early-career professionals explore career paths, understand professional expectations, and approach their career development with clearer direction.",
    date: "2026-06-26",
    status: "completed",
    speaker: "Arshia Hussain",
    format: "Community session",
    sourceUrls: ["https://www.linkedin.com/company/codrithmdev/"],
    media: [
      {
        src: "/images/events/career-direction.webp",
        alt: "Poster for Kickstart Your Journey with Smart Career Direction featuring Arshia Hussain",
        width: 1280,
        height: 1600,
      },
    ],
    publishable: true,
  },
  {
    slug: "linkedin-optimization",
    title: "LinkedIn Optimization",
    description:
      "A practical session focused on improving LinkedIn profiles, building a professional presence, and helping students present their skills and experience more effectively.",
    date: "2026-04-11",
    status: "completed",
    speaker: "Atiq Umer",
    format: "Community session",
    sourceUrls: ["https://www.linkedin.com/company/codrithmdev/"],
    media: [
      {
        src: "/images/events/linkedin-optimization.webp",
        alt: "Poster for LinkedIn Optimization featuring Atiq Umer",
        width: 1050,
        height: 1050,
      },
    ],
    publishable: true,
  },
];
export const communityCollaborations: readonly CommunityCollaboration[] = [
  {
    name: "UMT Inter AI Club",
    relationship: "community collaborator",
    relationshipLabel: "University / community collaboration",
    description:
      "Codrithm and UMT Inter AI Club established a collaboration to support technical learning, student engagement, and opportunities for knowledge sharing between their communities.",
    logo: {
      src: "/images/collaborators/umt-inter-ai-club.webp",
      alt: "UMT Inter AI Club logo",
      width: 1254,
      height: 1254,
    },
    url: "https://www.linkedin.com/company/umt-inter-ai-club/",
    sourceUrls: ["https://www.linkedin.com/company/umt-inter-ai-club/"],
    publishable: true,
  },
  {
    name: "EMMUverse Technologies",
    relationship: "community collaborator",
    relationshipLabel: "Education / technology collaboration",
    description:
      "Codrithm collaborates with EMMUverse Technologies, an organization focused on connecting academic learning with practical industry skills. The collaboration supports knowledge sharing, professional development, and learning opportunities for the technology community.",
    logo: {
      src: "/images/collaborators/emmuverse-technologies.webp",
      alt: "EMMUverse Technologies logo",
      width: 1254,
      height: 1254,
    },
    url: "https://www.linkedin.com/company/emmuverse-technologies-by-eman-fatima",
    sourceUrls: ["https://www.linkedin.com/company/emmuverse-technologies-by-eman-fatima"],
    publishable: true,
  },
  {
    name: "DeepCiphers",
    relationship: "community collaborator",
    relationshipLabel: "Technology / community collaboration",
    description:
      "Codrithm collaborates with DeepCiphers, a software development company working on web, mobile, and custom software solutions. The collaboration brings together communities and technical expertise to support learning, knowledge sharing, and professional connections.",
    logo: {
      src: "/images/collaborators/deepciphers.webp",
      alt: "DeepCiphers logo",
      width: 4168,
      height: 4168,
    },
    url: "https://www.linkedin.com/company/deepcipherstech",
    sourceUrls: ["https://www.linkedin.com/company/deepcipherstech"],
    publishable: true,
  },
];

export function getPublishableCommunityEvent(slug: string) {
  return communityEvents.find((event) => event.publishable && event.slug === slug);
}
