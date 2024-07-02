import userEvent from "@testing-library/user-event";
import { Dropdown } from ".";
import { render, screen } from "../../../util/test-utils";

describe("<Dropdown />", () => {
  const sampleProps = () => ({
    label: "Label",
    options: ["Option 1", "Option 2"],
    onSelectItem: jest.fn(),
  });

  describe("rendering", () => {
    test("should render dropdown and matches snapshot", () => {
      expect(
        render(<Dropdown {...sampleProps()} />).asFragment()
      ).toMatchSnapshot();
    });

    test("should render dropdown and matches snapshot (with custom options)", () => {
      const customOptions = [
        <h1 key="1" data-testid="h1-custom">
          Custom 1
        </h1>,
        <h2 key="2">Custom 2</h2>,
      ];
      expect(
        render(
          <Dropdown {...sampleProps()} options={customOptions} />
        ).asFragment()
      ).toMatchSnapshot();
      const toggle = screen.getByRole("button");
      userEvent.click(toggle);
      const custom = screen.getByTestId("h1-custom");
      expect(custom).toBeTruthy();
    });

    test("should render dropdown and matches snapshot (disabled)", () => {
      expect(
        render(<Dropdown {...sampleProps()} disabled />).asFragment()
      ).toMatchSnapshot();
    });
  });

  describe("event handling", () => {
    // Default is only present when dropdown not requried
    test("onSelectItem is called when default selected", () => {
      const props = sampleProps();
      render(<Dropdown {...props} />);
      const toggle = screen.getByRole("button");
      userEvent.click(toggle);
      const [option] = screen.getAllByRole("option");
      userEvent.click(option);
      expect(props.onSelectItem).toHaveBeenCalled();
    });

    test("selecting option closes menu and updates option", () => {
      const props = sampleProps();
      render(<Dropdown {...props} />);
      const toggle = screen.getByRole("button");
      userEvent.click(toggle);
      const [option] = screen.getAllByRole("option");
      userEvent.click(option);

      expect(toggle.textContent).toBe(props.options[0]);
    });

    test("pressing clear button resets selected item", () => {
      const props = sampleProps();
      render(<Dropdown {...props} />);
      const toggle = screen.getByRole("button");
      userEvent.click(toggle);
      const [option] = screen.getAllByRole("option");
      userEvent.click(option);

      const clearButton = screen.getByLabelText("clear selection");
      userEvent.click(clearButton);

      expect(toggle.textContent).toBe("Select One");
    });
  });
});
