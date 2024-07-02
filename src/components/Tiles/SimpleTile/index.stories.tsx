import { ComponentMeta, Story } from "@storybook/react";
import { SimpleTile } from ".";
import { TileSize } from "./index.interface";

export default {
  title: "Components/Tiles/SimpleTile",
  component: SimpleTile,
  argTypes: {
    size: {
      options: [TileSize.small, TileSize.large],
      control: { type: "radio" },
    },
    children: {},
    onClick: { action: "onClick" },
  },
} as ComponentMeta<typeof SimpleTile>;

const Template: Story = (args) => <SimpleTile {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "",
};

export const ChildTile = Template.bind({});

ChildTile.args = {
  children: <div>Simple Child Tile</div>,
};

export const DisabledTile = Template.bind({});

DisabledTile.args = {
  children: <div>Simple Child Tile</div>,
  disabled: true,
};
