import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProfileBadge } from ".";
import { PALETTE_LIGHT } from "../../../theme/colors";
import { ThemeSwitcher } from "../../ThemeSwitcher";

const SampleAvatar = "//source.unsplash.com/user/wsanter/200x200";

export default {
  title: "Components/Profile/ProfileBadge",
  component: ProfileBadge,
  argTypes: {
    bold: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof ProfileBadge>;

const Template: ComponentStory<typeof ProfileBadge> = (args) => (
  <ProfileBadge {...args} />
);

export const DefaultBadge = Template.bind({});
DefaultBadge.args = {
  displayName: "Alice",
  imgSrc: SampleAvatar,
};

export const ClickableBadge = Template.bind({});
ClickableBadge.args = {
  displayName: "Alice",
  onClick: () => {},
  imgSrc: SampleAvatar,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: PALETTE_LIGHT.SUCCESS_2,
  displayName: "Alice",
  imgSrc: SampleAvatar,
};

export const CustomSizes = Template.bind({});
CustomSizes.args = {
  bold: true,
  displayName: "Alice",
  fontSizeRem: 3,
  iconSizePx: 60,
  imgSrc: SampleAvatar,
};

export const LongDisplayName = Template.bind({});
LongDisplayName.args = {
  displayName:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  fontSizeRem: 1,
  imgSrc: SampleAvatar,
};

const TransparentTemplate: ComponentStory<typeof ProfileBadge> = (args) => (
  <div style={{ padding: "16px", background: "#000" }}>
    <ProfileBadge {...args} />
  </div>
);

export const Transparent = TransparentTemplate.bind({});
Transparent.args = {
  displayName: "Alice",
  imgSrc: SampleAvatar,
  transparentBorder: true,
  color: "#fff",
};

export const WithThemeSwitcher = Template.bind({});
WithThemeSwitcher.args = {
  displayName: "Alice",
  imgSrc: SampleAvatar,
  themeSwitcher: <ThemeSwitcher />,
};
