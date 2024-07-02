import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { AccountPreview } from ".";
import { DARK_THEME } from "../../../theme";
import { render, screen } from "../../../util/test-utils";
import { SampleAccountHandlers } from "../../Page/PageHeader/index.spec";
import { SampleLoginState } from "../../Page/PageHeader/SampleLoginState";

describe("<AccountPreview />", () => {
  describe("rendering", () => {
    test("Default rendering matches snapshot", () => {
      expect(
        render(
          <AccountPreview
            {...SampleLoginState}
            onClose={jest.fn()}
            accountHandlers={SampleAccountHandlers}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Default rendering matches snapshot (stretched)", () => {
      expect(
        render(
          <AccountPreview
            {...SampleLoginState}
            onClose={jest.fn()}
            accountHandlers={SampleAccountHandlers}
            stretch
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Default rendering matches snapshot (zero balance)", () => {
      expect(
        render(
          <AccountPreview
            {...SampleLoginState}
            ethBalanceL1={0}
            ethBalanceL2={0}
            onClose={jest.fn()}
            accountHandlers={SampleAccountHandlers}
            stretch
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Default rendering matches snapshot (zero L1 balance)", () => {
      expect(
        render(
          <AccountPreview
            {...SampleLoginState}
            ethBalanceL1={0}
            onClose={jest.fn()}
            accountHandlers={SampleAccountHandlers}
            stretch
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Default rendering matches snapshot (zero L2 balance)", () => {
      expect(
        render(
          <AccountPreview
            {...SampleLoginState}
            ethBalanceL2={0}
            onClose={jest.fn()}
            accountHandlers={SampleAccountHandlers}
            stretch
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
  });

  describe("event handling", () => {
    test("All buttons are clickable", async () => {
      const onClose = jest.fn();
      render(
        <AccountPreview
          {...SampleLoginState}
          onClose={onClose}
          accountHandlers={SampleAccountHandlers}
        />
      );

      await userEvent.click(screen.getByLabelText("Add funds"));
      expect(onClose).toBeCalled();
      expect(SampleAccountHandlers.onAddFunds).toBeCalled();

      userEvent.click(screen.getByLabelText("View profile"));
      expect(onClose).toBeCalled();
      expect(SampleAccountHandlers.onProfileClick).toBeCalled();

      userEvent.click(screen.getByLabelText("Send"));
      expect(onClose).toBeCalled();
      expect(SampleAccountHandlers.onSend).toBeCalled();

      userEvent.click(screen.getByLabelText("Withdraw"));
      expect(onClose).toBeCalled();
      expect(SampleAccountHandlers.onWithdraw).toBeCalled();

      userEvent.click(screen.getByLabelText("Disconnect"));
      expect(onClose).toBeCalled();
      expect(SampleAccountHandlers.onDisconnect).toBeCalled();
    });

    test("Add funds to L2 is clickable", () => {
      const onClose = jest.fn();
      render(
        <AccountPreview
          {...SampleLoginState}
          ethBalanceL2={0}
          onClose={onClose}
          accountHandlers={SampleAccountHandlers}
        />
      );

      userEvent.click(screen.getByLabelText("Add funds to L2"));
      expect(onClose).toBeCalled();
      expect(SampleAccountHandlers.onAddFundsToL2).toBeCalled();
    });

    test("Activate is clickable", () => {
      const onClose = jest.fn();
      render(
        <AccountPreview
          {...SampleLoginState}
          showActivation={true}
          onClose={onClose}
          accountHandlers={SampleAccountHandlers}
        />
      );

      userEvent.click(screen.getByLabelText("Activate Loopring L2"));
      expect(onClose).toBeCalled();
      expect(SampleAccountHandlers.onActivate).toBeCalled();
    });

    test("dummy function is clickable when activate handler is not provided", () => {
      const onClose = jest.fn();
      render(
        <AccountPreview
          {...SampleLoginState}
          showActivation={true}
          onClose={onClose}
          accountHandlers={{ ...SampleAccountHandlers, onActivate: undefined }}
        />
      );

      userEvent.click(screen.getByLabelText("Activate Loopring L2"));
      expect(onClose).toBeCalled();
      expect(SampleAccountHandlers.onActivate).toBeCalled();
    });

    test("is dark theme", () => {
      render(
        <ThemeProvider theme={DARK_THEME}>
          <AccountPreview
            {...SampleLoginState}
            showActivation={true}
            onClose={jest.fn()}
            accountHandlers={{
              ...SampleAccountHandlers,
              onActivate: undefined,
            }}
          />
        </ThemeProvider>
      );
      expect(screen.getByText("Alice")).toHaveStyleRule("color", "#FFFFFF");
    });
  });
});
