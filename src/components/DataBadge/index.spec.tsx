import { DataBadge } from ".";
import { render } from "../../util/test-utils";

describe("<DataBadge />", () => {
  const baseProps = {
    title: "Foo",
    name: "Bar",
    imageSrc: "//source.unsplash.com/user/erondu/200x200",
  };

  it("should render", () => {
    expect(render(<DataBadge {...baseProps} />).asFragment()).toMatchSnapshot();
  });
  it("renders without name", () => {
    expect(
      render(<DataBadge imageSrc={baseProps.imageSrc} />).asFragment()
    ).toMatchSnapshot();
  });
  it("renders size m", () => {
    expect(
      render(<DataBadge {...baseProps} size="m" />).asFragment()
    ).toMatchSnapshot();
  });
  it("renders size l", () => {
    expect(
      render(<DataBadge {...baseProps} size="l" />).asFragment()
    ).toMatchSnapshot();
  });
  it("renders with external link", () => {
    expect(
      render(<DataBadge {...baseProps} hasLinkIcon />).asFragment()
    ).toMatchSnapshot();
  });
  it("renders with border", () => {
    expect(
      render(<DataBadge {...baseProps} hasBorder />).asFragment()
    ).toMatchSnapshot();
  });
  it("renders inline", () => {
    expect(
      render(<DataBadge {...baseProps} inline />).asFragment()
    ).toMatchSnapshot();
  });
  it("renders variant", () => {
    expect(
      render(
        <DataBadge {...baseProps} isDark imageSrc={baseProps.imageSrc} />
      ).asFragment()
    ).toMatchSnapshot();
  });
  it("renders hexagon", () => {
    expect(
      render(
        <DataBadge name="foo" isImageHexagon showImageFallback />
      ).asFragment()
    ).toMatchSnapshot();
  });
});
