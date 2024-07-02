import userEvent from "@testing-library/user-event";
import { AssetUpdater, defaultAssetStrings } from ".";
import { SPACE } from "../../../theme";
import { render, screen } from "../../../util/test-utils";

const EXAMPLE_MIME_TYPES = [
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/webp",
];

describe("<AssetUpdater />", () => {
  const bannerProps = {
    allowedMimeTypes: EXAMPLE_MIME_TYPES,
    maxFileSizeInMB: 100,
    label: "Upload a banner",
    onChange: jest.fn(),
    onError: jest.fn(),
  };
  const avatarProps = {
    allowedMimeTypes: EXAMPLE_MIME_TYPES,
    maxFileSizeInMB: 10,
    label: "Upload an avatar",
    onChange: jest.fn(),
    onError: jest.fn(),
  };
  const tileProps = {
    allowedMimeTypes: EXAMPLE_MIME_TYPES,
    maxFileSizeInMB: 10,
    label: "Upload a tile",
    onChange: jest.fn(),
    onError: jest.fn(),
  };
  const defaultProps = () => ({
    bannerProps,
    avatarProps,
  });

  const fullProps = () => ({
    ...defaultProps(),
    tileProps,
    bannerImg: "/banner.jpg",
    avatarImg: "/avatar.jpg",
    tileImg: "/tile.jpg",
    collectionName: "Collection name",
    isHex: true,
  });

  describe("rendering", () => {
    test("should render default props", () => {
      expect(
        render(<AssetUpdater {...defaultProps()} />).asFragment()
      ).toMatchSnapshot();
    });

    test("should render with full props", () => {
      expect(
        render(<AssetUpdater {...fullProps()} />).asFragment()
      ).toMatchSnapshot();
    });

    test("adds margin to banner img when rendering tile", () => {
      const { container, rerender } = render(
        <AssetUpdater {...defaultProps()} />
      );
      const bannerWrapper = container.firstChild?.firstChild;
      expect(bannerWrapper).not.toHaveStyleRule("margin-right", SPACE.s24);
      rerender(<AssetUpdater {...fullProps()} />);
      expect(bannerWrapper).toHaveStyleRule("margin-right", SPACE.s24);
    });

    test("renders correct number of elements", () => {
      const { container, rerender } = render(
        <AssetUpdater {...defaultProps()} />
      );
      const numChildrenNoTile = 2;
      const numChildrenWithTile = 3;

      const wrapper = container.firstChild;
      expect(wrapper?.childNodes.length).toBe(numChildrenNoTile);
      rerender(<AssetUpdater {...fullProps()} />);
      expect(wrapper?.childNodes.length).toBe(numChildrenWithTile);
    });

    test("renders optional collection name", () => {
      const collectionName = "Collection name";
      const { rerender } = render(
        <AssetUpdater {...fullProps()} collectionName={collectionName} />
      );

      const collectionTitle = screen.getByText(collectionName);
      expect(collectionTitle).toBeInTheDocument();
      rerender(<AssetUpdater {...fullProps()} collectionName={undefined} />);
      expect(collectionTitle).toHaveTextContent("");
    });
  });

  describe("event handling", () => {
    test("clicking banner delete clears banner img", () => {
      const props = defaultProps();
      render(<AssetUpdater {...props} bannerImg="banner.jpg" />);
      userEvent.click(
        screen.getByRole("button", {
          name: defaultAssetStrings.deleteBannerLabel,
        })
      );
      expect(props.bannerProps.onChange).toBeCalled();
    });
  });
});
