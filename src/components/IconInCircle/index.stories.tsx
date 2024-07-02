import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconInCircle } from ".";
import GreenCheckIcon from "../../assets/icons/icon-check-green.svg";
import OrangeWarningIcon from "../../assets/icons/icon-warning-orange.svg";

export default {
  title: "Components/IconInCircle",
  component: IconInCircle,
  argTypes: {
    circleColor: {
      control: { type: "color" },
    },
    icon: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof IconInCircle>;

const Template: ComponentStory<typeof IconInCircle> = (args) => (
  <IconInCircle {...args} />
);

export const GreenCheck = Template.bind({});
GreenCheck.args = {
  icon: GreenCheckIcon,
  circleColor: "#00B176",
};

GreenCheck.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/57DcJRCtilChsDwZMhtGLs/GME-NFT-Platform?node-id=9429%3A38961",
  },
};

export const OrangeWarning = Template.bind({});
OrangeWarning.args = {
  icon: OrangeWarningIcon,
  circleColor: "#EBAD04",
};

OrangeWarning.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/57DcJRCtilChsDwZMhtGLs/GME-NFT-Platform?node-id=9429%3A39032",
  },
};
