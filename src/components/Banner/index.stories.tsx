import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Banner } from ".";
import { DescriptionText, Link } from "./index.styled";

export default {
  title: "Components/Banner",
  component: Banner,
  argTypes: {
    title: {
      control: {
        type: "string",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
    primaryAction: {
      label: {
        control: {
          type: "text",
        },
      },
    },
    secondaryAction: {
      label: {
        control: {
          type: "text",
        },
      },
    },
  },
} as ComponentMeta<typeof Banner>;

const doubleActionButtonsProps = {
  title: "Activate Loopring and ImmutableX",
  description: (
    <DescriptionText variant="Body3" reset>
      Learn more about{" "}
      <Link
        href="https://support.blockchain.gamestop.com/hc/en-us/categories/4408905918099-Crypto-NFT-Basics"
        target="_blank"
        rel="noreferrer"
      >
        activation in our FAQ
      </Link>
    </DescriptionText>
  ),
  dismissAction: () => {},
  primaryAction: {
    label: "Activate Loopring",
    onClick: () => {},
  },
  secondaryAction: {
    label: "Activate ImmutableX",
    onClick: () => {},
  },
  showDismissButton: true,
};

const styles = {
  boxContainer: {
    height: "100vh",
    margin: "auto",
  },
};

const WithDoubleActionButtonsTemplate: ComponentStory<typeof Banner> = (
  args
) => (
  <div style={{ ...styles.boxContainer }}>
    <Banner {...args} />
  </div>
);

export const WithDoubleActionButtons = WithDoubleActionButtonsTemplate.bind({});
WithDoubleActionButtons.args = { ...doubleActionButtonsProps };

const singleActionButtonProps = {
  title: "Activate Loopring",
  description: (
    <DescriptionText variant="Body3" reset>
      Learn more about{" "}
      <Link
        href="https://support.blockchain.gamestop.com/hc/en-us/categories/4408905918099-Crypto-NFT-Basics"
        target="_blank"
        rel="noreferrer"
      >
        activation in our FAQ
      </Link>
    </DescriptionText>
  ),
  dismissAction: () => {},
  primaryAction: {
    label: "Activate Loopring",
    onClick: () => {},
  },
  showDismissButton: true,
};

const WithSingleActionButtonTemplate: ComponentStory<typeof Banner> = (
  args
) => (
  <div style={{ ...styles.boxContainer }}>
    <Banner {...args} />
  </div>
);

export const WithSingleActionButton = WithSingleActionButtonTemplate.bind({});
WithSingleActionButton.args = { ...singleActionButtonProps };
