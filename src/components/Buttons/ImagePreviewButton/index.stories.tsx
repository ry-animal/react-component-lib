import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ImagePreviewButton } from ".";
import GamestopLogo from "../../../assets/images/gamestop-nft-logo.png";

export default {
  title: "Components/Buttons/ImagePreviewButton",
  component: ImagePreviewButton,
} as ComponentMeta<typeof ImagePreviewButton>;

const Template: ComponentStory<typeof ImagePreviewButton> = (args) => (
  <ImagePreviewButton {...args} />
);

export const DefaultButton = Template.bind({});

export const ImageButton = Template.bind({});
ImageButton.args = {
  imgSrc: GamestopLogo,
};
