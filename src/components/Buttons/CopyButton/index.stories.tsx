import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";
import { CopyButton } from ".";

export default {
  title: "Components/Buttons/CopyButton",
  component: CopyButton,
  argTypes: {
    outline: {
      control: {
        type: "boolean",
      },
    },
    hideDelay: {
      control: {
        type: "number",
        step: 500,
      },
    },
  },
} as ComponentMeta<typeof CopyButton>;

const LargeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Template: ComponentStory<typeof CopyButton> = (args) => (
  <LargeContainer>
    <CopyButton {...args} />
  </LargeContainer>
);

export const CopyAddress = Template.bind({});
CopyAddress.args = {
  description: "Copy address",
  value: "0xC36946c342ff98C3196e74C7bEf060b645B7fDB6",
  onClickText: "Wallet address copied",
  altText: "copy",
  outline: false,
};
