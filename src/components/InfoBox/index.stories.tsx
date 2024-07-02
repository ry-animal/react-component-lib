import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";
import EthIcon from "../../assets/icons/icon-chain-eth.svg";
import PopupMenu from "../PopupMenu";
import { InfoBox } from "./index";

const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px;
`;

const BackgroundBlurTest = styled.div`
  background: url("//source.unsplash.com/user/erondu/800x800");
  height: 100vh;
  width: 100vw;
`;

export default {
  title: "Components/InfoBox",
  component: InfoBox,
} as ComponentMeta<typeof InfoBox>;

const Template: ComponentStory<typeof InfoBox> = () => (
  <InfoBox>
    <div>loco moco</div>
  </InfoBox>
);

export const Default = Template.bind({});
Default.args = {};

export const MultipleChilren = () => (
  <InfoBox>
    <span>spam musubi</span>
    <span>poke</span>
    <span>huli huli chicken</span>
  </InfoBox>
);

export const MobileMultipleChilrenCappedHeight = () => (
  <BackgroundBlurTest>
    <InfoBox>
      <FlexRowContainer>
        <span>spam musubi</span>
        <span>poke</span>
        <span>huli huli chicken</span>
      </FlexRowContainer>
    </InfoBox>
  </BackgroundBlurTest>
);

export const NoBorder = () => (
  <InfoBox showBorder={false}>
    <span>spam musubi</span>
    <span>poke</span>
    <span>huli huli chicken</span>
  </InfoBox>
);

const popUpArgs = {
  options: [
    {
      onClick: () => {},
      label: "Option 1",
      icon: EthIcon,
    },
    {
      onClick: () => {},
      label: "Option 2",
      icon: EthIcon,
    },
  ],
  button: {
    iconUrl: EthIcon,
    transparent: true,
  },
};

export const WithPopup = () => (
  <InfoBox>
    <PopupMenu {...popUpArgs} />
  </InfoBox>
);
