import { rgba } from "polished";
import styled from "styled-components";
import { MEDIA_WIDTHS } from "../../../constants/MediaWidths";
import { ZIndex } from "../../../constants/ZIndex";
import { FontFamily, FontWeight, lightColors } from "../../../theme";

const GALAXY_FOLD_WIDTH = "280px";
const IPHONE_XR_WIDTH = "414px";

export const FlexSpan = styled.div`
  align-items: center;
  display: inline-flex;
`;
export const LogoContainer = styled.div`
  margin-right: ${({ theme }) => theme.space.s16};
`;
export const DesktopNavBar = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => `${theme.space.s8} ${theme.space.s32}`};
  padding: ${({ theme }) => theme.space.s8};
  min-height: 64px;

  @media (max-width: ${MEDIA_WIDTHS.upToMedium}) {
    display: none;
  }
`;

export const AvatarArea = styled.span`
  position: relative;
`;

export const AvatarButton = styled.span`
  cursor: pointer;
  position: relative;
`;

export const PopOut = styled.div`
  position: absolute;
  right: 0px;
  top: 60px;
  z-index: ${ZIndex.ACCOUNT_PREVIEW};
`;

export const LogoLinkImage = styled.img`
  width: 170px;
  max-width: 100%;
`;

export const NavLink = styled.span<{
  isLightTheme: boolean;
}>`
  color: ${({ isLightTheme }) =>
    isLightTheme ? lightColors.WHITE : lightColors.BLACK};
  font-family: ${FontFamily.SANS_SERIF_BODY};
  font-weight: ${FontWeight.MEDIUM};
  margin-right: ${({ theme }) => theme.space.s24};
  padding: ${({ theme }) => theme.space.s16};
  border-radius: ${({ theme }) => theme.radius.r4};
  text-decoration: none;
  background-color: transparent;
  transition: background-color 0.3s ease-out;

  &:hover {
    background-color: ${({ isLightTheme, theme }) =>
      isLightTheme
        ? rgba(theme.color.BLACK, theme.opacity.FOUR)
        : theme.color.SURFACE_4};
  }

  @media (max-width: ${MEDIA_WIDTHS.upToMedium}) {
    color: ${lightColors.BLACK};
    &:hover {
      background-color: transparent;
    }
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.s32};
  justify-content: center;
  margin-top: ${({ theme }) => theme.space.s16};
`;

export const BannerImage = styled.img`
  // this is so that the desktop image doesn't stretch beyond 1600px;
  @media (max-width: ${({ theme }) => theme.media.desktop.max}) {
    width: 100%;
  }
`;

export const BannerImageWrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: center;
  z-index: -1;
  background-color: #151515;
`;

export const MobileTitleContainer = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    display: block;
    text-align: center;
    margin: ${({ theme }) => `160px ${theme.space.s32} 0px ${theme.space.s32}`};
  }

  /**
   * These mobile children are SO special. defined mobile size goes up to 767px
   * measurements are approx. Galaxy Fold is 280px and large margin won't work
   */
  @media (max-width: ${IPHONE_XR_WIDTH}) {
    margin: ${({ theme }) => `100px ${theme.space.s16} 0px ${theme.space.s16}`};
  }

  @media (max-width: ${GALAXY_FOLD_WIDTH}) {
    margin: ${({ theme }) =>
      `${theme.space.s32} ${theme.space.s8} 0px ${theme.space.s8}`};
  }
`;

export const DesktopTitleContainer = styled.div`
  margin: 80px 30px 80px 30px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet.max}) {
    margin: ${({ theme }) => theme.space.s20};
  }

  @media (max-width: ${({ theme }) => theme.media.laptop.max}) {
    margin: ${({ theme }) => theme.space.s24};
  }
`;

export const TextContainer = styled.div`
  margin: ${({ theme }) => theme.space.s20};
`;

export const LoginButton = styled.button<{ isLightTheme?: boolean }>`
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  appearance: none;
  cursor: pointer;

  ${({ theme, isLightTheme }) => `
    background-color: ${
      isLightTheme ? rgba(theme.color.WHITE, theme.opacity.ONE) : "transparent"
    };
    color: ${isLightTheme ? theme.color.WHITE : theme.color.TEXT_1};
    padding: ${theme.space.s8} ${theme.space.s24};
    border-radius: ${theme.radius.r4};
    font-weight: ${theme.type.weight.SEMI_BOLD};
    box-shadow: ${
      isLightTheme ? theme.color.WHITE : theme.color.TEXT_1
    } 0px 0px 0px 1px inset;

    &:hover, &:focus-visible {
      box-shadow: ${
        isLightTheme ? theme.color.WHITE : theme.color.TEXT_1
      } 0px 0px 0px 2px inset;
    }
  `};
`;
