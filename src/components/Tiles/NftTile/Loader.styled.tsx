import { rgba } from "polished";
import styled from "styled-components";

export const NftTileLoader = styled.div`
  box-sizing: border-box;
  flex: 1;
  position: relative;
  overflow: hidden;

  ${({ theme }) => `
    background: ${theme.color.SURFACE_2};
    border-radius: ${theme.radius.r8};
    box-shadow: ${theme.elevation.low};
  `}

  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ${({ theme }) => `
      border-radius: ${theme.radius.r8};
      border: 1px solid ${rgba(theme.color.BLACK, theme.opacity.ONE)};
    `}
  }
`;

export const NftTileLoaderImage = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
`;

export const NftTileLoaderBottom = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => `
    gap: ${theme.space.s8};
    padding: ${theme.space.s24} ${theme.space.s16};
    
  `}
`;

export const NftTileLoaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.space.s16};
`;

export const NftTileLoaderUserSection = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: ${({ theme }) => theme.space.s8};
  margin-top: ${({ theme }) => theme.space.s12};
`;
