import { getColorsByTheme, PALETTE_DARK, PALETTE_LIGHT } from "./colors";
import { ThemeName } from "./theme.interface";

describe("color", () => {
  it("should match light color constants", () => {
    expect(getColorsByTheme(ThemeName.LIGHT)).toStrictEqual(PALETTE_LIGHT);
  });

  it("should match dark color constants", () => {
    expect(getColorsByTheme(ThemeName.DARK)).toStrictEqual(PALETTE_DARK);
  });
});
