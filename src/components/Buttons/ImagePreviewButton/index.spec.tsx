import userEvent from "@testing-library/user-event";
import { ImagePreviewButton } from ".";
import { render, screen } from "../../../util/test-utils";

describe("<ImagePreviewButton />", () => {
  const sampleProps = () => ({
    onClick: jest.fn(),
  });

  describe("rendering", () => {
    test("Default rendering matches snapshot", () => {
      expect(
        render(<ImagePreviewButton {...sampleProps()} />).asFragment()
      ).toMatchSnapshot();
    });

    test("renders correctly when img is provided", () => {
      expect(
        render(
          <ImagePreviewButton
            {...sampleProps()}
            imgSrc={"./anyImagePath.jpg"}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
  });

  describe("event handling", () => {
    test("onClick called", () => {
      const props = sampleProps();
      render(<ImagePreviewButton {...props} />);
      const button = screen.getByRole("button");
      userEvent.click(button);
      expect(props.onClick).toHaveBeenCalled();
    });
  });
});
