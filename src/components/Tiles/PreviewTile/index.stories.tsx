import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PreviewTile } from ".";
import HangryCat from "../../../assets/images/hangrycat.jpg";
import SmolCatPhoto from "../../../assets/images/smolcat.png";
import { Props, ScreeningState } from "./index.interface";

export default {
  component: PreviewTile,
  title: "Components/Tiles/PreviewTile",
} as ComponentMeta<typeof PreviewTile>;

const Template: ComponentStory<typeof PreviewTile> = (args) => (
  <PreviewTile {...args} />
);

const args: Props = {
  creatorName: "smol cat",
  creatorImgSrc: SmolCatPhoto,
  itemCount: 1,
  nftImgSrc: HangryCat,
  title: "Hangry",
  ethPrice: 0.0001,
  dollarPrice: 420.69,
  subtitle: "Cats",
};

const argTypes = {
  onPreview: { action: "onPreview" },
  onEdit: { action: "onEdit" },
  onDelete: { action: "onDelete" },
};

export const DefaultTile = Template.bind({});
DefaultTile.args = {
  ...args,
};
DefaultTile.argTypes = {
  ...argTypes,
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  ...args,
  itemCount: 100,
  title:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
};
LongTitle.argTypes = {
  ...argTypes,
};

export const WithoutButtonGroup = Template.bind({});
WithoutButtonGroup.args = {
  ...args,
};

export const NotForSale = Template.bind({});
NotForSale.args = {
  ...args,
  forSale: false,
};

export const PendingScreening = Template.bind({});
PendingScreening.args = {
  ...args,
  screeningState: ScreeningState.pending,
};
PendingScreening.argTypes = {
  ...argTypes,
};

export const FailedScreening = Template.bind({});
FailedScreening.args = {
  ...args,
  screeningState: ScreeningState.failed,
};
FailedScreening.argTypes = {
  ...argTypes,
};
