import userEvent from "@testing-library/user-event";
import { CircleButton } from ".";
import { render, screen } from "../../../util/test-utils";
import { CircleButtonSize } from "./index.styled";

describe("<CircleButton />", () => {
  const shouldHaveCorrectSizeStyle = (
    button: HTMLElement,
    buttonSize: string,
    iconSize: string
  ) => {
    expect(button).toHaveStyleRule("width", buttonSize);
    expect(button).toHaveStyleRule("background-size", `${iconSize} auto`);
  };
  describe("rendering", () => {
    test("should match snapshot", () => {
      expect(
        render(
          <CircleButton onClick={() => {}} iconUrl="/foo/bar.svg" />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("should render xs button", () => {
      render(
        <CircleButton onClick={() => {}} size="xs" iconUrl="/foo/bar.svg" />
      );
      shouldHaveCorrectSizeStyle(
        screen.getByRole("button"),
        CircleButtonSize.sXS.button,
        CircleButtonSize.sXS.icon
      );
    });

    test("should render medium button", () => {
      render(
        <CircleButton onClick={() => {}} size="m" iconUrl="/foo/bar.svg" />
      );
      shouldHaveCorrectSizeStyle(
        screen.getByRole("button"),
        CircleButtonSize.sM.button,
        CircleButtonSize.sM.icon
      );
    });

    test("should render large button", () => {
      render(
        <CircleButton onClick={() => {}} size="l" iconUrl="/foo/bar.svg" />
      );
      shouldHaveCorrectSizeStyle(
        screen.getByRole("button"),
        CircleButtonSize.sL.button,
        CircleButtonSize.sL.icon
      );
    });

    test("should render transparent button", () => {
      expect(
        render(
          <CircleButton
            onClick={() => {}}
            iconUrl="/foo/bar.svg"
            transparent={true}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("should render dark theme button", () => {
      expect(
        render(
          <CircleButton
            onClick={() => {}}
            iconUrl="/foo/bar.svg"
            transparent={true}
            isDarkTheme={true}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
  });

  describe("event handling", () => {
    test("can be clicked", () => {
      const onClick = jest.fn();
      render(<CircleButton onClick={onClick} iconUrl="/foo/bar.svg" />);
      userEvent.click(screen.getByRole("button"));
      expect(onClick).toBeCalled();
    });
  });
});
