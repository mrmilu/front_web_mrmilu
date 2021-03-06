import { useEffect, useState } from "react";

export type AsyncState = "resolved" | "pending" | "rejected";

export interface AsyncStateHookOutput {
  state?: AsyncState;
  setPromise: (promise: Promise<unknown> | null) => void;
}

/**
 * Hook that after setting an executed promise returns its current state.
 * @param delay Delay to be applied when resolving async state
 */
const useAsyncState = (delay = 0): AsyncStateHookOutput => {
  const [state, setState] = useState<AsyncState | undefined>(undefined);
  const [promise, setInnerPromise] = useState<Promise<unknown> | null>(null);

  useEffect(() => {
    if (promise) {
      promise
        .then(() => {
          setTimeout(() => {
            setState("resolved");
          }, delay);
        })
        .catch(() => {
          setTimeout(() => {
            setState("rejected");
          }, delay);
        });
    }
  }, [delay, promise]);

  return {
    state,
    setPromise: (promise: Promise<unknown> | null) => {
      setState("pending");
      setInnerPromise(promise);
    }
  };
};

export default useAsyncState;
