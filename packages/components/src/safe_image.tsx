import { createElement, useEffect, useRef, useState } from "react";
import type { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export interface SafeImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  // Image to be shown if `src` is empty or invalid
  placeholderSrc: string;
}

/**
 * Image that shows `placeholderImage` if `src` is empty or invalid
 */
export default function SafeImage({ src, placeholderSrc, ...props }: SafeImageProps) {
  const [invalid, setInvalid] = useState(false); // Controls whether current src is invalid

  const prevSrc = useRef(src);
  useEffect(() => {
    if (prevSrc.current !== src) {
      setInvalid(false); // if src changes, the new src might not be invalid.
      prevSrc.current = src;
    }
  }, [src]);

  return createElement("img", {
    src: invalid ? placeholderSrc : (src || placeholderSrc), // If `src` is empty or invalid, show `placeholderSrc`
    onError: () => setInvalid(true),
    ...props
  });
};

