import { SkeletonLoader } from ".";
import { render } from "../../util/test-utils";

describe("<SkeletonLoader />", () => {
  it("Default rendering css props", () => {
    const { container } = render(<SkeletonLoader />);
    const element = container.querySelector("span");
    const defaultProps = {
      height: "16px",
      width: "100%",
      radius: "8px",
    };

    expect(element).toHaveStyle({
      height: defaultProps.height,
      width: defaultProps.width,
    });

    expect(element).toHaveAttribute("radius", defaultProps.radius);
  });
  it("Custom rendering props", () => {
    const customProps = {
      height: "1em",
      width: "1em",
      radius: "2em",
    };

    const { container } = render(
      <SkeletonLoader
        height={customProps.height}
        width={customProps.width}
        radius={customProps.radius}
      />
    );
    const element = container.querySelector("span");
    expect(container.querySelector("span")).toHaveStyle({
      height: customProps.height,
      width: customProps.width,
    });

    expect(element).toHaveAttribute("radius", customProps.radius);
  });
});
