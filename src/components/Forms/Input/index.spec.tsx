import userEvent from "@testing-library/user-event";
import { Input } from ".";
import { lightColors } from "../../../theme";
import { fireEvent, render, screen } from "../../../util/test-utils";

describe("<Input />", () => {
  const inputProps = () => ({
    label: "Label",
    name: "InputName",
    onChange: jest.fn(),
  });

  describe("rendering", () => {
    test("should render input and matches snapshot", () => {
      expect(
        render(<Input {...inputProps()} />).asFragment()
      ).toMatchSnapshot();
    });

    test("should render input and matches snapshot (with error)", () => {
      expect(
        render(<Input {...inputProps()} error="Error" />).asFragment()
      ).toMatchSnapshot();
    });

    test("should render input and matches snapshot (disabled)", () => {
      expect(
        render(<Input {...inputProps()} disabled />).asFragment()
      ).toMatchSnapshot();
    });

    test("should render input with error style (error)", () => {
      render(<Input {...inputProps()} error="There is an error" />);
      const input = screen.getByRole("textbox");

      expect(input).toHaveStyleRule(
        "border",
        `2px solid ${lightColors.ERROR_2}`
      );

      const error = screen.getByRole("alert");
      expect(error).not.toBeNull();
    });

    test("should render input with annotation", () => {
      render(<Input {...inputProps()} annotation="ETH" />);
      expect(screen.getByText("ETH")).toBeInTheDocument();
    });
  });

  describe("event handling", () => {
    test("onChange is called", () => {
      const props = inputProps();
      render(<Input {...props} />);
      const input = screen.getByRole("textbox");
      userEvent.type(input, "some text");
      expect(props.onChange).toHaveBeenCalled();
    });

    test("onBlur is called when present", () => {
      const props = inputProps();
      const onBlur = jest.fn();
      render(<Input {...props} onBlur={onBlur} />);
      const input = screen.getByRole("textbox");
      fireEvent.blur(input);
      expect(onBlur).toHaveBeenCalled();
    });

    test("onChange is only called when typing number (type=number)", () => {
      const props = inputProps();
      render(<Input {...props} type="number" />);
      const input = screen.getByRole("textbox");
      userEvent.type(input, "some text");
      expect(props.onChange).not.toHaveBeenCalled();
      userEvent.clear(input);
      userEvent.type(input, "1234");
      expect(props.onChange).toHaveBeenCalled();
    });

    test("onChange is called when typing a leading '.' (type=number)", () => {
      const props = inputProps();
      render(<Input {...props} type="number" />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      userEvent.type(input, ".");
      expect(props.onChange).toHaveBeenCalled();
      expect(input.value).toBe("0.");
    });
  });
});
