import { rgba } from "polished";
import styled from "styled-components";

const TOOLTIP_ALPHA = 0.9;

export const TooltipContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => `
    background: ${rgba(theme.color.SUCCESS_2, TOOLTIP_ALPHA)};
    box-shadow: ${theme.elevation.low};
    border-radius: ${theme.radius.r4};
    font-weight: ${theme.type.weight.MEDIUM};
    font-size: ${theme.type.size.XXXS};
    padding: ${theme.space.s8} ${theme.space.s16};
    color: ${theme.color.WHITE};
  `};
`;

export const Clickable = styled.span<{ outline?: boolean }>`
  cursor: pointer;
  display: inline-flex;
  ${({ outline, theme }) =>
    outline &&
    `border: 1px solid ${theme.color.SURFACE_4}; 
    border-radius: ${theme.radius.r4}; 
    padding: ${theme.space.s8} ${theme.space.s16};
  `};
  font-size: 0.8rem;
  gap: 5px;
  user-select: none;
  color: ${({ theme }) => theme.color.TEXT_1};
`;
