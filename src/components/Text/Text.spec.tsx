import { ThemeProvider } from "styled-components";
import { DARK_THEME, FontSize, FontWeight } from "../../theme";
import { render } from "../../util/test-utils";
import Text from "./Text";

it("should render label", () => {
  const { getByText } = render(<Text text="foo" />);
  const linkElement = getByText("foo");
  expect(linkElement).toBeInTheDocument();
});

it("should render default variant", () => {
  const { container } = render(<Text text="bar" />);
  expect(container.firstChild).toContainHTML("p");
});

it("should render align center variant", () => {
  const { container } = render(<Text text="bar" align="center" />);
  expect(container.firstChild).toHaveStyle({ textAlign: "center" });
});

it("should render align right", () => {
  const { container } = render(<Text text="bar" align="right" />);
  expect(container.firstChild).toHaveStyle({ textAlign: "right" });
});

it("should render isGradient dark", () => {
  const { container } = render(
    <ThemeProvider theme={DARK_THEME}>
      <Text text="bar" isGradient />)
    </ThemeProvider>
  );

  expect(container.firstChild).toHaveStyle({
    background:
      "linear-gradient(75.61deg, #0052FC -4.16%, #B05AF3 46.45%, #00C6D2 98.12%)",
  });
});

it("should render isGradient", () => {
  const { container } = render(<Text text="bar" isGradient />);
  expect(container.firstChild).toHaveStyle({
    background:
      "linear-gradient(75.61deg, #88AAF1 -4.16%, #C8B2F4 52.58%, #B8FAF6 98.12%)",
  });
});

it("should render h1 variant", () => {
  const { container } = render(<Text text="bar" variant="Display1" />);
  expect(container.firstChild).toContainHTML("h1");
  expect(container.firstChild).toHaveStyle({ fontSize: FontSize.XXXXL });
  expect(container.firstChild).toHaveStyle({
    fontFamily: "'Poppins',sans-serif",
  });
  expect(container.firstChild).toHaveStyle({
    fontWeight: FontWeight.SEMI_BOLD,
  });
});

it("should render h2 variant", () => {
  const { container } = render(<Text text="bar" variant="Display2" />);
  expect(container.firstChild).toContainHTML("h2");
  expect(container.firstChild).toHaveStyle({ fontSize: FontSize.XXXL });
});

it("should render h3 variant", () => {
  const { container } = render(<Text text="bar" variant="Display3" />);
  expect(container.firstChild).toContainHTML("h3");
  expect(container.firstChild).toHaveStyle({ fontSize: FontSize.XXL });
});

it("should render h4 variant", () => {
  const { container } = render(<Text text="bar" variant="Display4" />);
  expect(container.firstChild).toContainHTML("h4");
  expect(container.firstChild).toHaveStyle({ fontSize: FontSize.XL });
});

it("should render h5 variant", () => {
  const { container } = render(<Text text="bar" variant="Display5" />);
  expect(container.firstChild).toContainHTML("h5");
  expect(container.firstChild).toHaveStyle({ fontSize: FontSize.LG });
});

it("should render h6 variant", () => {
  const { container } = render(<Text text="bar" variant="Display6" />);
  expect(container.firstChild).toContainHTML("h6");
  expect(container.firstChild).toHaveStyle({ fontSize: FontSize.MD });
});

it("should render BodyTitle1 variant", () => {
  const { container } = render(<Text text="bar" variant="BodyTitle1" reset />);
  expect(container.firstChild).toContainHTML("p");
  expect(container.firstChild).toHaveStyle({ fontSize: FontSize.SM });
});

it("should render BodyTitle2 variant", () => {
  const { container } = render(<Text text="bar" variant="BodyTitle2" reset />);
  expect(container.firstChild).toContainHTML("p");
  expect(container.firstChild).toHaveStyle({ fontSize: FontSize.XS });
});

it("should render body1 variant", () => {
  const { container } = render(<Text text="bar" variant="Body1" reset />);
  expect(container.firstChild).toContainHTML("p");
  expect(container.firstChild).toHaveStyle({ fontSize: FontSize.SM });
  expect(container.firstChild).toHaveStyle({
    fontFamily: "'Poppins',sans-serif",
  });
  expect(container.firstChild).toHaveStyle({
    fontWeight: FontWeight.NORMAL,
  });
});

it("should render Body2 variant", () => {
  const { container } = render(<Text text="bar" variant="Body2" reset />);
  expect(container.firstChild).toContainHTML("p");
  expect(container.firstChild).toHaveStyle({ fontSize: FontSize.XS });
});

it("should render Body2 variant", () => {
  const { container } = render(<Text text="bar" variant="Body3" reset />);
  expect(container.firstChild).toContainHTML("p");
  expect(container.firstChild).toHaveStyle({ fontSize: FontSize.XXS });
});

it("should render Caption variant", () => {
  const { container } = render(<Text text="bar" variant="Caption" reset />);
  expect(container.firstChild).toContainHTML("p");
  expect(container.firstChild).toHaveStyle({ fontSize: FontSize.XXXS });
});

it("should render with children", () => {
  const { getByText } = render(<Text>FooBar</Text>);
  const linkElement = getByText("FooBar");
  expect(linkElement).toBeInTheDocument();
});

it("should render without margin", () => {
  const { getByText } = render(<Text text="bar" reset />);
  const linkElement = getByText("bar");
  expect(linkElement).toHaveStyle({ margin: "0" });
});

it("should render with color", () => {
  const { container } = render(<Text text="bar" color="tomato" />);
  expect(container.firstChild).toHaveStyle({ color: "tomato" });
});

it("should render font weight bold", () => {
  const { container } = render(<Text text="foo" weight="700" />);

  expect(container.firstChild).toHaveStyle({ fontWeight: "700" });
});

it("should render font weight semi-bold", () => {
  const { container } = render(<Text text="foo" weight="600" />);

  expect(container.firstChild).toHaveStyle({ fontWeight: "600" });
});

it("should render font weight medium", () => {
  const { container } = render(<Text text="foo" weight="500" />);

  expect(container.firstChild).toHaveStyle({ fontWeight: "500" });
});

it("should render font weight normal", () => {
  const { container } = render(<Text text="foo" weight="400" />);

  expect(container.firstChild).toHaveStyle({ fontWeight: "400" });
});

it("should render font weight normal on Display", () => {
  const { container } = render(
    <Text variant="Display1" text="foo" weight="400" />
  );

  expect(container.firstChild).toHaveStyle({ fontWeight: "400" });
});

it("should render ellipsis", () => {
  const { container } = render(<Text text="foo" ellipsis />);

  expect(container.firstChild).toHaveStyle({ textOverflow: "ellipsis" });
});

it("should render inline", () => {
  const { container } = render(<Text text="foo" inline />);

  expect(container.firstChild).toHaveStyle({ display: "inline-block" });
});

it("should render as", () => {
  const { container } = render(
    <Text variant="Display1" as="span" text="foo" />
  );

  expect(container.firstChild).toContainHTML("span");
});
