import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StatsBlock } from ".";

export default {
  title: "Components/StatsBlock",
  component: StatsBlock,
  argTypes: {
    onClick: { action: "onClick" },
  },
} as ComponentMeta<typeof StatsBlock>;

const Template: ComponentStory<typeof StatsBlock> = (args) => (
  <div style={{ width: "100%", paddingBottom: "100%", background: "#c2d0ed" }}>
    <StatsBlock {...args} />
  </div>
);

export const DefaultStats = Template.bind({});
DefaultStats.args = {
  stats: [
    { label: "NFTs", value: 100000 },
    { label: "Owners", value: 45000 },
    { label: "For Sale", value: 10 },
    { label: "Weekly Volume", value: 4024, isETH: true },
    { label: "Floor Price", value: 0.25, isETH: true },
  ],
};

export const MinimumFloor = Template.bind({});
MinimumFloor.args = {
  stats: [
    { label: "NFTs", value: 100000 },
    { label: "Owners", value: 45000 },
    { label: "For Sale", value: 10 },
    { label: "Weekly Volume", value: 4024, isETH: true },
    { label: "Floor Price", value: 0.0005, isETH: true },
  ],
};

export const BelowMinFloor = Template.bind({});
BelowMinFloor.args = {
  stats: [
    { label: "NFTs", value: 100000 },
    { label: "Owners", value: 45000 },
    { label: "For Sale", value: 10 },
    { label: "Weekly Volume", value: 4024, isETH: true },
    { label: "Floor Price", value: 0.0004, isETH: true },
  ],
};

export const Clickable = Template.bind({});
Clickable.args = {
  stats: [
    { label: "NFTs", value: 100000, onClick: () => {} },
    { label: "Owners", value: 45000, onClick: () => {} },
    { label: "For Sale", value: 10, onClick: () => {} },
    { label: "Weekly Volume", value: 4024, isETH: true, onClick: () => {} },
    { label: "Floor Price", value: 0, isETH: true, onClick: () => {} },
  ],
};

export const UsdValue = Template.bind({});
UsdValue.args = {
  stats: [
    { label: "NFTs", value: 100000 },
    { label: "Owners", value: 45000 },
    { label: "For Sale", value: 10 },
    { label: "Weekly Volume", value: 4024, isUSD: true },
    { label: "Floor Price", value: 0.25, isUSD: true },
  ],
};

const DarkThemeTemplate: ComponentStory<typeof StatsBlock> = (args) => (
  <div style={{ width: "100%", paddingBottom: "100%", background: "#000" }}>
    <StatsBlock {...args} />
  </div>
);

export const DarkMode = DarkThemeTemplate.bind({});
DarkMode.args = {
  stats: [
    { label: "NFTs", value: 100000, onClick: () => {} },
    { label: "Owners", value: 45000, onClick: () => {} },
    { label: "For Sale", value: 10, onClick: () => {} },
    { label: "Weekly Volume", value: 4024, isETH: true, onClick: () => {} },
    { label: "Floor Price", value: 0.25, isETH: true, onClick: () => {} },
  ],
  isDarkTheme: true,
};
