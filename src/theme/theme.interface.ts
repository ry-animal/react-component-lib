export interface ThemeRadius {
  r2: string;
  r4: string;
  r6: string;
  r8: string;
  r16: string;
  r24: string;
  r32: string;
  round: string;
}

export interface ThemeSpace {
  s1: string;
  s2: string;
  s4: string;
  s8: string;
  s12: string;
  s16: string;
  s20: string;
  s24: string;
  s28: string;
  s32: string;
  s40: string;
  s48: string;
  s64: string;
  s96: string;
  s128: string;
}

export interface ThemeType {
  family: {
    title: string;
    body: string;
  };
  size: {
    XXXXL: string;
    XXXL: string;
    XXL: string;
    XL: string;
    LG: string;
    MD: string;
    SM: string;
    XS: string;
    XXS: string;
    XXXS: string;
  };
  weight: {
    NORMAL: number;
    MEDIUM: number;
    SEMI_BOLD: number;
    BOLD: number;
  };
}

export interface ThemeLayer {
  tooltip: number;
  popover: number;
  dropdown: number;
  results: number;
  appLoader: number;
  banner: number;
}

export interface ThemeMediaSize {
  min: string;
  max: string;
}
export interface ThemeMedia {
  mobile: ThemeMediaSize;
  tablet: ThemeMediaSize;
  laptop: ThemeMediaSize;
  desktop: ThemeMediaSize;
}

export interface ThemeColors {
  PRIMARY_1: string;
  PRIMARY_2: string;
  PRIMARY_3: string;
  SECONDARY_1: string;
  SECONDARY_2: string;
  SECONDARY_3: string;
  SUCCESS_1: string;
  SUCCESS_2: string;
  SUCCESS_3: string;
  ERROR_1: string;
  ERROR_2: string;
  ERROR_3: string;
  SURFACE_1: string;
  SURFACE_2: string;
  SURFACE_3: string;
  SURFACE_4: string;
  TEXT_1: string;
  TEXT_2: string;
  TEXT_3: string;
  TEXT_4: string;
  BLACK: string;
  WHITE: string;
}

export interface ThemeElevation {
  low: string;
  medium: string;
  high: string;
}

export enum ThemeName {
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeOpacity {
  NINE: number;
  EIGHT: number;
  SEVEN: number;
  SIX: number;
  FIVE: number;
  FOUR: number;
  THREE: number;
  TWO: number;
  ONE: number;
}

export interface ThemeGradient {
  ETH: string;
}
