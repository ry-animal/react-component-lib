import { render } from "../../../util/test-utils";
import { NftImage } from "./NftImage";

describe("<NftImage />", () => {
  it("Default rendering with contain", () => {
    const { container } = render(<NftImage imgSrc="/token/foo/bar" />);
    expect(container.querySelector("img")).toHaveStyleRule(
      "object-fit",
      "cover"
    );
  });
});
