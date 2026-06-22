import { useEffect } from "react";
import { canUseDOM } from "../lib/browser";

const openModalCount = { current: 0 };
let previousBodyOverflow = "";

const useModalControls = (isOpen, onClose) => {
  useEffect(() => {
    if (!canUseDOM || !isOpen) return undefined;

    if (openModalCount.current === 0) {
      previousBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }

    openModalCount.current += 1;

    return () => {
      openModalCount.current = Math.max(0, openModalCount.current - 1);
      if (openModalCount.current === 0) {
        document.body.style.overflow = previousBodyOverflow;
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!canUseDOM || !isOpen || typeof onClose !== "function") {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);
};

export default useModalControls;
