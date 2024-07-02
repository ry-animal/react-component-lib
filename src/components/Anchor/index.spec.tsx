import { Anchor } from ".";
import { render } from "../../util/test-utils";

describe("<WithLink />", () => {
  describe("rendering", () => {
    test("Default rendering matches snapshot", () => {
      expect(render(<Anchor url="/foo/bar" />).asFragment()).toMatchSnapshot();
    });

    test("Renders router Link instead of anchor", () => {
      expect(
        render(<Anchor url="/foo/bar" isRouterLink={true} />).asFragment()
      ).toMatchSnapshot();
    });

    test("Renders children", () => {
      expect(
        render(<Anchor url="/foo/bar">Child</Anchor>).asFragment()
      ).toMatchSnapshot();
    });

    test("Renders external link (anchor)", () => {
      expect(
        render(<Anchor url="/foo/bar" isExternalLink={true} />).asFragment()
      ).toMatchSnapshot();
    });

    test("Renders disabled styles (anchor)", () => {
      expect(
        render(<Anchor url="/foo/bar" disabled={true} />).asFragment()
      ).toMatchSnapshot();
    });

    test("Renders disabled styles (link)", () => {
      expect(
        render(
          <Anchor url="/foo/bar" isRouterLink={true} disabled={true} />
        ).asFragment()
      ).toMatchSnapshot();
    });
  });
});
