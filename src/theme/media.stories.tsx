import * as React from "react";
import { DisplayOnMedia } from "../components/DisplayOnMedia";
import { lightPaletteColors } from "./colors";
import { MEDIA_WIDTHS } from "./media";

export default {
  title: "Theme/MediaWidths",
  parameters: { options: { showPanel: false } },
};

const boxStyle = {
  padding: "16px",
  margin: "2px",
  display: "flex",
  color: "white",
  textAlign: "center",
  justifyContent: "space-between",
  backgroundColor: lightPaletteColors.SUCCESS_2,
  boxSizing: "border-box",
} as React.CSSProperties;

const codeStyle = {
  backgroundColor: lightPaletteColors.PRIMARY_2,
  padding: "2px",
  margin: "2px",
  fontSize: "12px",
  fontFamily: "Lucida Console, Courier, monospace",
} as React.CSSProperties;

const CodeBlock = ({
  data,
  isMin = false,
}: {
  data: string;
  isMin?: boolean;
}) => (
  <span style={{ ...codeStyle }}>
    {`${isMin ? "min" : "max"}-width: ${data}`}
  </span>
);

export const Widths = () => (
  <>
    <div
      style={{
        ...boxStyle,
        width: MEDIA_WIDTHS.mobile.max,
      }}
    >
      <CodeBlock isMin data={MEDIA_WIDTHS.mobile.min} />
      Mobile
      <CodeBlock data={MEDIA_WIDTHS.mobile.max} />
    </div>
    <div
      style={{
        ...boxStyle,
        width: MEDIA_WIDTHS.tablet.max,
      }}
    >
      <CodeBlock isMin data={MEDIA_WIDTHS.tablet.min} />
      Tablet
      <CodeBlock data={MEDIA_WIDTHS.tablet.max} />
    </div>
    <div
      style={{
        ...boxStyle,
        width: MEDIA_WIDTHS.laptop.max,
      }}
    >
      <CodeBlock isMin data={MEDIA_WIDTHS.laptop.min} />
      Laptop
      <CodeBlock data={MEDIA_WIDTHS.laptop.max} />
    </div>
    <div
      style={{
        ...boxStyle,
        width: MEDIA_WIDTHS.desktop.max,
      }}
    >
      <CodeBlock isMin data={MEDIA_WIDTHS.desktop.min} />
      Desktop
      <CodeBlock data={MEDIA_WIDTHS.desktop.max} />
    </div>
  </>
);

export const WidthsMinMax = () => (
  <>
    <div
      style={{
        ...boxStyle,
        marginLeft: MEDIA_WIDTHS.mobile.min,
        width: `calc(${MEDIA_WIDTHS.mobile.max} - ${MEDIA_WIDTHS.mobile.min})`,
      }}
    >
      <CodeBlock isMin data={MEDIA_WIDTHS.mobile.min} />
      mobile
      <CodeBlock data={MEDIA_WIDTHS.mobile.max} />
    </div>
    <div
      style={{
        ...boxStyle,
        marginLeft: MEDIA_WIDTHS.tablet.min,
        width: `calc(${MEDIA_WIDTHS.tablet.max} - ${MEDIA_WIDTHS.tablet.min})`,
      }}
    >
      <CodeBlock isMin data={MEDIA_WIDTHS.tablet.min} />
      tablet
      <CodeBlock data={MEDIA_WIDTHS.tablet.max} />
    </div>
    <div
      style={{
        ...boxStyle,
        marginLeft: MEDIA_WIDTHS.laptop.min,
        width: `calc(${MEDIA_WIDTHS.laptop.max} - ${MEDIA_WIDTHS.laptop.min})`,
      }}
    >
      <CodeBlock isMin data={MEDIA_WIDTHS.laptop.min} />
      laptop
      <CodeBlock data={MEDIA_WIDTHS.laptop.max} />
    </div>
    <div
      style={{
        ...boxStyle,
        marginLeft: MEDIA_WIDTHS.desktop.min,
        width: `calc(${MEDIA_WIDTHS.desktop.max} - ${MEDIA_WIDTHS.desktop.min})`,
      }}
    >
      <CodeBlock isMin data={MEDIA_WIDTHS.desktop.min} />
      Desktop
      <CodeBlock data={MEDIA_WIDTHS.desktop.max} />
    </div>
  </>
);

export const ShowOn = () => (
  <>
    <DisplayOnMedia showOn="desktop">
      <div style={{ ...boxStyle, background: "crimson" }}>Show on Desktop</div>
    </DisplayOnMedia>
    <DisplayOnMedia showOn="laptop">
      <div style={{ ...boxStyle, background: "cadetblue" }}>Show on Laptop</div>
    </DisplayOnMedia>
    <DisplayOnMedia showOn="tablet">
      <div style={{ ...boxStyle, background: "steelblue" }}>Show on Tablet</div>
    </DisplayOnMedia>
    <DisplayOnMedia showOn="mobile">
      <div style={{ ...boxStyle, background: "tomato" }}>Show on Mobile</div>
    </DisplayOnMedia>
  </>
);

export const HideOn = () => (
  <>
    <DisplayOnMedia hideOn="desktop">
      <div style={{ ...boxStyle, background: "crimson" }}>Hide on Desktop</div>
    </DisplayOnMedia>
    <DisplayOnMedia hideOn="laptop">
      <div style={{ ...boxStyle, background: "cadetblue" }}>Hide on Laptop</div>
    </DisplayOnMedia>
    <DisplayOnMedia hideOn="tablet">
      <div style={{ ...boxStyle, background: "steelblue" }}>Hide on Tablet</div>
    </DisplayOnMedia>
    <DisplayOnMedia hideOn="mobile">
      <div style={{ ...boxStyle, background: "tomato" }}>Hide on Mobile</div>
    </DisplayOnMedia>
  </>
);
