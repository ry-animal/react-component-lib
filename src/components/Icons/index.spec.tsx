import { render } from "../../util/test-utils";
import { IconAdd } from "./IconAdd";
import { IconArrowBack } from "./IconArrowBack";
import { IconCheck } from "./IconCheck";
import { IconChevronRight } from "./IconChevronRight";
import { IconClear } from "./IconClear";
import IconCreate from "./IconCreate";
import { IconDelete } from "./IconDelete";
import { IconDisconnect } from "./IconDisconnect";
import { IconDiscord } from "./IconDiscord";
import { IconDownChevron } from "./IconDownChevron";
import { IconEdit } from "./IconEdit";
import { IconEmail } from "./IconEmail";
import { IconExternalLink } from "./IconExternalLink";
import { IconHamburger } from "./IconHamburger";
import { IconHide } from "./IconHide";
import { IconImmutableX } from "./IconImmutableX";
import { IconInfo } from "./IconInfo";
import { IconInstagram } from "./IconInstagram";
import { IconLogoEth } from "./IconLogoEth";
import { IconLoopring } from "./IconLoopring";
import { IconMoreOptions } from "./IconMoreOptions";
import { IconPreview } from "./IconPreview";
import { IconReddit } from "./IconReddit";
import { IconSearch } from "./IconSearch";
import { IconSetting } from "./IconSetting";
import { IconShow } from "./IconShow";
import { IconSubtract } from "./IconSubtract";
import { IconTwitch } from "./IconTwitch";
import { IconTwitter } from "./IconTwitter";
import { IconWallet } from "./IconWallet";
import { IconWarning } from "./IconWarning";
import { IconWeb } from "./IconWeb";
import { IconYoutube } from "./IconYoutube";

describe("<Icon Components />", () => {
  it("IconAdd", () => {
    expect(render(<IconAdd />).asFragment()).toMatchSnapshot();
    expect(render(<IconAdd isMax />).asFragment()).toMatchSnapshot();
  });
  it("IconArrowBack", () => {
    expect(render(<IconArrowBack />).asFragment()).toMatchSnapshot();
  });
  it("IconCheck", () => {
    expect(render(<IconCheck />).asFragment()).toMatchSnapshot();
  });
  it("IconChevronRight", () => {
    expect(render(<IconChevronRight />).asFragment()).toMatchSnapshot();
  });
  it("IconClear", () => {
    expect(render(<IconClear />).asFragment()).toMatchSnapshot();
  });
  it("IconCreate", () => {
    expect(render(<IconCreate />).asFragment()).toMatchSnapshot();
    expect(render(<IconCreate fill="tomato" />).asFragment()).toMatchSnapshot();
  });
  it("IconDelete", () => {
    expect(render(<IconDelete />).asFragment()).toMatchSnapshot();
  });
  it("IconDisconnect", () => {
    expect(render(<IconDisconnect />).asFragment()).toMatchSnapshot();
  });
  it("IconDiscord", () => {
    expect(render(<IconDiscord />).asFragment()).toMatchSnapshot();
  });
  it("IconDownChevron", () => {
    expect(render(<IconDownChevron />).asFragment()).toMatchSnapshot();
  });
  it("IconEdit", () => {
    expect(render(<IconEdit />).asFragment()).toMatchSnapshot();
  });
  it("IconEmail", () => {
    expect(render(<IconEmail />).asFragment()).toMatchSnapshot();
  });
  it("IconExternalLink", () => {
    expect(
      render(<IconExternalLink fill="tomato" />).asFragment()
    ).toMatchSnapshot();
  });
  it("IconHamburger", () => {
    expect(render(<IconHamburger />).asFragment()).toMatchSnapshot();
  });
  it("IconHide", () => {
    expect(render(<IconHide />).asFragment()).toMatchSnapshot();
  });
  it("IconImmutableX", () => {
    expect(render(<IconImmutableX />).asFragment()).toMatchSnapshot();
  });
  it("IconInfo", () => {
    expect(render(<IconInfo />).asFragment()).toMatchSnapshot();
  });
  it("IconInstagram", () => {
    expect(render(<IconInstagram />).asFragment()).toMatchSnapshot();
  });
  it("IconLogoEth", () => {
    expect(
      render(<IconLogoEth fill="tomato" />).asFragment()
    ).toMatchSnapshot();
  });
  it("IconLoopring", () => {
    expect(render(<IconLoopring />).asFragment()).toMatchSnapshot();
  });
  it("IconMoreOptions", () => {
    expect(render(<IconMoreOptions />).asFragment()).toMatchSnapshot();
  });
  it("IconPreview", () => {
    expect(render(<IconPreview />).asFragment()).toMatchSnapshot();
  });
  it("IconReddit", () => {
    expect(render(<IconReddit />).asFragment()).toMatchSnapshot();
  });
  it("IconSearch", () => {
    expect(render(<IconSearch />).asFragment()).toMatchSnapshot();
  });
  it("IconSetting", () => {
    expect(render(<IconSetting />).asFragment()).toMatchSnapshot();
  });
  it("IconShow", () => {
    expect(render(<IconShow />).asFragment()).toMatchSnapshot();
  });
  it("IconSubtract", () => {
    expect(render(<IconSubtract />).asFragment()).toMatchSnapshot();
  });
  it("IconTwitch", () => {
    expect(render(<IconTwitch />).asFragment()).toMatchSnapshot();
  });
  it("IconTwitter", () => {
    expect(render(<IconTwitter />).asFragment()).toMatchSnapshot();
  });
  it("IconWallet", () => {
    expect(render(<IconWallet />).asFragment()).toMatchSnapshot();
  });
  it("IconWarning", () => {
    expect(render(<IconWarning />).asFragment()).toMatchSnapshot();
  });
  it("IconWeb", () => {
    expect(render(<IconWeb />).asFragment()).toMatchSnapshot();
  });
  it("IconYoutube", () => {
    expect(render(<IconYoutube />).asFragment()).toMatchSnapshot();
  });
});
