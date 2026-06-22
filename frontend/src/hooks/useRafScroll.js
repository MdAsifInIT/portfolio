import { useEffect } from "react";
import { canUseDOM } from "../lib/browser";

const useRafScroll = (callback) => {
  useEffect(() => {
    if (!canUseDOM || typeof callback !== "function") return undefined;

    let frameId = null;

    const handleScroll = () => {
      if (frameId !== null) return;

      if (typeof window.requestAnimationFrame !== "function") {
        callback();
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        callback();
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId !== null && typeof window.cancelAnimationFrame === "function") {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [callback]);
};

export default useRafScroll;
