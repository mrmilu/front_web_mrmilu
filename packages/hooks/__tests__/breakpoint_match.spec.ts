import { act, renderHook } from "@testing-library/react-hooks";
import type { BreakpointTypes } from "../src/breakpoint_match";
import useBreakpointsMatch from "../src/breakpoint_match";

const breakpoints: Record<BreakpointTypes, number> = {
  sm: 480,
  md: 768,
  lg: 1024
};

describe("breakpoint match hook", () => {
  it("should match every breakpoint in resize", () => {
    const { result } = renderHook(() => useBreakpointsMatch(breakpoints));
    act(() => window.resizeTo(481, 1000));
    expect(result.current.smAndUp).toBeTruthy();

    act(() => window.resizeTo(769, 1000));
    expect(result.current.mdAndUp).toBeTruthy();

    act(() => window.resizeTo(1025, 1000));
    expect(result.current.lgAndUp).toBeTruthy();
  });
});
