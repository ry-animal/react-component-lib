import { PreviewTile } from ".";
import { render, screen } from "../../../util/test-utils";
import { ScreeningState } from "./index.interface";
import { STRINGS } from "./index.strings";

describe("<PreviewTile />", () => {
  describe("rendering", () => {
    test("Default rendering matches snapshot", () => {
      expect(
        render(
          <PreviewTile
            creatorImgSrc="creator.png"
            creatorName="Creator name"
            itemCount={1}
            nftImgSrc="nft.png"
            title="NFT Title"
            ethPrice={0.0001}
            dollarPrice={420.69}
            onDelete={jest.fn()}
            onPreview={jest.fn()}
            onEdit={jest.fn()}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
    test("Default rendering matches snapshot (multiple items)", () => {
      expect(
        render(
          <PreviewTile
            creatorImgSrc="creator.png"
            creatorName="Creator name"
            itemCount={420}
            nftImgSrc="nft.png"
            title="NFT Title"
            ethPrice={0.0001}
            dollarPrice={420.69}
            onDelete={jest.fn()}
            onPreview={jest.fn()}
            onEdit={jest.fn()}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
    test("Default rendering matches snapshot (with subtitle)", () => {
      expect(
        render(
          <PreviewTile
            creatorImgSrc="creator.png"
            creatorName="Creator name"
            itemCount={420}
            nftImgSrc="nft.png"
            subtitle="Collection Name"
            title="NFT Title"
            ethPrice={0.0001}
            dollarPrice={420.69}
            onDelete={jest.fn()}
            onPreview={jest.fn()}
            onEdit={jest.fn()}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
    test("Default rendering matches snapshot (not for sale)", () => {
      expect(
        render(
          <PreviewTile
            creatorImgSrc="creator.png"
            creatorName="Creator name"
            itemCount={420}
            nftImgSrc="nft.png"
            subtitle="Collection Name"
            title="NFT Title"
            ethPrice={0.0001}
            dollarPrice={420.69}
            forSale={false}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
    test("Does not render buttons if actions not provided", () => {
      expect(
        render(
          <PreviewTile
            creatorImgSrc="creator.png"
            creatorName="Creator name"
            itemCount={420}
            nftImgSrc="nft.png"
            title="NFT Title"
            ethPrice={0.0001}
            dollarPrice={420.69}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
    test("Renders screening pending state", () => {
      render(
        <PreviewTile
          creatorImgSrc="creator.png"
          creatorName="Creator name"
          itemCount={420}
          nftImgSrc="nft.png"
          title="NFT Title"
          ethPrice={0.0001}
          dollarPrice={420.69}
          screeningState={ScreeningState.pending}
        />
      );
      expect(
        screen.queryAllByText(STRINGS.screeningInProgressMessage).length
      ).toBe(1);
    });
    test("Renders screening error state", () => {
      render(
        <PreviewTile
          creatorImgSrc="creator.png"
          creatorName="Creator name"
          itemCount={420}
          nftImgSrc="nft.png"
          title="NFT Title"
          ethPrice={0.0001}
          dollarPrice={420.69}
          screeningState={ScreeningState.failed}
        />
      );
      expect(screen.queryAllByText(STRINGS.screeningErrorMessage).length).toBe(
        1
      );
    });
  });
});
