import { EthAmount } from ".";
import { render } from "../../util/test-utils";

describe("<EthAmount />", () => {
  describe("rendering", () => {
    test("Default rendering matches snapshot", () => {
      expect(
        render(<EthAmount amount={0.0001} />).asFragment()
      ).toMatchSnapshot();
    });

    test("Bold rendering matches snapshot", () => {
      expect(
        render(<EthAmount amount={0.0001} bold />).asFragment()
      ).toMatchSnapshot();
    });
  });
});
