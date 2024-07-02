import { ThemeColors, ThemeName } from "./theme.interface";

export const lightPaletteColors = {
  PRIMARY_1: "#000000",
  PRIMARY_2: "#5F5F5F",
  PRIMARY_3: "#EEEEEE",

  SECONDARY_1: "#FFF6DA",
  SECONDARY_2: "#FFE8A1",
  SECONDARY_3: "#FFD968",

  SUCCESS_1: "#F2FBF8",
  SUCCESS_2: "#00B176",
  SUCCESS_3: "#007D53",

  ERROR_1: "#FFF2F4",
  ERROR_2: "#BC2828",
  ERROR_3: "#710601",
};

export const lightPaletteBase = {
  SURFACE_1: "#F9F9F9",
  SURFACE_2: "#FFFFFF",
  SURFACE_3: "#EEEEEE",
  SURFACE_4: "#DBDBDB",

  TEXT_1: "#151515",
  TEXT_2: "#404040",
  TEXT_3: "#5F5F5F",
  TEXT_4: "#A4A4A4",
};

export const darkPaletteColors = {
  PRIMARY_1: "#F9F9F9",
  PRIMARY_2: "#EEEEEE",
  PRIMARY_3: "#151515",

  SECONDARY_1: "#FFE8A1",
  SECONDARY_2: "#FFD968",
  SECONDARY_3: "#B38402",

  SUCCESS_1: "#19C68C",
  SUCCESS_2: "#00B176",
  SUCCESS_3: "#007D53",

  ERROR_1: "#FFF2F4",
  ERROR_2: "#BC2828",
  ERROR_3: "#710601",
};

export const darkPaletteBase = {
  SURFACE_1: "#151515",
  SURFACE_2: "#212322",
  SURFACE_3: "#404040",
  SURFACE_4: "#5F5F5F",

  TEXT_1: "#FFFFFF",
  TEXT_2: "#EEEEEE",
  TEXT_3: "#DBDBDB",
  TEXT_4: "#C3C3C3",
};

export const palletteBase = {
  BLACK: "#000000",
  WHITE: "#ffffff",
};

export const PALETTE_LIGHT: ThemeColors = {
  ...lightPaletteColors,
  ...lightPaletteBase,
  ...palletteBase,
};

export const PALETTE_DARK: ThemeColors = {
  ...darkPaletteColors,
  ...darkPaletteBase,
  ...palletteBase,
};

export function getColorsByTheme(theme: ThemeName): ThemeColors {
  if (theme === ThemeName.DARK) {
    return PALETTE_DARK;
  }

  return PALETTE_LIGHT;
}
