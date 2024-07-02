import userEvent from "@testing-library/user-event";
import { CopyButton } from ".";
import { act, render, screen } from "../../../util/test-utils";

describe("<CopyButton />", () => {
  describe("rendering", () => {
    test("should match snapshot", () => {
      expect(
        render(
          <CopyButton
            description="description"
            value="value"
            onClickText="clickText"
            altText="copy"
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("should match snapshot (outline)", () => {
      expect(
        render(
          <CopyButton
            description="description"
            value="value"
            onClickText="clickText"
            outline
            altText="copy"
          />
        ).asFragment()
      ).toMatchSnapshot();
      expect(screen.getByRole("button")).toHaveStyleRule(
        "border",
        "1px solid #DBDBDB"
      );
      expect(screen.getByRole("button")).toHaveStyleRule(
        "border-radius",
        "4px"
      );
    });
  });

  describe("event handling", () => {
    test("can be clicked and shows tooltip", async () => {
      const writeText = jest.fn();
      const placement = "right";
      Object.assign(navigator, { clipboard: { writeText } });
      render(
        <CopyButton
          description="description"
          value="value"
          onClickText="clickText"
          tooltipPlacement={placement}
          altText="copy"
        />
      );
      await act(async () => {
        await userEvent.click(screen.getByRole("button"));
        expect(writeText).toBeCalledWith("value");
        expect(screen.getByRole("tooltip")).not.toBeNull();
      });
    });

    test("tooltip disappears after duration", async () => {
      jest.useFakeTimers();
      const writeText = jest.fn();
      const placement = "right";
      Object.assign(navigator, { clipboard: { writeText } });
      render(
        <CopyButton
          description="description"
          value="value"
          onClickText="clickText"
          tooltipPlacement={placement}
          altText="copy"
        />
      );
      await act(async () => {
        await userEvent.click(screen.getByRole("button"));
        expect(writeText).toBeCalledWith("value");
        jest.runAllTimers();
        expect(screen.queryByRole("tooltip")).toBeNull();
      });
    });
  });
});
