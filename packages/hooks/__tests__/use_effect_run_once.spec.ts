import { useEffectRunOnce } from "../src";
import { renderHook } from "@testing-library/react";
import { StrictModeWrapper } from "./utils/strict_mode";

describe("use effect once hook", () => {
  const { NODE_ENV } = process.env;
  afterAll(() => {
    process.env.NODE_ENV = NODE_ENV;
  });

  it("should run use effect only once in strict mode", () => {
    const mockFn = jest.fn();
    const cleanupMockFn = jest.fn();
    const { unmount } = renderHook(
      () =>
        useEffectRunOnce(() => {
          mockFn();

          return () => {
            cleanupMockFn();
          };
        }, [mockFn, cleanupMockFn]),
      { wrapper: StrictModeWrapper }
    );
    unmount();
    expect(mockFn).toHaveBeenCalledOnce();
    expect(cleanupMockFn).toHaveBeenCalledOnce();
  });

  it("should run use effect only once in strict mode production", () => {
    process.env.NODE_ENV = "production";
    const mockFn = jest.fn();
    const cleanupMockFn = jest.fn();
    const { unmount } = renderHook(() =>
      useEffectRunOnce(() => {
        mockFn();

        return () => {
          cleanupMockFn();
        };
      }, [mockFn, cleanupMockFn])
    );
    unmount();
    expect(mockFn).toHaveBeenCalledOnce();
    expect(cleanupMockFn).toHaveBeenCalledOnce();
  });
});
