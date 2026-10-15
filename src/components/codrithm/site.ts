/** Site-wide structure: primary navigation and the five service categories (fixed order). */

export type NavItem = {
  label: string;
  to: "/" | "/services" | "/work" | "/about" | "/community" | "/contact";
};

export const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Community", to: "/community" },
  { label: "Contact", to: "/contact" },
];

/** Which nav item is active for a pathname (service detail pages light up "Services"). */
export function navKey(pathname: string): string {
  const p = pathname.replace(/\/+$/, "") || "/";
  const hit = NAV.find((n) => (n.to === "/" ? p === "/" : p === n.to || p.startsWith(n.to + "/")));
  return hit?.to ?? "";
}

export type Service = {
  slug:
    | "ai-automation"
    | "software-development"
    | "ai-machine-learning"
    | "websites-wordpress"
    | "graphic-design-branding";
  name: string;
};

export const SERVICES: Service[] = [
  { slug: "ai-automation", name: "AI Automation" },
  { slug: "software-development", name: "Software Development" },
  { slug: "ai-machine-learning", name: "AI & Machine Learning" },
  { slug: "websites-wordpress", name: "Websites & WordPress" },
  { slug: "graphic-design-branding", name: "Graphic Design & Branding" },
];
