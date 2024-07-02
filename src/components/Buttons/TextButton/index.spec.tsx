import userEvent from "@testing-library/user-event";
import { ButtonVariant, TextButton } from ".";
import { PALETTE_LIGHT } from "../../../theme/colors";
import { render, screen } from "../../../util/test-utils";

describe("<TextButton />", () => {
  const sampleProps = () => ({
    label: "Some Label",
    onClick: jest.fn(),
  });

  it("should render full size button ", () => {
    render(<TextButton {...sampleProps()} stretch />);
    expect(screen.getByRole("button")).toHaveStyleRule("width", "100%");
  });

  it("should render icon if icon src provided", () => {
    const props = sampleProps();
    render(<TextButton {...props} icon="./anyIconPath.svg" />);
    const img = screen.getByAltText(`${props.label} icon`);
    expect(img).toBeTruthy();
  });

  it("should render icon flipped if icon src provided and flipped set", () => {
    const props = sampleProps();
    render(<TextButton {...props} icon="./anyIconPath.svg" flipIcon={true} />);
    const img = screen.getByAltText(`${props.label} icon`);
    expect(img).toBeTruthy();
  });

  it("should render default/primary button", () => {
    render(<TextButton {...sampleProps()} />);
    const button = screen.getByRole("button");
    expect(button).toHaveStyleRule("background-color", PALETTE_LIGHT.PRIMARY_1);
    expect(button).toHaveStyleRule("color", PALETTE_LIGHT.PRIMARY_3);
  });

  it("should render secondary button", () => {
    render(<TextButton {...sampleProps()} variant={ButtonVariant.secondary} />);
    const button = screen.getByRole("button");
    expect(button).toHaveStyleRule("background-color", "transparent");
    expect(button).toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0 1px ${PALETTE_LIGHT.PRIMARY_1}`
    );
    expect(button).toHaveStyleRule("color", PALETTE_LIGHT.PRIMARY_1);
  });

  it("should render plaintext button", () => {
    render(<TextButton {...sampleProps()} variant={ButtonVariant.plaintext} />);
    const button = screen.getByRole("button");
    expect(button).toHaveStyleRule("color", PALETTE_LIGHT.TEXT_1);
    expect(button).toHaveStyleRule("background-color", "transparent");
    expect(button).toHaveStyleRule("border", "none");
  });

  it("should render reverse button", () => {
    render(<TextButton {...sampleProps()} variant={ButtonVariant.reverse} />);
    const button = screen.getByRole("button");
    expect(button).toHaveStyleRule("color", PALETTE_LIGHT.SURFACE_1);
    expect(button).toHaveStyleRule("background-color", "rgba(249,249,249,0.1)");
    expect(button).toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0 2px ${PALETTE_LIGHT.SURFACE_1}`
    );
  });

  it("should render transparent button", () => {
    render(
      <TextButton {...sampleProps()} variant={ButtonVariant.transparent} />
    );
    const button = screen.getByRole("button");
    expect(button).toHaveStyleRule("color", PALETTE_LIGHT.BLACK);
    expect(button).toHaveStyleRule("background-color", "rgba(255,255,255,0.7)");
  });

  it("should render success button", () => {
    render(<TextButton {...sampleProps()} variant={ButtonVariant.success} />);
    const button = screen.getByRole("button");
    expect(button).toHaveStyleRule("color", PALETTE_LIGHT.WHITE);
    expect(button).toHaveStyleRule("background-color", PALETTE_LIGHT.SUCCESS_2);
  });

  it("should render disabled button", () => {
    render(
      <TextButton {...sampleProps()} variant={ButtonVariant.primary} disabled />
    );
    const button = screen.getByRole("button");
    expect(button).toHaveStyleRule("opacity", "20%", {
      modifier: ":disabled",
    });
  });

  it("should render plaintext button", () => {
    const wrapper = render(
      <TextButton
        {...sampleProps()}
        variant={ButtonVariant.plaintext}
        disabled
      />
    );
    expect(wrapper).not.toHaveStyleRule("transition", "border-radius 0.25s", {
      modifier: ":hover",
    });
  });

  it("should render button size - large", () => {
    render(<TextButton {...sampleProps()} variant={ButtonVariant.primary} />);
    const button = screen.getByRole("button");
    expect(button).toHaveStyleRule("font-size", "18px");
    expect(button).toHaveStyleRule("min-height", "72px");
  });

  it("should render button size - medium", () => {
    render(
      <TextButton
        {...sampleProps()}
        variant={ButtonVariant.primary}
        size="medium"
      />
    );
    const button = screen.getByRole("button");
    expect(button).toHaveStyleRule("font-size", "16px");
    expect(button).toHaveStyleRule("min-height", "56px");
  });

  it("should render button size - small", () => {
    render(
      <TextButton
        {...sampleProps()}
        size="small"
        variant={ButtonVariant.primary}
      />
    );
    const button = screen.getByRole("button");
    expect(button).toHaveStyleRule("font-size", "16px");
    expect(button).toHaveStyleRule("min-height", "40px");
  });

  it("should render transparent button with isDarkTheme", () => {
    render(
      <TextButton
        {...sampleProps()}
        variant={ButtonVariant.transparent}
        isDarkTheme={true}
      />
    );
    const button = screen.getByRole("button");
    expect(button).toHaveStyleRule("color", PALETTE_LIGHT.WHITE);
    expect(button).toHaveStyleRule("background-color", "rgba(255,255,255,0.1)");
  });

  it("onClick is called", () => {
    const props = sampleProps();
    render(<TextButton {...props} />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(props.onClick).toHaveBeenCalled();
  });
});
