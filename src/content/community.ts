export type CommunityActivity = {
  title: string;
  description: string;
  publishable: boolean;
};

export type CommunityEvent = CommunityActivity & {
  date: string;
  status: "upcoming" | "past";
};

export type CommunityCollaboration = {
  name: string;
  url?: string;
  publishable: boolean;
};

// Community records are intentionally empty until activity details, dates,
// partner permissions, and joining destinations are verified.
export const communityActivities: readonly CommunityActivity[] = [];
export const communityEvents: readonly CommunityEvent[] = [];
export const communityCollaborations: readonly CommunityCollaboration[] = [];
