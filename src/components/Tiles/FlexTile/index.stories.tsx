import { ComponentMeta, Story } from "@storybook/react";
import { FlexTile } from ".";

export default {
  title: "Components/Tiles/FlexTile",
  component: FlexTile,
  argTypes: {
    children: {},
  },
} as ComponentMeta<typeof FlexTile>;

const Template: Story = (args) => <FlexTile {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "",
};

export const ChildTile = Template.bind({});

ChildTile.args = {
  children: <div>Simple Child Tile</div>,
};
