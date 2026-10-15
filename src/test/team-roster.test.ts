import { describe, expect, it } from "vitest";

import { TEAM } from "@/components/codrithm/sections";

// Roster as stated by the team: name, role, LinkedIn profile.
const ROSTER: [string, string, string][] = [
  ["Muhammad Umais", "Founder", "https://www.linkedin.com/in/muhammad-umais-adeel/"],
  ["Atiq Umer", "Co-Founder", "https://www.linkedin.com/in/atiq-umer"],
  ["Iqra Asghar", "Growth Lead", "https://www.linkedin.com/in/iqra-asghar"],
  ["Wajeeha Azeem", "Operations Lead", "https://www.linkedin.com/in/wajeehaazeem"],
  ["Zimran Sohail", "Technical Associate", "https://www.linkedin.com/in/zimransohail/"],
  ["Aliza Afzal", "Research Lead", "https://www.linkedin.com/in/alizaafzal/"],
  ["Rabia Ramzan", "Graphic Lead", "https://www.linkedin.com/in/rabia-ramzan1/"],
];

describe("Team roster", () => {
  it("shows the seven members with the agreed role and LinkedIn profile", () => {
    expect(TEAM.map((m) => [m.name, m.role, m.linkedin])).toEqual(ROSTER);
  });

  it("gives every member a portrait and a LinkedIn profile", () => {
    expect(TEAM).toHaveLength(7);
    for (const m of TEAM) {
      expect(m.photo).toMatch(/^\/team\/[a-z-]+\.webp$/);
      expect(m.linkedin).toMatch(/^https:\/\/(www\.)?linkedin\.com\/in\/[a-z0-9-]+\/?$/);
    }
  });
});
