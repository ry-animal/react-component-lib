import userEvent from "@testing-library/user-event";
import { StatsBlock } from ".";
import { render, screen } from "../../util/test-utils";

describe("<StatsBlock />", () => {
  const sampleProps = () => ({
    stats: [
      { label: "Floor Price", value: 0.00009, isETH: true, onClick: jest.fn() },
      { label: "Weekly Volume", value: 4024, isUSD: true },
      { label: "NFTs", value: 100000 },
      { label: "Owners", value: 45000 },
      { label: "For Sale", value: 10 },
    ],
  });

  describe("rendering", () => {
    test("should match snapshot", () => {
      expect(
        render(<StatsBlock {...sampleProps()} />).asFragment()
      ).toMatchSnapshot();
    });

    test("should render with dark theme styles", () => {
      expect(
        render(
          <StatsBlock {...sampleProps()} isDarkTheme={true} />
        ).asFragment()
      ).toMatchSnapshot();
    });
  });

  describe("event handling", () => {
    test("can be clicked", () => {
      const props = sampleProps();
      const [stat] = props.stats;
      const { onClick } = stat;
      render(<StatsBlock {...props} />);
      userEvent.click(screen.getByLabelText(stat.label));
      expect(onClick).toBeCalled();
    });
  });
});
