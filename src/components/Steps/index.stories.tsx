import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Steps } from ".";

export default {
  title: "Components/Steps",
  component: Steps,
} as ComponentMeta<typeof Steps>;

const Template: ComponentStory<typeof Steps> = (args) => <Steps {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  steps: [
    { label: "1", description: "Pick a collection" },
    { label: "2", description: "Enter NFT Content" },
    { label: "3", description: "Preview & Mint" },
  ],
  orientation: "horizontal",
  currentStep: 0,
};

export const Vertical = Template.bind({});
Vertical.args = {
  steps: [
    { label: "I", description: "Hungry" },
    { label: "II", description: "Eat snacks" },
    { label: "III", description: "Drink boba" },
    { label: "?", description: "Profit" },
  ],
  orientation: "vertical",
  currentStep: 1,
};
