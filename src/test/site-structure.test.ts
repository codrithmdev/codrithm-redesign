import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";
import { NAV, SERVICES, navKey } from "@/components/codrithm/site";

describe("site structure", () => {
  it("primary nav is Home | Services | Work | About | Community | Contact", () => {
    expect(NAV.map((n) => n.label)).toEqual([
      "Home",
      "Services",
      "Work",
      "About",
      "Community",
      "Contact",
    ]);
  });

  it("keeps the five services in the approved order", () => {
    expect(SERVICES.map((s) => s.name)).toEqual([
      "AI Automation",
      "Software Development",
      "AI & Machine Learning",
      "Websites & WordPress",
      "Graphic Design & Branding",
    ]);
  });

  it.each([
    "/",
    "/services",
    "/services/ai-automation",
    "/services/software-development",
    "/services/ai-machine-learning",
    "/services/websites-wordpress",
    "/services/graphic-design-branding",
    "/work",
    "/about",
    "/community",
    "/contact",
  ])("matches a page for %s", (path) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes(path).at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("service detail pages highlight Services", () => {
    expect(navKey("/services/graphic-design-branding")).toBe("/services");
  });
});
