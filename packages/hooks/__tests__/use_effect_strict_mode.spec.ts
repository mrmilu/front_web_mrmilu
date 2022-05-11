import { useEffectStrictMode } from "../src";
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
        useEffectStrictMode(() => {
          mockFn();

          return () => {
            cleanupMockFn();
          };
        }),
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
      useEffectStrictMode(() => {
        mockFn();

        return () => {
          cleanupMockFn();
        };
      })
    );
    unmount();
    expect(mockFn).toHaveBeenCalledOnce();
    expect(cleanupMockFn).toHaveBeenCalledOnce();
  });
});
