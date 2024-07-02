import { SectionHeader } from ".";
import { render } from "../../../util/test-utils";

describe("<SectionHeader />", () => {
  describe("rendering", () => {
    test("should render input and matches snapshot (with description)", () => {
      expect(
        render(
          <SectionHeader title="Title" description="Description" />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("should render input and matches snapshot (no description)", () => {
      expect(
        render(<SectionHeader title="Title" />).asFragment()
      ).toMatchSnapshot();
    });
  });
});
