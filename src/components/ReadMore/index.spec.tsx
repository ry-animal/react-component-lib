import userEvent from "@testing-library/user-event";
import { ReadMore } from ".";
import { render, screen } from "../../util/test-utils";

describe("<ReadMore />", () => {
  it("should render with text", () => {
    render(<ReadMore text="Hello DOM!" />);
    expect(screen.getByText("Hello DOM!")).toBeTruthy();
  });

  it("should render with max character count and expand text on click", () => {
    const result = render(<ReadMore text="Hello DOM!" count={4} />);

    expect(result.queryByText("Hello DOM!")).toBeNull();
    expect(result.queryByText("Hell")).toBeTruthy();

    const button = result.getByText("...more");
    userEvent.click(button);

    expect(result.queryByText("Hello DOM!")).toBeTruthy();
  });
});
