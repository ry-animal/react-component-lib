import styled from "styled-components";
import { TILE_SIZE_HEIGHT } from "./index.styled";

export const CollectionTileLoader = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  min-height: ${TILE_SIZE_HEIGHT};
  ${({ theme }) => `
    background-color: ${theme.color.SURFACE_2};
    border-radius: ${theme.radius.r8};
    padding: ${theme.space.s16};
  `}
`;

export const CollectionTileLoaderTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  padding: ${({ theme }) => theme.space.s16};
`;

export const CollectionTileBadge = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 25px;
`;

export const CollectionTileLoaderBottom = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.space.s8};
`;

export const CollectionTileLoaderAvatar = styled.div`
  margin-right: ${({ theme }) => theme.space.s8};
`;
