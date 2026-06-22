export const canUseDOM =
  typeof window !== "undefined" && typeof document !== "undefined";

export const getSafeStorageValue = (key) => {
  if (!canUseDOM) return null;

  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

export const setSafeStorageValue = (key, value) => {
  if (!canUseDOM) return;

  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage can be blocked in private or embedded contexts.
  }
};

export const getPreferredColorScheme = () => {
  if (!canUseDOM || typeof window.matchMedia !== "function") return "light";

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const getCurrentUrl = () => {
  if (!canUseDOM) return "";
  return window.location?.href || "";
};

export const scrollToSection = (sectionId, offset = 80) => {
  if (!canUseDOM || !sectionId) return false;

  const element = document.getElementById(sectionId);
  if (!element) return false;

  const elementPosition = element.getBoundingClientRect().top;
  const top = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });

  return true;
};

export const getSafeExternalUrl = (url) => {
  if (typeof url !== "string" || !url.trim()) return null;

  try {
    const parsedUrl = new URL(url.trim());
    return ["http:", "https:"].includes(parsedUrl.protocol)
      ? parsedUrl.toString()
      : null;
  } catch {
    return null;
  }
};

export const getSafeEmail = (email) => {
  if (typeof email !== "string") return null;
  const trimmed = email.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) ? trimmed : null;
};

export const createMailtoHref = ({ email, subject, body }) => {
  const safeEmail = getSafeEmail(email);
  if (!safeEmail) return null;

  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);

  const query = params.toString();
  return `mailto:${safeEmail}${query ? `?${query}` : ""}`;
};

export const formatMonthYear = (dateString, month = "short") => {
  if (typeof dateString !== "string" || !dateString.trim()) return "";

  const [year, monthNumber] = dateString.split("-").map(Number);
  if (!Number.isInteger(year) || !Number.isInteger(monthNumber)) return "";
  if (monthNumber < 1 || monthNumber > 12) return "";

  const date = new Date(Date.UTC(year, monthNumber - 1, 1));
  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleDateString("en-US", { year: "numeric", month });
};

export const formatRelativeDate = (dateString) => {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "Unknown";

  const now = new Date();
  const diffTime = Math.max(0, now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 30) return `${diffDays} days ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
};

export const formatCount = (value) => {
  const number = Number(value);
  return Number.isFinite(number) ? number.toLocaleString() : "0";
};

export const asArray = (value) => (Array.isArray(value) ? value : []);
