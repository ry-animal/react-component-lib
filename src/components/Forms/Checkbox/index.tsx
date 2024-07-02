import { ReactNode } from "react";
import * as Styled from "./index.styled";

interface CheckboxProps {
  checked?: boolean;
  label: ReactNode;
  name: string;
  onChange: VoidFunction;
}

export function Checkbox({ label, checked, name, onChange }: CheckboxProps) {
  const uniqueId = name?.split(" ").join("-");
  return (
    <Styled.CheckboxLabel htmlFor={uniqueId}>
      <Styled.CheckboxInput
        type="checkbox"
        id={uniqueId}
        checked={checked}
        onChange={onChange}
      />
      {label}
      <Styled.CheckboxSpan />
    </Styled.CheckboxLabel>
  );
}

export default Checkbox;
