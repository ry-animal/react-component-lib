import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WalletDetails } from ".";
import { SampleLoginState } from "../../Page/PageHeader/SampleLoginState";

export default {
  title: "Components/Profile/WalletDetails",
  component: WalletDetails,
} as ComponentMeta<typeof WalletDetails>;

const Template: ComponentStory<typeof WalletDetails> = (args) => (
  <WalletDetails {...args} />
);

export const BalanceOnAllLayers = Template.bind({});
BalanceOnAllLayers.args = {
  ...SampleLoginState,
};

export const BalanceOnL1Only = Template.bind({});
BalanceOnL1Only.args = {
  ...SampleLoginState,
  ethBalanceL2: 0,
  ethImmutableBalanceL2: 0,
};

export const BalanceOnL2Only = Template.bind({});
BalanceOnL2Only.args = {
  ...SampleLoginState,
  ethBalanceL1: 0,
  ethImmutableBalanceL2: 0,
};

export const BalanceOnImxOnly = Template.bind({});
BalanceOnImxOnly.args = {
  ...SampleLoginState,
  ethBalanceL1: 0,
  ethBalanceL2: 0,
};

export const BalanceOnImxFeaturedFlagged = Template.bind({});
BalanceOnImxFeaturedFlagged.args = {
  ...SampleLoginState,
  ethImmutableBalanceL2: undefined,
};

export const ZeroBalance = Template.bind({});
ZeroBalance.args = {
  ...SampleLoginState,
  ethBalanceL1: 0,
  ethBalanceL2: 0,
  ethImmutableBalanceL2: 0,
  usdBalance: 0,
};
