import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

export const FontSize = {
  XXXXL: "72px",
  XXXL: "56px",
  XXL: "40px",
  XL: "32px",
  LG: "24px",
  MD: "20px",
  SM: "18px",
  XS: "16px",
  XXS: "14px",
  XXXS: "12px",
};

/*
 * https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
 * 400 is regular, 500 is medium, 700 is bold
 */
export const FontWeight = {
  NORMAL: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
};

export const FONT = {
  family: {
    title: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
  },
  size: {
    ...FontSize,
  },
  weight: {
    ...FontWeight,
  },
};

export const FontFamily = {
  SANS_SERIF_TITLE: FONT.family.title,
  SANS_SERIF_BODY: FONT.family.body,
};
