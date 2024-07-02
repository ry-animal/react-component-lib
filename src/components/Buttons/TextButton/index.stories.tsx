import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonVariant, TextButton } from ".";
import HandsIcon from "../../../assets/icons/icon-hands.svg";

export default {
  title: "Components/Buttons/TextButton",
  component: TextButton,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    variant: {
      options: [
        ButtonVariant.primary,
        ButtonVariant.secondary,
        ButtonVariant.plaintext,
        ButtonVariant.reverse,
        ButtonVariant.transparent,
        ButtonVariant.success,
      ],
      control: { type: "radio" },
    },
    flipIcon: {
      options: [true, false],
      control: { type: "radio" },
    },
    stretch: {
      options: [true, false],
      control: { type: "radio" },
    },
    onClick: { action: "onClick" },
    isDarkTheme: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => (
  <TextButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  variant: ButtonVariant.primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  variant: ButtonVariant.secondary,
};

export const PlainText = Template.bind({});
PlainText.args = {
  label: "PlainText Button",
  variant: ButtonVariant.plaintext,
};

export const Reverse = Template.bind({});
Reverse.args = {
  label: "Reverse Button",
  variant: ButtonVariant.reverse,
};

export const Transparent = Template.bind({});
Transparent.args = {
  label: "Transparent Button",
  variant: ButtonVariant.transparent,
};

export const Success = Template.bind({});
Success.args = {
  label: "Success Button",
  variant: ButtonVariant.success,
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  label: "Small button",
  variant: ButtonVariant.primary,
  disabled: false,
  size: "small",
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  ...SmallButton.args,
  label: "Medium button",
  size: "medium",
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  ...SmallButton.args,
  label: "Large button",
  size: "large",
};

export const StretchedButton = Template.bind({});
StretchedButton.args = {
  label: "Wiiiiide button",
  stretch: true,
};

export const IconButton = Template.bind({});
IconButton.args = {
  variant: "plaintext",
  label: "Icon button",
  icon: HandsIcon,
};

export const FlipIconButton = Template.bind({});
FlipIconButton.args = {
  variant: "plaintext",
  label: "Flip Icon button",
  flipIcon: true,
  icon: HandsIcon,
};

const ImageBgTemplate: ComponentStory<typeof TextButton> = (args) => (
  <div
    style={{
      width: "500px",
      maxWidth: "100%",
      height: "500px",
      background: "url('//source.unsplash.com/user/erondu/800x800')",
      backgroundSize: "cover",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <TextButton {...args} />
  </div>
);

export const TransparentDarkTheme = ImageBgTemplate.bind({});
TransparentDarkTheme.args = {
  label: "Transparent Dark Button",
  variant: ButtonVariant.transparent,
  isDarkTheme: true,
};
