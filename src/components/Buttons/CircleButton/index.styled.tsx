import { rgba } from "polished";
import styled from "styled-components";
import { BlurRadius } from "../../../constants/BlurRadius";
import Icon from "../../Icon";

export const CircleButtonSize = {
  sXS: { button: "32px", icon: "16px" },
  sS: { button: "40px", icon: "20px" },
  sM: { button: "45px", icon: "22.5px" },
  sL: { button: "50px", icon: "25px" },
};

const renderButtonSize = (size: string) => {
  switch (size) {
    case "xs":
      return CircleButtonSize.sXS.button;
    case "m":
      return CircleButtonSize.sM.button;
    case "l":
      return CircleButtonSize.sL.button;
    default:
      return CircleButtonSize.sS.button;
  }
};

const renderIconSize = (size: string) => {
  switch (size) {
    case "xs":
      return CircleButtonSize.sXS.icon;
    case "m":
      return CircleButtonSize.sM.icon;
    case "l":
      return CircleButtonSize.sL.icon;
    default:
      return CircleButtonSize.sS.icon;
  }
};

const ALPHA_LIGHT = 0.15;
const ALPHA_DARK = 0.7;
const ALPHA_LIGHT_HOVER = 0.3;
const ALPHA_DARK_HOVER = 0.9;

export const Button = styled.button<{
  iconUrl?: string;
  size: string;
  transparent: boolean;
  backgroundColor?: string;
  isDarkTheme?: boolean;
}>`
  cursor: pointer;
  border: none;
  border-radius: ${({ theme }) => theme.radius.round};
  box-shadow: ${({ theme }) => theme.elevation.low};
  pointer-events: auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ?? theme.color.SURFACE_2};

  &:disabled {
    pointer-events: none;
    cursor: default;
  }

  ${({ size }) => `
    width: ${renderButtonSize(size)};
    height: ${renderButtonSize(size)};
  `};

  ${({ iconUrl, size }) =>
    iconUrl &&
    `
      background-size: ${renderIconSize(size)} auto;
      background-image: url(${iconUrl});
      background-repeat: no-repeat;
      background-position: center;
    `}

  ${({ transparent, isDarkTheme, theme }) =>
    transparent &&
    `
      background-color: ${rgba(
        theme.color.WHITE,
        isDarkTheme ? ALPHA_LIGHT : ALPHA_DARK
      )};
      backdrop-filter: blur(${BlurRadius.b15});
    }`}

  &:hover {
    opacity: 100%;
    ${({ transparent, isDarkTheme, theme }) =>
      transparent &&
      `
        background-color: ${rgba(
          theme.color.WHITE,
          isDarkTheme ? ALPHA_LIGHT_HOVER : ALPHA_DARK_HOVER
        )};
      `}
  }
`;

export const CustomIcon = styled(Icon)`
  width: 80%;
`;
