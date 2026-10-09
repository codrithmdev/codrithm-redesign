export type ProjectKind = "internal" | "client" | "community" | "prototype";
export type ProjectStatus = "planned" | "in-progress" | "completed";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  kind: ProjectKind;
  status: ProjectStatus;
  technologies: readonly string[];
  image?: { src: string; alt: string };
  approvedExternalUrl?: string;
  publishable: boolean;
  updatedAt: string;
};

// Add records only after the project details, classification, and publication
// approval are confirmed. An empty collection is intentionally safer than
// filler case studies on a public services website.
export const projects: readonly Project[] = [];

export function getPublishableProject(slug: string): Project | undefined {
  return projects.find((project) => project.publishable && project.slug === slug);
}
