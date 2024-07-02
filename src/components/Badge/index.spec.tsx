import userEvent from "@testing-library/user-event";
import { Badge } from ".";
import { render, screen } from "../../util/test-utils";
import { BadgeProps } from "./index.interface";

describe("Badge", () => {
  const baseProps = {
    name: "Core",
    onClose: jest.fn(),
  };
  it("render with name prop", () => {
    render(<Badge {...baseProps} />);
    expect(screen.getByText(baseProps.name)).toBeDefined();
  });

  it("render with maxWidth prop", () => {
    const props = {
      ...baseProps,
      maxWidth: "100px",
    };
    render(<Badge {...props} />);
    expect(screen.getByRole("button")).toHaveStyleRule("max-width", "100px");
  });

  it("render medium badge if size prop is undefined", () => {
    const props = {
      ...baseProps,
      size: undefined,
    };
    render(<Badge {...props} />);
    const badge = screen.getByText(baseProps.name);
    expect(badge).toHaveStyleRule("font-size", "14px");
  });

  it("render medium badge", () => {
    const props: BadgeProps = {
      ...baseProps,
      size: "medium",
    };
    render(<Badge {...props} />);
    const badge = screen.getByText(baseProps.name);
    expect(badge).toHaveStyleRule("font-size", "14px");
  });

  it("render large badge", () => {
    const props: BadgeProps = {
      ...baseProps,
      size: "large",
    };
    render(<Badge {...props} />);
    const badge = screen.getByText(baseProps.name);
    expect(badge).toHaveStyleRule("font-size", "16px");
  });

  it("render with ellipsis", () => {
    render(<Badge {...baseProps} />);
    expect(screen.getByText(baseProps.name)).toHaveStyleRule(
      "text-overflow",
      "ellipsis"
    );
  });

  it("fire onClose when close clicked", () => {
    const onClick = jest.fn();
    const props = {
      ...baseProps,
      onClose: onClick,
    };
    render(<Badge {...props} />);
    userEvent.click(screen.getByRole("button"));
    expect(onClick).toBeCalled();
  });
});
