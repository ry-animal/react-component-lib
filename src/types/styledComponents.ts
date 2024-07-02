import {
  ThemeColors,
  ThemeElevation,
  ThemeGradient,
  ThemeLayer,
  ThemeMedia,
  ThemeOpacity,
  ThemeRadius,
  ThemeSpace,
  ThemeType,
} from "src/theme/theme.interface";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    color: ThemeColors;
    elevation: ThemeElevation;
    gradient: ThemeGradient;
    layer: ThemeLayer;
    media: ThemeMedia;
    opacity: ThemeOpacity;
    radius: ThemeRadius;
    space: ThemeSpace;
    type: ThemeType;
  }
}
