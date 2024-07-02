/* eslint-disable no-magic-numbers */
import * as React from "react";
import { withDesign } from "storybook-addon-designs";
import { Switch, Text } from "../";
import { PALETTE_DARK, PALETTE_LIGHT } from "./colors";

export default {
  title: "Theme/Colors",
  decorators: [withDesign],
};

const colorBlock = {
  marginBottom: 32,
} as React.CSSProperties;

const Item = ({
  itemKey,
  itemValue,
  color,
}: {
  itemKey: string;
  itemValue: string;
  color: string;
}) => {
  const renderStyles = {
    margin: 0,
    padding: "32px 16px 16px",
    backgroundColor: itemValue,
  } as React.CSSProperties;

  return (
    <div>
      <div style={renderStyles}>
        <Text text={itemKey} color={color} weight="700" reset />
        <Text
          text={itemValue}
          variant="Caption"
          style={{
            color,
            textTransform: "uppercase",
          }}
          reset
        />
      </div>
    </div>
  );
};

const getKey = (position: number) => Object.keys(PALETTE_LIGHT)[position];
const getColors = (isDark: boolean) => (isDark ? PALETTE_DARK : PALETTE_LIGHT);

interface ColorGroup {
  isDark?: boolean;
}

function Primary({ isDark = false }: ColorGroup) {
  return (
    <div style={colorBlock}>
      <Text
        text="Primary"
        variant="Display4"
        color={getColors(isDark).TEXT_1}
      />
      <Item
        itemKey={getKey(0)}
        itemValue={getColors(isDark).PRIMARY_1}
        color={isDark ? "black" : "white"}
      />
      <Item
        itemKey={getKey(1)}
        itemValue={getColors(isDark).PRIMARY_2}
        color={isDark ? "black" : "white"}
      />
      <Item
        itemKey={getKey(2)}
        itemValue={getColors(isDark).PRIMARY_3}
        color={isDark ? "white" : "black"}
      />
    </div>
  );
}

function Secondary({ isDark = false }: ColorGroup) {
  return (
    <div style={colorBlock}>
      <Text
        text="Secondary"
        variant="Display4"
        color={getColors(isDark).TEXT_1}
      />
      <Item
        itemKey={getKey(3)}
        itemValue={getColors(isDark).SECONDARY_1}
        color="black"
      />
      <Item
        itemKey={getKey(4)}
        itemValue={getColors(isDark).SECONDARY_2}
        color="black"
      />
      <Item
        itemKey={getKey(5)}
        itemValue={getColors(isDark).SECONDARY_3}
        color="black"
      />
    </div>
  );
}

function Success({ isDark = false }: ColorGroup) {
  return (
    <div style={colorBlock}>
      <Text
        text="Success"
        variant="Display4"
        color={getColors(isDark).TEXT_1}
      />
      <Item
        itemKey={getKey(6)}
        itemValue={getColors(isDark).SUCCESS_1}
        color={isDark ? "white" : "black"}
      />
      <Item
        itemKey={getKey(7)}
        itemValue={getColors(isDark).SUCCESS_2}
        color="white"
      />
      <Item
        itemKey={getKey(8)}
        itemValue={getColors(isDark).SUCCESS_3}
        color="white"
      />
    </div>
  );
}

function Error({ isDark = false }: ColorGroup) {
  return (
    <div style={colorBlock}>
      <Text text="Error" variant="Display4" color={getColors(isDark).TEXT_1} />
      <Item
        itemKey={getKey(9)}
        itemValue={getColors(isDark).ERROR_1}
        color={isDark ? "white" : "black"}
      />
      <Item
        itemKey={getKey(10)}
        itemValue={getColors(isDark).ERROR_2}
        color="white"
      />
      <Item
        itemKey={getKey(11)}
        itemValue={getColors(isDark).ERROR_3}
        color="white"
      />
    </div>
  );
}

function Surface({ isDark = false }: ColorGroup) {
  return (
    <div style={colorBlock}>
      <Text
        text="Surface"
        variant="Display4"
        color={getColors(isDark).TEXT_1}
      />
      <Item
        itemKey={getKey(12)}
        itemValue={getColors(isDark).SURFACE_1}
        color={isDark ? "white" : "black"}
      />
      <Item
        itemKey={getKey(13)}
        itemValue={getColors(isDark).SURFACE_2}
        color={isDark ? "white" : "black"}
      />
      <Item
        itemKey={getKey(14)}
        itemValue={getColors(isDark).SURFACE_3}
        color={isDark ? "white" : "black"}
      />
      <Item
        itemKey={getKey(15)}
        itemValue={getColors(isDark).SURFACE_4}
        color={isDark ? "white" : "black"}
      />
    </div>
  );
}

function Texto({ isDark = false }: ColorGroup) {
  return (
    <div style={colorBlock}>
      <Text text="Text" variant="Display4" color={getColors(isDark).TEXT_1} />
      <Item
        itemKey={getKey(16)}
        itemValue={getColors(isDark).TEXT_1}
        color={isDark ? "black" : "white"}
      />
      <Item
        itemKey={getKey(17)}
        itemValue={getColors(isDark).TEXT_2}
        color={isDark ? "black" : "white"}
      />
      <Item
        itemKey={getKey(18)}
        itemValue={getColors(isDark).TEXT_3}
        color={isDark ? "black" : "white"}
      />
      <Item
        itemKey={getKey(19)}
        itemValue={getColors(isDark).TEXT_4}
        color={isDark ? "black" : "white"}
      />
    </div>
  );
}

function Basic({ isDark = false }: ColorGroup) {
  return (
    <div style={colorBlock}>
      <Text text="Basic" variant="Display4" color={getColors(isDark).TEXT_1} />
      <Item
        itemKey={getKey(20)}
        itemValue={getColors(isDark).WHITE}
        color="black"
      />
      <Item
        itemKey={getKey(21)}
        itemValue={getColors(isDark).BLACK}
        color="white"
      />
    </div>
  );
}

export const LightThemePalette = () => (
  <div
    style={{
      backgroundColor: PALETTE_LIGHT.SURFACE_1,
      margin: -16,
      padding: 16,
    }}
  >
    <Primary />
    <Secondary />
    <Success />
    <Error />
    <Surface />
    <Texto />
    <Basic />
  </div>
);
LightThemePalette.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/YzgT8FhyEaHw5s1rimOnkn/NFT-Marketplace-v1?node-id=10847%3A6766",
  },
};

export const DarkThemePalette = () => (
  <div
    style={{
      backgroundColor: PALETTE_DARK.SURFACE_1,
      margin: -16,
      padding: 16,
    }}
  >
    <Primary isDark />
    <Secondary isDark />
    <Success isDark />
    <Error isDark />
    <Surface isDark />
    <Texto isDark />
    <Basic isDark />
  </div>
);

DarkThemePalette.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/YzgT8FhyEaHw5s1rimOnkn/NFT-Marketplace-v1?node-id=10847%3A6825",
  },
};

export const ThemeSwitcher = () => {
  const [isDark, setIsdark] = React.useState(false);
  const handleRadioChange = () => setIsdark(!isDark);

  return (
    <>
      <div style={colorBlock}>
        <Switch
          checked={isDark}
          label="Dark Mode"
          onChange={handleRadioChange}
        />
      </div>
      {isDark ? <DarkThemePalette /> : <LightThemePalette />}
    </>
  );
};
ThemeSwitcher.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/YzgT8FhyEaHw5s1rimOnkn/NFT-Marketplace-v1?node-id=10158%3A130155",
  },
};
