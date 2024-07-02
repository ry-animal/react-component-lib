import { RefObject, useEffect } from "react";
import { useEscape } from "./useEscape";

// Will close all popups if using nested popups
export function useClosePopup<T extends HTMLElement>(
  popupElement: RefObject<T> | RefObject<T>[],
  handler: () => void
) {
  useEscape(handler);
  useEffect(() => {
    const handleClick = (e: Event) => {
      // Normalize popupElement to an array
      const popups = "length" in popupElement ? popupElement : [popupElement];
      let found = false;

      // For each provided ref, check if they are the click target
      popups.forEach((popup) => {
        if (
          popup.current !== null &&
          popup.current.contains(e.target as Node)
        ) {
          found = true;
        }
      });
      if (found) {
        return;
      }
      // Outside click
      handler();
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
}
