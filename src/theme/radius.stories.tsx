import * as React from "react";
import { LIGHT_THEME } from ".";

export default {
  title: "Theme/Radius",
  parameters: { options: { showPanel: false } },
};

const styles = {
  boxContainer: {
    display: "flex",
    padding: "25px",
    flexDirection: "row",
    backgroundColor: LIGHT_THEME.color.PRIMARY_3,
    marginBottom: "8px",
    fontFamily: "Lucida Console, Courier, monospace",
  } as React.CSSProperties,
  fillBox: {
    alignSelf: "center",
    backgroundColor: LIGHT_THEME.color.SUCCESS_2,
    width: "100px",
    height: "100px",
  } as React.CSSProperties,
  textContainer: {
    alignSelf: "center",
  } as React.CSSProperties,
  labelText: {
    paddingLeft: LIGHT_THEME.space.s32,
  } as React.CSSProperties,
};

const getRadiusValue = (key: string | string[]) => {
  if (key.includes("round")) {
    return "2000px";
  }

  return `${key.slice(1)}px`;
};

export const RadiusList = (): Array<JSX.Element> =>
  Object.keys(LIGHT_THEME.radius).map((key, index) => {
    const val = getRadiusValue(key);

    return (
      <div key={index} style={{ ...styles.boxContainer }}>
        <div style={{ ...styles.fillBox, borderRadius: val }} />
        <div style={{ ...styles.labelText }}>
          <p>
            <b>Key:</b> {key}
          </p>
          <p>
            <b>Value:</b> {val}
          </p>
        </div>
      </div>
    );
  });
