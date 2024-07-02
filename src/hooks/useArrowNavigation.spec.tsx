import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";
import { createRef, useRef, useState } from "react";
import useArrowNavigation from "./useArrowNavigation";

const Keys = {
  RIGHT: {
    key: "ArrowRight",
    keyCode: 39,
  },
  LEFT: {
    key: "ArrowLeft",
    keyCode: 37,
  },
  DOWN: {
    key: "ArrowDown",
    keyCode: 40,
  },
  UP: {
    key: "ArrowUp",
    keyCode: 38,
  },
  HOME: {
    key: "Home",
    keyCode: 36,
  },
  END: {
    key: "End",
    keyCode: 35,
  },
  ONE: {
    key: "1",
    keyCode: 49,
  },
};

describe("useArrowNavigation()", () => {
  const SimpleComponent = ({
    orientation,
    makeEmptyList,
  }: {
    orientation?: "vertical" | "horizontal";
    makeEmptyList?: boolean;
  }) => {
    const [activeItem, setActiveItem] = useState(0);
    const listRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    useArrowNavigation({
      activeItem,
      setActiveItem,
      listRef: makeEmptyList ? createRef() : listRef,
      panelRef,
      orientation,
    });

    const THREE_TABS = 3;
    const numTabs = makeEmptyList ? 0 : THREE_TABS;

    return (
      <div>
        <div role="tablist" ref={listRef}>
          {Array.from(Array(numTabs)).map((_item, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={activeItem === index}
              onClick={() => setActiveItem(index)}
            >
              {`Tab ${index}`}
            </button>
          ))}
        </div>
        <div role="tabpanel" ref={panelRef} />
      </div>
    );
  };

  beforeEach(() => {
    window.HTMLElement.prototype.scrollTo = () => {};
  });

  describe("event handling", () => {
    test("clicking right arrow sets focus to next tab (horizontal)", () => {
      render(<SimpleComponent />);
      expect(screen.queryByText("Tab 0")).toHaveAttribute(
        "aria-selected",
        "true"
      );

      fireEvent.keyDown(screen.getByRole("tablist"), Keys.RIGHT);

      expect(screen.queryByText("Tab 0")).toHaveAttribute(
        "aria-selected",
        "false"
      );
      expect(screen.queryByText("Tab 1")).toHaveAttribute(
        "aria-selected",
        "true"
      );
    });

    test("clicking left arrow from first tab cycles to end (horizontal)", () => {
      render(<SimpleComponent />);
      expect(screen.queryByText("Tab 0")).toHaveAttribute(
        "aria-selected",
        "true"
      );

      fireEvent.keyDown(screen.getByRole("tablist"), Keys.LEFT);

      expect(screen.queryByText("Tab 0")).toHaveAttribute(
        "aria-selected",
        "false"
      );
      expect(screen.queryByText("Tab 2")).toHaveAttribute(
        "aria-selected",
        "true"
      );
    });

    test("up/down arrow should have no effect (horizontal)", () => {
      render(<SimpleComponent />);
      expect(screen.queryByText("Tab 0")).toHaveAttribute(
        "aria-selected",
        "true"
      );

      fireEvent.keyDown(screen.getByRole("tablist"), Keys.DOWN);

      fireEvent.keyDown(screen.getByRole("tablist"), Keys.UP);

      expect(screen.queryByText("Tab 0")).toHaveAttribute(
        "aria-selected",
        "true"
      );
    });

    test("clicking up focuses previous tab (vertical)", () => {
      render(<SimpleComponent orientation="vertical" />);

      userEvent.click(screen.getByText("Tab 1"));

      expect(screen.queryByText("Tab 1")).toHaveAttribute(
        "aria-selected",
        "true"
      );

      fireEvent.keyDown(screen.getByRole("tablist"), Keys.UP);

      expect(screen.queryByText("Tab 1")).toHaveAttribute(
        "aria-selected",
        "false"
      );
      expect(screen.queryByText("Tab 0")).toHaveAttribute(
        "aria-selected",
        "true"
      );
    });

    test("clicking down arrow from last tab cycles to start (vertical)", () => {
      render(<SimpleComponent orientation="vertical" />);

      userEvent.click(screen.getByText("Tab 2"));

      expect(screen.queryByText("Tab 2")).toHaveAttribute(
        "aria-selected",
        "true"
      );

      fireEvent.keyDown(screen.getByRole("tablist"), Keys.DOWN);

      expect(screen.queryByText("Tab 2")).toHaveAttribute(
        "aria-selected",
        "false"
      );
      expect(screen.queryByText("Tab 0")).toHaveAttribute(
        "aria-selected",
        "true"
      );
    });

    test("left/right arrow should have no effect (vertical)", () => {
      render(<SimpleComponent />);
      expect(screen.queryByText("Tab 0")).toHaveAttribute(
        "aria-selected",
        "true"
      );

      fireEvent.keyDown(screen.getByRole("tablist"), Keys.LEFT);

      fireEvent.keyDown(screen.getByRole("tablist"), Keys.RIGHT);

      expect(screen.queryByText("Tab 0")).toHaveAttribute(
        "aria-selected",
        "true"
      );
    });

    test("clicking home goes to first tab", () => {
      render(<SimpleComponent orientation="vertical" />);

      userEvent.click(screen.getByText("Tab 2"));

      expect(screen.queryByText("Tab 0")).toHaveAttribute(
        "aria-selected",
        "false"
      );

      fireEvent.keyDown(screen.getByRole("tablist"), Keys.HOME);

      expect(screen.queryByText("Tab 0")).toHaveAttribute(
        "aria-selected",
        "true"
      );
    });

    test("clicking end goes to last tab", () => {
      render(<SimpleComponent orientation="vertical" />);

      expect(screen.queryByText("Tab 2")).toHaveAttribute(
        "aria-selected",
        "false"
      );

      fireEvent.keyDown(screen.getByRole("tablist"), Keys.END);

      expect(screen.queryByText("Tab 2")).toHaveAttribute(
        "aria-selected",
        "true"
      );
    });

    test("do nothing for default any other key", () => {
      render(<SimpleComponent orientation="vertical" />);

      expect(screen.queryByText("Tab 0")).toHaveAttribute(
        "aria-selected",
        "true"
      );

      fireEvent.keyDown(screen.getByRole("tablist"), Keys.ONE);

      expect(screen.queryByText("Tab 0")).toHaveAttribute(
        "aria-selected",
        "true"
      );
    });

    test("handles tablist ref if no children", () => {
      render(<SimpleComponent makeEmptyList />);

      fireEvent.keyDown(screen.getByRole("tablist"), Keys.LEFT);

      expect(screen.getByRole("tablist").childNodes.length).toBe(0);
    });
  });
});
