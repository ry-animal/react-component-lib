import userEvent from "@testing-library/user-event";
import { Properties } from ".";
import { render, screen } from "../../../util/test-utils";

describe("<Properties />", () => {
  const sampleProps = () => ({
    onChange: jest.fn(),
    title: "Properties",
  });

  describe("rendering", () => {
    test("should render properties and matches snapshot", () => {
      expect(
        render(<Properties {...sampleProps()} />).asFragment()
      ).toMatchSnapshot();
    });

    test("should render properties and matches snapshot (with title)", () => {
      expect(
        render(
          <Properties {...sampleProps()} title="Custom title" />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("should render properties and matches snapshot (with subtitle error)", () => {
      render(
        <Properties {...sampleProps()} subTitleError="Custom subtitle error" />
      );

      expect(screen.queryAllByText("Custom subtitle error").length).toBe(1);
    });

    test("should render properties and matches snapshot (with placeholders)", () => {
      const keyPlaceholder = "e.g. color";
      const valuePlaceholder = "e.g. blue";
      expect(
        render(
          <Properties
            {...sampleProps()}
            keyPlaceholder={keyPlaceholder}
            valuePlaceholder={valuePlaceholder}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("should render properties (with initial values and error alerts)", () => {
      render(
        <Properties
          {...sampleProps()}
          properties={[
            {
              errorLabelMessage: "",
              errorValueMessage:
                "Our platform does not allow inappropriate language.",
              key: "hello",
              value: "inappropriate message",
            },
          ]}
        />
      );

      const expectedNumberOfInputs = 2;
      const textboxFields = screen.queryAllByRole("textbox");
      expect(textboxFields.length).toBe(expectedNumberOfInputs);
      expect(textboxFields[0].id).toStrictEqual("hello");
      expect(textboxFields[1].id).toStrictEqual("inappropriate message");

      const expectedNumberOfErrorAlerts = 1;
      const alerts = screen.queryAllByRole("alert");
      expect(alerts.length).toBe(expectedNumberOfErrorAlerts);
      expect(alerts[0].innerHTML).toStrictEqual(
        "Our platform does not allow inappropriate language."
      );
    });
  });

  describe("event handling", () => {
    test("onChange is called", () => {
      const props = sampleProps();
      render(<Properties {...props} />);
      const [input] = screen.getAllByRole("textbox");
      userEvent.type(input, "some text");
      expect(props.onChange).toHaveBeenCalled();
    });

    test("editing input updates state", async () => {
      const props = sampleProps();
      render(<Properties {...props} />);
      const [inputKey, inputValue] = screen.getAllByRole(
        "textbox"
      ) as HTMLInputElement[];
      const propertyLabelText = "property label";
      userEvent.type(inputKey, propertyLabelText);
      expect(inputKey.value).toBe(propertyLabelText);

      const propertyValueText = "property value";
      userEvent.type(inputValue, propertyValueText);
      expect(inputValue.value).toBe(propertyValueText);
    });

    test("add button creates another input row", () => {
      render(<Properties {...sampleProps()} />);
      const addButton = screen.getByRole("button", { name: "Add Row" });
      userEvent.click(addButton);
      const expectedNumberOfInputs = 4;
      expect(screen.getAllByRole("textbox").length).toBe(
        expectedNumberOfInputs
      );
    });

    test("remove button removes input row", () => {
      render(<Properties {...sampleProps()} />);
      const removeButton = screen.getByRole("button", {
        name: "Remove property",
      });
      userEvent.click(removeButton);
      const expectedNumberOfInputs = 0;
      expect(screen.queryAllByRole("textbox").length).toBe(
        expectedNumberOfInputs
      );
    });
  });
});
