import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchResult } from ".";
import { FontFamily } from "../../../theme/fonts";

const SampleNft = "//source.unsplash.com/user/erondu/400x600";

export default {
  title: "Components/Search/SearchResult",
  component: SearchResult,
  argTypes: {
    highlighted: {
      options: [true, false],
      control: { type: "radio" },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof SearchResult>;

const Template: ComponentStory<typeof SearchResult> = (args) => (
  <div style={{ fontFamily: FontFamily.SANS_SERIF_BODY }}>
    <SearchResult {...args} />
  </div>
);

export const Header = Template.bind({});
Header.args = {
  entry: {
    type: "header",
    isResult: false,
    label: "NFTs:",
  },
};

export const Suggestion = Template.bind({});
Suggestion.args = {
  entry: {
    type: "suggestion",
    isResult: false,
    label: "Suggestion",
  },
};

export const Collection = Template.bind({});
Collection.args = {
  entry: {
    type: "collection",
    isResult: true,
    label: "Pretty NFT",
    description: "Zoom in on this, screenshot away. Power to the player!",
    imageUrl: SampleNft,
    collectionSlug: "pretty-nft",
  },
};

export const NFT = Template.bind({});
NFT.args = {
  entry: {
    type: "nft",
    isResult: true,
    label: "Pretty NFT",
    description: "Zoom in on this, screenshot away. Power to the player!",
    imageUrl: SampleNft,
    collectionSlug: "pretty-nft",
    nftPath: "123/456",
  },
};

export const Fallback = Template.bind({});
Fallback.args = {
  entry: {
    type: "nft",
    isResult: true,
    label: "Pretty NFT",
    description: "Zoom in on this, screenshot away. Power to the player!",
    imageUrl: "./bad-url.jpg",
    fallbackImageUrl: SampleNft,
    collectionSlug: "pretty-nft",
    nftPath: "123/456",
  },
};
