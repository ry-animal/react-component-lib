import * as React from "react";
import { lightPaletteColors } from "./colors";
import { FONT } from "./fonts";

export default {
  title: "Theme/Fonts",
  parameters: { options: { showPanel: false } },
};

const codeStyles = {
  backgroundColor: lightPaletteColors.PRIMARY_3,
  padding: "2px 8px",
  marginBottom: "62px",
  fontSize: "14px",
  fontFamily: "Lucida Console, Courier, monospace",
} as React.CSSProperties;

const Item = ({
  itemKey,
  itemValue,
  fontType,
}: {
  itemKey: string;
  itemValue: string;
  fontType: string;
}) => {
  const renderStyles = {
    margin: 0,
    lineHeight: 1,
    fontFamily: fontType === "family" ? itemValue : FONT.family.title,
    fontSize: fontType === "size" ? itemValue : FONT.size.XXL,
    fontWeight: fontType === "weight" ? itemValue : FONT.weight.SEMI_BOLD,
  } as React.CSSProperties;

  return (
    <>
      <h3 style={renderStyles}>The quick brown fox jumps over the lazy dog</h3>
      <pre style={codeStyles}>
        Key: {itemKey} - Value: {itemValue}
      </pre>
    </>
  );
};

const mapFonts = (obj: object, fontType: string): React.ReactNode => {
  const fonts: React.ReactNodeArray = [];
  Object.entries(obj).forEach(([key, value]) =>
    fonts.push(
      <Item itemKey={key} itemValue={value} fontType={fontType} key={key} />
    )
  );

  return fonts;
};

export const Family = () => mapFonts(FONT.family, "family");

export const Size = () => mapFonts(FONT.size, "size");

export const Weight = () => mapFonts(FONT.weight, "weight");
