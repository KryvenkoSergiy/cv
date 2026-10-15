const MONTHS: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

const MS_PER_MONTH = 1000 * 60 * 60 * 24 * 30.44;

/**
 * Parses the `"Mon YYYY"` format used by `experiences[].startDate` / `endDate`.
 * `"Present"` resolves to now, which is why durations grow on their own.
 *
 * Returns null rather than an Invalid Date so a typo like "April 2025" can be
 * caught by the caller instead of rendering "NaNy NaNmo" to the page.
 */
export function parseCvDate(value: string, now: Date = new Date()): Date | null {
  if (value === "Present") return now;

  const match = /^([A-Za-z]{3}) (\d{4})$/.exec(value.trim());
  if (!match) return null;

  const month = MONTHS[match[1]];
  if (month === undefined) return null;

  return new Date(Number(match[2]), month);
}

/**
 * Human-readable span between two CV dates, e.g. "2y 6mo", "9mo", "3y".
 * Returns null when either endpoint is unparseable or the range is reversed.
 */
export function getDuration(
  start: string,
  end: string,
  now: Date = new Date(),
): string | null {
  const from = parseCvDate(start, now);
  const to = parseCvDate(end, now);
  if (!from || !to) return null;

  const months = Math.round((to.getTime() - from.getTime()) / MS_PER_MONTH);
  if (months < 0) return null;

  const years = Math.floor(months / 12);
  const rest = months % 12;

  if (years === 0) return `${rest}mo`;
  if (rest === 0) return `${years}y`;
  return `${years}y ${rest}mo`;
}
