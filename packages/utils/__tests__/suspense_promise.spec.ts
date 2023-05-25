import { timeout, wrapPromise, wrapPromisePending } from "../src";
import * as util from "util";

describe("suspense promise", () => {
  describe("wrap promise", () => {
    beforeAll(() => {
      jest.useFakeTimers();
    });
    it("should wrap promise and read correct resolve value", async () => {
      const wrappedPromise = await wrapPromise(Promise.resolve("foo"));
      const readValue = wrappedPromise.read();
      expect(readValue).toBe("foo");
    });

    it("should wrap promise and read raw correct value", async () => {
      const wrappedPromise = await wrapPromise(Promise.resolve("foo"));
      const readValue = wrappedPromise.readRaw();
      expect(readValue).toBe("foo");
    });

    it("should wrap promise and reject on read", async () => {
      const wrappedPromise = await wrapPromise(Promise.reject("bar"));
      try {
        wrappedPromise.read();
      } catch (e) {
        expect(e).toBe("bar");
      }
    });

    it("should wrap promise and keep pending", async () => {
      const fakePromise = async () => {
        await timeout(10000);
        return "baz";
      };
      try {
        const wrappedPromise = await wrapPromise(fakePromise());
        wrappedPromise.read();
      } catch (e) {
        expect(util.inspect(e)).toInclude("pending");
      }
    });
    afterAll(() => {
      jest.runAllTimers();
    });
  });

  describe("wrap pending promise", () => {
    it("should wrap promise and keep pending", async () => {
      try {
        const wrappedPromise = await wrapPromisePending();
        wrappedPromise.read();
        wrappedPromise.readRaw();
      } catch (e) {
        expect(util.inspect(e)).toInclude("undefined");
      }
    });
  });
});
