import { Step, Steps } from ".";
import { render } from "../../util/test-utils";

describe("<Steps />", () => {
  const steps: [Step, Step, ...Step[]] = [
    { label: "1", description: "open the fridge" },
    { label: "2", description: "take ice cream out" },
    { label: "3", description: "eat the ice cream" },
  ];
  const stepsProps = {
    steps,
    currentStep: 0,
  };

  describe("rendering", () => {
    test("renders horizontal 3 steps by default", () => {
      expect(render(<Steps {...stepsProps} />).asFragment()).toMatchSnapshot();
    });

    test("horizontal render container should have flex-direction row and align-items center", () => {
      expect(
        render(<Steps {...stepsProps} orientation="horizontal" />).asFragment()
      ).toMatchSnapshot();
    });

    test("vertical render container should have flex-direction column and align-items flex-start", () => {
      expect(
        render(<Steps {...stepsProps} orientation="vertical" />).asFragment()
      ).toMatchSnapshot();
    });
  });
});
