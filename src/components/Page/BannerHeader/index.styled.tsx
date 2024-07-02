import { rgba } from "polished";
import styled from "styled-components";
import { MEDIA_WIDTHS } from "../../../constants/MediaWidths";
import { PageWidth } from "../../../theme/pageWidth";

const ALPHA = 0.25;
export const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 160px;

  @media (max-width: ${MEDIA_WIDTHS.upToLarge}) {
    padding-bottom: ${({ theme }) => theme.space.s64};
  }
`;

export const BannerBackground = styled.div<{
  imgUrl?: string;
  topOffset: number;
  isDarkTheme?: boolean;
}>`
  background-color: ${({ theme }) => theme.color.SURFACE_3};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: ${({ topOffset }) => `-${topOffset}px`};
  left: 0;
  width: 100%;
  height: ${({ topOffset }) => `calc(100% + ${topOffset}px)`};
  z-index: -1;

  ${({ imgUrl, isDarkTheme, theme }) =>
    imgUrl &&
    `
    background-image: url(${imgUrl});

    &:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: ${rgba(
        isDarkTheme ? theme.color.BLACK : theme.color.WHITE,
        ALPHA
      )};
    }
  `}
`;
BannerBackground.displayName = "BannerBackground";

export const PageMarginWrapper = styled.div`
  ${PageWidth};
`;
PageMarginWrapper.displayName = "PageMarginWrapper";

export const ContentWrapper = styled.div<{ isSingleRow: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.s20};
  padding-top: ${({ theme }) => theme.space.s64};

  ${({ isSingleRow }) =>
    isSingleRow && `flex-direction: row; justify-content: space-between;`}

  @media (max-width: ${MEDIA_WIDTHS.upToSmall}) {
    justify-content: center;
  }
`;
ContentWrapper.displayName = "ContentWrapper";

export const TopContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.space.s20};

  @media (max-width: ${MEDIA_WIDTHS.upToSmall}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const TitleWrapper = styled.div``;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.s16};
`;

export const HeaderTitleWrapper = styled.div`
  margin: 0;
  margin-right: ${({ theme }) => theme.space.s8};
  margin-bottom: ${({ theme }) => theme.space.s8};
  display: inline-block;
  word-break: break-word;

  h4 {
    display: inline;
    word-break: break-word;
  }

  @media (max-width: ${MEDIA_WIDTHS.upToSmall}) {
    text-align: center;
  }
`;
HeaderTitleWrapper.displayName = "HeaderTitle";

export const StatsWrapper = styled.div``;
StatsWrapper.displayName = "StatsWrapper";

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  gap: ${({ theme }) => theme.space.s8};
`;
ButtonGroup.displayName = "ButtonGroup";

export const TitleButtonWrapper = styled.div`
  margin: ${({ theme }) => `0 ${theme.space.s16}`};
  display: inline-flex;
  align-items: center;
  position: relative;
  vertical-align: text-top;
`;

export const CenterButtonWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;
