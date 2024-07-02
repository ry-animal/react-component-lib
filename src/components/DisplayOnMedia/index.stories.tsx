import { ComponentStory } from "@storybook/react";
import * as React from "react";
import { DisplayOnMedia, DisplayOnMediaEnums } from ".";

export default {
  component: DisplayOnMedia,
  title: "Components/DisplayOnMedia",
  argTypes: {
    showOn: {
      control: {
        type: "inline-radio",
        options: [
          DisplayOnMediaEnums.DESKTOP,
          DisplayOnMediaEnums.LAPTOP,
          DisplayOnMediaEnums.TABLET,
          DisplayOnMediaEnums.MOBILE,
          undefined,
        ],
      },
    },
    hideOn: {
      control: {
        type: "inline-radio",
        options: [
          DisplayOnMediaEnums.DESKTOP,
          DisplayOnMediaEnums.LAPTOP,
          DisplayOnMediaEnums.TABLET,
          DisplayOnMediaEnums.MOBILE,
          undefined,
        ],
      },
    },
  },
};

const boxStyle = {
  padding: "20px",
  margin: "20px",
  display: "block",
  color: "white",
  textAlign: "center",
  fontFamily: "sans-serif",
} as React.CSSProperties;

const Template: ComponentStory<typeof DisplayOnMedia> = (args) => (
  <DisplayOnMedia {...args}>
    <div style={{ ...boxStyle, background: "tomato" }}>
      Hello DOM!
      <br />
      (use Controls to Show / Hide)
    </div>
  </DisplayOnMedia>
);

export const Default = Template.bind({});

export const ShowOn = () => (
  <>
    <DisplayOnMedia showOn={DisplayOnMediaEnums.DESKTOP}>
      <div style={{ ...boxStyle, background: "crimson" }}>
        I <b>show</b> myself on Desktop
      </div>
    </DisplayOnMedia>
    <DisplayOnMedia showOn={DisplayOnMediaEnums.LAPTOP}>
      <div style={{ ...boxStyle, background: "cadetblue" }}>
        I <b>show</b> myself on Laptop
      </div>
    </DisplayOnMedia>
    <DisplayOnMedia showOn={DisplayOnMediaEnums.TABLET}>
      <div style={{ ...boxStyle, background: "steelblue" }}>
        I <b>show</b> myself on Tablet
      </div>
    </DisplayOnMedia>
    <DisplayOnMedia showOn={DisplayOnMediaEnums.MOBILE}>
      <div style={{ ...boxStyle, background: "tomato" }}>
        I <b>show</b> myself on Mobile
      </div>
    </DisplayOnMedia>
  </>
);

export const HideOn = () => (
  <>
    <DisplayOnMedia hideOn={DisplayOnMediaEnums.DESKTOP}>
      <div style={{ ...boxStyle, background: "crimson" }}>
        I <b>hide</b> myself on Desktop
      </div>
    </DisplayOnMedia>
    <DisplayOnMedia hideOn={DisplayOnMediaEnums.LAPTOP}>
      <div style={{ ...boxStyle, background: "cadetblue" }}>
        I <b>hide</b> myself on Laptop
      </div>
    </DisplayOnMedia>
    <DisplayOnMedia hideOn={DisplayOnMediaEnums.TABLET}>
      <div style={{ ...boxStyle, background: "steelblue" }}>
        I <b>hide</b> myself on Tablet
      </div>
    </DisplayOnMedia>
    <DisplayOnMedia hideOn={DisplayOnMediaEnums.MOBILE}>
      <div style={{ ...boxStyle, background: "tomato" }}>
        I <b>hide</b> myself on Mobile
      </div>
    </DisplayOnMedia>
  </>
);
