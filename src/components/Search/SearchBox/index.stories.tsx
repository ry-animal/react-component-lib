import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchBox } from ".";
import { fakeSearch } from "../fakeSearch";

export default {
  title: "Components/Search/SearchBox",
  component: SearchBox,
  argTypes: {
    onChange: {
      action: "onChange",
      defaultValue: fakeSearch,
    },
    onSelect: { action: "onSelect" },
    popularSearches: { defaultValue: ["bored devs", "cute dogs"] },
  },
} as ComponentMeta<typeof SearchBox>;

const Template: ComponentStory<typeof SearchBox> = (args) => (
  <SearchBox {...args} />
);

export const ExampleSearchBox = Template.bind({});
export const CustomSearchBox = Template.bind({});
ExampleSearchBox.args = {};
CustomSearchBox.args = {
  placeholder: "placeholder text",
  backgroundColor: "pink",
};
ExampleSearchBox.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/57DcJRCtilChsDwZMhtGLs/GME-NFT-Platform?node-id=8541%3A23140",
  },
};
