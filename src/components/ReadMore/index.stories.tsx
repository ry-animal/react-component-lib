import { ComponentStory } from "@storybook/react";
import { ReadMore } from ".";

export default {
  component: ReadMore,
  title: "Components/ReadMore",
  argTypes: {
    count: {
      control: {
        type: "number",
      },
    },
    lessText: {
      control: {
        type: "text",
      },
    },
    moreText: {
      control: {
        type: "text",
      },
    },
  },
};

const baseProps = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

const Template: ComponentStory<typeof ReadMore> = (args) => (
  <ReadMore {...args} />
);

export const Default = Template.bind({});
Default.args = { ...baseProps };

export const WithTranslations = Template.bind({});
WithTranslations.args = {
  ...baseProps,
  lessText: "以下",
  moreText: "もっと",
};

export const WithCustomCount = Template.bind({});
WithCustomCount.args = {
  ...baseProps,
  count: 10,
};

export const NoProps = Template.bind({});
NoProps.args = {};
