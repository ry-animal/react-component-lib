import styled from "styled-components";
import { TabStyleType } from "../Tabs";

export const GenericTab = styled.button<{
  active: boolean;
  tabStyleType: string;
}>`
  position: relative;
  color: ${({ theme }) => theme.color.TEXT_1};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => `${theme.space.s4} ${theme.space.s32}`};
  margin: 0;
  transition: all 0.25s;

  ${({ tabStyleType, theme, active }) =>
    tabStyleType === TabStyleType.button &&
    `
    min-width: 140px;
    height: 56px;
    background-color: ${active ? theme.color.SURFACE_2 : "transparent"};
    box-shadow: ${
      active
        ? `inset 0 0 0 2px ${theme.color.TEXT_4}`
        : `inset 0 0 0 1px ${theme.color.SURFACE_4}`
    };

    @media (max-width: ${theme.media.mobile.max}) {
      height: 48px;
      padding: ${theme.space.s4} ${theme.space.s24};
    }

  `};

  ${({ tabStyleType, theme, active }) =>
    tabStyleType === TabStyleType.tab &&
    `
      min-width: 170px;
      height: 75px;
      background-color: transparent;
      font-weight: ${
        active ? theme.type.weight.BOLD : theme.type.weight.NORMAL
      };
      border-bottom-width: ${theme.space.s4};
      border-bottom-style: solid;
      border-bottom-color: transparent;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -${theme.space.s4};
      height: ${theme.space.s4};
      background: ${active ? theme.gradient.ETH : "transparent"};
      border-radius: ${theme.radius.r4};
    }
  `};

  &:hover,
  &:focus-visible {
    outline: none;
    ${({ active, theme }) =>
      !active &&
      `
      border-bottom-color: ${theme.color.SURFACE_4};
      cursor: pointer;
  `};

    ${({ active, theme, tabStyleType }) =>
      !active &&
      tabStyleType !== TabStyleType.tab &&
      `
      box-shadow: inset 0 0 0 ${theme.space.s1} ${theme.color.TEXT_1};
      background-color: ${theme.color.SURFACE_2};
  `};
  }
`;
