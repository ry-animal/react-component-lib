import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";
import { ClickOutside } from ".";

describe("<ClickOutside />", () => {
  describe("rendering", () => {
    test("Default rendering matches snapshot", () => {
      expect(
        render(
          <ClickOutside onClick={jest.fn()}>Inner Content</ClickOutside>
        ).asFragment()
      ).toMatchSnapshot();
    });
  });

  describe("event handling", () => {
    test("Clicking inside does not fire outside click", () => {
      const outsideClick = jest.fn();
      const insideClick = jest.fn();
      render(
        <ClickOutside onClick={outsideClick}>
          <button onClick={insideClick}>Click</button>
        </ClickOutside>
      );

      userEvent.click(screen.getByRole("button"));
      expect(insideClick).toBeCalled();
      expect(outsideClick).not.toBeCalled();
    });

    test("Clicking outide fires outside click", () => {
      const outsideClick = jest.fn();
      const insideClick = jest.fn();
      render(
        <ClickOutside onClick={outsideClick}>
          <button onClick={insideClick}>Click</button>
        </ClickOutside>
      );

      const outerDiv = screen.getByRole("button").closest("div");
      if (outerDiv) {
        userEvent.click(outerDiv);
      }
      expect(insideClick).not.toBeCalled();
      expect(outsideClick).toBeCalled();
    });

    test("Clicking 'ESC' fires outside click", () => {
      const onClick = jest.fn();
      const { container } = render(
        <ClickOutside onClick={onClick}>Inner Content</ClickOutside>
      );

      fireEvent.keyDown(container, {
        key: "Escape",
      });

      expect(onClick).toBeCalled();

      fireEvent.keyDown(container, {
        key: "Esc",
      });

      expect(onClick).toBeCalled();
    });
  });
});
