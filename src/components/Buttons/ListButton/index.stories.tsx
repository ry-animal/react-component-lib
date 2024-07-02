import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ListButton } from ".";
import HandsIcon from "../../../assets/icons/icon-hands.svg";
import GamestopLogo from "../../../assets/images/gamestop-nft-logo.png";
import { PALETTE_DARK } from "../../../theme/colors";

export default {
  component: ListButton,
  title: "Components/Buttons/ListButton",
} as ComponentMeta<typeof ListButton>;

const Template: ComponentStory<typeof ListButton> = (args) => (
  <ListButton {...args} />
);

export const IconButton = Template.bind({});
IconButton.args = {
  label: "Standard Icon Button",
  description: "A simple button for lists of actions",
  icon: (
    <div style={{ width: "40px" }}>
      <img src={HandsIcon} />
    </div>
  ),
};

export const IconButtonNoDescription = Template.bind({});
IconButtonNoDescription.args = {
  label: "Button Without Description",
  icon: (
    <div style={{ width: "40px" }}>
      <img src={HandsIcon} />
    </div>
  ),
};

export const FlippedIconButton = Template.bind({});
FlippedIconButton.args = {
  label: "Flipped Icon Button",
  description: "A simple button for lists of actions",
  flipIcon: true,
  icon: GamestopLogo,
};

export const FlippedWithColor = Template.bind({});
FlippedWithColor.args = {
  label: "Buy ETH with Ramp",
  description: "0% fee for a limited time",
  flipIcon: true,
  icon: GamestopLogo,
  descriptionColor: PALETTE_DARK.SUCCESS_3,
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  label: "Button Without Icon",
  description: "A simple button for lists of actions",
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  label: "Disabled button",
  description: "A simple that has been disabled",
  disabled: true,
};
