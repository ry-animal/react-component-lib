import userEvent from "@testing-library/user-event";
import PopupMenu from ".";
import ChevronDown from "../../assets/icons/icon-chevron-down.svg";
import { fireEvent, render, screen, waitFor } from "../../util/test-utils";
import { ALIGN, PopupMenuProps } from "./index.interface";
import STRINGS from "./index.strings";

describe("<PopupMenu />", () => {
  const mockMedia = {
    media: "",
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  };

  const sampleProps = (): PopupMenuProps => ({
    options: [
      { onClick: jest.fn(), icon: "", label: "Manage listings" },
      { onClick: jest.fn(), icon: "", label: "Show NFT" },
    ],
    button: {
      iconUrl: "./icon-url.svg",
      transparent: true,
      onClick: jest.fn(),
    },
  });

  describe("rendering", () => {
    test("Default rendering matches snapshot", () => {
      expect(
        render(<PopupMenu {...sampleProps()} />).asFragment()
      ).toMatchSnapshot();
    });

    test("Rendering matches snapshot (right aligned)", () => {
      expect(
        render(
          <PopupMenu {...sampleProps()} alignTo={ALIGN.right} />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Rendering matches snapshot (TextButton)", () => {
      expect(
        render(
          <PopupMenu
            {...sampleProps()}
            button={{
              label: "Text",
              onClick: jest.fn(),
              "aria-label": "Text Button",
            }}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Rendering matches snapshot (Circle Button)", () => {
      expect(
        render(
          <PopupMenu
            {...sampleProps()}
            button={{
              icon: "./icon-url.svg",
              isDarkTheme: true,
              onClick: jest.fn(),
              "aria-label": "Circle Button",
            }}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Rendering matches snapshot (disableCloseIcon)", () => {
      expect(
        render(
          <PopupMenu {...sampleProps()} disableCloseIcon={true} />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("overrides close icon", () => {
      const button = render(
        <PopupMenu
          {...sampleProps()}
          closeIconUrl={ChevronDown}
          button={{
            label: "Text",
            onClick: jest.fn(),
            "aria-label": "Text Button",
          }}
        />
      ).getByLabelText("Text Button");

      expect(button).not.toBeNull();
    });
  });

  describe("event handling", () => {
    test("Clicking the More Options icon opens menu", async () => {
      window.matchMedia = jest.fn().mockImplementation((query) => ({
        ...mockMedia,
        matches: query === "(min-width: 1025px) and (max-width: 1279px)",
      }));

      render(<PopupMenu {...sampleProps()} />);

      fireEvent.click(screen.getByLabelText(STRINGS.buttonLabel));

      await waitFor(() => screen.getByTestId("popup-menu"));
      expect(screen.getByText("Manage listings")).toBeInTheDocument();
      expect(screen.getByText("Show NFT")).toBeInTheDocument();
    });

    test("Clicking More Options icon opens menu and option is clickable", async () => {
      window.matchMedia = jest.fn().mockImplementation((query) => ({
        ...mockMedia,
        matches: query === "(min-width: 1025px) and (max-width: 1279px)",
      }));
      const onClick = jest.fn();
      render(
        <PopupMenu
          {...sampleProps()}
          options={[
            { onClick, icon: "", label: "Manage listings" },
            { onClick: jest.fn(), icon: "", label: "Show NFT" },
          ]}
        />
      );
      fireEvent.click(screen.getByLabelText(STRINGS.buttonLabel));

      await waitFor(() => screen.getByTestId("popup-menu"));
      expect(screen.getByText("Manage listings")).toBeInTheDocument();

      fireEvent.click(screen.getByText("Manage listings"));
      expect(onClick).toBeCalled();
    });

    test("Clicking More Options icon opens MOBILE menu and option is clickable", async () => {
      window.matchMedia = jest.fn().mockImplementation((query) => ({
        ...mockMedia,
        matches: query === "(max-width: 767px)",
      }));
      const onClick = jest.fn();
      render(
        <PopupMenu
          {...sampleProps()}
          options={[
            { onClick, icon: "", label: "Manage listings" },
            { onClick: jest.fn(), icon: "", label: "Show NFT" },
          ]}
        />
      );
      fireEvent.click(screen.getByLabelText(STRINGS.buttonLabel));

      await waitFor(() => screen.getByTestId("popup-mobile-menu"));
      expect(screen.getByText("Manage listings")).toBeInTheDocument();

      fireEvent.click(screen.getByText("Manage listings"));
      expect(onClick).toBeCalled();
    });

    test("Mobile popup menu is closeable", async () => {
      window.matchMedia = jest.fn().mockImplementation((query) => ({
        ...mockMedia,
        matches: query === "(max-width: 767px)",
      }));
      const customStrings = {
        buttonLabel: "Button Label",
        closeButtonLabel: "Close",
      };
      render(<PopupMenu {...sampleProps()} strings={customStrings} />);
      fireEvent.click(screen.getByLabelText(customStrings.buttonLabel));

      expect(screen.queryByTestId("popup-mobile-menu")).toBeInTheDocument();

      fireEvent.click(screen.getByLabelText(customStrings.closeButtonLabel));
      expect(screen.queryByTestId("popup-mobile-menu")).toBeNull();
    });

    test("TextButton is clickable and opens menu", async () => {
      window.matchMedia = jest.fn().mockImplementation((query) => ({
        ...mockMedia,
        matches: query === "(max-width: 767px)",
      }));
      render(
        <PopupMenu
          {...sampleProps()}
          button={{ label: "Text", onClick: jest.fn() }}
        />
      );
      fireEvent.click(screen.getByLabelText(STRINGS.buttonLabel));

      expect(screen.queryByTestId("popup-mobile-menu")).toBeInTheDocument();

      fireEvent.click(screen.getByLabelText(STRINGS.buttonLabel));

      expect(screen.queryByTestId("popup-mobile-menu")).toBeNull();
    });

    test("Default align adds left style", async () => {
      window.matchMedia = jest.fn().mockImplementation((query) => ({
        ...mockMedia,
        matches: query === "(min-width: 1025px) and (max-width: 1279px)",
      }));
      render(<PopupMenu {...sampleProps()} />);
      fireEvent.click(screen.getByLabelText(STRINGS.buttonLabel));

      expect(screen.queryByTestId("popup-menu")).toHaveStyleRule("left", "0");
    });

    test("Align Right adds right style", async () => {
      window.matchMedia = jest.fn().mockImplementation((query) => ({
        ...mockMedia,
        matches: query === "(min-width: 1025px) and (max-width: 1279px)",
      }));
      render(<PopupMenu {...sampleProps()} alignTo={ALIGN.right} />);
      fireEvent.click(screen.getByLabelText(STRINGS.buttonLabel));

      expect(screen.queryByTestId("popup-menu")).toHaveStyleRule("right", "0");
    });

    test("useClosePopup working for large screens", async () => {
      window.matchMedia = jest.fn().mockImplementation((query) => ({
        ...mockMedia,
        matches: query === "(min-width: 1025px) and (max-width: 1279px)",
      }));
      render(<PopupMenu {...sampleProps()} alignTo={ALIGN.right} />);
      fireEvent.click(screen.getByLabelText(STRINGS.buttonLabel));

      expect(screen.queryByTestId("popup-menu")).toBeInTheDocument();

      userEvent.click(document.body);

      expect(screen.queryByTestId("popup-menu")).toBeNull();
    });
  });
});
