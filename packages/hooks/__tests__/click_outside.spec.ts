import { useClickOutside } from "../src";
import { renderHook } from "@testing-library/react-hooks";

describe("click outside hook", () => {
  it("should trigger mock handler because it was clicked outside", () => {
    const element = document.createElement("div");
    const mockHandler = jest.fn();
    element.id = "testingElement";
    document.body.appendChild(element);
    renderHook(() => useClickOutside({ current: element }, mockHandler));
    const event = new Event("mousedown", { bubbles: true });
    document.dispatchEvent(event);
    expect(mockHandler).toHaveBeenCalled();
  });

  it("should not trigger mock handler because it was clicked on element", () => {
    const element = document.createElement("div");
    const mockHandler = jest.fn();
    element.id = "testingElement";
    document.body.appendChild(element);
    renderHook(() => useClickOutside({ current: element }, mockHandler));
    const event = new Event("mousedown", { bubbles: true });
    element.dispatchEvent(event);
    expect(mockHandler).not.toHaveBeenCalled();
  });
});
