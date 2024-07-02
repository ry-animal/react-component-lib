import { render } from "../../../util/test-utils";
import { BackgroundImageInsert } from "./BackgroundImageInsert";

jest.mock("../../../hooks/useScreenSize", () => ({
  useScreenSize: () => ({
    isMobile: true,
  }),
}));

describe("BackgroundImageInsert", () => {
  test("render with mobile image", () => {
    expect(render(<BackgroundImageInsert />).asFragment()).toMatchSnapshot();
  });
});
