import { Tab } from ".";
import { render, screen } from "../../../util/test-utils";

describe("<Tab />", () => {
  it("should display text", () => {
    render(<Tab title="Hello" />);
    expect(screen.getByText("Hello"));
  });

  it("should be active", () => {
    render(<Tab title="World" active />);
    expect(screen.getByRole("tab")).toHaveAttribute("aria-selected", "true");
  });
});
