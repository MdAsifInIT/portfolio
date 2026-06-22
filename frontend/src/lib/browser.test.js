import {
  createMailtoHref,
  formatCount,
  formatMonthYear,
  formatRelativeDate,
  getSafeExternalUrl,
} from "./browser";

describe("browser safety helpers", () => {
  test("filters unsafe external URLs", () => {
    expect(getSafeExternalUrl("https://example.com/path")).toBe("https://example.com/path");
    expect(getSafeExternalUrl("http://example.com/")).toBe("http://example.com/");
    expect(getSafeExternalUrl("javascript:alert(1)")).toBeNull();
    expect(getSafeExternalUrl("")).toBeNull();
  });

  test("builds encoded mailto links only for valid email addresses", () => {
    expect(createMailtoHref({
      email: "hello@example.com",
      subject: "Hi there",
      body: "Line 1\nLine 2",
    })).toBe("mailto:hello@example.com?subject=Hi+there&body=Line+1%0ALine+2");

    expect(createMailtoHref({ email: "invalid" })).toBeNull();
  });

  test("formats dates and counts defensively", () => {
    expect(formatMonthYear("2024-10", "long")).toBe("October 2024");
    expect(formatMonthYear("bad-date")).toBe("");
    expect(formatRelativeDate("bad-date")).toBe("Unknown");
    expect(formatCount(1200)).toBe("1,200");
    expect(formatCount("nope")).toBe("0");
  });
});
