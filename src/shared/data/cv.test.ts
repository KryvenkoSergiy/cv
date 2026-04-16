import { describe, it, expect } from "vitest";
import {
  personalInfo,
  experiences,
  featuredWork,
  workedWithIds,
  lastFullExperienceId,
  coreStack,
  skillCategories,
  keySkills,
  about,
  coreExpertise,
} from "./cv";
import { parseCvDate } from "../utils/duration";
import indexHtml from "../../../index.html?raw";

const byId = new Map(experiences.map(e => [e.id, e]));

describe("featured work", () => {
  it("names real experiences", () => {
    for (const f of featuredWork) expect(byId.has(f.id), f.id).toBe(true);
  });
});

describe("years of experience", () => {
  // Fails once a year rolls over, which is the reminder to bump the numbers.
  it("match the timeline dates", () => {
    const yearsSince = (ts: number) => Math.floor((Date.now() - ts) / (365.25 * 864e5));
    const startOf = (list: typeof experiences) =>
      Math.min(...list.map(e => parseCvDate(e.startDate)!.getTime()));
    const react = experiences.filter(e => e.technologies.includes("React"));
    expect(String(yearsSince(startOf(experiences)))).toBe(personalInfo.yearsOfExperience);
    expect(`${yearsSince(startOf(react))}+`).toBe(personalInfo.reactYears);
  });
});

describe("earlier work", () => {
  it("cuts the experience list at a real role", () => {
    expect(byId.has(lastFullExperienceId)).toBe(true);
  });
});

describe("worked with", () => {
  it("names real experiences", () => {
    for (const id of workedWithIds) expect(byId.has(id), id).toBe(true);
  });
});

describe("timeline", () => {
  it("is ordered by end date, newest first", () => {
    const byEnd = [...experiences].sort(
      (a, b) => parseCvDate(b.endDate)!.getTime() - parseCvDate(a.endDate)!.getTime(),
    );
    expect(experiences.map(e => e.id)).toEqual(byEnd.map(e => e.id));
  });
});

describe("index.html", () => {
  // Static HTML can't import cv.ts; this keeps the tab title and the search
  // snippet in step with it.
  it("matches personalInfo in the title and description", () => {
    const title = indexHtml.match(/<title>(.*?)<\/title>/)?.[1];
    const description = indexHtml.match(/name="description" content="(.*?)"/)?.[1];
    expect(title).toBe(`${personalInfo.name} — ${personalInfo.title}`);
    expect(description).toContain(`${personalInfo.name} — ${personalInfo.title}`);
    expect(description).toContain(`${personalInfo.yearsOfExperience} years`);
  });
});

describe("product links", () => {
  it("omits Stadia — Google shut it down in January 2023", () => {
    expect(byId.get("google-stadia")?.url).toBeUndefined();
  });

  it("uses https for any populated url", () => {
    for (const e of experiences) {
      if (e.url) expect(e.url, e.id).toMatch(/^https:\/\//);
    }
  });
});

describe("skills", () => {
  it("lists only core stack items that also appear on the Skills page", () => {
    const skills = skillCategories.flatMap(c => c.skills).join(" | ");
    for (const item of coreStack) {
      expect(skills, `core stack item "${item}"`).toContain(item);
    }
  });

  it("leads the core stack with a tool the current role uses", () => {
    const tech = experiences.find(e => e.current)!.technologies.join(" ");
    expect(tech).toContain(coreStack[0]);
  });

  it("highlights only skills that exist, each listed once", () => {
    const skills = skillCategories.flatMap(c => c.skills);
    expect(new Set(skills).size).toBe(skills.length);
    for (const k of keySkills) expect(skills, k).toContain(k);
  });

  it("keeps the core stack even, so its two-column grid has no gap", () => {
    expect(coreStack.length % 2).toBe(0);
  });

  it("does not title a programming-language category just 'Languages'", () => {
    // A bare "Languages" heading listing JavaScript reads as a mistake now
    // that a spoken-languages block exists.
    expect(skillCategories.map(c => c.category)).not.toContain("Languages");
  });

  it("states one team-size range everywhere, not two", () => {
    // "4-14" used to appear in about[] and coreExpertise.
    // Two different ranges in one CV reads as carelessness.
    const corpus = JSON.stringify({ about, coreExpertise });
    expect(corpus).not.toMatch(/4[-–]14/);
    expect(corpus).toContain("4-8 engineers");
  });

  it("surfaces the AI work that the experience bullets already claim", () => {
    const ai = skillCategories.find(c => c.category === "AI & LLM");
    expect(ai).toBeDefined();
    const bullets = experiences.flatMap(e => e.description).join(" ");
    expect(bullets).toContain("OpenAI GPT");
    expect(bullets).toContain("Google Gemini");
  });
});

/**
 * Text-corpus snapshots. These are the automated replacement for the manual
 * word-level diff: any edit to CV prose shows up as a reviewable snapshot
 * diff and requires an explicit `vitest -u` to accept.
 */
describe("content corpus", () => {
  it("experience bullets", () => {
    expect(experiences.flatMap(e => e.description)).toMatchSnapshot();
  });

  it("skills", () => {
    expect(skillCategories.map(c => [c.category, c.skills])).toMatchSnapshot();
  });

  it("technologies", () => {
    expect(experiences.map(e => [e.id, e.technologies])).toMatchSnapshot();
  });

  it("roles, companies and dates", () => {
    expect(
      experiences.map(e => [e.role, e.company, e.client ?? "", e.startDate, e.endDate]),
    ).toMatchSnapshot();
  });
});
