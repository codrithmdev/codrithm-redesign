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
};

export const services: readonly Service[] = [
  {
    slug: "ai-automation",
    title: "AI Automation & Intelligent Workflows",
    shortDescription:
      "Connect repetitive tasks and tools into workflows your team can understand and manage.",
    capabilities: ["Workflow mapping", "Tool and API integrations", "AI-assisted processing"],
  },
  {
    slug: "software-development",
    title: "Custom Software Development",
    shortDescription:
      "Custom web applications, internal tools, dashboards, and APIs built around specific requirements.",
    capabilities: ["Web applications", "Internal tools", "Dashboards and integrations"],
  },
  {
    slug: "ai-ml",
    title: "AI & Machine Learning Solutions",
    shortDescription:
      "Practical AI features and data-driven applications, with feasibility reviewed for each use case.",
    capabilities: [
      "AI feature discovery",
      "Document and text processing",
      "Data-driven applications",
    ],
  },
  {
    slug: "websites-wordpress",
    title: "Website Development & WordPress",
    shortDescription:
      "Responsive business websites and WordPress builds that are clear, maintainable, and easy to update.",
    capabilities: ["Business websites", "WordPress development", "Performance and maintenance"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
