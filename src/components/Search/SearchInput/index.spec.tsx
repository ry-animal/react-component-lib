import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { SearchInput } from ".";
import { render, screen } from "../../../util/test-utils";

describe("<SearchInput />", () => {
  describe("rendering", () => {
    test("should render according to snapshot (default)", () => {
      expect(render(<SearchInput />).asFragment()).toMatchSnapshot();
    });

    test("should render according to snapshot (backgroundColor)", () => {
      expect(
        render(<SearchInput backgroundColor="yellow" />).asFragment()
      ).toMatchSnapshot();
      expect(screen.getByRole("search")).toHaveStyleRule(
        "background-color",
        "yellow"
      );
    });

    test("should render according to snapshot (width)", () => {
      expect(
        render(<SearchInput width="10px" />).asFragment()
      ).toMatchSnapshot();
      expect(screen.getByRole("search")).toHaveStyleRule("width", "10px");
    });
  });

  describe("event handling", () => {
    test("onEscape called when esc pressed", async () => {
      const onEscape = jest.fn();
      render(<SearchInput onEscape={onEscape} />);
      await act(async () => {
        await screen.findByRole("search");
        userEvent.keyboard("{Esc}");
      });
      expect(onEscape).toHaveBeenCalledTimes(1);
    });
  });
});
