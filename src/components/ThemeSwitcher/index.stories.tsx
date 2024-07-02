import { ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { ThemeSwitcher } from ".";

export default {
  component: ThemeSwitcher,
  title: "Components/ThemeSwitcher",
  argTypes: {
    onChange: { action: "onChange" },
    checked: { type: "boolean" },
    checkedLabel: { type: "string" },
    uncheckedLabel: { type: "string" },
  },
} as ComponentMeta<typeof ThemeSwitcher>;

const backgroundStyle = {
  width: "200px",
  height: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
};

export const Default = () => {
  const [isChecked, setsChecked] = useState(false);

  return (
    <div
      style={{
        ...backgroundStyle,
        backgroundColor: isChecked ? "black" : "white",
      }}
    >
      <ThemeSwitcher onChange={setsChecked} />
    </div>
  );
};

export const Checked = () => {
  const [isChecked, setsChecked] = useState(true);

  return (
    <div
      style={{
        ...backgroundStyle,
        backgroundColor: isChecked ? "black" : "white",
      }}
    >
      <ThemeSwitcher checked onChange={setsChecked} />
    </div>
  );
};

export const WithTranslations = () => {
  const [isChecked, setsChecked] = useState(false);

  return (
    <div
      style={{
        ...backgroundStyle,
        backgroundColor: isChecked ? "black" : "white",
      }}
    >
      <ThemeSwitcher
        onChange={setsChecked}
        checkedLabel="ダークモード"
        uncheckedLabel="ライトモード"
      />
    </div>
  );
};
