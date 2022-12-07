import { render, screen } from "@testing-library/react";
import SafeImage from "../src/safe_image";
import React from "react";

const src = "src.jpg";
const placeholderSrc = "placeholder.jpg";

describe("SafeImage component", () => {
  it("should render image from src if src is not empty", () => {
    render(<SafeImage src={src} placeholderSrc={placeholderSrc} />);
    expect(screen.getByRole("img").getAttribute("src")).toEqual(src);
  });

  it("should render image from placeholderSrc image if src is empty", () => {
    render(<SafeImage src="" placeholderSrc={placeholderSrc} />);
    expect(screen.getByRole("img").getAttribute("src")).toEqual(placeholderSrc);
  });

  it("should render image from placeholderSrc image if src is undefined", () => {
    render(<SafeImage placeholderSrc={placeholderSrc} />);
    expect(screen.getByRole("img").getAttribute("src")).toEqual(placeholderSrc);
  });
});
