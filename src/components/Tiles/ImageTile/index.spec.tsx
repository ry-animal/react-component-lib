import { ImageTile } from ".";
import { render, screen } from "../../../util/test-utils";
import { TileSize } from "../SimpleTile/index.interface";
import { ImageTileProps, TileImageVariant } from "./index.interface";

describe("<ImageTile/>", () => {
  const testProps = (): ImageTileProps => ({
    imageVariant: TileImageVariant.secondary,
    size: TileSize.small,
    imgSrc: "fake/",
    text: "wen moon",
    onClick: jest.fn(),
  });

  describe("snapshots", () => {
    test("plus tile with default props to match snapshot", () => {
      expect(render(<ImageTile />).asFragment()).toMatchSnapshot();
    });

    test("plus tile with test props to match snapshot", () => {
      expect(
        render(<ImageTile {...testProps()} />).asFragment()
      ).toMatchSnapshot();
    });

    test("plus tile with overriden props", () => {
      expect(
        render(
          <ImageTile
            {...testProps()}
            size={TileSize.large}
            imageVariant={TileImageVariant.primary}
            text="wen lambo"
            imgSrc="test"
            onClick={() => {}}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
  });

  describe("styled image", () => {
    test("should render through imgSrc", () => {
      render(<ImageTile {...testProps()} />);
      const plusImage = screen.getByAltText("tile image");
      expect(plusImage).toBeTruthy();
    });

    test("should render plain background-image", () => {
      render(
        <ImageTile
          {...testProps()}
          imgSrc=""
          imageVariant={TileImageVariant.primary}
        />
      );
      const plusImage = screen.getByAltText("plain plus");
      expect(plusImage).toBeTruthy();
    });

    test("should render colorful background-image", () => {
      render(
        <ImageTile
          {...testProps()}
          size={TileSize.large}
          imgSrc=""
          imageVariant={TileImageVariant.secondary}
        />
      );
      const plusImage = screen.getByAltText("colorful plus");
      expect(plusImage).toBeTruthy();
    });

    test("should render a center component", () => {
      render(
        <ImageTile
          {...testProps()}
          size={TileSize.large}
          centerComponent={<img src="" alt="test" />}
          imageVariant={TileImageVariant.secondary}
        />
      );
      const centerComponent = screen.getByAltText("test");
      expect(centerComponent).toBeTruthy();
    });
  });
});
