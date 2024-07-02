import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Properties } from ".";

export default {
  title: "Components/Forms/Properties",
  component: Properties,
  argTypes: {
    onChange: { action: "onChange" },
  },
} as ComponentMeta<typeof Properties>;

const Template: ComponentStory<typeof Properties> = (args) => (
  <Properties {...args} />
);

export const DefaultProperties = Template.bind({});
DefaultProperties.args = {
  onChange: () => {},
  title: "Properties",
};

export const PlaceholderProperties = Template.bind({});
PlaceholderProperties.args = {
  ...DefaultProperties.args,
  keyPlaceholder: "e.g. color",
  valuePlaceholder: "e.g. blue",
};

export const PrefilledProperties = Template.bind({});
PrefilledProperties.args = {
  ...DefaultProperties.args,
  subTitleError: "*One or more of your properties has inapproriate language.",
  keyPlaceholder: "e.g. color",
  valuePlaceholder: "e.g. blue",
  properties: [
    {
      key: "Color",
      value: "Offensive shade of purple",
      errorLabelMessage: "",
      errorValueMessage: "Our platform does not allow inappropriate language.",
    },
  ],
};
