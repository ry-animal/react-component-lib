import userEvent from "@testing-library/user-event";
import Accordion, { AccordionItem } from ".";
import { render } from "../../util/test-utils";

describe("<Accordion />", () => {
  describe("rendering", () => {
    test("should match snapshot", () => {
      expect(
        render(
          <Accordion>
            <AccordionItem summary="gm">
              <div>fren</div>
            </AccordionItem>
            <AccordionItem summary="gn">
              <div>moon</div>
            </AccordionItem>
          </Accordion>
        ).asFragment()
      ).toMatchSnapshot();
    });

    it("should only render one at a time", () => {
      const result = render(
        <Accordion>
          <AccordionItem summary="gm">
            <div>fren</div>
          </AccordionItem>
          <AccordionItem summary="gn">
            <div>moon</div>
          </AccordionItem>
        </Accordion>
      );

      const accordianButton = (text: string) => result.getByText(text);

      userEvent.click(accordianButton("gm"));
      expect(result.queryByText("fren")).toBeVisible();

      userEvent.click(accordianButton("gn"));
      expect(result.queryByText("fren")).not.toBeVisible();

      userEvent.click(accordianButton("gm"));
      expect(result.queryByText("moon")).not.toBeVisible();
    });

    it("should close itself if clicked again", () => {
      const result = render(
        <Accordion>
          <AccordionItem summary="gm">
            <div>fren</div>
          </AccordionItem>
          <AccordionItem summary="gn">
            <div>moon</div>
          </AccordionItem>
        </Accordion>
      );

      const accordianButton = (text: string) => result.getByText(text);

      userEvent.click(accordianButton("gm"));
      expect(result.queryByText("fren")).toBeVisible();

      userEvent.click(accordianButton("gm"));
      expect(result.queryByText("moon")).not.toBeVisible();
    });
  });
});
