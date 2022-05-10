import { act, renderHook } from "@testing-library/react-hooks";
import type { BreakpointTypes } from "../src/breakpoint_match";
import useBreakpointsMatch from "../src/breakpoint_match";

const breakpoints: Record<BreakpointTypes, number> = {
  sm: 1,
  md: 5,
  lg: 10
};

describe("breakpoint match hook", () => {
  describe("with window", () => {
    it("should match every default breakpoint in resize", () => {
      const { result } = renderHook(() => useBreakpointsMatch());
      act(() => window.resizeTo(481, 1000));
      expect(result.current.smAndUp).toBeTruthy();

      act(() => window.resizeTo(769, 1000));
      expect(result.current.mdAndUp).toBeTruthy();

      act(() => window.resizeTo(1025, 1000));
      expect(result.current.lgAndUp).toBeTruthy();
    });

    it("should match every breakpoint in resize", () => {
      const { result } = renderHook(() => useBreakpointsMatch(breakpoints));
      act(() => window.resizeTo(0, 1000));
      expect(result.current.smAndUp).toBeFalsy();

      act(() => window.resizeTo(2, 1000));
      expect(result.current.smAndUp).toBeTruthy();

      act(() => window.resizeTo(6, 1000));
      expect(result.current.mdAndUp).toBeTruthy();

      act(() => window.resizeTo(11, 1000));
      expect(result.current.lgAndUp).toBeTruthy();
    });
  });

  describe("without window", () => {
    const { window } = global;
    beforeAll(() => {
      delete global.window;
    });

    afterAll(() => {
      global.window = window;
    });

    it("should not match every breakpoint in resize", () => {
      const { result } = renderHook(() => useBreakpointsMatch(breakpoints));
      expect(result.current.smAndUp).toBeFalsy();
    });
  });
});
