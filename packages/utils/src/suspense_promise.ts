export interface SuspendedValue<T> {
  read(): T;
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

  return { read };
}

export function wrapPromisePending<T>(): SuspendedValue<T> {
  const read = () => {
    throw Promise.resolve();
  };
  return { read };
}
