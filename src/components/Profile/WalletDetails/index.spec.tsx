import { WalletDetails } from ".";
import { render, screen } from "../../../util/test-utils";
import { SampleLoginState } from "../../Page/PageHeader/SampleLoginState";

describe("<WalletDetails />", () => {
  describe("rendering", () => {
    test("Default rendering matches snapshot", () => {
      expect(
        render(<WalletDetails {...SampleLoginState} />).asFragment()
      ).toMatchSnapshot();
    });
    test("Default rendering matches snapshot (zero balance)", () => {
      expect(
        render(
          <WalletDetails
            {...SampleLoginState}
            ethBalanceL1={0}
            ethBalanceL2={0}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Default rendering matches snapshot (zero L1 balance)", () => {
      expect(
        render(
          <WalletDetails {...SampleLoginState} ethBalanceL1={0} />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Default rendering matches snapshot (zero L2 balance)", () => {
      expect(
        render(
          <WalletDetails {...SampleLoginState} ethBalanceL2={0} />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Imx row is not in the document", () => {
      render(
        <WalletDetails
          {...SampleLoginState}
          ethImmutableBalanceL2={undefined}
        />
      );
      expect(screen.queryByText(/ImmutableX/iu)).toBe(null);
    });
  });
});
