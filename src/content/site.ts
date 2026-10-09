import type { ServiceSlug } from "./services";

export const internalDestinations = {
  home: "/",
  services: "/services",
  projects: "/projects",
  community: "/community",
  about: "/about",
  contact: "/contact",
  privacy: "/privacy",
} as const;

export const navigationItems = [
  { label: "Home", to: internalDestinations.home },
  { label: "Services", to: internalDestinations.services },
  { label: "Projects", to: internalDestinations.projects },
  { label: "Community", to: internalDestinations.community },
  { label: "About", to: internalDestinations.about },
  { label: "Contact", to: internalDestinations.contact },
] as const;

export type ContactType = "project" | "partnership" | "general";

export type ContactSearch = {
  type?: ContactType;
  service?: ServiceSlug;
};

// Keep unverified external destinations absent rather than rendering a dead
// link. Populate these values only after the owner verifies them.
export const approvedExternalUrls = {
  communityJoin: undefined as string | undefined,
  linkedin: undefined as string | undefined,
  instagram: undefined as string | undefined,
  facebook: undefined as string | undefined,
  youtube: undefined as string | undefined,
} as const;

export const businessContact = {
  email: undefined as string | undefined,
} as const;
