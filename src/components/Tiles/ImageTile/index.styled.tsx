import styled, { css, keyframes } from "styled-components";
import { Tile } from "../SimpleTile/index.styled";
import { TileImageVariant } from "./index.interface";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-52.5%);
  }
`;

export const Text = styled.p<{ imageVariant: TileImageVariant }>`
  text-align: center;
  ${({ theme }) => `
    padding: 0 ${theme.space.s16};
    font-size: ${theme.type.size.XXS};
    color: ${theme.color.TEXT_1};
  `};
`;

export const ImageIcon = styled.img`
  align-self: center;
  justify-self: center;
  width: 40px;
  height: 40px;
  margin-bottom: -${({ theme }) => theme.space.s12};
`;

export const ImageStyledSimpleTile = styled(Tile)<{
  imageVariant: TileImageVariant;
  backgroundColor?: string;
}>`
  background: ${({ backgroundColor }) => backgroundColor ?? "transparent"};

  // styles for gradient border and hover anim
  ${({ imageVariant, backgroundColor, theme }) =>
    imageVariant === TileImageVariant.primary
      ? ""
      : css`
          border: none;
          overflow: hidden;

          &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 215%;
            height: 100%;
            z-index: -2;
            border-radius: ${theme.radius.r4};
            background-size: 52.5% 100%;
            background-image: ${theme.gradient.ETH};
          }

          &:after {
            content: "";
            padding: ${theme.space.s1};
            z-index: -1;
            position: absolute;
            top: ${theme.space.s1};
            left: ${theme.space.s1};
            right: ${theme.space.s1};
            bottom: ${theme.space.s1};
            border-radius: ${theme.radius.r4};
            background: ${backgroundColor ?? theme.color.SURFACE_2};
          }

          &:hover:not([disabled]) {
            &:before {
              animation-name: ${scroll};
              animation-iteration-count: infinite;
              animation-duration: 1.25s;
              animation-timing-function: linear;
            }
          }
        `}
`;
