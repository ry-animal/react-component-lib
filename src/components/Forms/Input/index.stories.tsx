import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { Input } from ".";

export default {
  title: "Components/Forms/Input",
  component: Input,
  argTypes: {
    onChange: { action: "onChange" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState("");
  return (
    <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

export const SimpleInput = Template.bind({});
SimpleInput.args = {
  label: "Input Label",
  placeholder: "placeholder text",
  type: "text",
};
SimpleInput.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/57DcJRCtilChsDwZMhtGLs/GME-NFT-Platform?node-id=9128%3A37102",
  },
};

export const FullInput = Template.bind({});
FullInput.args = {
  ...SimpleInput.args,
  placeholder: "search",
  value: "super long value visual",
};

export const InvalidInput = Template.bind({});
InvalidInput.args = {
  ...SimpleInput.args,
  label: "Label",
  type: "text",
  error: "Error message comes here",
  min: 10,
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  ...SimpleInput.args,
  label: "Label",
  type: "text",
  disabled: true,
};

export const Annotated = Template.bind({});
Annotated.args = {
  ...SimpleInput.args,
  label: "Label",
  type: "text",
  annotation: "ETH",
};

export const Number = Template.bind({});
Number.args = {
  ...SimpleInput.args,
  label: "Amount (number)",
  type: "number",
};
