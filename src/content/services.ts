export const serviceSlugs = [
  "ai-automation",
  "software-development",
  "ai-ml",
  "websites-wordpress",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortDescription: string;
  capabilities: readonly string[];
  publishable: boolean;
};

export const services: readonly Service[] = [
  {
    slug: "ai-automation",
    title: "AI Automation",
    shortDescription:
      "Connect tools, automate repetitive tasks, and reduce manual work across everyday business processes.",
    capabilities: [
      "Workflow automation",
      "AI-assisted processes",
      "n8n integrations",
      "CRM and API connections",
      "Document and lead-processing workflows",
    ],
    publishable: true,
  },
  {
    slug: "software-development",
    title: "Software Development",
    shortDescription:
      "Custom applications, dashboards, and internal tools built for specific business requirements.",
    capabilities: [
      "Web applications",
      "Backend development",
      "APIs and integrations",
      "Internal business tools",
      "Custom dashboards",
    ],
    publishable: true,
  },
  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    shortDescription:
      "Practical AI features and machine learning applications for problems that benefit from data-driven systems.",
    capabilities: [
      "AI feature integration",
      "Data processing",
      "Machine learning prototypes",
      "Predictive applications",
      "NLP-based functionality",
    ],
    publishable: true,
  },
  {
    slug: "websites-wordpress",
    title: "Website & WordPress Development",
    shortDescription:
      "Business websites, WordPress builds, and landing pages that are straightforward to use and maintain.",
    capabilities: [
      "WordPress development",
      "Business websites",
      "Landing pages",
      "Website redesign",
      "Maintenance and improvements",
    ],
    publishable: true,
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.publishable && service.slug === slug);
}
