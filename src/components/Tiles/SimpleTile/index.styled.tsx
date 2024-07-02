import styled from "styled-components";
import { TileSize } from "./index.interface";

export const Tile = styled.button<{
  size: TileSize;
  backgroundColor?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  overflow-wrap: anywhere;

  ${({ backgroundColor, size, theme }) => `
    background: ${backgroundColor ?? theme.color.SURFACE_1};
    border: ${`${theme.space.s1} solid ${theme.color.PRIMARY_2}`};
    border-radius: ${theme.radius.r6};
    font-family: ${theme.type.family.body};
    color: ${theme.color.TEXT_2};
    height: ${size === TileSize.large ? "544px" : "145px"};
    width: ${size === TileSize.large ? "322px" : "180px"};
  `};

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    width: 100%;
  }

  &:hover:not([disabled]) {
    box-shadow: ${({ theme }) => theme.elevation.medium};
  }

  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.color.TEXT_3};
  }
`;
