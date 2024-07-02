import { ComponentMeta, ComponentStory } from "@storybook/react";
import { EthButton } from ".";

export default {
  title: "Components/Buttons/EthButton",
  component: EthButton,
  argTypes: {
    onClick: { action: "onClick" },
  },
} as ComponentMeta<typeof EthButton>;

const Template: ComponentStory<typeof EthButton> = (args) => (
  <EthButton {...args} />
);

export const EthButtonSample = Template.bind({});
EthButtonSample.args = {
  balance: 1.234,
  label: "Your account",
};

export const LongNumber = Template.bind({});
LongNumber.args = {
  balance: 1.234567891234,
  label: "Your account",
};
