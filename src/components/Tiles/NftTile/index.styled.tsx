import { rgba } from "polished";
import styled from "styled-components";
import Anchor from "../../Anchor";
import { DataBadgeDataTextLast } from "../../DataBadge/index.styled";
import ImageWithFallback from "../../ImageWithFallback";

export const TileWrapper = styled.div<{
  maxWidth?: number;
  disabled: boolean;
  isVariant?: boolean;
}>`
  transition: all 0.25s ease-in-out;
  flex: 1;
  box-sizing: border-box;
  position: relative;

  ${({ isVariant, theme }) => `
    background-color: ${isVariant ? theme.color.BLACK : theme.color.SURFACE_2};
    border-radius: ${theme.radius.r8};
    box-shadow: ${theme.elevation.low};
  `};
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px;`}
  ${({ disabled, theme }) =>
    !disabled &&
    `
    &:hover {
      box-shadow: ${theme.elevation.high};
      transform: translateY(-2.5px);
    }
  `}
`;

export const InnerWrapper = styled.div`
  flex: 1;
  position: relative;
  pointer-events: none;
`;

export const BorderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  pointer-events: none;

  ${({ theme }) => `
    border: ${theme.space.s1} solid ${rgba(
    theme.color.BLACK,
    theme.opacity.ONE
  )};
    border-radius: ${theme.radius.r8};
  `};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => `
    gap: ${theme.space.s8};
    padding: ${theme.space.s16};
  `};
`;

export const NftImageWrapper = styled.div`
  display: block;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
  position: relative;

  ${({ theme }) => `
    border-top-left-radius: ${theme.radius.r8};
    border-top-right-radius: ${theme.radius.r8};
    background-color: ${theme.color.BLACK};
  `};
`;

export const NftImage = styled(ImageWithFallback)<{
  imgFit?: "contain" | "cover";
}>`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${({ imgFit }) => imgFit};
  position: absolute;
  padding: ${({ imgFit, theme }) =>
    imgFit === "contain" ? theme.space.s16 : 0};
`;

export const Title = styled.div<{ isVariant?: boolean }>`
  line-height: 1.3125em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ isVariant, theme }) =>
    isVariant
      ? `
        color: ${theme.color.WHITE};
        @supports (-webkit-background-clip: text) {
        background: ${theme.gradient.ETH};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
        font-family: ${theme.type.family.title};
        font-size: ${theme.type.size.XS};
        font-weight: ${theme.type.weight.SEMI_BOLD};
        `
      : `    
        color: ${theme.color.TEXT_2};
        font-family: ${theme.type.family.title};
        font-size: ${theme.type.size.XS};
        font-weight: ${theme.type.weight.MEDIUM};
  `};
`;

export const ItemCount = styled.span<{ isVariant?: boolean }>`
  text-align: right;
  float: right;
  white-space: nowrap;

  ${({ theme }) => `
    color: ${theme.color.TEXT_3};
    font-family: ${theme.type.family.body};
    font-size: ${theme.type.size.XXXS};
    font-weight: ${theme.type.weight.NORMAL};
    padding-left: ${theme.space.s8};
  `};
`;

export const ProfileButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const HorizontalRule = styled.hr<{ isVariant?: boolean }>`
  margin: 0;
  border: none;
  height: 1px;

  ${({ isVariant, theme }) =>
    isVariant
      ? `
      background-color: ${theme.color.TEXT_2};
      margin-top: ${theme.space.s8};
        `
      : `    
      background-color: ${theme.color.SURFACE_3};
    margin-top: ${theme.space.s8};
  `};
`;

export const Row = styled.div<{ isVariant?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 36px;

  ${({ isVariant, theme }) =>
    isVariant &&
    `
    justify-content: flex-start;
    color: ${theme.color.WHITE};
  `}

  a {
    overflow: hidden;
    flex: 1;
  }
`;

export const Detail = styled.div<{ isVariant?: boolean }>`
  max-width: 100%;

  ${({ theme }) => `
    font-size: ${theme.type.size.XXXS};
    padding-right: ${theme.space.s24};
  `}

  ${({ isVariant, theme }) =>
    isVariant &&
    `
      color: ${theme.color.WHITE};
      @supports (-webkit-background-clip: text) {
        background: ${theme.gradient.ETH};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        ${DataBadgeDataTextLast} {
          background: ${theme.color.WHITE};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
   `}
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding-top: ${({ theme }) => theme.space.s4};
`;

export const ItemGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.s4};
`;

export const IconImg = styled.img`
  height: 24px;
  width: 24px;
`;

export const VisibilityStatusWrapper = styled.div`
  position: absolute;

  ${({ theme }) => `
    top:  ${theme.space.s16};
    right: ${theme.space.s16};
  `};
`;

export const TileLink = styled(Anchor)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export const NotForSaleLabel = styled.span`
  line-height: 24px;

  ${({ theme }) => `
    font-family: ${theme.type.family.title};
    font-weight: ${theme.type.weight.NORMAL};
    font-size: ${theme.type.size.XS};
    color: ${theme.color.TEXT_2};
  `};
`;

export const TooltipWrapper = styled.div`
  position: absolute;
  ${({ theme }) => `
    top: ${theme.space.s16};
    left: ${theme.space.s16};
  `};
`;
