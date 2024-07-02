import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { CollectionTile } from ".";

export default {
  component: CollectionTile,
  title: "Components/Tiles/CollectionTile",
  argTypes: {
    collectionImgSrc: { control: "text" },
    collectionName: { control: "text" },
    collectionUrl: { control: "text" },
    creatorImgSrc: { control: "text" },
    creatorName: { control: "text" },
    contentSize: { control: "radio", options: ["s", "m"] },
    disabled: { control: "boolean" },
    onClick: {
      action: "onClick",
    },
  },
} as ComponentMeta<typeof CollectionTile>;

const Template: ComponentStory<typeof CollectionTile> = (args) => (
  <BrowserRouter>
    <div style={{ maxWidth: 350 }}>
      <CollectionTile {...args} />
    </div>
  </BrowserRouter>
);

export const ExampleCard = Template.bind({});
ExampleCard.args = {
  collectionImgSrc: "//source.unsplash.com/collection/2060931/900x880",
  collectionName: "Power to the players",
  collectionUrl: "/collection/test-collection",
  creatorImgSrc: "//source.unsplash.com/user/wsanter/200x200",
  creatorName: "Player one",
};

ExampleCard.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/57DcJRCtilChsDwZMhtGLs/GME-NFT-Platform?node-id=8377%3A23346",
  },
};

export const AsLink = Template.bind({});
AsLink.args = {
  ...ExampleCard.args,
  onClick: undefined,
};

export const AsOnClick = Template.bind({});
AsOnClick.args = {
  ...ExampleCard.args,
  onClick: () => {},
};

export const NoImage = Template.bind({});
NoImage.args = {
  ...ExampleCard.args,
  collectionImgSrc: "",
};

export const IsImmutablex = Template.bind({});
IsImmutablex.args = {
  ...ExampleCard.args,
  layer: "Immutable",
};

export const IsLoopring = Template.bind({});
IsLoopring.args = {
  ...ExampleCard.args,
  layer: "Loopring",
};

export const IsLayer1 = Template.bind({});
IsLayer1.args = {
  ...ExampleCard.args,
  layer: "L1",
};

export const WithoutLayer = Template.bind({});
WithoutLayer.args = {
  ...ExampleCard.args,
  layer: undefined,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...ExampleCard.args,
  disabled: true,
};

export const LongContent = Template.bind({});
LongContent.args = {
  ...ExampleCard.args,
  collectionName: "Very Long Collention Name that Overflows Text",
  creatorName: "Very Long Creator Name that Overflows Text",
};

const SmallTemplate: ComponentStory<typeof CollectionTile> = (args) => (
  <div style={{ maxWidth: 90 }}>
    <BrowserRouter>
      <CollectionTile {...args} />
    </BrowserRouter>
  </div>
);

export const Small = SmallTemplate.bind({});
Small.args = {
  ...ExampleCard.args,
  creatorName: "",
  contentSize: "s",
};
