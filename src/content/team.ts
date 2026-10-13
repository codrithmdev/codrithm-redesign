export type TeamMember = {
  name: string;
  role: string;
  introduction: string;
  image: { src: string; alt: string };
  links?: readonly { label: string; url: string }[];
  publishable: boolean;
};

// Add team profiles only with each person's consent, accurate role, approved
// biography, genuine photograph, and verified public links.
export const teamMembers: readonly TeamMember[] = [];
