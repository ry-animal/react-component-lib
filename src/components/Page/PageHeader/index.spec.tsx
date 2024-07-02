import userEvent from "@testing-library/user-event";
import { PageHeader } from ".";
import { render, screen } from "../../../util/test-utils";
import { AccountHandlers } from "../../Profile/AccountPreview/AccountHandlers";
import { SampleLoginState } from "./SampleLoginState";

export const SampleAccountHandlers: AccountHandlers = {
  onActivate: jest.fn(),
  onAddFunds: jest.fn(),
  onAddFundsToL2: jest.fn(),
  onProfileClick: jest.fn(),
  onSend: jest.fn(),
  onWithdraw: jest.fn(),
  onDisconnect: jest.fn(),
};

const SearchProps = {
  popularSearches: ["foo", "bar"],
  onNavigate: jest.fn(),
  onSearch: async () => ({ collections: [], nfts: [] }),
};

describe("<PageHeader />", () => {
  describe("rendering", () => {
    test("render with background image", () => {
      expect(
        render(
          <PageHeader
            accountHandlers={SampleAccountHandlers}
            backgroundImage={true}
            onLogin={jest.fn()}
            {...SearchProps}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("render with login button", () => {
      expect(
        render(
          <PageHeader
            accountHandlers={SampleAccountHandlers}
            showLoginButton
            onLogin={jest.fn()}
            {...SearchProps}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("render in logged in state", () => {
      expect(
        render(
          <PageHeader
            accountHandlers={SampleAccountHandlers}
            loginState={SampleLoginState}
            onLogin={jest.fn()}
            {...SearchProps}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("render without background image", () => {
      expect(
        render(
          <PageHeader
            accountHandlers={SampleAccountHandlers}
            backgroundImage={false}
            onLogin={jest.fn()}
            {...SearchProps}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("render with title", () => {
      expect(
        render(
          <PageHeader
            accountHandlers={SampleAccountHandlers}
            title={{ header: <>Header</>, tagline: "Tagline" }}
            onLogin={jest.fn()}
            {...SearchProps}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("render with title and link", () => {
      expect(
        render(
          <PageHeader
            accountHandlers={SampleAccountHandlers}
            title={{
              header: <>Header</>,
              tagline: "Tagline",
              link: { text: "Click here", url: "/" },
            }}
            onLogin={jest.fn()}
            {...SearchProps}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
  });

  test("render with light theme", () => {
    expect(
      render(
        <PageHeader
          isLightTheme
          accountHandlers={SampleAccountHandlers}
          title={{ header: <>Header</>, tagline: "Tagline" }}
          onLogin={jest.fn()}
          {...SearchProps}
        />
      ).asFragment()
    ).toMatchSnapshot();
  });

  test("render with simplyfyNav", () => {
    expect(
      render(
        <PageHeader
          simplyfyNav
          accountHandlers={SampleAccountHandlers}
          title={{ header: <>Header</>, tagline: "Tagline" }}
          onLogin={jest.fn()}
          {...SearchProps}
        />
      ).asFragment()
    ).toMatchSnapshot();
  });

  describe("event handling", () => {
    test("title button can be clicked", () => {
      render(
        <PageHeader
          accountHandlers={SampleAccountHandlers}
          title={{
            header: <>Header</>,
            tagline: "Tagline",
            link: { text: "Click here", url: "/" },
          }}
          onLogin={jest.fn()}
          {...SearchProps}
        />
      );
      userEvent.click(screen.getByRole("button"));
    });

    test("login button can be clicked", () => {
      const onLogin = jest.fn();
      render(
        <PageHeader
          accountHandlers={SampleAccountHandlers}
          showLoginButton
          onLogin={onLogin}
          {...SearchProps}
        />
      );
      userEvent.click(screen.getByRole("button"));
      expect(onLogin).toBeCalled();
    });

    test("avatar can be clicked", () => {
      const onLogin = jest.fn();
      render(
        <PageHeader
          accountHandlers={SampleAccountHandlers}
          loginState={SampleLoginState}
          onLogin={onLogin}
          {...SearchProps}
        />
      );
      userEvent.click(screen.getByRole("button"));
      expect(screen.getByRole("menu")).toBeTruthy();
      expect(onLogin).not.toBeCalled();

      userEvent.click(screen.getByRole("menu"));
      expect(screen.getByRole("menu")).toBeTruthy();
    });

    test("avatar preview can be closed ", () => {
      const onLogin = jest.fn();
      render(
        <PageHeader
          accountHandlers={SampleAccountHandlers}
          loginState={SampleLoginState}
          onLogin={onLogin}
          {...SearchProps}
        />
      );
      userEvent.click(screen.getByRole("button"));
      expect(screen.getByRole("menu")).toBeTruthy();

      userEvent.click(screen.getByRole("menu"));
      expect(screen.getByRole("menu")).toBeTruthy();

      userEvent.click(screen.getByLabelText("View profile"));
      expect(screen.queryByRole("menu")).toBeFalsy();
    });
  });
});
