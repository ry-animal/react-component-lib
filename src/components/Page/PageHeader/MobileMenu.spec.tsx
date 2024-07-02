import userEvent from "@testing-library/user-event";
import { act, render, screen } from "../../../util/test-utils";
import { generateInitialEntries } from "../../Search/helpers";
import { SampleAccountHandlers } from "./index.spec";
import { FullScreenMenu, MobileMenu } from "./MobileMenu";
import { SampleLoginState } from "./SampleLoginState";

const SearchProps = {
  initialSearchEntries: generateInitialEntries(["foo", "bar"]),
  onNavigate: jest.fn(),
  onSearch: async () => ({
    collections: [
      {
        name: "mock-collection",
        description: "...",
        imageUrl: "foo.png",
        collectionSlug: "mock-collection-slug",
      },
    ],
    nfts: [],
  }),
};

describe("<MobileMenu />", () => {
  describe("rendering", () => {
    test("renders according to snapshot", () => {
      expect(
        render(
          <MobileMenu
            accountHandlers={SampleAccountHandlers}
            loginState={SampleLoginState}
            onLogin={jest.fn()}
            {...SearchProps}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
  });

  describe("event handling", () => {
    test("login button can be clicked", async () => {
      const onLogin = jest.fn();
      render(
        <MobileMenu
          accountHandlers={SampleAccountHandlers}
          onLogin={onLogin}
          {...SearchProps}
        />
      );
      userEvent.click(screen.getByLabelText("Menu"));
      userEvent.click(screen.getByLabelText("Connect a Wallet"));
      expect(onLogin).toBeCalled();
    });

    /*
     * Hide temporarily
     * test("wallet help button can be clicked", async () => {
     *   Object.defineProperty(window, "location", {
     *     value: {
     *       href: "",
     *     },
     *     writable: true,
     *   });
     *   render(
     *
     *       <MobileMenu
     *         accountHandlers={SampleAccountHandlers}
     *         onLogin={jest.fn()}
     *         {...SearchProps}
     *       />
     *
     *   );
     *   userEvent.click(screen.getByLabelText("Menu"));
     *   userEvent.click(screen.getByLabelText("Why do I need a wallet?"));
     *   expect(window.location.href).toBe("/");
     * });
     */

    test("menu can be opened", async () => {
      render(
        <MobileMenu
          accountHandlers={SampleAccountHandlers}
          onLogin={jest.fn()}
          {...SearchProps}
        />
      );
      userEvent.click(screen.getByLabelText("Menu"));
      expect(screen.getByRole("menu", { hidden: true })).toBeTruthy();
    });

    test("profile can be opened and closed", async () => {
      render(
        <MobileMenu
          accountHandlers={SampleAccountHandlers}
          loginState={SampleLoginState}
          onLogin={jest.fn()}
          {...SearchProps}
        />
      );
      userEvent.click(screen.getByLabelText("Account"));
      expect(screen.getByLabelText("Account information")).toBeTruthy();
      userEvent.click(screen.getByLabelText("Withdraw"));
    });

    test("search can be opened and closed", async () => {
      render(
        <MobileMenu
          accountHandlers={SampleAccountHandlers}
          loginState={SampleLoginState}
          onLogin={jest.fn()}
          {...SearchProps}
        />
      );
      userEvent.click(screen.getByLabelText("Search"));
      expect(screen.getByRole("search", { hidden: true })).toBeTruthy();
      userEvent.click(screen.getByLabelText("Search"));
    });

    test("suggestion can be clicked", async () => {
      const onSearch = jest.fn(() =>
        Promise.resolve({ collections: [], nfts: [] })
      );
      render(
        <MobileMenu
          accountHandlers={SampleAccountHandlers}
          loginState={SampleLoginState}
          onLogin={jest.fn()}
          {...SearchProps}
          onSearch={onSearch}
        />
      );
      userEvent.click(screen.getByLabelText("Search"));
      await act(async () =>
        userEvent.click(screen.getByRole("link", { hidden: true, name: "foo" }))
      );
      expect(onSearch).toHaveBeenCalledWith("foo");
    });

    test("result can be clicked", async () => {
      const onNavigate = jest.fn();
      render(
        <MobileMenu
          accountHandlers={SampleAccountHandlers}
          loginState={SampleLoginState}
          onLogin={jest.fn()}
          {...SearchProps}
          onNavigate={onNavigate}
        />
      );
      userEvent.click(screen.getByLabelText("Search"));
      await act(async () =>
        userEvent.type(screen.getByRole("search", { hidden: true }), "test")
      );
      userEvent.click(
        screen.getByRole("link", { hidden: true, name: /mock-collection/u })
      );
      expect(onNavigate).toHaveBeenCalledWith(
        expect.objectContaining({ collectionSlug: "mock-collection-slug" })
      );
    });

    test("search is not performed unless actual text is entered", async () => {
      const onSearch = jest.fn(() =>
        Promise.resolve({ collections: [], nfts: [] })
      );
      render(
        <MobileMenu
          accountHandlers={SampleAccountHandlers}
          loginState={SampleLoginState}
          onLogin={jest.fn()}
          {...SearchProps}
          onSearch={onSearch}
        />
      );
      userEvent.click(screen.getByLabelText("Search"));
      userEvent.type(screen.getByRole("search", { hidden: true }), "    ");
      expect(onSearch).not.toHaveBeenCalled();
    });

    test("open and close full screen navigation", () => {
      const ids = {
        menuId: "foo",
        accountPopupId: "bar",
        searchId: "baz",
      };
      const state = {
        isMenuOpen: true,
        isProfileOpen: false,
        isSearchOpen: false,
        loginState: {
          ...SampleLoginState,
        },
        results: [],
        search: "",
      };

      const handlers = {
        accountHandlers: {
          ...SampleAccountHandlers,
          onDeposit: () => {},
        },
        onLogin: () => {},
        onNavigate: () => {},
        setIsMenuOpen: () => {},
        setIsProfileOpen: () => {},
        setIsSearchOpen: () => {},
        setSearch: () => {},
      };

      render(
        <FullScreenMenu
          ids={ids}
          state={state}
          handlers={handlers}
          isLightTheme
          simplyfyNav={false}
        />
      );
      const anchors = screen.queryAllByRole("link");
      expect(anchors[1]).toHaveAttribute("href", "/explore");
      expect(anchors[2]).toHaveAttribute("href", "/stats");
      expect(anchors[3]).toHaveAttribute("href", "/learn");

      expect(screen.getByRole("menu", { hidden: false })).toBeTruthy();
      userEvent.click(anchors[1]);
      expect(screen.getByRole("menu", { hidden: true })).toBeTruthy();
    });
  });

  test("mobile menu does not exist if loggedin & simple nav", async () => {
    render(
      <MobileMenu
        simplyfyNav
        accountHandlers={SampleAccountHandlers}
        loginState={SampleLoginState}
        onLogin={jest.fn()}
        {...SearchProps}
      />
    );
    expect(screen.queryByRole("menu")).toBeNull();
  });
});
