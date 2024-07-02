import userEvent from "@testing-library/user-event";
import { Tab, Tabs } from ".";
import { render, screen } from "../../util/test-utils";
import { TabStyleType } from "./Tabs";

describe("<Tabs />", () => {
  const tabs = [
    <Tab title="gm" key="1">
      <div>good morning frens</div>
    </Tab>,
    <Tab title="gn" key="2">
      <div>good night frens</div>
    </Tab>,
  ];

  const sampleProps = () => ({ onTabBarChange: jest.fn() });
  const getTab = (label: string) => screen.getByText(label);

  describe("rendering", () => {
    test("when active key exceeds number of children, reset to 0", async () => {
      const { rerender } = render(
        <Tabs {...sampleProps()} initialKey={2}>
          {...[
            ...tabs,
            <Tab title="ga" key="3">
              <div>good afternoon frens</div>
            </Tab>,
          ]}
        </Tabs>
      );
      const numTabsThree = 3;
      expect(screen.getByRole("tablist").childNodes.length).toBe(numTabsThree);

      rerender(<Tabs>{...tabs}</Tabs>);

      const numTabsTwo = 2;
      expect(screen.getByRole("tablist").childNodes.length).toBe(numTabsTwo);
    });

    test("display data on tab change", () => {
      const result = render(
        <>
          <Tabs>
            <Tab title="hello" key="1">
              <div>Hey</div>
            </Tab>
            <Tab title="world" key="2">
              <div>Planet</div>
            </Tab>
          </Tabs>
        </>
      );
      expect(result.getByText("Hey")).toBeInTheDocument();
      userEvent.click(getTab("world"));
      expect(result.getByText("Planet")).toBeInTheDocument();
    });
  });
  describe("event handling", () => {
    test("fires onChange when tab clicked", () => {
      const onClick = jest.fn();
      render(<Tabs onTabChange={onClick}>{...tabs}</Tabs>);
      userEvent.click(getTab("gn"));
      expect(onClick).toBeCalled();
    });

    test("fires onTabIdChange when tab clicked", () => {
      const onClick = jest.fn();
      render(<Tabs onTabIdChange={onClick}>{...tabs}</Tabs>);
      userEvent.click(getTab("gn"));
      expect(onClick).toBeCalled();
    });
  });
  describe("button style", () => {
    test("fires onChange when tab clicked", () => {
      const result = render(
        <>
          <Tabs tabStyleType={TabStyleType.button}>
            <Tab title="hello" active>
              <div>Hey</div>
            </Tab>
            <Tab title="world" key="2">
              <div>Planet</div>
            </Tab>
          </Tabs>
        </>
      );
      expect(result.getByText("Hey")).toBeInTheDocument();
      userEvent.click(getTab("world"));
      expect(result.getByText("Planet")).toBeInTheDocument();
    });
  });
});
