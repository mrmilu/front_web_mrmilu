/**
 * Promised based setTimeout
 * @param miliseconds
 */
export const timeout = (miliseconds: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, miliseconds);
  });

export interface CancelablePromise<T> {
  promise: Promise<T>;
  cancel(): void;
  // The callback runs when the promise is resolved and has been previously canceled.
  onCancel(callback: () => void): void;
}

/**
 * Function that lets you cancel then and catch chain of a promise.
 * @param promise
 */
export const makeCancelable = <T>(promise: Promise<T>): CancelablePromise<T> => {
  let hasCanceled = false;
  let handleCancel: (() => void) | null = null;

  const wrappedPromise = new Promise<T>((resolve, reject) => {
    promise.then((val) => (hasCanceled ? handleCancel?.() : resolve(val)));
    /* istanbul ignore next: ignore coverage because unable to test async catch in jest */
    promise.catch((error) => (hasCanceled ? handleCancel?.() : reject(error)));
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled = true;
    },
    onCancel(callback) {
      handleCancel = callback;
    }
  };
};
