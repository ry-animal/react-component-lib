import { useState } from "react";
import * as Styled from "./index.styled";

export interface ThemeSwitcherProps {
  checked?: boolean;
  onChange?: (isChecked: boolean) => void;
  checkedLabel?: string;
  uncheckedLabel?: string;
}

export function ThemeSwitcher({
  checked = false,
  checkedLabel = "LIGHT",
  uncheckedLabel = "DARK",
  onChange,
}: ThemeSwitcherProps) {
  const [label, setLabel] = useState(checked ? checkedLabel : uncheckedLabel);
  const [isChecked, setIsChecked] = useState(checked);

  const handleOnChange = (checkChange: boolean) => {
    if (checkChange) {
      setLabel(checkedLabel);
    } else {
      setLabel(uncheckedLabel);
    }
    setIsChecked(checkChange);
    return onChange && onChange(checkChange);
  };

  return (
    <Styled.ThemeSwitcherLabel>
      <Styled.ThemeSwitcherInput
        checked={isChecked}
        type="checkbox"
        onChange={(e) => handleOnChange(e.target.checked)}
      />
      <Styled.ThemeSwitcherSlider checked={isChecked} />
      <Styled.ThemeSwitcherText checked={isChecked}>
        {label}
      </Styled.ThemeSwitcherText>
    </Styled.ThemeSwitcherLabel>
  );
}

export default ThemeSwitcher;
