import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AccountPreview } from ".";
import { SampleLoginState } from "../../Page/PageHeader/SampleLoginState";
import { ThemeSwitcher } from "../../ThemeSwitcher";

export default {
  title: "Components/Profile/AccountPreview",
  component: AccountPreview,
  argTypes: {
    accountHandlers: {
      defaultValue: {
        onActivate: () => {},
        onAddFunds: () => {},
        onAddFundsToL2: () => {},
        onProfileClick: () => {},
        onSend: () => {},
        onWithdraw: () => {},
        onDisconnect: () => {},
      },
    },
  },
  parameters: {
    backgrounds: {
      default: "header",
      values: [
        {
          name: "header",
          value: "rgb(224, 232, 252)",
        },
        {
          name: "light",
          value: "#fff",
        },
        {
          name: "dark",
          value: "rgb(27, 30, 42)",
        },
      ],
    },
  },
} as ComponentMeta<typeof AccountPreview>;

const Template: ComponentStory<typeof AccountPreview> = (args) => (
  <AccountPreview {...args} />
);

export const BalanceOnBothLayers = Template.bind({});
BalanceOnBothLayers.args = {
  ...SampleLoginState,
};

export const BalanceOnL1Only = Template.bind({});
BalanceOnL1Only.args = {
  ...SampleLoginState,
  ethBalanceL2: 0,
};

export const BalanceOnL2Only = Template.bind({});
BalanceOnL2Only.args = {
  ...SampleLoginState,
  ethBalanceL1: 0,
};

export const ZeroBalance = Template.bind({});
ZeroBalance.args = {
  ...SampleLoginState,
  ethBalanceL1: 0,
  ethBalanceL2: 0,
};

export const Stretched = Template.bind({});
Stretched.args = {
  ...SampleLoginState,
  stretch: true,
};

export const LongDisplayName = Template.bind({});
LongDisplayName.args = {
  ...SampleLoginState,
  displayName:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const ShowActivation = Template.bind({});
ShowActivation.args = {
  ...SampleLoginState,
  showActivation: true,
};

export const WithThemeSwitcher = Template.bind({});
WithThemeSwitcher.args = {
  ...SampleLoginState,
  themeSwitcher: <ThemeSwitcher />,
};
