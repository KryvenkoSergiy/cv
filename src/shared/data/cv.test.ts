import { describe, it, expect } from "vitest";
import {
  personalInfo,
  experiences,
  featuredWork,
  lastFullExperienceId,
  skillCategories,
  keySkills,
  about,
  portfolio,
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
  // Fails on each anniversary of the first role: the reminder to bump yearsOfExperience (and index.html).
  it("match the timeline dates", () => {
    const start = Math.min(...experiences.map(e => parseCvDate(e.startDate)!.getTime()));
    const years = Math.floor((Date.now() - start) / (365.25 * 864e5));
    expect(String(years)).toBe(personalInfo.yearsOfExperience);
  });
});

describe("earlier work", () => {
  it("cuts the experience list at a real role", () => {
    expect(byId.has(lastFullExperienceId)).toBe(true);
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
    expect(indexHtml).toContain(`property="og:title" content="${title}"`);
    expect(indexHtml).toContain(`property="og:description" content="${description}"`);
  });
});

describe("portfolio", () => {
  it("has unique ids and https demo links", () => {
    expect(new Set(portfolio.map(p => p.id)).size).toBe(portfolio.length);
    for (const p of portfolio) expect(p.url, p.id).toMatch(/^https:\/\//);
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
  it("highlights only skills that exist, each listed once", () => {
    const skills = skillCategories.flatMap(c => c.skills);
    expect(new Set(skills).size).toBe(skills.length);
    for (const k of keySkills) expect(skills, k).toContain(k);
  });

  it("does not title a programming-language category just 'Languages'", () => {
    // A bare "Languages" heading listing JavaScript clashes with the spoken-languages block.
    expect(skillCategories.map(c => c.category)).not.toContain("Languages");
  });

  it("states one team-size range, not two", () => {
    // Two different team-size ranges in one CV reads as carelessness.
    const corpus = about.join(" ");
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
 * Text-corpus snapshots: any edit to CV prose shows up as a reviewable
 * snapshot diff and needs an explicit `npm test -- -u` to accept.
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
