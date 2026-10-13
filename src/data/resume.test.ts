import { describe, expect, it } from "vitest";
import { education, experience, other, seminars, skills, techStack } from "./resume";
import type { TimelineEntry } from "./resume";

const timelines: Record<string, TimelineEntry[]> = { experience, education, seminars, other };

describe("Lebenslauf-Daten", () => {
  it.each(Object.entries(timelines))("%s: Stichpunkte sind in beiden Sprachen gleich lang", (_, entries) => {
    for (const entry of entries) {
      if (entry.bullets) {
        expect(entry.bullets.en).toHaveLength(entry.bullets.de.length);
      }
    }
  });

  it("enthält die Weiterbildung Software Engineering & AI", () => {
    expect(education[0]).toMatchObject({
      period: "03.2026 – 03.2027",
      title: "Software Engineering & AI",
    });
  });

  it("enthält keine persönlichen Kontaktdaten", () => {
    const all = JSON.stringify({ timelines, skills, techStack });
    expect(all).not.toMatch(/@|Bauerngasse|91353|0151|Familie|Family/);
  });
});
