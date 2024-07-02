import userEvent from "@testing-library/user-event";
import { ListButton } from ".";
import { darkPaletteBase } from "../../../theme/colors";
import { render, screen } from "../../../util/test-utils";

describe("<ListButton />", () => {
  const sampleProps = () => ({
    label: "Some Label",
    onClick: jest.fn(),
  });

  describe("rendering", () => {
    test("Default rendering matches snapshot", () => {
      expect(
        render(<ListButton {...sampleProps()} />).asFragment()
      ).toMatchSnapshot();
    });

    test("Default rendering matches snapshot (with description)", () => {
      expect(
        render(
          <ListButton {...sampleProps()} description="Description" />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Default rendering matches snapshot (with icon)", () => {
      expect(
        render(
          <ListButton {...sampleProps()} icon={"https://test-image-url.com"} />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Default rendering matches snapshot (with description and icon)", () => {
      expect(
        render(
          <ListButton
            {...sampleProps()}
            description="Description"
            icon={"https://test-image-url.com"}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Default rendering matches snapshot (icon at opposite end)", () => {
      expect(
        render(
          <ListButton
            {...sampleProps()}
            icon="https://test-image-url.com"
            flipIcon
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Default rendering matches snapshot (custom label color)", () => {
      expect(
        render(
          <ListButton {...sampleProps()} labelColor={darkPaletteBase.TEXT_2} />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Default rendering matches snapshot (custom description color)", () => {
      expect(
        render(
          <ListButton
            {...sampleProps()}
            descriptionColor={darkPaletteBase.TEXT_3}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Default rendering matches snapshot (custom button background color)", () => {
      expect(
        render(
          <ListButton
            {...sampleProps()}
            backgroundColor={darkPaletteBase.SURFACE_1}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Default rendering matches snapshot (disabled)", () => {
      expect(
        render(<ListButton {...sampleProps()} disabled={true} />).asFragment()
      ).toMatchSnapshot();
    });
  });

  describe("event handling", () => {
    test("onClick called", () => {
      const props = sampleProps();
      render(<ListButton {...props} />);
      const button = screen.getByRole("button");
      userEvent.click(button);
      expect(props.onClick).toHaveBeenCalled();
    });
  });
});
