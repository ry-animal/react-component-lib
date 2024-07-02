import { rgba } from "polished";
import styled from "styled-components";
import { BlurRadius } from "../../../constants/BlurRadius";
import { Anchor } from "../../Anchor";

export const TILE_SIZE_HEIGHT = "475px";
const BG_OPACITY = {
  normal: 0.3,
  hover: 0.5,
};

const TRANSITION = "all 0.2s ease-out";

export const TileContent = styled.div<{ size: "s" | "m" }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
  user-select: none;
  transition: ${TRANSITION};

  ${({ theme }) => `
    background-color: ${rgba(theme.color.BLACK, BG_OPACITY.normal)};
    border-radius: ${theme.radius.r8};
    padding: ${theme.space.s16};
  `}

  ${({ size, theme }) =>
    size === "s" &&
    `
      border-radius: ${theme.radius.r4};
      padding: ${theme.space.s12};
  `}
`;

export const TileData = styled.div`
  ${({ theme }) => `
    padding: ${theme.space.s12};
    width: 100%;
    border-radius: ${theme.radius.r8};
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @supports not (backdrop-filter: blur(${BlurRadius.b15})) {
      background-color: ${rgba(theme.color.BLACK, BG_OPACITY.normal)};
    }
    @supports (backdrop-filter: blur(${BlurRadius.b15})) {
      background-color: ${rgba(theme.color.BLACK, BG_OPACITY.normal)};
      backdrop-filter: blur(${BlurRadius.b15});
    }
  `}
`;

export const TileName = styled.h5`
  ${({ theme }) => `
    color:  ${theme.color.WHITE};
    font-size: ${theme.type.size.XL};
    font-weight: ${theme.type.weight.SEMI_BOLD};
    margin: ${theme.space.s8} ${theme.space.s16};
  `}
  line-height: 38px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  word-break: break-word;
`;

export const TileContentData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: ${TRANSITION};
`;

const ICON_SIZE = "24px";

export const TileDataBadge = styled.div`
  width: calc(100% - ${ICON_SIZE});
`;

export const TileDataIcon = styled.div`
  width: ${ICON_SIZE};
  height: ${ICON_SIZE};
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => `
    border-radius: ${theme.radius.round};
    background-color: ${rgba(theme.color.BLACK, BG_OPACITY.normal)};
  `}
`;

export const TileImg = styled.div<{ bgImg: string }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  transition: ${TRANSITION};
  background: ${({ bgImg, theme }) =>
    `url(${bgImg}) center no-repeat ${theme.color.SURFACE_1}`};
  background-size: cover;
`;

export const Tile = styled.div<{
  backgroundImg?: string;
  disabled?: boolean;
  size: "s" | "m";
}>`
  ${({ theme }) => `
    background-color: ${theme.color.BLACK};
    border-radius: ${theme.radius.r8};
  `};
  position: relative;
  display: flex;
  width: 100%;
  height: ${TILE_SIZE_HEIGHT};
  overflow: hidden;
  pointer-events: none;
  transition: ${TRANSITION};

  ${({ size, theme }) =>
    size === "s" &&
    `
    height: auto;
    min-height: 120px;
    border-radius: ${theme.radius.r4};

    ${TileName} {
      font-size: ${theme.type.size.XXXS};
      line-height: 12px;
      margin: 0;
      }
  `}

  ${({ disabled, theme }) =>
    !disabled &&
    `
    cursor: pointer;
    pointer-events: auto;

    &:hover,
    &:focus {
      outline: none;
      border: none;
      box-shadow: ${theme.elevation.high};
      transform: translateY(-2.5px);
    
      ${TileContent} {
        background-color: ${rgba(theme.color.BLACK, BG_OPACITY.hover)}; 
      }
      
      ${TileContentData} {
        transform: scale(0.95);
      }

      ${TileImg} {
        transform: scale(1.1);
      }
    }
  `}
`;

export const LinkAnchor = styled(Anchor)`
  flex: 1;
`;
