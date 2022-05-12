import { useCallback, useEffect, useMemo, useState } from "react";

const defaultBreakpoints: Record<BreakpointTypes, number> = {
  sm: 480,
  md: 768,
  lg: 1024
};

export type BreakpointTypes = "sm" | "md" | "lg";

enum MatchedBreakpoint {
  SM_AND_UP,
  MD_AND_UP,
  LG_AND_UP
}

interface BreakpointsMatchHookOutput {
  smAndUp: boolean;
  mdAndUp: boolean;
  lgAndUp: boolean;
}

const useBreakpointsMatch = (breakpoints: Record<BreakpointTypes, number> = defaultBreakpoints): BreakpointsMatchHookOutput => {
  const [matchedBreakpoint, setMatchedBreakpoint] = useState<MatchedBreakpoint | null>(null);

  const lgAndUp = useMemo(() => matchedBreakpoint === MatchedBreakpoint.LG_AND_UP, [matchedBreakpoint]);
  const mdAndUp = useMemo(
    () => matchedBreakpoint === MatchedBreakpoint.MD_AND_UP || matchedBreakpoint === MatchedBreakpoint.LG_AND_UP,
    [matchedBreakpoint]
  );
  const smAndUp = useMemo(
    () =>
      matchedBreakpoint === MatchedBreakpoint.SM_AND_UP ||
      matchedBreakpoint === MatchedBreakpoint.MD_AND_UP ||
      matchedBreakpoint === MatchedBreakpoint.LG_AND_UP,
    [matchedBreakpoint]
  );

  const matchMedia = useCallback(() => {
    if (window.matchMedia(`(min-width: ${breakpoints["lg"]}px)`).matches) {
      setMatchedBreakpoint(MatchedBreakpoint.LG_AND_UP);
    } else if (window.matchMedia(`(min-width: ${breakpoints["md"]}px)`).matches) {
      setMatchedBreakpoint(MatchedBreakpoint.MD_AND_UP);
    } else if (window.matchMedia(`(min-width: ${breakpoints["sm"]}px)`).matches) {
      setMatchedBreakpoint(MatchedBreakpoint.SM_AND_UP);
    } else {
      setMatchedBreakpoint(null);
    }
  }, []);

  useEffect(() => {
    /* istanbul ignore next: ignore coverage because is not possible to test SSR environment with renderHook method of react-testing-library */
    if (typeof window === "undefined") return () => {};

    matchMedia();
    window.addEventListener("resize", matchMedia);
    return () => {
      window.removeEventListener("resize", matchMedia);
    };
  }, [matchMedia]);

  return {
    smAndUp,
    mdAndUp,
    lgAndUp
  };
};

export default useBreakpointsMatch;
