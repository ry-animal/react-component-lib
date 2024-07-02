import { Loader } from ".";
import { render } from "../../util/test-utils";

describe("<Loader />", () => {
  test("Default rendering matches snapshot", () => {
    expect(render(<Loader />).asFragment()).toMatchSnapshot();
  });
  test("large rendering matches snapshot", () => {
    expect(render(<Loader large />).asFragment()).toMatchSnapshot();
  });
  test("small icon rendering matches snapshot", () => {
    expect(render(<Loader icon={"icon.png"} />).asFragment()).toMatchSnapshot();
  });
  test("large icon rendering matches snapshot", () => {
    expect(
      render(<Loader large icon={"icon.png"} />).asFragment()
    ).toMatchSnapshot();
  });
});
