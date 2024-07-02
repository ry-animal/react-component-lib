import { Notification } from ".";
import { lightPaletteColors } from "../../theme/colors";
import { render } from "../../util/test-utils";
import { NotificationVariant } from "./index.interface";

describe("<Notification/>", () => {
  it("should render props", () => {
    const { getByText } = render(
      <Notification heading="foo" items={["bar"]} />
    );
    const barText = getByText("bar");
    const fooText = getByText("foo");
    expect(barText).toBeInTheDocument();
    expect(fooText).toBeInTheDocument();
  });
  it("should render information variant", () => {
    const { container } = render(
      <Notification variant={NotificationVariant.Information} />
    );
    expect(container.firstChild).toHaveStyle({
      backgroundColor: `${lightPaletteColors.SECONDARY_1};`,
      borderColor: `${lightPaletteColors.SECONDARY_3};`,
    });
  });
  it("should render error variant", () => {
    const { container } = render(
      <Notification variant={NotificationVariant.Error} />
    );
    expect(container.firstChild).toHaveStyle({
      backgroundColor: `${lightPaletteColors.ERROR_1};`,
      borderColor: `${lightPaletteColors.ERROR_2};`,
    });
  });
  it("should render success variant", () => {
    const { container } = render(
      <Notification variant={NotificationVariant.Success} />
    );
    expect(container.firstChild).toHaveStyle({
      backgroundColor: `${lightPaletteColors.SUCCESS_1};`,
      borderColor: `${lightPaletteColors.SUCCESS_2};`,
    });
  });
});
