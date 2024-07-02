import { rgba } from "polished";
import styled from "styled-components";
import { BlurRadius } from "../../constants/BlurRadius";
import Icon from "../Icon";
import { ALIGN } from "./index.interface";

export const MenuButtonWrapper = styled.div`
  position: relative;
`;

export const TextWrapper = styled.span`
  ${({ theme }) => `
    padding: ${theme.space.s4};
    color: ${theme.color.TEXT_1};
  `}
`;

export const OptionsWrapper = styled.div<{ alignTo: ALIGN }>`
  width: 200px;
  box-sizing: border-box;
  max-height: 180px;
  overflow-y: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ theme }) => `
    padding: ${theme.space.s8};
    border-radius: ${theme.radius.r8};
    margin-top: ${theme.space.s4};
    gap: ${theme.space.s4};
    z-index: ${theme.layer.tooltip};
    background-color: ${rgba(theme.color.SURFACE_2, theme.opacity.NINE)};
    box-shadow: ${theme.elevation.medium};
  `}

  ${({ alignTo }) => {
    if (alignTo === ALIGN.right) {
      return "right: 0;";
    } else {
      return "left: 0;";
    }
  }}
`;

export const OptionButton = styled.button<{ backgroundColor?: string }>`
  border: none;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: left;
  transition: background-color 0.25s ease-out;

  ${({ backgroundColor, theme }) => `
    background-color: ${backgroundColor ?? theme.color.SURFACE_2};
    padding: ${theme.space.s4};
    border-radius: ${theme.radius.r6};
    font-family: ${theme.type.family.body};
  `}

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    font-size: ${({ theme }) => theme.type.size.SM};
  }

  &:disabled {
    background: transparent;
    opacity: 0.6;
    cursor: default;

    border: ${({ theme }) =>
      `${theme.space.s1} solid ${theme.color.SURFACE_3};`};
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.SURFACE_3};
    @supports (backdrop-filter: blur(${BlurRadius.b15})) {
      backdrop-filter: blur(${BlurRadius.b15});
    }
  }
`;

export const CustomIcon = styled(Icon)`
  max-width: 22px;
  margin-right: ${({ theme }) => theme.space.s8};
`;

export const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;

  ${({ theme }) => `
    background-color: ${rgba(theme.color.BLACK, theme.opacity.FIVE)};
    z-index: ${theme.layer.popover};
  `}
`;

export const CloseButtonWrapper = styled.div`
  position: absolute;

  ${({ theme }) => `
    right: ${theme.space.s16};
    top: ${theme.space.s16};
  `}
`;

export const PopupMenuWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 50vh;
  overflow-y: auto;
  ${({ theme }) => `
    background: ${theme.color.SURFACE_2};
    border-top-left-radius: ${theme.radius.r16};
    border-top-right-radius: ${theme.radius.r16};
    padding: ${theme.space.s32};
    gap: ${theme.space.s16};
  `}
`;
