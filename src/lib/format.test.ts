import { compactNumber, initials, readingTime, timeAgo } from "./format";

describe("format", () => {
  const now = Date.parse("2026-09-27T12:00:00Z");

  it("formats relative times", () => {
    expect(timeAgo("2026-09-27T11:59:40Z", now)).toBe("just now");
    expect(timeAgo("2026-09-27T11:55:00Z", now)).toBe("5 minutes ago");
    expect(timeAgo("2026-09-27T09:00:00Z", now)).toBe("3 hours ago");
    expect(timeAgo("2026-09-26T12:00:00Z", now)).toBe("yesterday");
  });

  it("returns an empty string for invalid dates instead of 'NaN'", () => {
    expect(timeAgo("not-a-date", now)).toBe("");
  });

  it("derives initials safely", () => {
    expect(initials("Aria Chen")).toBe("AC");
    expect(initials("  madonna ")).toBe("M");
    expect(initials("")).toBe("?");
  });

  it("estimates reading time with a one-minute floor", () => {
    expect(readingTime("short")).toBe(1);
    expect(readingTime(Array(660).fill("word").join(" "))).toBe(3);
  });

  it("compacts large numbers", () => {
    expect(compactNumber(1284)).toBe("1.3K");
    expect(compactNumber(312)).toBe("312");
  });
});
