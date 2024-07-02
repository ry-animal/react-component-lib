import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { NftTile } from ".";

export default {
  component: NftTile,
  title: "Components/Tiles/NftTile",
} as ComponentMeta<typeof NftTile>;

const Template: ComponentStory<typeof NftTile> = (args) => (
  <BrowserRouter>
    <NftTile {...args} />
  </BrowserRouter>
);

const baseArgs = {
  title: "Hangry",
  creatorInfo: {
    creatorName: "smol cat",
    creatorImgSrc: "//source.unsplash.com/user/wsanter/200x200",
    creatorUrl: "/collection/smolcat",
  },
  maxWidth: 400,
  nftImgSrc: "//source.unsplash.com/user/erondu/800x800",
};

const args = {
  ...baseArgs,
  availabilityText: "1 available",
  nftUrl: "/token/0x000000000/0x1",
  footerInfo: {
    ethPrice: 0.01,
    dollarPrice: 420.69,
    isLoopring: true,
    isMainnet: false,
  },
  likeCount: 55,
};

const argTypes = {
  onLikeClick: { action: "onLikeClick" },
};

export const BaseNft = () => (
  <BrowserRouter>
    <NftTile {...baseArgs} nftUrl="/mint" />
  </BrowserRouter>
);

export const LoopringTile = Template.bind({});
LoopringTile.args = {
  ...args,
  footerInfo: {
    ...args.footerInfo,
    layer: "Loopring",
  },
};
LoopringTile.argTypes = {
  ...argTypes,
};

export const ImmutableTile = Template.bind({});
ImmutableTile.args = {
  ...args,
  footerInfo: {
    ...args.footerInfo,
    layer: "Immutable",
  },
};
ImmutableTile.argTypes = {
  ...argTypes,
};

export const Layer1Tile = Template.bind({});
Layer1Tile.args = {
  ...args,
  footerInfo: {
    ...args.footerInfo,
    layer: "L1",
  },
};
Layer1Tile.argTypes = {
  ...argTypes,
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  ...args,
  title:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  likeCount: 42000,
  footerInfo: {
    ethPrice: 1.1,
    dollarPrice: 420,
    layer: "L1",
  },
};
LongTitle.argTypes = {
  ...argTypes,
};

export const ManageNft = Template.bind({});
ManageNft.args = {
  ...args,
  onManageClick: () => {},
};
ManageNft.argTypes = {
  ...argTypes,
  onManageClick: { action: "onManageClick" },
};

export const NotForSale = Template.bind({});
NotForSale.args = {
  ...args,
  footerInfo: {
    layer: "Loopring",
  },
};
NotForSale.argTypes = {
  ...argTypes,
};

export const Suspended = Template.bind({});
Suspended.args = {
  ...args,
  footerInfo: {
    layer: "Loopring",
  },
  isSuspended: true,
};

export const WithoutFooter = Template.bind({});
WithoutFooter.args = {
  ...args,
  footerInfo: undefined,
};
WithoutFooter.argTypes = {
  ...argTypes,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...args,
  disabled: true,
};
Disabled.argTypes = {
  ...argTypes,
};

export const InvalidImage = Template.bind({});
InvalidImage.args = {
  ...args,
  nftImgSrc: "/bad-path.jpg",
};
InvalidImage.argTypes = {
  ...argTypes,
};

export const PlaceholderImage = Template.bind({});
PlaceholderImage.args = {
  ...args,
  nftImgSrc: "//source.unsplash.com/user/erondu/4000x4000",
  placeholderImgSrc: "//source.unsplash.com/user/erondu/5x5",
};
PlaceholderImage.argTypes = {
  ...argTypes,
};

export const VisibleImage = Template.bind({});
VisibleImage.args = {
  ...args,
  isVisible: true,
  onVisibilityClick: () => {},
  onManageClick: () => {},
};
VisibleImage.argTypes = {
  ...argTypes,
};

export const HiddenImage = Template.bind({});
HiddenImage.args = {
  ...args,
  isVisible: false,
  onVisibilityClick: () => {},
  onManageClick: () => {},
};
HiddenImage.argTypes = {
  ...argTypes,
};

export const EditDraft = Template.bind({});
EditDraft.args = {
  ...args,
  availabilityText: "",
  onLikeClick: undefined,
  footerInfo: {
    onEditDraft: () => {},
  },
};
EditDraft.argTypes = {};

export const DarkTile = Template.bind({});
DarkTile.args = {
  ...args,
  title: "Halo Issue #341 Halo Infinite",
  isVariant: true,
  disabled: true,
  collectionInfo: {
    collectionName: "Game Informer",
    collectionImgSrc: "//source.unsplash.com/user/wsanter/200x200",
    collectionUrl: "www.google.com",
  },
  ownerInfo: {
    ownerName: "Nicolas Bouviers",
    ownerImgSrc: "//source.unsplash.com/user/alexanderhipp/200x200",
    ownerUrl: "google.com",
  },
};

export const DarkTileWithOwnerAndCollection = Template.bind({});
DarkTileWithOwnerAndCollection.args = {
  ...args,
  title: "Halo Issue #341 Halo Infinite",
  isVariant: true,
  disabled: true,
  showBadgeTitle: true,
  footerInfo: { ...args.footerInfo, layer: "L1" },
  collectionInfo: {
    collectionName: "Game Informer",
    collectionImgSrc: "//source.unsplash.com/user/wsanter/200x200",
    collectionUrl: "www.google.com",
  },
  ownerInfo: {
    ownerName: "Nicolas Bouviers",
    ownerImgSrc: "//source.unsplash.com/user/alexanderhipp/200x200",
    ownerUrl: "google.com",
  },
};

export const WithoutLink = Template.bind({});
WithoutLink.args = {
  ...baseArgs,
};

export const ContainImageFit = Template.bind({});
ContainImageFit.args = {
  ...baseArgs,
  nftImgSrc: "//source.unsplash.com/user/erondu/500x800",
  nftImgFit: "contain",
};
