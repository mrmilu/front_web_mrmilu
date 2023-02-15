import type { DependencyList, EffectCallback } from "react";
import { useEffect, useRef } from "react";

/**
 * useEffect hook for React 18 in strict mode that executes only ones in development mode
 * @param effect
 * @param deps
 */
const useEffectStrictMode = (effect: EffectCallback, deps: DependencyList) => {
  const runOnce = useRef(false);

  useEffect(() => {
    if (runOnce.current || process.env.NODE_ENV === "production") return effect();
    runOnce.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useEffectStrictMode;
