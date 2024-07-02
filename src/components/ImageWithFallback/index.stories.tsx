import { ComponentMeta, ComponentStory } from "@storybook/react";
import ImageWithFallback from ".";
import BrokenImage from "../../assets/images/broken-image.jpg";

export default {
  component: ImageWithFallback,
  title: "Components/ImageWithFallback",
} as ComponentMeta<typeof ImageWithFallback>;

const Template: ComponentStory<typeof ImageWithFallback> = (args) => (
  <ImageWithFallback style={{ maxWidth: "400px" }} {...args} />
);

const args = {
  imgSrc: "//source.unsplash.com/user/erondu/400x400",
  fallbackImgSrc: BrokenImage,
  alt: "img",
};

export const DefaultImage = Template.bind({});
DefaultImage.args = {
  ...args,
};

export const Fallback = Template.bind({});
Fallback.args = {
  ...args,
  imgSrc: "./bad-path.jpg",
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  ...args,
  imgSrc: "//source.unsplash.com/user/erondu/4000x4000",
  placeholderImgSrc: "//source.unsplash.com/user/erondu/5x5",
};
