import styled, { css, keyframes } from "styled-components";
import { BlurRadius } from "../../constants/BlurRadius";

const scroll = keyframes`
  0% { transform: translateX(0)}
  100% { transform: translateX(-52.5%)}
`;

const containerStyle = css<{ showBorder: boolean }>`
  ${({ showBorder, theme }) =>
    showBorder &&
    `
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 215%;
      height: 100%;
      background-image: ${theme.gradient.ETH};
      background-size: 52.5% 100%;
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: ${theme.space.s2};
      background-color: ${theme.color.SURFACE_2};
      border-radius: ${theme.radius.r6};
      
      @media (max-width: ${theme.media.mobile.max}) {
        border-radius: 0;
        margin: ${theme.space.s2} 0 0 0;
      }
    }
  `}
`;

export const HoverBorder = styled.div<{ showBorder: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  box-sizing: border-box;

  ${({ showBorder, theme }) => `
    ${showBorder ? `padding: ${theme.space.s2}` : ""};
      border-radius: ${theme.radius.r8};
      background-color: ${theme.color.SURFACE_2};

      @media (max-width: ${theme.media.mobile.max}) {
        border-radius: 0px;
        opacity: ${theme.opacity.EIGHT};
      }
  `};

  ${containerStyle}
`;

export const InfoBoxContainer = styled.div<{ showBorder: boolean }>`
  position: relative;
  border-radius: ${({ theme }) => theme.radius.r8};
  transition: box-shadow 0.5s ease-in-out;

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    overflow: hidden;

    ${({ theme }) => `
      border-radius: 0;
      padding: ${theme.space.s2} 0 0 0;   
  `};
  }

  &:hover {
    ${HoverBorder} {
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
    }

    ${HoverBorder}::before {
      animation-name: ${scroll};
      animation-iteration-count: infinite;
      animation-duration: 1s;
      animation-timing-function: linear;
    }

    ${HoverBorder}::after {
      margin: 3px;
    }
    box-shadow: ${({ theme }) => theme.elevation.medium};
  }

  @supports (backdrop-filter: blur(${BlurRadius.b8})) {
    backdrop-filter: blur(${BlurRadius.b8});
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  ${({ theme }) => `
    border-radius: ${theme.radius.r6};
    gap: ${theme.space.s16};
  `};

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    flex-direction: row;
    align-items: flex-start;
    border-radius: 0;
  }
`;
