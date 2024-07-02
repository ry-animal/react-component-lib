import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from ".";

export default {
  component: Checkbox,
  title: "Components/Forms/Checkbox",
  argTypes: { onChange: { action: "onChange" } },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
  label: "Label",
  name: "Name",
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  label: "Label",
  name: "Name",
};

export const WithState = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      name="name"
      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
};
