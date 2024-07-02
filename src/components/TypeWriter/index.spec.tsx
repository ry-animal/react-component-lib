import { TypeWriter } from ".";
import { render } from "../../util/test-utils";

describe("<TypeWriter />", () => {
  test("Default rendering matches snapshot", () => {
    expect(
      render(
        <TypeWriter>
          <p>Line 1</p>
          <p>Line 2</p>
        </TypeWriter>
      ).asFragment()
    ).toMatchSnapshot();
  });
});
