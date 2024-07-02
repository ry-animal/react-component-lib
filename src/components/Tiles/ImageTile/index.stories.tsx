import { ComponentMeta, Story } from "@storybook/react";
import { ImageTile } from ".";
import WrinkleBrain from "../../../assets/images/advanced-open-mint.png";
import { Loader } from "../../Loader";
import { TileSize } from "../SimpleTile/index.interface";
import { TileImageVariant } from "./index.interface";

export default {
  title: "Components/Tiles/ImageTile",
  component: ImageTile,
  argTypes: {
    imageVariant: {
      options: [TileImageVariant.primary, TileImageVariant.secondary],
      control: { type: "radio" },
    },
    size: {
      options: [TileSize.small, TileSize.large],
      control: { type: "radio" },
    },
    text: {},
    imgSrc: {},
    centerComponent: {
      options: [null],
      control: { type: "radio" },
    },
    onClick: { action: "onClick" },
  },
} as ComponentMeta<typeof ImageTile>;

const Template: Story = (args) => <ImageTile {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "GameStop NFT",
};

export const AddCollection = Template.bind({});

AddCollection.args = {
  imageVariant: TileImageVariant.primary,
  text: "Create a New Collection",
  size: TileSize.small,
};
export const Collection = Template.bind({});

Collection.args = {
  text: "Wrinkle Brain Collection",
  size: TileSize.small,
  imgSrc: WrinkleBrain,
};

export const AddNFT = Template.bind({});

AddNFT.args = {
  imageVariant: TileImageVariant.secondary,
  text: "Add Another NFT",
  size: TileSize.large,
};

export const DisabledTile = Template.bind({});

DisabledTile.args = {
  imageVariant: TileImageVariant.secondary,
  text: "Add Another NFT",
  size: TileSize.large,
  disabled: true,
};
export const LoaderTile = Template.bind({});

LoaderTile.args = {
  imageVariant: TileImageVariant.secondary,
  text: "Loading...",
  size: TileSize.large,
  disabled: true,
  centerComponent: <Loader />,
};
