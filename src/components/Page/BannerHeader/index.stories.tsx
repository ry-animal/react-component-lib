import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { BannerHeader } from ".";
import { IconExternalLink } from "../../Icons";
import { PageHeader } from "../PageHeader";

export default {
  title: "Components/Page/BannerHeader",
  component: BannerHeader,
  argTypes: {
    onShareClick: { action: "onShareClick" },
    isDarkTheme: { control: "boolean" },
  },
} as ComponentMeta<typeof BannerHeader>;

const stats = [
  { label: "NFTs", value: 100000 },
  { label: "Owners", value: 45000 },
  { label: "For Sale", value: 10 },
  { label: "Weekly Volume", value: 2400, isETH: true },
  { label: "Floor Price", value: 1.75, isETH: true, onClick: () => {} },
];

const Template: ComponentStory<typeof BannerHeader> = (args) => (
  <BrowserRouter>
    <PageHeader
      accountHandlers={{
        onActivate: undefined,
        onAddFundsToL2: () => {},
        onAddFunds: () => {},
        onProfileClick: () => {},
        onSend: () => {},
        onWithdraw: () => {},
      }}
      popularSearches={[]}
      onLogin={() => {}}
      onNavigate={() => {}}
      onSearch={(_query: string) => {
        throw new Error();
      }}
      isLightTheme={args.isDarkTheme}
    />
    <BannerHeader {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  title: "Bored Geek Club",
  avatarUrl: "//source.unsplash.com/user/wsanter/200x200",
  onShareClick: () => {},
};

export const HexagonAvatar = Template.bind({});
HexagonAvatar.args = {
  title: "Bored Geek Club",
  avatarUrl: "//source.unsplash.com/user/wsanter/200x200",
  isHexAvatar: true,
  onShareClick: () => {},
};

export const Stats = Template.bind({});
Stats.args = {
  ...Default.args,
  stats,
  isHexAvatar: true,
};

export const LightImage = Template.bind({});
LightImage.args = {
  ...Default.args,
  stats,
  imgUrl: "//source.unsplash.com/collection/2060931/1200x400",
  isHexAvatar: true,
};

export const DarkImage = Template.bind({});
DarkImage.args = {
  ...Default.args,
  stats,
  isDarkTheme: true,
  imgUrl: "//source.unsplash.com/collection/4235989/1200x400",
  isHexAvatar: true,
};

export const CreatorHeader = Template.bind({});
CreatorHeader.args = {
  ...Default.args,
  stats,
  imgUrl: "//source.unsplash.com/collection/2060931/1200x400",
  isHexAvatar: true,
  ownerActions: {
    onSettingsClick: () => {},
    onCreateClick: () => {},
  },
};

export const CantCreateHeader = Template.bind({});
CantCreateHeader.args = {
  ...Default.args,
  stats,
  imgUrl: "//source.unsplash.com/collection/2060931/1200x400",
  isHexAvatar: true,
  ownerActions: {
    onSettingsClick: () => {},
  },
};

export const CustomAction = Template.bind({});
CustomAction.args = {
  ...Default.args,
  stats,
  isDarkTheme: true,
  imgUrl: "//source.unsplash.com/collection/4235989/1200x400",
  isHexAvatar: true,
  customActions: [
    { label: "Free to Play", onClick: () => {}, icon: <IconExternalLink /> },
    { label: "Report", onClick: () => {} },
  ],
};
