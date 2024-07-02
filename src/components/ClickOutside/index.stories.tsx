import { ComponentMeta, ComponentStory } from "@storybook/react";
import ClickOutside from ".";

export default {
  component: ClickOutside,
  title: "Components/ClickOutside",
  argTypes: {
    onClick: { action: "onClick" },
  },
} as ComponentMeta<typeof ClickOutside>;

const Template: ComponentStory<typeof ClickOutside> = (args) => (
  <div style={{ width: "100%", height: "400px", background: "rgba(0,0,0,0.2" }}>
    <ClickOutside {...args}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: "white",
          width: "50%",
          height: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        clicking on the grey region will trigger outside click
      </div>
    </ClickOutside>
  </div>
);

export const DefaultTile = Template.bind({});
