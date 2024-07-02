import userEvent from "@testing-library/user-event";
import { Checkbox } from ".";
import { render, screen } from "../../../util/test-utils";

describe("<Checkbox />", () => {
  const sampleProps = () => ({
    label: "Label",
    name: "Name",
    onChange: jest.fn(),
  });

  it("Renders a checkbox", () => {
    render(<Checkbox {...sampleProps()} />);
    expect(screen.getAllByRole("checkbox").length).toBe(1);
  });
  it("Unchecked by default", () => {
    render(<Checkbox {...sampleProps()} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.getAttribute("checked")).toBe(null);
  });

  it("checked by default", () => {
    render(<Checkbox {...sampleProps()} checked />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.getAttribute("checked")).toBe("");
  });

  it("should check when user click", () => {
    render(<Checkbox {...sampleProps()} />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
