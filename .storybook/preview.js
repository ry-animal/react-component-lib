import { withThemesProvider } from "themeprovider-storybook";
import { DARK_THEME, LIGHT_THEME } from "../src/theme";
import { GlobalStyles } from "./globalStyles";

export const customViewports = {
  iPhoneSE: {
    name: "iPhone SE",
    styles: {
      width: LIGHT_THEME.media.mobile.min,
      height: "667px",
    },
  },
  iPhone: {
    name: "iPhone",
    styles: {
      width: "390px",
      height: "844px",
    },
  },
  iPad: {
    name: "iPad",
    styles: {
      width: LIGHT_THEME.media.tablet.min,
      height: LIGHT_THEME.media.tablet.max,
    },
  },
  laptop: {
    name: "laptop",
    styles: {
      width: LIGHT_THEME.media.laptop.max,
      height: "830px",
    },
  },
  desktop: {
    name: "desktop",
    styles: {
      width: LIGHT_THEME.media.desktop.max,
      height: "1100px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...customViewports,
    },
  },
  backgrounds: { disable: true },
};

const THEMES = [
  {
    name: "Light Mode",
    backgroundColor: LIGHT_THEME.color.SURFACE_1,
    ...LIGHT_THEME,
  },
  {
    name: "Dark Mode",
    backgroundColor: DARK_THEME.color.SURFACE_1,
    ...DARK_THEME,
  },
];

export const decorators = [
  withThemesProvider(THEMES),
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];
