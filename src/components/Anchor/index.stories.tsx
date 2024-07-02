import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Anchor from ".";
import DataBadge from "../DataBadge";

export default {
  component: Anchor,
  title: "Components/Utils/WithLink",
} as ComponentMeta<typeof Anchor>;

const Template: ComponentStory<typeof Anchor> = (args) => (
  <BrowserRouter>
    <Anchor {...args}>Link Text</Anchor>
  </BrowserRouter>
);

const ChildrenTemplate: ComponentStory<typeof Anchor> = (args) => (
  <BrowserRouter>
    <Anchor {...args}>
      <DataBadge
        imageSrc="//source.unsplash.com/user/erondu/200x200"
        name="Nicolas Bouvier"
      />
    </Anchor>
  </BrowserRouter>
);

const args = {
  url: "/foo/bar",
};

export const DefaultTile = Template.bind({});
DefaultTile.args = {
  ...args,
};

export const AsLink = Template.bind({});
DefaultTile.args = {
  ...args,
  isRouterLink: true,
};

export const WithChildren = ChildrenTemplate.bind({});
WithChildren.args = {
  ...args,
};
