import { act, renderHook } from "@testing-library/react-hooks";
import { useAsyncState } from "../src";

describe("async state hook", () => {
  it("should first show pending state and then resolved", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAsyncState());
    expect(result.current.state).toBeUndefined();

    act(() => result.current.setPromise(Promise.resolve()));
    expect(result.current.state).toBe("pending");

    await waitForNextUpdate();

    expect(result.current.state).toBe("resolved");
  });

  it("should first show pending state and then rejected", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAsyncState());
    expect(result.current.state).toBeUndefined();

    act(() => result.current.setPromise(Promise.reject()));
    expect(result.current.state).toBe("pending");

    await waitForNextUpdate();

    expect(result.current.state).toBe("rejected");
  });
});
