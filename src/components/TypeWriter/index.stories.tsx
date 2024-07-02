import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TypeWriter } from ".";

export default {
  title: "Components/TypeWriter",
  component: TypeWriter,
} as ComponentMeta<typeof TypeWriter>;

const Template: ComponentStory<typeof TypeWriter> = () => (
  <TypeWriter>
    <p>To the moon!</p>
    <p>Hello world!</p>
  </TypeWriter>
);

export const ExampleTypeWriter = Template.bind({});
