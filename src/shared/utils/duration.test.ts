import { describe, it, expect } from "vitest";
import { getDuration, parseCvDate } from "./duration";

// Fixed "now" so the "Present" cases don't drift as real time passes.
const NOW = new Date(2026, 6, 28); // 28 Jul 2026

describe("parseCvDate", () => {
  it("parses the 'Mon YYYY' format used across experiences", () => {
    expect(parseCvDate("Apr 2025")).toEqual(new Date(2025, 3));
    expect(parseCvDate("Sep 2014")).toEqual(new Date(2014, 8));
  });

  it("resolves 'Present' to now", () => {
    expect(parseCvDate("Present", NOW)).toEqual(NOW);
  });

  it("returns null for a malformed month rather than an Invalid Date", () => {
    // The old implementation produced new Date(2025, undefined) here,
    // which rendered as "NaNy NaNmo".
    expect(parseCvDate("April 2025")).toBeNull();
    expect(parseCvDate("2025")).toBeNull();
    expect(parseCvDate("")).toBeNull();
  });
});

describe("getDuration", () => {
  it("formats years and months", () => {
    expect(getDuration("Apr 2020", "Oct 2022")).toBe("2y 6mo");
  });

  it("omits years under twelve months", () => {
    expect(getDuration("Apr 2022", "Jan 2023")).toBe("9mo");
  });

  it("omits months on a whole number of years", () => {
    expect(getDuration("Jan 2018", "Jan 2019")).toBe("1y");
  });

  it("measures an ongoing role against now", () => {
    expect(getDuration("Apr 2025", "Present", NOW)).toBe("1y 4mo");
  });

  it("returns null when a date is unparseable", () => {
    expect(getDuration("April 2025", "Present", NOW)).toBeNull();
    expect(getDuration("Apr 2025", "Nowish", NOW)).toBeNull();
  });

  it("returns null when the range runs backwards", () => {
    expect(getDuration("Jan 2020", "Jan 2019")).toBeNull();
  });
});
