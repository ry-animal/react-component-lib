import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "../Input";

export default {
  title: "Components/Forms/TextArea",
  component: Input,
  argTypes: {
    onChange: { action: "onChange" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args} asTextArea={true} />
);

export const SimpleTextArea = Template.bind({});
SimpleTextArea.args = {
  label: "Input Label",
  placeholder: "placeholder text",
};

export const FullTextArea = Template.bind({});
FullTextArea.args = {
  ...SimpleTextArea.args,
  value: "super long value visual",
};

export const InvalidTextArea = Template.bind({});
InvalidTextArea.args = {
  ...SimpleTextArea.args,
  error: "Error message comes here",
  required: true,
};

export const DisabledTextArea = Template.bind({});
DisabledTextArea.args = {
  ...SimpleTextArea.args,
  disabled: true,
};
