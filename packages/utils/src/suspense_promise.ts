export interface SuspendedValue<T> {
  // Reads value so Suspense can handle it
  read(): T;
  // Reads value without throwing error
  readRaw(): T | undefined;
}

export function wrapPromise<T>(promise: Promise<T>): SuspendedValue<T> {
  let status = "pending";
  let response: T;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  };

  const readRaw = () => response;

  return { read, readRaw };
}

export function wrapPromisePending<T>(): SuspendedValue<T> {
  const read = () => {
    throw Promise.resolve();
  };
  return { read, readRaw: () => undefined };
}
