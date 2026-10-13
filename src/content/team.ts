export type TeamMember = {
  name: string;
  role: string;
  introduction: string;
  image: { src: string; alt: string; width: number; height: number };
  links?: readonly { label: string; url: string }[];
  publishable: boolean;
};

// Each record has owner-approved consent, biography, professional link, and portrait.
// Other content categories retain their independent publication controls.
export const teamMembers: readonly TeamMember[] = [
  {
    name: "Muhammad Umais Adeel",
    role: "Founder",
    introduction:
      "Muhammad Umais Adeel is the Founder of Codrithm, helping shape its direction and supporting its technology and community initiatives.",
    image: {
      src: "/images/team/muhammad-umais-adeel.webp",
      alt: "Portrait of Muhammad Umais Adeel, Founder at Codrithm",
      width: 640,
      height: 800,
    },
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-umais-adeel/" }],
    publishable: true,
  },
  {
    name: "Atiq Umer",
    role: "Co-Founder",
    introduction:
      "Atiq Umer is the Co-Founder of Codrithm, contributing to software development, technical projects, and community initiatives.",
    image: {
      src: "/images/team/atiq-umer.webp",
      alt: "Portrait of Atiq Umer, Co-Founder at Codrithm",
      width: 640,
      height: 800,
    },
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/atiq-umer/" }],
    publishable: true,
  },
  {
    name: "Iqra Asghar",
    role: "Growth Lead",
    introduction:
      "Iqra Asghar is the Growth Lead at Codrithm, supporting community outreach, engagement, and growth initiatives.",
    image: {
      src: "/images/team/iqra-asghar.webp",
      alt: "Portrait of Iqra Asghar, Growth Lead at Codrithm",
      width: 640,
      height: 800,
    },
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/iqra-asghar/" }],
    publishable: true,
  },
  {
    name: "Wajeeha Azeem",
    role: "Operations Lead",
    introduction:
      "Wajeeha Azeem is the Operations Lead at Codrithm, helping coordinate team activities, internal workflows, and community operations.",
    image: {
      src: "/images/team/wajeeha-azeem.webp",
      alt: "Portrait of Wajeeha Azeem, Operations Lead at Codrithm",
      width: 640,
      height: 800,
    },
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/wajeehaazeem/" }],
    publishable: true,
  },
  {
    name: "Zimran Sohail",
    role: "Technical Associate",
    introduction:
      "Zimran Sohail is a Technical Associate at Codrithm, supporting technical initiatives and community learning activities.",
    image: {
      src: "/images/team/zimran-sohail.webp",
      alt: "Portrait of Zimran Sohail, Technical Associate at Codrithm",
      width: 640,
      height: 800,
    },
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/zimransohail/" }],
    publishable: true,
  },
  {
    name: "Aliza Afzal",
    role: "Research Lead",
    introduction:
      "Aliza Afzal is the Research Lead at Codrithm, supporting research activities, exploring technical topics, and contributing to research-driven community initiatives.",
    image: {
      src: "/images/team/aliza-afzal.webp",
      alt: "Portrait of Aliza Afzal, Research Lead at Codrithm",
      width: 640,
      height: 800,
    },
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/alizaafzal/" }],
    publishable: true,
  },
  {
    name: "Rabia Ramzan",
    role: "Graphic Lead",
    introduction:
      "Rabia Ramzan is the Graphic Lead at Codrithm, contributing to the community's visual identity, creative content, and graphic design activities.",
    image: {
      src: "/images/team/rabia-ramzan.webp",
      alt: "Portrait of Rabia Ramzan, Graphic Lead at Codrithm",
      width: 640,
      height: 800,
    },
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/rabia-ramzan1/" }],
    publishable: true,
  },
];
