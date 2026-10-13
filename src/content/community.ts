export type CommunityActivity = {
  title: string;
  description: string;
  sourceUrls?: readonly string[];
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
  sourceUrls?: readonly string[];
  publishable: boolean;
};

// This module is imported by public routes. Keep drafts in `*.drafts.ts` so
// unapproved copy, people, media, and sources cannot reach a client bundle.
export const communityActivities: readonly CommunityActivity[] = [];
export const communityEvents: readonly CommunityEvent[] = [];
export const communityCollaborations: readonly CommunityCollaboration[] = [];
