import styled from "styled-components";
import { TabStyleType } from "./Tabs";

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

interface TabsModeProps {
  tabStyleType: string;
}

export const TabsHeader = styled.div<TabsModeProps>`
  display: flex;
  flex-direction: row;
  overflow-x: auto;

  ${({ tabStyleType, theme }) =>
    tabStyleType === TabStyleType.button &&
    `
      justify-content: center;

      & button:first-child {
        border-top-left-radius: ${theme.radius.r8};
        border-bottom-left-radius: ${theme.radius.r8};
      }

      & button:last-child {
        border-top-right-radius: ${theme.radius.r8};
        border-bottom-right-radius: ${theme.radius.r8};
      }
    `};
`;

export const TabsBody = styled.div<TabsModeProps>`
  margin-top: -${({ theme }) => theme.space.s4};
  border-top: ${({ theme }) =>
    `${theme.space.s4} solid ${theme.color.SURFACE_3}`};

  ${({ tabStyleType }) =>
    tabStyleType === TabStyleType.button && `border-top-color: transparent;`};
`;
