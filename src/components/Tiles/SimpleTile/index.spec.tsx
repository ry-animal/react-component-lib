import userEvent from "@testing-library/user-event";
import { SimpleTile } from ".";
import { render, screen } from "../../../util/test-utils";
import { SimpleTileProps, TileSize } from "./index.interface";

describe("<SimpleTile/>", () => {
  const testProps = (): SimpleTileProps => ({
    children: <div role={"test"}>wen lambo</div>,
    size: TileSize.small,
    onClick: jest.fn(),
  });

  describe("rendering", () => {
    test("simple tile with default props to match snapshot", () => {
      expect(render(<SimpleTile />).asFragment()).toMatchSnapshot();
    });

    test("simple tile with test props to match snapshot", () => {
      expect(
        render(<SimpleTile {...testProps()} />).asFragment()
      ).toMatchSnapshot();
    });

    test("should render correct conditional styling", () => {
      render(<SimpleTile {...testProps()} />);
      const tile = screen.getByRole("button");
      expect(tile).toHaveStyleRule("height", "145px");
      expect(tile).toHaveStyleRule("width", "180px");
    });

    test("correct conditional styling with different size prop", () => {
      render(<SimpleTile {...testProps()} size={TileSize.large} />);
      const tile = screen.getByRole("button");
      expect(tile).toHaveStyleRule("width", "322px");
      expect(tile).toHaveStyleRule("height", "544px");
    });

    describe("event handling", () => {
      test("onClick is called", () => {
        const props = testProps();
        render(<SimpleTile {...props} />);
        const button = screen.getByRole("button");
        userEvent.click(button);
        expect(props.onClick).toHaveBeenCalled();
      });
    });
  });
});
