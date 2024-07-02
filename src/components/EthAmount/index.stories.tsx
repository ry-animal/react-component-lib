import { ComponentMeta, ComponentStory } from "@storybook/react";
import { EthAmount } from ".";

export default {
  component: EthAmount,
  title: "Components/EthAmount",
} as ComponentMeta<typeof EthAmount>;

const Template: ComponentStory<typeof EthAmount> = (args) => (
  <EthAmount {...args} />
);

export const ShrimpAmount = Template.bind({});
ShrimpAmount.args = {
  amount: 0.0000000001234567,
  bold: false,
};

export const GoldfishAmount = Template.bind({});
GoldfishAmount.args = {
  amount: 0.1234567,
  bold: false,
};

export const DolphinAmount = Template.bind({});
DolphinAmount.args = {
  amount: 12.34567,
  bold: false,
};

export const WhaleAmount = Template.bind({});
WhaleAmount.args = {
  amount: 420000.01,
  bold: false,
};

export const BoldColorful = Template.bind({});
BoldColorful.args = {
  amount: 0.1234567,
  bold: true,
};
