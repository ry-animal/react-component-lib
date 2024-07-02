import { ComponentMeta, ComponentStory } from "@storybook/react";
import Anchor, { Icon } from ".";
import ShareIcon from "../../assets/icons/icon-share-black.svg";
import { IconChevronRight } from "../Icons";

export default {
  component: Anchor,
  title: "Components/Icon",
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const UrlIcon = Template.bind({});
UrlIcon.args = {
  icon: ShareIcon,
};

export const ComponentIcon = Template.bind({});
ComponentIcon.args = {
  icon: <IconChevronRight />,
};
