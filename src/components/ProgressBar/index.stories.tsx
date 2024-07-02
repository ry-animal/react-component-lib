import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProgressBar } from ".";

export default {
  component: ProgressBar,
  title: "Components/ProgressBar",
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Minting 1/20",
  progress: 0,
};

export const Centered = Template.bind({});
Centered.args = {
  label: "Minting 10/20",
  progress: 0.5,
  position: "center",
};
