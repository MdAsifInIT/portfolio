import React, { createContext, useContext, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import {
  canUseDOM,
  getPreferredColorScheme,
  getSafeStorageValue,
  setSafeStorageValue,
} from "../lib/browser";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = getSafeStorageValue("theme");
    return storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : getPreferredColorScheme();
  });

  useEffect(() => {
    if (!canUseDOM) return;

    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    setSafeStorageValue("theme", theme);
  }, [theme]);

  const toggleTheme = (e) => {
    if (!canUseDOM || !document.startViewTransition || !e) {
      setTheme((prev) => (prev === "dark" ? "light" : "dark"));
      return;
    }

    const x = e.clientX ?? window.innerWidth / 2;
    const y = e.clientY ?? window.innerHeight / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
      });
    });

    transition.ready
      .then(() => {
        if (typeof document.documentElement.animate !== "function") return;

        document.documentElement.animate(
          [
            { clipPath: `circle(0px at ${x}px ${y}px)` },
            { clipPath: `circle(${endRadius}px at ${x}px ${y}px)` },
          ],
          {
            duration: 500,
            easing: "ease-in",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      })
      .catch(() => {
        // The theme state has already changed; animation failure is non-fatal.
      });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
