import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../util/test-utils";
import { Input } from "../Input";

describe("<Input /> as <TextArea />", () => {
  const sampleProps = () => ({
    label: "Label",
    asTextArea: true,
    name: "textArea",
    onChange: jest.fn(),
  });

  describe("rendering", () => {
    test("should render input and matches snapshot", () => {
      expect(
        render(<Input {...sampleProps()} />).asFragment()
      ).toMatchSnapshot();
    });

    test("should render input and matches snapshot (with error text)", () => {
      expect(
        render(<Input {...sampleProps()} error="Error" />).asFragment()
      ).toMatchSnapshot();
    });

    test("should render input and matches snapshot (disabled)", () => {
      expect(
        render(<Input {...sampleProps()} disabled />).asFragment()
      ).toMatchSnapshot();
    });
  });

  describe("event handling", () => {
    test("onChange is called", () => {
      const props = sampleProps();
      render(<Input {...props} />);
      const input = screen.getByRole("textbox");
      userEvent.type(input, "new text");
      expect(props.onChange).toHaveBeenCalled();
    });
  });
});
