import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NftTileLoader } from "./Loader";

export default {
  component: NftTileLoader,
  title: "Components/Tiles/NftTile",
  argTypes: {
    hideFooter: { control: "boolean" },
  },
} as ComponentMeta<typeof NftTileLoader>;

const Template: ComponentStory<typeof NftTileLoader> = (args) => (
  <div style={{ maxWidth: 400 }}>
    <NftTileLoader {...args} />
  </div>
);

export const Loading = Template.bind({});

export const LoadingHiddenFooter = Template.bind({});
LoadingHiddenFooter.args = {
  hideFooter: true,
};
