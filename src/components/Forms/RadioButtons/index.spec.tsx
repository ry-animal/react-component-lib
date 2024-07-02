import { RadioButtons } from ".";
import { render } from "../../../util/test-utils";

describe("<RadioButtons />", () => {
  it("Default render", () => {
    const { getByLabelText } = render(
      <RadioButtons
        onChange={() => {}}
        selectedValue="normal"
        items={[
          {
            id: "normal",
            name: "transactionSpeed",
            value: "normal",
            label: "Normal",
          },
          {
            id: "fast",
            name: "transactionSpeed",
            value: "fast",
            label: "Fast",
          },
        ]}
      />
    );

    const radioNormal = getByLabelText("Normal");
    const radioFast = getByLabelText("Fast");
    expect(radioNormal).toBeChecked();
    expect(radioFast).not.toBeChecked();
  });
});
