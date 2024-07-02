import { ComponentStory } from "@storybook/react";
import * as React from "react";
import { DataBadge } from ".";

export default {
  component: DataBadge,
  title: "Components/DataBadge",
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    imageSrc: {
      control: {
        type: "text",
      },
    },
    name: {
      control: {
        type: "text",
      },
    },
    hasBorder: {
      control: {
        type: "boolean",
      },
    },
    hasLinkIcon: {
      control: {
        type: "boolean",
      },
    },
    inline: {
      control: {
        type: "boolean",
      },
    },
    isDark: {
      control: {
        type: "boolean",
      },
    },
    isImageHexagon: {
      control: {
        type: "boolean",
      },
    },
  },
};

const baseProps = {
  title: "Creator",
  name: "Nicolas Bouvier",
};

const Template: ComponentStory<typeof DataBadge> = (args) => (
  <DataBadge {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ...baseProps,
  imageSrc: "//source.unsplash.com/user/erondu/200x200",
};

export const MediumSize = Template.bind({});
MediumSize.args = {
  ...baseProps,
  imageSrc: "//source.unsplash.com/user/erondu/200x200",
  size: "m",
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  ...baseProps,
  imageSrc: "//source.unsplash.com/user/erondu/200x200",
  size: "l",
};

export const IsImageHexagon = Template.bind({});
IsImageHexagon.args = {
  ...baseProps,
  imageSrc: "//source.unsplash.com/user/erondu/200x200",
  isImageHexagon: true,
};

export const ShowImageFallback = Template.bind({});
ShowImageFallback.args = {
  ...baseProps,
  showImageFallback: true,
};

export const HasBorder = Template.bind({});
HasBorder.args = {
  ...baseProps,
  hasBorder: true,
};

export const HasLinkIcon = Template.bind({});
HasLinkIcon.args = {
  ...baseProps,
  hasLinkIcon: true,
};

export const Inline = () => (
  <div
    style={
      {
        display: "flex",
        flexWrap: "wrap",
      } as React.CSSProperties
    }
  >
    <DataBadge title="Rarity" name="200 originals" inline hasBorder />
    <DataBadge title="VR" name="Included" inline hasBorder />
    <DataBadge title="AR" name="Included" inline hasBorder />
    <DataBadge title="Characters" name="Halo Infinite" inline hasBorder />
    <DataBadge title="Eye" name="Red" inline hasBorder />
  </div>
);

export const NoProps = Template.bind({});
NoProps.args = {};
