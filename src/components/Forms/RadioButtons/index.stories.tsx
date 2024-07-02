import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { RadioButtons } from ".";
import { Text } from "../../Text";

export default {
  title: "Components/Forms/RadioButtons",
  component: RadioButtons,
} as ComponentMeta<typeof RadioButtons>;

const Template: ComponentStory<typeof RadioButtons> = (args) => (
  <RadioButtons {...args} />
);

const sampleItemsSimple = [
  {
    id: "yes",
    name: "simple",
    value: "yes",
    label: "YES",
  },
  {
    id: "no",
    name: "theme",
    value: "no",
    label: "NO",
  },
];

const sampleItems = [
  {
    id: "dark",
    name: "theme",
    value: "dark",
    label: "Dark",
  },
  {
    id: "light",
    name: "theme",
    value: "light",
    label: "Light",
  },
  {
    id: "auto",
    name: "theme",
    value: "auto",
    label: "Auto",
  },
];

export const Default = Template.bind({});
Default.args = {
  items: sampleItemsSimple,
  selectedValue: "yes",
};

export const WithState = () => {
  const [selectedValue, setSelectedValue] = useState(sampleItems[0].value);

  return (
    <>
      <div>
        <Text text="Selected Value" inline />
        <Text text={`: ${selectedValue}`} variant="BodyTitle1" inline />
      </div>
      <RadioButtons
        items={sampleItems}
        selectedValue={selectedValue}
        onChange={({ target }) => setSelectedValue(target.value)}
      />
    </>
  );
};
