import { css } from "styled-components";
import { MEDIA_WIDTHS } from "../constants/MediaWidths";

export const PageWidthPadding = {
  EXTRA_LARGE: "80px",
  LARGE: "60px",
  MEDIUM: "50px",
  SMALL: "40px",
  EXTRA_SMALL: "20px",
};

export const PageWidth = css`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 80px;

  @media (max-width: ${MEDIA_WIDTHS.upToExtraLarge}) {
    padding: 0 ${PageWidthPadding.EXTRA_LARGE};
  }

  @media (max-width: ${MEDIA_WIDTHS.upToLarge}) {
    padding: 0 ${PageWidthPadding.LARGE};
  }

  @media (max-width: ${MEDIA_WIDTHS.upToMedium}) {
    padding: 0 ${PageWidthPadding.MEDIUM};
  }

  @media (max-width: ${MEDIA_WIDTHS.upToSmall}) {
    padding: 0 ${PageWidthPadding.SMALL};
  }

  @media (max-width: ${MEDIA_WIDTHS.upToExtraSmall}) {
    padding: 0 ${PageWidthPadding.EXTRA_SMALL};
  }
`;
