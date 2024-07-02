import userEvent from "@testing-library/user-event";
import { Switch } from ".";
import { render, screen } from "../../../util/test-utils";

describe("<Switch />", () => {
  const sampleProps = () => ({
    label: "Some Label",
    onChange: jest.fn(),
  });

  describe("rendering", () => {
    test("Renders a checkbox", () => {
      render(<Switch {...sampleProps()} />);
      expect(screen.getAllByRole("checkbox").length).toBe(1);
    });
  });

  describe("props handling", () => {
    test("Unchecked by default", () => {
      render(<Switch {...sampleProps()} />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox.getAttribute("checked")).toBe(null);
    });

    test("Honors checked attribute (checked)", () => {
      render(<Switch {...sampleProps()} checked={true} />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox.getAttribute("checked")).toBe("");
    });

    test("Honors checked attribute (unchecked)", () => {
      render(<Switch {...sampleProps()} checked={false} />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox.getAttribute("checked")).toBeFalsy();
    });
  });

  describe("event handling", () => {
    test("onChange called", () => {
      const props = sampleProps();
      render(<Switch {...props} />);
      const checkbox = screen.getByRole("checkbox");
      userEvent.click(checkbox);
      expect(props.onChange).toHaveBeenCalledWith(true);
      props.onChange.mockReset();
      userEvent.click(checkbox);
      expect(props.onChange).toHaveBeenCalledWith(false);
    });
  });
});
