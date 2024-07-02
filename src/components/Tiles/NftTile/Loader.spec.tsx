import { render } from "../../../util/test-utils";
import NftTileLoader from "./Loader";

describe("<NftTileLoader />", () => {
  describe("rendering", () => {
    test("Renders no footer (hideFooter)", () => {
      const { rerender, container } = render(<NftTileLoader />);

      const [tileLoaderContainer] = container.childNodes;
      const bottomContainer =
        tileLoaderContainer.childNodes[
          tileLoaderContainer.childNodes.length - 1
        ];
      const bottomContainerChildCount = bottomContainer.childNodes.length;

      const childrenWithFooter = 4;
      const childrenWithoutFooter = 2;
      expect(bottomContainerChildCount).toBe(childrenWithFooter);

      rerender(<NftTileLoader hideFooter />);

      expect(bottomContainer.childNodes.length).toBe(childrenWithoutFooter);
    });
  });
});
