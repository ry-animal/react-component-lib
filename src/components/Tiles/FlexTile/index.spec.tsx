import { FlexTile } from ".";
import { render } from "../../../util/test-utils";

describe("<FlexTile/>", () => {
  const testProps = () => ({
    children: <div role={"test"}>wen lambo</div>,
  });

  describe("rendering", () => {
    test("simple tile with default props to match snapshot", () => {
      expect(render(<FlexTile />).asFragment()).toMatchSnapshot();
    });

    test("simple tile with test props to match snapshot", () => {
      expect(
        render(<FlexTile {...testProps()} />).asFragment()
      ).toMatchSnapshot();
    });
  });
});
