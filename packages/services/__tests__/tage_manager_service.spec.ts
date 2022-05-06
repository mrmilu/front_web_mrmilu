import { TagManagerService } from "../src";

describe("tag manager service", () => {
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
