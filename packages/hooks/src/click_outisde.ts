import type { RefObject } from "react";
import { useEffect } from "react";

/**
 * Hook that detects clicks outside an element and executes a handler
 * @param ref - React ref object
 * @param handler - Event handler
 */
const useClickOutside = (ref: RefObject<HTMLElement>, handler: (event: Event) => void) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useClickOutside;
