import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";
import { useRef, useState } from "react";
import { useClosePopup } from "./useClosePopup";

describe("useClosePopup()", () => {
  const SimpleComponent = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [show, setShow] = useState(true);
    useClosePopup(ref, () => setShow(false));

    return (
      <div data-testid="outer-container">
        <div ref={ref} data-testid="inner-container">
          {show && <p>Popup text</p>}
        </div>
      </div>
    );
  };

  describe("event handling", () => {
    test("clicking outer element closes popup", () => {
      render(<SimpleComponent />);
      expect(screen.queryByText("Popup text")).not.toBeNull();

      const outer = screen.getByTestId("outer-container");
      userEvent.click(outer);

      expect(screen.queryByText("Popup text")).toBeNull();
    });

    test("clicking inner element has no effect", () => {
      render(<SimpleComponent />);
      expect(screen.queryByText("Popup text")).not.toBeNull();

      const inner = screen.getByTestId("inner-container");
      userEvent.click(inner);

      expect(screen.queryByText("Popup text")).not.toBeNull();
    });

    test("clicking esc closes popup", () => {
      render(<SimpleComponent />);
      expect(screen.queryByText("Popup text")).not.toBeNull();

      userEvent.keyboard("{Esc}");
      expect(screen.queryByText("Popup text")).toBeNull();
    });

    test("clicking escape closes popup", () => {
      render(<SimpleComponent />);
      expect(screen.queryByText("Popup text")).not.toBeNull();

      userEvent.keyboard("{Escape}");
      expect(screen.queryByText("Popup text")).toBeNull();
    });
  });
});
