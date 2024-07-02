import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SectionHeader } from ".";

export default {
  title: "Components/Page/SectionHeader",
  component: SectionHeader,
  argTypes: {
    onChange: { action: "onChange" },
  },
} as ComponentMeta<typeof SectionHeader>;

const Template: ComponentStory<typeof SectionHeader> = (args) => (
  <SectionHeader {...args} />
);

export const SectionHeaderSimple = Template.bind({});
SectionHeaderSimple.args = {
  title: "Title of section",
};

export const SectionHeaderDescription = Template.bind({});
SectionHeaderDescription.args = {
  ...SectionHeaderSimple.args,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
};
