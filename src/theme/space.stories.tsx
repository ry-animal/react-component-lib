import * as React from "react";
import { LIGHT_THEME } from ".";

export default {
  title: "Theme/Spacing",
  parameters: { options: { showPanel: false } },
};

const styles = {
  boxContainer: {
    backgroundColor: "white",
    maxWidth: "500px",
    margin: "auto",
  } as React.CSSProperties,
  fillBox: {
    backgroundColor: LIGHT_THEME.color.SUCCESS_2,
  } as React.CSSProperties,
  labelBox: {
    backgroundColor: LIGHT_THEME.color.PRIMARY_3,
    padding: "2px 8px",
    marginBottom: "16px",
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Lucida Console, Courier, monospace",
  } as React.CSSProperties,
};

export const SpaceList = () =>
  Object.keys(LIGHT_THEME.space).map((key, index) => {
    const val = `${key.slice(1)}px`;

    return (
      <div key={index} style={{ ...styles.boxContainer }}>
        <div>
          <div style={{ ...styles.fillBox, padding: val }} />
        </div>

        <div style={{ ...styles.labelBox }}>
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
