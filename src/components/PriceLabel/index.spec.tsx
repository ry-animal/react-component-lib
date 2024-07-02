import { PriceLabel } from ".";
import { lightColors } from "../../theme";
import { render } from "../../util/test-utils";

describe("<EthPrice />", () => {
  describe("rendering", () => {
    test("Default rendering matches snapshot", () => {
      expect(
        render(
          <PriceLabel dollarPrice={420.69} ethPrice={0.0001} />
        ).asFragment()
      ).toMatchSnapshot();
    });
    test("Bold rendering matches snapshot", () => {
      expect(
        render(
          <PriceLabel dollarPrice={420.69} ethPrice={0.0001} boldEth />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Variant rendering matches snapshot", () => {
      const { container } = render(
        <PriceLabel dollarPrice={420.69} ethPrice={0.0001} isVariant />
      );

      expect(container.firstChild).toHaveStyleRule("color", lightColors.WHITE);
    });
  });
});
