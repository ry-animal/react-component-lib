import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { Switch } from ".";

export default {
  component: Switch,
  title: "Components/Forms/Switch",
  argTypes: { onChange: { action: "onChange" } },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
  label: "Label",
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  label: "Label",
};

export const WithState = () => {
  const [checked, setChecked] = useState(false);

  return <Switch label="Lorem ipsum" checked={checked} onChange={setChecked} />;
};
