import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LoremIpsum } from "lorem-ipsum";
import seedrandom from "seedrandom";
import { DrawerMenu, MenuItem } from ".";

export default {
  component: DrawerMenu,
  title: "Components/DrawerMenu",
  argTypes: {
    menuTitle: {
      control: {
        type: "text",
      },
    },
    initialKey: {
      control: {
        type: "number",
      },
    },
    onClose: {
      action: "onClose",
    },
    onTabChange: {
      action: "onTabChange",
    },
  },
} as ComponentMeta<typeof DrawerMenu>;

const menuItems = ["Visibility", "Description", "Assets", "Links"];

const Template: ComponentStory<typeof DrawerMenu> = (args) => (
  <DrawerMenu {...args}>
    {menuItems.map((item, index) => (
      <MenuItem
        key={item}
        title={item}
        subtitle={index === 0 ? "HIDDEN" : undefined}
      >
        {item}
      </MenuItem>
    ))}
  </DrawerMenu>
);

export const Default = Template.bind({});
Default.args = {
  menuTitle: "Collection Settings",
};

const PARAGRAPH_COUNT = 50;
const LongContentTemplate: ComponentStory<typeof DrawerMenu> = (args) => {
  const loremIpsum = new LoremIpsum({ random: seedrandom("") });
  return (
    <DrawerMenu {...args}>
      {[...menuItems, ...menuItems, ...menuItems, ...menuItems].map(
        (item, index) => (
          <MenuItem
            key={item}
            title={item}
            subtitle={index === 0 ? "HIDDEN" : undefined}
          >
            {[...Array(PARAGRAPH_COUNT).keys()].map((i) => (
              <p key={i} style={{ margin: "0 0 15px 0" }}>
                {loremIpsum.generateParagraphs(1)}
              </p>
            ))}
          </MenuItem>
        )
      )}
    </DrawerMenu>
  );
};

export const LongContent = LongContentTemplate.bind({});
LongContent.args = {
  ...Default.args,
};
