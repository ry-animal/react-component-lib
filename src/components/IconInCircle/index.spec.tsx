import { IconInCircle } from ".";
import { render } from "../../util/test-utils";

describe("<Loader />", () => {
  test("Black rendering matches snapshot", () => {
    expect(
      render(<IconInCircle icon="icon.png" circleColor="black" />).asFragment()
    ).toMatchSnapshot();
  });
  test("Green rendering matches snapshot", () => {
    expect(
      render(<IconInCircle icon="icon.png" circleColor="green" />).asFragment()
    ).toMatchSnapshot();
  });
});
