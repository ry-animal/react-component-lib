import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LikeButton } from ".";

export default {
  title: "Components/Buttons/LikeButton",
  component: LikeButton,
  argTypes: {
    onClick: { action: "onClick" },
  },
} as ComponentMeta<typeof LikeButton>;

const Template: ComponentStory<typeof LikeButton> = (args) => (
  <LikeButton {...args} />
);

export const DefaultLikeButton = Template.bind({});
DefaultLikeButton.args = {
  isLiked: false,
  likeCount: 5,
};

export const LikedButton = Template.bind({});
LikedButton.args = {
  isLiked: true,
  likeCount: 150,
};

export const LargeNumber = Template.bind({});
LargeNumber.args = {
  isLiked: true,
  likeCount: 4200,
};
