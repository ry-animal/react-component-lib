import styled from "styled-components";
import { BadgeProps } from "./index.interface";

export const BadgeContainer = styled.div<{ height: string }>`
  ${({ theme, height }) => `
    align-items: center;
    background-color: ${theme.color.SURFACE_1};
    border-radius: ${theme.radius.r4};
    display: flex;
    gap: ${theme.space.s4};
    margin: ${theme.space.s1};
    min-height: ${height};
    padding: ${`${theme.space.s4} ${theme.space.s12}`};
  `}
`;

export const IconClearWrapper = styled.span`
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.r4};
  display: flex;
  justify-content: center;
  height: 17px;
  width: 17px;
`;

export const Badge = styled.button<BadgeProps>`
  ${({ theme, maxWidth }) => `
    background: ${theme.gradient.ETH};
    border-radius: ${theme.radius.r4};
    padding: 0;
    margin: ${theme.space.s1};
    max-width: ${maxWidth};
    border: none;
    cursor: pointer;

    &:hover,
    &:focus-visible {
      margin: 0;
      padding: ${theme.space.s2};
      ${BadgeContainer} {
        margin: 0;
      }
      ${IconClearWrapper} {
        background: ${theme.gradient.ETH};
        path {
          stroke: ${theme.color.BLACK};
        }
      }
    }
  `}
`;
