import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import DrawerMenu, { MenuItem } from ".";
import { DARK_THEME, MEDIA_WIDTHS } from "../../theme";
import { render, screen } from "../../util/test-utils";

describe("<DrawerMenu />", () => {
  const mockMedia = {
    media: "",
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  };

  const mobileTest = () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      ...mockMedia,
      matches: query === `(max-width: ${MEDIA_WIDTHS.mobile.max})`,
    }));
  };

  const desktopTest = () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      ...mockMedia,
      matches:
        query ===
        `(min-width: ${MEDIA_WIDTHS.desktop.min}) and (max-width: ${MEDIA_WIDTHS.desktop.max})`,
    }));
  };
  enum Menu {
    Visibility = "Visibility",
    Description = "Description",
    Assets = "Assets",
  }

  const items = [
    <MenuItem title={Menu.Visibility} subtitle="HIDDEN" key="0">
      <div>visibility</div>
    </MenuItem>,
    <MenuItem title={Menu.Description} key="1">
      <div>description</div>
    </MenuItem>,
  ];

  const sampleProps = () => ({ onTabChange: jest.fn(), onClose: jest.fn() });

  const getTab = (label: string) => screen.getByRole("tab", { name: label });

  const activeExpect = (label: string) =>
    expect(getTab(label)).toHaveStyleRule("background", "#FFFFFF");

  beforeEach(() => {
    window.HTMLElement.prototype.scrollTo = () => {};
  });

  describe("rendering", () => {
    test("should match snapshot", () => {
      desktopTest();
      expect(
        render(
          <DrawerMenu {...sampleProps()}>{...items}</DrawerMenu>
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("should match snapshot (menuTitle)", () => {
      desktopTest();
      expect(
        render(
          <DrawerMenu
            {...sampleProps()}
            initialKey={1}
            menuTitle="Collection Settings"
          >
            {...items}
          </DrawerMenu>
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("renders a single menu item", () => {
      desktopTest();
      const props = sampleProps();
      render(
        <DrawerMenu {...props}>
          <MenuItem title={Menu.Visibility}>{Menu.Visibility}</MenuItem>
        </DrawerMenu>
      );

      activeExpect(Menu.Visibility);
    });

    test("changing initial key changes the activeKey", () => {
      desktopTest();
      const props = sampleProps();
      const { rerender } = render(
        <DrawerMenu {...props}>{...items}</DrawerMenu>
      );

      activeExpect(Menu.Visibility);

      rerender(
        <DrawerMenu {...props} initialKey={1}>
          {...items}
        </DrawerMenu>
      );

      activeExpect(Menu.Description);
    });

    test("when active key exceeds number of children, reset to 0", async () => {
      desktopTest();
      const { rerender } = render(
        <DrawerMenu {...sampleProps()} initialKey={2}>
          {...[
            ...items,
            <MenuItem title={Menu.Assets} key="2">
              <div>assets</div>
            </MenuItem>,
          ]}
        </DrawerMenu>
      );
      const numTabsThree = 3;
      expect(screen.getByRole("tablist").childNodes.length).toBe(numTabsThree);
      activeExpect(Menu.Assets);

      rerender(<DrawerMenu {...sampleProps()}>{...items}</DrawerMenu>);

      const numTabsTwo = 2;
      expect(screen.getByRole("tablist").childNodes.length).toBe(numTabsTwo);
      activeExpect(Menu.Visibility);
    });
  });
  describe("event handling", () => {
    test("changes active state when clicked", () => {
      desktopTest();
      render(<DrawerMenu {...sampleProps()}>{...items}</DrawerMenu>);
      activeExpect(Menu.Visibility);
      userEvent.click(getTab(Menu.Description));
      activeExpect(Menu.Description);
    });

    test("fires onChange when tab clicked", () => {
      desktopTest();
      const onClick = jest.fn();
      render(
        <DrawerMenu {...sampleProps()} onTabChange={onClick}>
          {...items}
        </DrawerMenu>
      );
      activeExpect(Menu.Visibility);
      userEvent.click(getTab(Menu.Description));
      expect(onClick).toBeCalled();
    });

    test("fires onClose when close clicked", () => {
      desktopTest();
      const onClick = jest.fn();
      render(
        <DrawerMenu {...sampleProps()} onClose={onClick}>
          {...items}
        </DrawerMenu>
      );
      userEvent.click(screen.getByRole("button", { name: "close" }));
      expect(onClick).toBeCalled();
    });

    test("open and close menu settings when item clicked", () => {
      mobileTest();
      render(
        <DrawerMenu {...sampleProps()}>{...items}</DrawerMenu>
      ).asFragment();

      const menu = screen.getByTestId("menu-options");
      expect(menu).toHaveStyleRule("transform", "translateX(0)");

      userEvent.click(getTab(Menu.Visibility));
      expect(menu).toHaveStyleRule("transform", "translateX(-100%)");

      userEvent.click(screen.getByRole("button", { name: "back" }));
      expect(menu).toHaveStyleRule("transform", "translateX(0)");
    });

    test("is dark theme", () => {
      render(
        <ThemeProvider theme={DARK_THEME}>
          <DrawerMenu {...sampleProps()}>{...items}</DrawerMenu>
        </ThemeProvider>
      );
      expect(getTab(Menu.Visibility)).toHaveStyleRule("background", "#212322");
    });
  });
});
