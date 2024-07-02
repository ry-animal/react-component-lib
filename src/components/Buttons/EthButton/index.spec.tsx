import { EthButton } from ".";
import { render } from "../../../util/test-utils";

describe("<EthButton />", () => {
  describe("rendering", () => {
    test("should matche snapshot", () => {
      expect(
        render(
          <EthButton balance={42} label="Label goes here" onClick={jest.fn()} />
        ).asFragment()
      ).toMatchSnapshot();
    });
  });
});
