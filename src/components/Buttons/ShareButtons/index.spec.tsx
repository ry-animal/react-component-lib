import ShareButtons, { STRINGS } from ".";
import { render } from "../../../util/test-utils";

describe("<ShareButtons />", () => {
  describe("rendering", () => {
    test("should render button links", () => {
      const { getByText } = render(<ShareButtons />);
      expect(getByText(STRINGS.copy)).toBeInTheDocument();
      expect(getByText(STRINGS.twitter)).toBeInTheDocument();
      expect(getByText(STRINGS.reddit)).toBeInTheDocument();
    });

    test("should render custom url", () => {
      const url = "https://gamestop.com";
      const { getByText } = render(<ShareButtons url={url} />);

      const twitterLink = getByText(STRINGS.twitter) as HTMLAnchorElement;
      expect(twitterLink.href).toBe(`${STRINGS.twitterRootUrl}${url}`);

      const redditLink = getByText(STRINGS.reddit) as HTMLAnchorElement;
      expect(redditLink.href).toBe(`${STRINGS.redditRootUrl}${url}`);
    });
  });
});
