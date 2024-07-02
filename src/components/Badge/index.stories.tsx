import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { Badge } from ".";

export default {
  component: Badge,
  title: "Components/Badge",
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

const baseArgs = {
  name: "Mortal Judgment",
};

export const Default = Template.bind({});
Default.args = {
  ...baseArgs,
};

export const WithState = () => {
  const [isOpen, setIsOpen] = useState(true);
  if (isOpen) {
    return <Badge name="Mortal Judgment" onClose={() => setIsOpen(!isOpen)} />;
  }
  return <button onClick={() => setIsOpen(!isOpen)}>Display Badge</button>;
};

export const Large = Template.bind({});
Large.args = {
  ...baseArgs,
  size: "large",
};

export const MaxWidth = Template.bind({});
MaxWidth.args = {
  ...baseArgs,
  maxWidth: "100px",
};
