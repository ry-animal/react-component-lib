import userEvent from "@testing-library/user-event";
import { ThemeSwitcher } from ".";
import { render, screen } from "../../util/test-utils";

describe("<ThemeSwitcher />", () => {
  it("Renders a checkbox", () => {
    render(<ThemeSwitcher />);
    expect(screen.getAllByRole("checkbox").length).toBe(1);
  });

  it("renders unchecked by default", () => {
    render(<ThemeSwitcher />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.getAttribute("checked")).toBeFalsy();
  });

  it("renders checked by default", () => {
    const result = render(<ThemeSwitcher checked />);
    const checkbox = result.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  it("renders with translations", () => {
    const result = render(
      <ThemeSwitcher checkedLabel="Foo" uncheckedLabel="Bar" />
    );

    expect(result.getByText("Bar")).toBeInTheDocument();
  });

  it("onChange called", () => {
    const props = {
      onChange: jest.fn(),
    };
    render(<ThemeSwitcher {...props} />);
    const checkbox = screen.getByRole("checkbox");
    userEvent.click(checkbox);
    expect(props.onChange).toHaveBeenCalledWith(true);
    props.onChange.mockReset();
    userEvent.click(checkbox);
    expect(props.onChange).toHaveBeenCalledWith(false);
  });
});
