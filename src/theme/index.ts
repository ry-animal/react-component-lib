import { getColorsByTheme } from "./colors";
import { ELEVATION_DARK, ELEVATION_LIGHT } from "./elevation";
import { FONT, FontFamily, FontSize, FontWeight } from "./fonts";
import { GRADIENT } from "./gradient";
import { LAYERS } from "./layers";
import { MEDIA_WIDTHS } from "./media";
import { OPACITY } from "./opacity";
import { RADIUS } from "./radius";
import { SPACE } from "./space";
import { ThemeName } from "./theme.interface";

const sharedThemeKeys = {
  radius: {
    ...RADIUS,
  },
  space: {
    ...SPACE,
  },
  type: {
    ...FONT,
  },
  layer: {
    ...LAYERS,
  },
  media: {
    ...MEDIA_WIDTHS,
  },
  opacity: {
    ...OPACITY,
  },
  gradient: {
    ...GRADIENT,
  },
};

export const lightColors = getColorsByTheme(ThemeName.LIGHT);
export const darkColors = getColorsByTheme(ThemeName.DARK);

export const LIGHT_THEME = {
  name: ThemeName.LIGHT,
  ...sharedThemeKeys,
  color: {
    ...lightColors,
  },
  elevation: {
    ...ELEVATION_LIGHT,
  },
};

export const DARK_THEME = {
  name: ThemeName.DARK,
  ...sharedThemeKeys,
  color: {
    ...darkColors,
  },
  elevation: {
    ...ELEVATION_DARK,
  },
};

// Legacy
export { FontFamily, FontSize, FontWeight, MEDIA_WIDTHS, SPACE };
