import { useSelect, UseSelectStateChange } from "downshift";
import * as React from "react";
import { InputHTMLAttributes, ReactNode } from "react";
import { useTheme } from "styled-components";
import { IconClear } from "../../Icons/IconClear";
import { IconDownChevron } from "../../Icons/IconDownChevron";
import * as Styled from "./index.styled";

interface DropdownIconProps {
  showClearButton: boolean;
  clearAction: VoidFunction;
}

const DropdownIcon = ({ showClearButton, clearAction }: DropdownIconProps) => {
  const { color } = useTheme();
  return (
    <Styled.IconWrapper>
      {showClearButton ? (
        <Styled.ClearButton
          type="button"
          tabIndex={-1}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            clearAction();
          }}
          aria-label="clear selection"
        >
          <IconClear fill={color.TEXT_1} />
        </Styled.ClearButton>
      ) : (
        <IconDownChevron fill={color.TEXT_1} />
      )}
    </Styled.IconWrapper>
  );
};

export interface DropdownProps extends InputHTMLAttributes<HTMLSelectElement> {
  /**
   * Label for dropdown
   */
  label: string;
  /**
   * Options to display
   */
  options: ReactNode[];
  /**
   * Callback when an option is selected
   */
  onSelectItem?: (changes: UseSelectStateChange<ReactNode>) => void;
  /**
   * Placeholder string when no option is selected
   */
  placeholder?: string;
  /**
   * Is selection required
   */
  required?: boolean;
  /**
   * Selected item (for controlled components)
   */
  selected?: ReactNode;
}

export function Dropdown({
  label,
  options,
  onSelectItem,
  placeholder,
  required,
  selected,
  ...props
}: DropdownProps) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    selectItem,
  } = useSelect({
    items: options,
    selectedItem: selected,
    onSelectedItemChange: onSelectItem,
  });

  return (
    <Styled.ComponentWrapper>
      <Styled.Label {...getLabelProps()}>{label}</Styled.Label>
      <Styled.DropdownContainer>
        <Styled.DropdownToggle
          type="button"
          {...getToggleButtonProps()}
          {...props}
          optionSelected={!!selectedItem}
        >
          {selectedItem ?? placeholder ?? "Select One"}
        </Styled.DropdownToggle>
        <DropdownIcon
          showClearButton={!!selectedItem && !required}
          clearAction={() => selectItem(null)}
        />
        <Styled.OptionsContainer {...getMenuProps()} isOpen={isOpen}>
          {isOpen &&
            options.map((item, index) => (
              <Styled.DropdownOption
                isHighlighted={highlightedIndex === index}
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {item}
              </Styled.DropdownOption>
            ))}
        </Styled.OptionsContainer>
      </Styled.DropdownContainer>
    </Styled.ComponentWrapper>
  );
}
