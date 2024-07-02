/* eslint max-lines: ["error", {"max": 450}]*/
import userEvent from "@testing-library/user-event";
import { NftTile } from ".";
import { fireEvent, render, screen, waitFor } from "../../../util/test-utils";
import defaultPopupMenuStrings from "../../PopupMenu/index.strings";
import { NftContent } from "./NftContent";
import { NftFooterInfo } from "./NftFooterInfo";
import { tooltipStrings } from "./TileTooltipMenu";

describe("<NftTile />", () => {
  const sampleProps = () => ({
    creatorInfo: {
      creatorImgSrc: "creator.png",
      creatorName: "Creator name",
      creatorUrl: "/profile/foo",
    },
    availabilityText: "1 available",
    nftUrl: "/token/foo/bar",
    nftImgSrc: "nft.png",
    title: "NFT Title",
    likeCount: 0,
    isLiked: false,
    onLikeClick: jest.fn(),
    onCreatorClick: jest.fn(),
    footerInfo: {
      ethPrice: 0.0001,
      dollarPrice: 420.69,
    },
  });
  const variantTileProps = () => ({
    ...sampleProps(),
    isVariant: true,
    collectionInfo: {
      collectionName: "collection",
      collectionImgSrc: "collection.png",
      collectionUrl: "www.google.com",
    },
    ownerInfo: {
      ownerName: "Nicolas Bouviers",
      ownerImgSrc: "//source.unsplash.com/user/alexanderhipp/200x200",
      ownerUrl: "google.com",
    },
    showBadgeTitle: true,
  });
  const LOAD_FAILURE_SRC = "./bad-img-path.jpg";
  const LOAD_SUCCESS_SRC = "./good-img-path.jpg";

  describe("rendering", () => {
    test("Default rendering matches snapshot", () => {
      expect(
        render(<NftTile {...sampleProps()} />).asFragment()
      ).toMatchSnapshot();
    });
    test("Renders network icons and matches snapshot", () => {
      const props = sampleProps();
      expect(
        render(
          <NftTile
            {...props}
            footerInfo={{
              ...props.footerInfo,
              layer: "Loopring",
            }}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
    test("Renders IMX icon", () => {
      const props = sampleProps();
      render(
        <NftTile
          {...props}
          footerInfo={{
            ...props.footerInfo,
            layer: "Immutable",
          }}
        />
      ).asFragment();
      expect(screen.getByTestId("icon-im")).toBeTruthy();
    });
    test("Should render conditional max width styling", () => {
      const { container } = render(
        <NftTile {...sampleProps()} maxWidth={400} />
      );
      expect(container.firstChild).toHaveStyleRule("max-width", "400px");
      expect(container.querySelector("img")).toHaveStyleRule(
        "object-fit",
        "cover"
      );
    });
    test("Should render img in contain", () => {
      const { container } = render(
        <NftTile {...sampleProps()} nftImgFit="contain" />
      );
      expect(container.querySelector("img")).toHaveStyleRule(
        "object-fit",
        "contain"
      );
    });
    test("Should conditionally render manage nft button", () => {
      expect(
        render(
          <NftTile {...sampleProps()} onManageClick={() => {}} />
        ).asFragment()
      ).toMatchSnapshot();
    });
    test("Should show not for sale if price not provided", () => {
      expect(
        render(
          <NftTile {...sampleProps()} footerInfo={{ layer: "L1" }} />
        ).asFragment()
      ).toMatchSnapshot();
    });
    test("Should show Suspended", () => {
      expect(
        render(
          <NftTile
            {...sampleProps()}
            footerInfo={{ layer: "L1" }}
            isSuspended
          />
        ).asFragment()
      );

      expect(screen.getByText("Sales suspended")).toBeTruthy();
    });
    test("Render conditional like button text and styles", () => {
      expect(
        render(<NftTile {...sampleProps()} isLiked={true} />).asFragment()
      ).toMatchSnapshot();
    });
    test("Should conditionally render footer if no info", () => {
      expect(
        render(
          <NftTile {...sampleProps()} footerInfo={undefined} />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Renders default footer if no props provided", () => {
      expect(render(<NftFooterInfo />).asFragment()).toMatchSnapshot();
    });
    test("Renders with props needed for dark tile", () => {
      render(
        <NftTile {...variantTileProps()} footerInfo={{ layer: "Loopring" }} />
      ).asFragment();
      expect(
        screen.getByText(variantTileProps().ownerInfo.ownerName)
      ).toBeTruthy();

      expect(
        screen.getByText(variantTileProps().collectionInfo.collectionName)
      ).toBeTruthy();

      expect(screen.getByText("Owner")).toBeTruthy();
      expect(screen.getByText("Collection")).toBeTruthy();
    });
    test("Renders with no titles", () => {
      const { creatorInfo } = sampleProps();
      render(
        <NftContent
          strings={{
            collectionBadgeTitle: "a",
            creatorBadgeTitle: "b",
            ownerBadgeTitle: "c",
          }}
          creatorInfo={creatorInfo}
          disabled={false}
          isVariant
          showBadgeTitle={false}
        />
      );
      const collectionBadgeTitle = screen.queryByText("a");
      const creatorBadgeTitle = screen.queryByText("b");
      const ownerBadgeTitle = screen.queryByText("c");
      expect(collectionBadgeTitle).toBeNull();
      expect(creatorBadgeTitle).toBeNull();
      expect(ownerBadgeTitle).toBeNull();
    });

    test("Renders with no collection titles", () => {
      const { creatorInfo, collectionInfo } = variantTileProps();
      render(
        <NftContent
          strings={{
            collectionBadgeTitle: "a",
            creatorBadgeTitle: "b",
            ownerBadgeTitle: "c",
          }}
          creatorInfo={creatorInfo}
          disabled={false}
          isVariant
          showBadgeTitle={false}
          collectionInfo={collectionInfo}
        />
      );
      const collectionBadgeTitle = screen.queryByText("a");
      expect(collectionBadgeTitle).toBeNull();
    });

    test("Should render correct img if good img src", async () => {
      const props = sampleProps();
      const FALLBACK_IMG_SRC = "./fallback-img.jpg";
      render(
        <NftTile
          {...sampleProps()}
          disabled={true}
          nftImgSrc={LOAD_SUCCESS_SRC}
          fallbackImgSrc={FALLBACK_IMG_SRC}
        />
      );
      const img = screen.getByAltText(`${props.title} image`);
      expect(img).toHaveAttribute("src", LOAD_SUCCESS_SRC);
    });
    test("Should render placeholder img if bad img src", async () => {
      const props = sampleProps();
      const FALLBACK_IMG_SRC = "./fallback-img.jpg";
      render(
        <NftTile
          {...sampleProps()}
          disabled={true}
          nftImgSrc={LOAD_FAILURE_SRC}
          fallbackImgSrc={FALLBACK_IMG_SRC}
        />
      );
      const img = screen.getByAltText(`${props.title} image`);
      fireEvent.error(img);
      expect(img).toHaveAttribute("src", FALLBACK_IMG_SRC);
    });
    test("Should render more options menu icon", () => {
      expect(
        render(
          <NftTile
            {...sampleProps()}
            onVisibilityClick={() => {}}
            onManageClick={() => {}}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
    test("Should render hidden status icon", () => {
      expect(
        render(
          <NftTile
            {...sampleProps()}
            onVisibilityClick={() => {}}
            isVisible={false}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
    test("Should not render hidden status icon when visible", () => {
      expect(
        render(
          <NftTile
            {...sampleProps()}
            onVisibilityClick={() => {}}
            isVisible={true}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
    test("Should render Edit Draft button when action provided", () => {
      expect(
        render(
          <NftTile {...sampleProps()} footerInfo={{ onEditDraft: () => {} }} />
        ).asFragment()
      ).toMatchSnapshot();
    });
  });

  describe("Simplified tile", () => {
    test("No links", () => {
      const props = {
        ...sampleProps(),
        nftUrl: undefined,
        creatorInfo: {
          creatorImgSrc: "creator.png",
          creatorName: "Creator name",
          creatorUrl: undefined,
        },
      };
      render(<NftTile {...props} />);
      const link = screen.queryAllByRole("link");
      expect(link).toHaveLength(0);
    });
  });

  describe("event handling", () => {
    test("Like button can be clicked", () => {
      const props = sampleProps();
      render(<NftTile {...sampleProps()} onLikeClick={props.onLikeClick} />);
      userEvent.click(screen.getByText(props.likeCount));
      expect(props.onLikeClick).toBeCalled();
    });
    test("Clicking the More Options icon opens menu", async () => {
      const mockMedia = {
        media: "",
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      };
      window.matchMedia = jest.fn().mockImplementation((query) => ({
        ...mockMedia,
        matches: query === "(min-width: 1025px) and (max-width: 1279px)",
      }));
      const onClick = jest.fn();
      render(
        <NftTile
          {...sampleProps()}
          onManageClick={onClick}
          onVisibilityClick={onClick}
        />
      );
      fireEvent.click(
        screen.getByLabelText(defaultPopupMenuStrings.buttonLabel)
      );
      await waitFor(() => screen.getByTestId("popup-menu"));
      expect(screen.getByText(tooltipStrings.manage)).toBeInTheDocument();
      expect(screen.getByText(tooltipStrings.show)).toBeInTheDocument();
    });
    test("Clicking the Hidden icon does nothing", async () => {
      const onClick = jest.fn();
      render(
        <NftTile
          {...sampleProps()}
          isVisible={false}
          onManageClick={onClick}
          onVisibilityClick={onClick}
        />
      );
      fireEvent.click(screen.getByLabelText("Hidden"));
      expect(screen.getByLabelText("Hidden")).toBeInTheDocument();
    });
    test("Can click Edit Draft button if present", async () => {
      const onClick = jest.fn();
      render(
        <NftTile {...sampleProps()} footerInfo={{ onEditDraft: onClick }} />
      );
      expect(screen.getByLabelText("Edit Draft")).toBeInTheDocument();
      fireEvent.click(screen.getByLabelText("Edit Draft"));
      expect(onClick).toBeCalled();
    });
  });
});
