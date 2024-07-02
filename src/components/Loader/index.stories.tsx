import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Loader } from ".";
import EmailIcon from "../../assets/icons/icon-email.svg";

export default {
  title: "Components/Loaders/Spinner",
  component: Loader,
  argTypes: {
    large: {
      options: [false, true],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const SmallLoader = Template.bind({});
SmallLoader.args = {
  large: false,
};

export const LargeLoader = Template.bind({});
LargeLoader.args = {
  large: true,
};

export const IconLoader = Template.bind({});
IconLoader.args = {
  ...LargeLoader.args,
  icon: EmailIcon,
};

export const ColoredLoader = Template.bind({});
ColoredLoader.args = {
  color: "green",
};

IconLoader.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/57DcJRCtilChsDwZMhtGLs/GME-NFT-Platform?node-id=9429%3A38893",
  },
};
