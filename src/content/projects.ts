export type ProjectKind = "internal" | "client" | "community" | "prototype";
export type ProjectStatus = "planned" | "in-progress" | "completed";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  kind: ProjectKind;
  status: ProjectStatus;
  problem: string;
  developed: string;
  features: readonly string[];
  technologies: readonly string[];
  roleOrTeamContribution?: string;
  images: readonly { src: string; alt: string }[];
  approvedExternalUrl?: string;
  publishable: boolean;
  updatedAt: string;
};

export type ProjectDraft = Omit<
  Project,
  "status" | "technologies" | "features" | "images" | "approvedExternalUrl" | "updatedAt"
> & {
  status: "to-confirm";
  technologies?: readonly string[];
  features?: readonly string[];
  images?: readonly { src: string; alt: string }[];
  approvedExternalUrl?: string;
  sourceUrls?: readonly string[];
  approvalNotes: readonly string[];
};

// Add records only after the project details, classification, and publication
// approval are confirmed. An empty collection is intentionally safer than
// filler case studies on a public services website.
export const projects: readonly Project[] = [];

export function getPublishableProject(slug: string): Project | undefined {
  return projects.find((project) => project.publishable && project.slug === slug);
}
