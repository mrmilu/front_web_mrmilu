import { useAsyncState } from "../src";
import { act, renderHook, waitFor } from "@testing-library/react";

describe("async state hook", () => {
  it("should first show pending state and then resolved", async () => {
    const { result } = renderHook(() => useAsyncState());
    expect(result.current.state).toBeUndefined();

    act(() => result.current.setPromise(Promise.resolve()));
    expect(result.current.state).toBe("pending");

    await waitFor(() => expect(result.current.state).toBe("resolved"));
  });

  it("should first show pending state and then rejected", async () => {
    const { result } = renderHook(() => useAsyncState());
    expect(result.current.state).toBeUndefined();

    act(() => result.current.setPromise(Promise.reject()));
    expect(result.current.state).toBe("pending");

    await waitFor(() => expect(result.current.state).toBe("rejected"));
  });
});
