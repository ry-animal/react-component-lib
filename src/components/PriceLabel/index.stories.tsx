import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PriceLabel } from ".";

export default {
  component: PriceLabel,
  title: "Components/PriceLabel",
} as ComponentMeta<typeof PriceLabel>;

const Template: ComponentStory<typeof PriceLabel> = (args) => (
  <PriceLabel {...args} />
);

export const DefaultPriceLabel = Template.bind({});
DefaultPriceLabel.args = {
  ethPrice: 0.0001,
  dollarPrice: 420.69,
};

export const BoldPriceLabel = Template.bind({});
BoldPriceLabel.args = {
  boldEth: true,
  ethPrice: 0.0001,
  dollarPrice: 420.69,
};

export const Variant = Template.bind({});
Variant.args = {
  boldEth: true,
  ethPrice: 0.0001,
  dollarPrice: 420.69,
  isVariant: true,
};
