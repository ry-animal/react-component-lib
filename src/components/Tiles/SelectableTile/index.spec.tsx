import userEvent from "@testing-library/user-event";
import { SelectableTile } from ".";
import { lightColors } from "../../../theme";
import { render, screen } from "../../../util/test-utils";

describe("<SelectableTile/>", () => {
  const sampleProps = () => ({
    title: "Collection name",
    subtitle: "15 items",
    onClick: jest.fn(),
  });

  describe("rendering", () => {
    test("default matches snapshot", () => {
      expect(render(<SelectableTile />).asFragment()).toMatchSnapshot();
    });

    test("tile with sample props matches snapshot", () => {
      expect(
        render(<SelectableTile {...sampleProps()} />).asFragment()
      ).toMatchSnapshot();
    });

    test("renders text elements", () => {
      const props = sampleProps();
      render(<SelectableTile title={props.title} subtitle={props.subtitle} />);
      expect(screen.getByText(props.title)).toBeInTheDocument();
      expect(screen.getByText(props.subtitle)).toBeInTheDocument();
    });

    test("renders selected tile style", () => {
      const props = sampleProps();
      render(<SelectableTile {...props} selected />);
      expect(screen.getByRole("button")).toHaveStyleRule(
        "background",
        lightColors.SURFACE_3
      );
    });

    test("renders img element", () => {
      const props = sampleProps();
      const imgUrl = "./imgPath.jpg";
      render(<SelectableTile {...props} iconUrl={imgUrl} />);
      expect(screen.getByAltText(`${props.title} icon`)).toHaveAttribute(
        "src",
        imgUrl
      );
    });

    test("renders custom display element", () => {
      const props = sampleProps();
      const title = "display-content";
      render(
        <SelectableTile {...props} displayContent={<div title={title} />} />
      );
      expect(screen.getByTitle(title)).toBeInTheDocument();
    });

    test("disabled button", () => {
      const props = sampleProps();
      render(<SelectableTile {...props} disabled />);
      expect(screen.getByRole("button")).toHaveStyleRule("opacity", "0.7", {
        modifier: "&:disabled",
      });
    });
  });

  describe("event handling", () => {
    test("tile can be clicked", () => {
      const props = sampleProps();
      render(<SelectableTile {...props} />);
      userEvent.click(screen.getByRole("button"));
      expect(props.onClick).toBeCalled();
    });

    test("disabled tile cannot be clicked", () => {
      const props = sampleProps();
      render(<SelectableTile {...props} disabled />);
      userEvent.click(screen.getByRole("button"));
      expect(props.onClick).not.toBeCalled();
    });
  });
});
