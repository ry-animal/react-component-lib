import { ComponentMeta, Story } from "@storybook/react";
import { useState } from "react";
import { SelectableTile } from ".";
import GamestopLogo from "../../../assets/images/gs-nft-logo.svg";

export default {
  title: "Components/Tiles/SelectableTile",
  component: SelectableTile,
  argTypes: {
    onClick: { action: "onClick" },
    selected: { control: "boolean" },
    displayContent: { control: "text" },
    iconUrl: { control: "text" },
    title: { control: "text" },
    subtitle: { control: "text" },
    disabled: { control: "boolean" },
  },
} as ComponentMeta<typeof SelectableTile>;

const Template: Story = (args) => {
  const [selected, setSelected] = useState(false);
  return (
    <SelectableTile
      {...args}
      onClick={() => setSelected((prev) => !prev)}
      selected={selected}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "GameStop NFT",
  onClick: () => {},
};

export const Icon = Template.bind({});
Icon.args = {
  title: "GameStop NFT",
  iconUrl: GamestopLogo,
};

export const Custom = Template.bind({});
Custom.args = {
  title: (
    <>
      This is a<br /> red square
    </>
  ),
  displayContent: <div style={{ width: 50, height: 50, background: "red" }} />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "GameStop NFT",
  iconUrl: GamestopLogo,
  disabled: true,
};

const LayoutTemplate: Story = (args) => {
  const [selected, setSelected] = useState(0);

  const numItems = 10;
  const two = 2;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gap: 16,
      }}
    >
      {Array.from(Array(numItems)).map((_item, index) => (
        <SelectableTile
          {...args}
          key={index}
          title={
            index % two ? (
              "Single line"
            ) : (
              <>
                Title on
                <br />
                two lines
              </>
            )
          }
          onClick={() => setSelected(index)}
          selected={selected === index}
        />
      ))}
    </div>
  );
};
export const Layout = LayoutTemplate.bind({});
Layout.args = {
  title: "NFT",
  subtitle: "20 Draft Nfts",
};
