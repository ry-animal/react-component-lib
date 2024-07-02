import { screen } from "@testing-library/react";
import { ProgressBar } from ".";
import { render } from "../../util/test-utils";

describe("<ProgressBar />", () => {
  const sampleProps = () => ({
    label: "Some Label",
    progress: 0,
  });

  describe("rendering", () => {
    test("Default rendering matches snapshot", () => {
      expect(
        render(<ProgressBar {...sampleProps()} />).asFragment()
      ).toMatchSnapshot();
    });

    test("Renders a progress bar", () => {
      render(<ProgressBar {...sampleProps()} />);
      expect(screen.getAllByRole("progressbar").length).toBe(1);
    });

    test("Progress percent updates width", () => {
      render(<ProgressBar {...sampleProps()} progress={0.5} />);
      const progressBar = screen.getByRole("progressbar");
      expect(progressBar).toHaveStyleRule("width", "50%");
    });

    test("Position sets label text alignment", () => {
      render(<ProgressBar {...sampleProps()} position="center" />);
      const label = screen.getByText("Some Label");
      expect(label).toHaveStyleRule("text-align", "center");
    });
  });
});
