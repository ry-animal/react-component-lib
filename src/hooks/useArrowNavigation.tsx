import { RefObject, useEffect } from "react";

interface ArrowNavigationProps {
  activeItem: number;
  setActiveItem: (activeIndex: number) => void;
  listRef: RefObject<HTMLDivElement>;
  panelRef: RefObject<HTMLDivElement>;
  orientation?: "vertical" | "horizontal";
}

export const useArrowNavigation = ({
  activeItem,
  setActiveItem,
  listRef,
  panelRef,
  orientation = "horizontal",
}: ArrowNavigationProps) => {
  useEffect(() => {
    const menuItems = listRef.current?.childNodes ?? [];

    const activateTab = (index: number) => {
      if (menuItems.length > 0) {
        setActiveItem(index);
        const childNode = menuItems[index] as HTMLDivElement;
        childNode.focus();
        panelRef.current?.scrollTo(0, 0);
      }
    };

    const setFocusToPreviousMenuItem = () => {
      const previousItem =
        activeItem === 0 ? menuItems.length - 1 : activeItem - 1;
      activateTab(previousItem);
    };

    const setFocusToNextMenuItem = () => {
      const nextItem = activeItem < menuItems.length - 1 ? activeItem + 1 : 0;
      activateTab(nextItem);
    };

    const setFocusToFirstItem = () => {
      activateTab(0);
    };

    const setFocusToLastItem = () => {
      activateTab(menuItems.length - 1);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;
      switch (key) {
        case "ArrowLeft":
          if (orientation === "horizontal") {
            setFocusToPreviousMenuItem();
          }
          break;

        case "ArrowUp":
          if (orientation === "vertical") {
            setFocusToPreviousMenuItem();
          }
          break;

        case "ArrowRight":
          if (orientation === "horizontal") {
            setFocusToNextMenuItem();
          }
          break;

        case "ArrowDown":
          if (orientation === "vertical") {
            setFocusToNextMenuItem();
          }
          break;

        case "Home":
        case "PageUp":
          setFocusToFirstItem();
          break;

        case "End":
        case "PageDown":
          setFocusToLastItem();
          break;

        default:
          break;
      }
    };
    listRef.current?.addEventListener("keydown", handleKeyDown);
    return () => listRef.current?.removeEventListener("keydown", handleKeyDown);
  }, [activeItem]);
};

export default useArrowNavigation;
