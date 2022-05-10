import { TagManagerService } from "../src";

describe("tag manager service", () => {
  describe("with window", () => {
    afterEach(() => {
      Object.defineProperty(window, "dataLayer", {
        writable: true,
        value: undefined
      });
    });

    it("should send event to data layer already defined in window", () => {
      Object.defineProperty(window, "dataLayer", {
        writable: true,
        value: []
      });

      const tagManagerService = new TagManagerService();
      tagManagerService.sendEvent("cool-event", { foo: "bar" });
      expect(window.dataLayer).toContainEqual({ event: "cool-event", foo: "bar" });
    });

    it("should send event to data layer even if data layer is not defined in window", () => {
      const tagManagerService = new TagManagerService();
      tagManagerService.sendEvent("cool-event-2", { bar: "baz" });
      expect(window.dataLayer).toContainEqual({ event: "cool-event-2", bar: "baz" });
    });
  });

  describe("without window", () => {
    const { window } = global;
    beforeAll(() => {
      delete global.window;
    });

    afterAll(() => {
      global.window = window;
    });

    it("should not send event because window is not defined", () => {
      const tagManagerService = new TagManagerService();
      tagManagerService.sendEvent("cool-event", { foo: "bar" });
      expect(window.dataLayer).toBeUndefined();
    });
  });
});
