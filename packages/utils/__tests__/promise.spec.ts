import { makeCancelable, timeout } from "../src";

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

describe("timeout promise", () => {
  it("should run promise timer for 1 second", () => {
    const pendingPromise = timeout(1000).then(() => {
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    });
    jest.runAllTimers();
    return pendingPromise;
  });
});

describe("cancelable promise", () => {
  it("should cancel promise then chain", () => {
    const onCancelCallback = jest.fn();
    const testPromise = () => {
      const timeoutPromise = timeout(2000);
      const cancelablePromise = makeCancelable(timeoutPromise);
      cancelablePromise.onCancel(onCancelCallback);
      cancelablePromise.cancel();
      jest.runAllTimers();
      return timeoutPromise;
    };

    return testPromise().then(() => {
      expect(onCancelCallback).toHaveBeenCalled();
    });
  });

  it("should not cancel promise then chain", () => {
    const onCancelCallback = jest.fn();
    const testPromise = () => {
      const timeoutPromise = timeout(2000);
      const cancelablePromise = makeCancelable(timeoutPromise);
      cancelablePromise.onCancel(onCancelCallback);
      jest.runAllTimers();
      return timeoutPromise;
    };

    return testPromise().then(() => {
      expect(onCancelCallback).not.toHaveBeenCalled();
    });
  });
});
