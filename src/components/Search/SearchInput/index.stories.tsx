import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchInput } from ".";

export default {
  title: "Components/Search/SearchInput",
  component: SearchInput,
  argTypes: {
    onChange: {
      action: "onChange",
    },
    onEscape: { action: "onEscape" },
  },
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search",
};

export const CustomSearchInput = Template.bind({});
CustomSearchInput.args = {
  placeholder: "placeholder text",
  backgroundColor: "pink",
};
