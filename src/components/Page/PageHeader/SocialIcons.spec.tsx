import { render, screen } from "../../../util/test-utils";
import { SocialIcons } from "./SocialIcons";

describe("Social Icons", () => {
  test("should contain 3 icons", () => {
    const ICONS_LENGTH = 3;
    render(<SocialIcons />);
    const icons = screen.getAllByRole("link");
    expect(icons).toHaveLength(ICONS_LENGTH);
  });
});
