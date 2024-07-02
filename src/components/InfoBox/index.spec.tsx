import { InfoBox } from ".";
import { render } from "../../util/test-utils";

describe("<InfoBox/>", () => {
  const boxContent = [
    <div key="spam">spam musubi</div>,
    <div key="loco">loco moco</div>,
  ];

  test("should render children", () => {
    const { getByText } = render(<InfoBox>{boxContent}</InfoBox>);
    const spamText = getByText("spam musubi");
    const locoText = getByText("loco moco");
    expect(spamText).toBeInTheDocument();
    expect(locoText).toBeInTheDocument();
  });

  test("should not render border", () => {
    const box = render(
      <InfoBox showBorder={false}>{boxContent}</InfoBox>
    ).asFragment();

    expect(box).not.toHaveStyleRule("padding", "2px");
  });
});
