import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import PopupMenu from ".";
import EthIcon from "../../assets/icons/icon-chain-eth.svg";
import LrcIcon from "../../assets/icons/icon-chain-lrc.svg";
import ChevronDown from "../../assets/icons/icon-chevron-down.svg";
import MoreOptionsIcon from "../../assets/icons/icon-more-option.svg";
import { ALIGN } from "./index.interface";

export default {
  component: PopupMenu,
  title: "Components/PopupMenu",
} as ComponentMeta<typeof PopupMenu>;

const BackgroundContrast = styled.div`
  width: 100%;
  height: 70vh;
`;

const defaultArgs = {
  options: [
    {
      onClick: () => {},
      label: "Option 1",
      icon: EthIcon,
    },
    {
      onClick: () => {},
      label: "Option 2",
      icon: LrcIcon,
    },
  ],
  button: {
    iconUrl: MoreOptionsIcon,
    transparent: true,
  },
};

const Template: ComponentStory<typeof PopupMenu> = (args) => (
  <BackgroundContrast>
    <BrowserRouter>
      <PopupMenu {...args} />
    </BrowserRouter>
  </BackgroundContrast>
);

export const DefaultPopupMenu = Template.bind({});
DefaultPopupMenu.args = {
  ...defaultArgs,
};

export const TextButtonWithCloseIconOverride = Template.bind({});
TextButtonWithCloseIconOverride.args = {
  ...defaultArgs,
  button: {
    label: "Wallet",
    icon: ChevronDown,
    isDarkTheme: true,
    size: "medium",
    flipIcon: true,
  },
  closeIconUrl: ChevronDown,
};

export const DisableCloseIcon = Template.bind({});
DisableCloseIcon.args = {
  ...defaultArgs,
  disableCloseIcon: true,
};

export const ManyItems = Template.bind({});
ManyItems.args = {
  ...defaultArgs,
  options: [
    ...defaultArgs.options,
    ...defaultArgs.options,
    ...defaultArgs.options,
    ...defaultArgs.options,
  ],
};

const RightAlignedTemplate: ComponentStory<typeof PopupMenu> = (args) => (
  <BackgroundContrast>
    <BrowserRouter>
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <PopupMenu {...args} />
      </div>
    </BrowserRouter>
  </BackgroundContrast>
);

export const RightAligned = RightAlignedTemplate.bind({});
RightAligned.args = {
  ...defaultArgs,
  alignTo: ALIGN.right,
};

export const TextButtonAlignRight = RightAlignedTemplate.bind({});
TextButtonAlignRight.args = {
  ...RightAligned.args,
  ...TextButtonWithCloseIconOverride.args,
};
