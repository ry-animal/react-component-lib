import { Banner, BannerProps } from ".";
import { render } from "../../util/test-utils";

const createPropsWithActions = (props: BannerProps) => ({
  ...props,
  dismissAction: () => {},
  primaryAction: {
    label: "Add Funds",
    onClick: () => {},
  },
  secondaryAction: {
    label: "Do it later",
    onClick: () => {},
  },
});

describe("<Banner/>", () => {
  const baseProps = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    showDismissButton: false,
  };
  test("Default rendering matches snapshot", () => {
    expect(render(<Banner {...baseProps} />).asFragment()).toMatchSnapshot();
  });

  test("Default rendering matches snapshot with Actions", () => {
    expect(
      render(<Banner {...createPropsWithActions(baseProps)} />).asFragment()
    ).toMatchSnapshot();
  });

  test("Rendering matches snapshot with Dismiss Button enabled", () => {
    expect(
      render(
        <Banner
          {...createPropsWithActions({ ...baseProps, showDismissButton: true })}
        />
      ).asFragment()
    ).toMatchSnapshot();
  });

  test("Rendering matches snapshot with description", () => {
    expect(
      render(
        <Banner
          {...createPropsWithActions({
            ...baseProps,
            description: <p>hello world</p>,
          })}
        />
      ).asFragment()
    ).toMatchSnapshot();
  });
});
