import * as Icon from "./";

export default {
  title: "Theme/Icons",
  argTypes: {
    fill: { control: { type: "color" } },
    size: { control: { type: "number" } },
  },
};

interface IconStoryProps {
  fill?: string;
  size?: number;
}

export const Add = () => <Icon.IconAdd />;
export const ArrowBack = (args: IconStoryProps) => (
  <Icon.IconArrowBack {...args} />
);
export const Check = (args: IconStoryProps) => <Icon.IconCheck {...args} />;
export const ChevronRight = (args: IconStoryProps) => (
  <Icon.IconChevronRight {...args} />
);
export const Clear = (args: IconStoryProps) => <Icon.IconClear {...args} />;
export const Delete = (args: IconStoryProps) => <Icon.IconDelete {...args} />;
export const Disconnect = (args: IconStoryProps) => (
  <Icon.IconDisconnect {...args} />
);
export const Discord = (args: IconStoryProps) => <Icon.IconDiscord {...args} />;
export const DownChevron = (args: IconStoryProps) => (
  <Icon.IconDownChevron {...args} />
);
export const Edit = (args: IconStoryProps) => <Icon.IconEdit {...args} />;
export const Email = (args: IconStoryProps) => <Icon.IconEmail {...args} />;
export const ExternalLink = (args: IconStoryProps) => (
  <Icon.IconExternalLink {...args} />
);
export const Hamburger = (args: IconStoryProps) => (
  <Icon.IconHamburger {...args} />
);
export const Hide = (args: IconStoryProps) => <Icon.IconHide {...args} />;
export const ImmutableX = (args: IconStoryProps) => (
  <Icon.IconImmutableX {...args} />
);
export const Info = (args: IconStoryProps) => <Icon.IconInfo {...args} />;
export const Instagram = (args: IconStoryProps) => (
  <Icon.IconInstagram {...args} />
);
export const LogoEth = (args: IconStoryProps) => <Icon.IconLogoEth {...args} />;
export const Loopring = (args: IconStoryProps) => (
  <Icon.IconLoopring {...args} />
);
export const MoreOptions = (args: IconStoryProps) => (
  <Icon.IconMoreOptions {...args} />
);
export const Preview = (args: IconStoryProps) => <Icon.IconPreview {...args} />;
export const Reddit = (args: IconStoryProps) => <Icon.IconReddit {...args} />;
export const Search = (args: IconStoryProps) => <Icon.IconSearch {...args} />;
export const Setting = (args: IconStoryProps) => <Icon.IconSetting {...args} />;
export const Show = (args: IconStoryProps) => <Icon.IconShow {...args} />;
export const Subtract = () => <Icon.IconSubtract />;
export const Twitch = (args: IconStoryProps) => <Icon.IconTwitch {...args} />;
export const Twitter = (args: IconStoryProps) => <Icon.IconTwitter {...args} />;
export const Wallet = (args: IconStoryProps) => <Icon.IconWallet {...args} />;
export const Warning = (args: IconStoryProps) => <Icon.IconWarning {...args} />;
export const Web = (args: IconStoryProps) => <Icon.IconWeb {...args} />;
export const Youtube = (args: IconStoryProps) => <Icon.IconYoutube {...args} />;
