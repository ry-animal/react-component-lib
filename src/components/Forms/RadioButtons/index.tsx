import * as Styled from "./index.styled";

interface RadioButtonItem {
  id: string;
  name: string;
  value: string;
  label: string;
}

interface RadioButtonProps {
  items: RadioButtonItem[];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  selectedValue?: string;
}

export function RadioButtons({
  items,
  selectedValue,
  onChange,
}: RadioButtonProps) {
  return (
    <Styled.RadioButtonsWrapper>
      {items.map((item) => (
        <Styled.RadioButtonsItem key={item.value}>
          <Styled.RadioButtonsInput
            type="radio"
            id={item.id}
            name={item.name}
            value={item.value}
            checked={item.value === selectedValue}
            onChange={onChange}
          />
          <Styled.RadioButtonsLabel
            checked={item.value === selectedValue}
            htmlFor={item.id}
          >
            {item.label}
          </Styled.RadioButtonsLabel>
        </Styled.RadioButtonsItem>
      ))}
    </Styled.RadioButtonsWrapper>
  );
}

export default RadioButtons;
