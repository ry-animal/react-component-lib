import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CircleButton } from ".";
import AddImageLight from "../../../assets/icons/icon-add-image-light.svg";
import ClearIcon from "../../../assets/icons/icon-clear.svg";

export default {
  title: "Components/Buttons/CircleButton",
  component: CircleButton,
  argTypes: {
    onClick: { action: "onClick" },
  },
} as ComponentMeta<typeof CircleButton>;

const Template: ComponentStory<typeof CircleButton> = (args) => (
  <CircleButton {...args} />
);

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  iconUrl: ClearIcon,
};

export const MediumSize = Template.bind({});
MediumSize.args = {
  ...DefaultButton.args,
  size: "m",
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  ...DefaultButton.args,
  size: "l",
};

const TransparentTemplate: ComponentStory<typeof CircleButton> = (args) => (
  <div style={{ height: "100px", width: "100px", background: "#999" }}>
    <CircleButton {...args} />
  </div>
);

export const Transparent = TransparentTemplate.bind({});
Transparent.args = {
  ...DefaultButton.args,
  transparent: true,
};

const DarkTemplate: ComponentStory<typeof CircleButton> = (args) => (
  <div style={{ height: "100px", width: "100px", background: "#333" }}>
    <CircleButton {...args} />
  </div>
);

export const DarkTheme = DarkTemplate.bind({});
DarkTheme.args = {
  ...DefaultButton.args,
  transparent: true,
  isDarkTheme: true,
  iconUrl: AddImageLight,
};
