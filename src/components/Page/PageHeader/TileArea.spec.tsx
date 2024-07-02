import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "../../../util/test-utils";
import { TitleArea } from "./TitleArea";

describe("TitleArea", () => {
  const TITLE_OBJECT = {
    header: "Select your wallet",
    tagline: "Easily collect, exchange & sell gaming collectibles",
    link: { text: "Explore", url: "#" },
  };
  describe("rendering", () => {
    test("lightTheme changes button appearance", () => {
      render(<TitleArea title={TITLE_OBJECT} isLightTheme={true} />);
      const button = screen.getByRole("button");
      expect(button).toHaveStyleRule("color", "#F9F9F9");
      expect(button).toHaveStyleRule(
        "background-color",
        "rgba(249,249,249,0.1)"
      );
      expect(button).toHaveStyleRule("box-shadow", "inset 0 0 0 2px #F9F9F9");
    });
  });
});
