import { Text } from "../../Text";
import * as Styled from "./index.styled";

interface SwitchProps {
  checked?: boolean;
  label: string;
  onChange: (isChecked: boolean) => void;
}

export function Switch({ checked, label, onChange }: SwitchProps) {
  const uniqueId = label?.split(" ").join("-");

  return (
    <Styled.SwitchClickableRegion htmlFor={uniqueId}>
      <Text text={label} variant="Body3" reset />
      <Styled.SwitchOuterBox>
        <Styled.SwitchHiddenInput
          id={uniqueId}
          name={uniqueId}
          checked={checked}
          type="checkbox"
          onChange={(event) => onChange(event.target.checked)}
        />
        <Styled.SwitchSlider />
      </Styled.SwitchOuterBox>
    </Styled.SwitchClickableRegion>
  );
}
