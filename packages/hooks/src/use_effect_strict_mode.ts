import type { EffectCallback } from "react";
import { useEffect, useRef } from "react";

/**
 * useEffect hook for React 18 in strict mode that executes only ones in development mode
 * @param effect
 */
const useEffectStrictMode = (effect: EffectCallback) => {
  const runEffectOnce = useRef(false);
  const runCleanupOnce = useRef(false);
  const cleanupDestructor = useRef<ReturnType<EffectCallback> | null>(null);

  useEffect(() => {
    if (!runEffectOnce.current) {
      runEffectOnce.current = true;
      const destructor = effect();
      if (destructor) cleanupDestructor.current = destructor;
    }

    return () => {
      if (process.env.NODE_ENV === "production" && cleanupDestructor.current) {
        cleanupDestructor.current();
      } else {
        if (runCleanupOnce.current && cleanupDestructor.current) {
          cleanupDestructor.current();
        }
        runCleanupOnce.current = true;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useEffectStrictMode;
