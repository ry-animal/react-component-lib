import { rgba } from "polished";
import styled from "styled-components";
import { ButtonSizes, ButtonVariant } from ".";
import { BlurRadius } from "../../../constants/BlurRadius";
import { ThemeColors } from "../../../theme/theme.interface";

interface TextButtonLabelProps {
  stretch: boolean;
  size?: ButtonSizes;
}
export const TextButtonLabel = styled.span<TextButtonLabelProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: ${({ stretch }) => (stretch ? 1 : "unset")};
  line-height: 1;
  gap: ${({ theme, size }) => {
    switch (size) {
      case "large":
        return theme.space.s20;
      case "medium":
        return theme.space.s16;
      case "small":
      default:
        return theme.space.s8;
    }
  }};
`;
const transparentButtonBgAlphaLow = 0.1;
const transparentButtonBgAlphaMid = 0.3;
const transparentButtonBgAlphaHigh = 0.7;

function renderButton(
  variant: string,
  color: ThemeColors,
  isDarkTheme?: boolean
) {
  switch (variant) {
    case ButtonVariant.secondary:
      return `
        background-color: transparent;
        box-shadow: inset 0 0 0 1px ${color.PRIMARY_1};
        color: ${color.PRIMARY_1};
      `;
    case ButtonVariant.plaintext:
      return `
        background-color: transparent;
        padding: 2px 1px 2px 1px;
        min-height: 16px;
        border-radius: 0px;
        color: ${color.TEXT_1};
      `;
    case ButtonVariant.reverse:
      return `
        background-color: ${rgba(color.SURFACE_1, transparentButtonBgAlphaLow)};
        box-shadow: inset 0 0 0 2px ${color.SURFACE_1};
        color: ${color.SURFACE_1};
        backdrop-filter: blur(${BlurRadius.b15});
      `;
    case ButtonVariant.transparent:
      return `
          background-color: ${
            isDarkTheme
              ? rgba(color.WHITE, transparentButtonBgAlphaLow)
              : rgba(color.WHITE, transparentButtonBgAlphaHigh)
          };
          color: ${isDarkTheme ? color.WHITE : color.BLACK};
          backdrop-filter: blur(${BlurRadius.b15});
        `;
    case ButtonVariant.success:
      return `
          background-color: ${color.SUCCESS_2};
          color: ${color.WHITE};
        `;
    default:
      return `
        background-color: ${color.PRIMARY_1};
        color: ${color.PRIMARY_3};
      `;
  }
}

function renderHover(
  variant: string,
  color: ThemeColors,
  isDarkTheme?: boolean
) {
  switch (variant) {
    case ButtonVariant.secondary:
      return `
        box-shadow: inset 0 0 0 2px ${color.PRIMARY_1};
      `;
    case ButtonVariant.plaintext:
      return `
        color: ${color.TEXT_2};
      `;
    case ButtonVariant.reverse:
      return `
        background-color: ${rgba(color.TEXT_1, transparentButtonBgAlphaLow)};
        box-shadow: inset 0 0 0 3px ${color.SURFACE_2};
        color: ${color.SURFACE_2};
      `;
    case ButtonVariant.transparent:
      return `
      color: ${isDarkTheme ? color.WHITE : color.BLACK};
        background-color: ${rgba(color.WHITE, transparentButtonBgAlphaMid)};
      `;
    case ButtonVariant.success:
      return `
        background-color: ${color.SUCCESS_3};
      `;
    default:
      return `
        background-color: ${color.PRIMARY_2};
      `;
  }
}

interface TextButtonProps {
  variant: string;
  size: ButtonSizes;
  color?: string;
  stretch: boolean;
  isDarkTheme?: boolean;
  iconSize?: number;
}

export const TextButton = styled.button<TextButtonProps>`
  text-align: center;
  border: none;
  outline: none;
  overflow: hidden;
  cursor: pointer;
  pointer-events: auto;
  transition: background-color 0.25s ease-out;
  width: ${({ stretch }) => (stretch ? "100%" : "fit-content")};
  min-height: ${({ size }) => {
    switch (size) {
      case "large":
        return "72px";
      case "medium":
        return "56px";
      case "small":
      default:
        return "40px";
    }
  }};

  ${({ theme, size }) => `
    font-weight: ${theme.type.weight.SEMI_BOLD};
    padding: 0 ${theme.space.s28};
    font-size: ${size === "large" ? theme.type.size.SM : theme.type.size.XS};
    border-radius: ${theme.radius.r4};
  `}

  &:disabled {
    opacity: 20%;
    cursor: default;
    pointer-events: none;
  }

  ${({ variant, isDarkTheme, theme }) =>
    renderButton(variant, theme.color, isDarkTheme)};

  &:hover:not([disabled]),
  &:focus-visible:not([disabled]) {
    ${({ variant, theme, isDarkTheme }) =>
      renderHover(variant, theme.color, isDarkTheme)};
  }

  & img {
    ${({ iconSize }) => iconSize && `width: ${iconSize}px;`}
  }
`;
