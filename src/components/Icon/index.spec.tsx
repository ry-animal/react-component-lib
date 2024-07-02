import Icon from ".";
import { render, screen } from "../../util/test-utils";

describe("<Icon />", () => {
  describe("rendering", () => {
    it("Renders img tag for url icon", () => {
      const url = "/foo/bar.svg";
      render(<Icon icon={url} alt="icon" />);
      expect(screen.getByAltText("icon")).toHaveAttribute("src", url);
    });

    it("Renders icon as component", () => {
      const customIcon = <div>X</div>;
      render(<Icon icon={customIcon} alt="icon" />);
      expect(screen.getByText("X")).toBeInTheDocument();
    });
  });
});
