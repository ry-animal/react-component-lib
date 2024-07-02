import styled, { keyframes } from "styled-components";

const LARGE_SPINNER_WIDTH = "122px";
const SMALL_SPINNER_WIDTH = "37px";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const IconWrapper = styled.div<{ large?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ large }) => (large ? "30%" : "50%")};
`;

export const IconImage = styled.img`
  width: 100%;
  pointer-events: none;
`;

export const LoaderCircle = styled.div<{ large?: boolean }>`
  ${({ large }) => `
    width: ${large ? LARGE_SPINNER_WIDTH : SMALL_SPINNER_WIDTH};
  `};
  position: relative;
`;

export const Spinner = styled.div<{ large?: boolean; color?: string }>`
  ${({ large, color, theme }) => `
    background-color: ${theme.color.PRIMARY_3};
    border: ${large ? "6px" : "3px"} solid ${theme.color.PRIMARY_3};
    border-left: ${large ? "6px" : "3px"} solid
    ${color ?? theme.color.PRIMARY_2};
    border-top: ${large ? "6px" : "3px"} solid
    ${color ?? theme.color.PRIMARY_2};
    width: ${large ? LARGE_SPINNER_WIDTH : SMALL_SPINNER_WIDTH};
    height: ${large ? LARGE_SPINNER_WIDTH : SMALL_SPINNER_WIDTH};
  `};
  border-radius: 50%;
  animation: 1s ${spin} linear infinite;
  box-sizing: border-box;
`;
