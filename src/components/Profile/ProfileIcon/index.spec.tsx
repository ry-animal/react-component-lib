import { ProfileIcon } from ".";
import { render } from "../../../util/test-utils";

describe("<ProfileIcon />", () => {
  describe("rendering", () => {
    test("Default rendering matches snapshot (default size)", () => {
      expect(
        render(<ProfileIcon imgSrc="cat.png" hex={false} />).asFragment()
      ).toMatchSnapshot();
    });

    test("Default rendering matches snapshot (custom size)", () => {
      expect(
        render(
          <ProfileIcon imgSrc="cat.png" size={100} hex={false} />
        ).asFragment()
      ).toMatchSnapshot();
    });
    test("Default rendering matches snapshot (hex)", () => {
      expect(
        render(<ProfileIcon imgSrc="cat.png" hex={true} />).asFragment()
      ).toMatchSnapshot();
    });
    test("Default rendering matches snapshot (hex + custom size)", () => {
      expect(
        render(
          <ProfileIcon imgSrc="cat.png" size={100} hex={true} />
        ).asFragment()
      ).toMatchSnapshot();
    });
    test("Default rendering matches snapshot (borderSize)", () => {
      expect(
        render(
          <ProfileIcon imgSrc="cat.png" size={100} borderSize={10} />
        ).asFragment()
      ).toMatchSnapshot();
    });
  });
  test("Default rendering matches snapshot (borderColor)", () => {
    expect(
      render(
        <ProfileIcon imgSrc="cat.png" size={100} borderColor="#333" />
      ).asFragment()
    ).toMatchSnapshot();
  });
  test("Default rendering matches snapshot (transparentBorder)", () => {
    expect(
      render(
        <ProfileIcon imgSrc="cat.png" size={100} transparentBorder={true} />
      ).asFragment()
    ).toMatchSnapshot();
  });
  test("Default rendering matches snapshot (hex + border)", () => {
    expect(
      render(
        <ProfileIcon
          imgSrc="cat.png"
          size={100}
          hex={true}
          transparentBorder={true}
          borderColor="#333"
          borderSize={10}
        />
      ).asFragment()
    ).toMatchSnapshot();
  });
});
