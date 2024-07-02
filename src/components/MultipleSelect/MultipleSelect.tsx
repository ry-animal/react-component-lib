import { useMultipleSelection, useSelect } from "downshift";
import { useTheme } from "styled-components";
import Badge from "../Badge";
import { Checkbox } from "../Forms";
import { IconDownChevron } from "../Icons";
import { Text } from "../Text";
import {
  MultipleSelectItemProps,
  MultipleSelectProps,
} from "./MultipleSelect.interface";
import { stateReducer } from "./MultipleSelect.reducer";
import * as Styled from "./MultipleSelect.styled";

export function MultipleSelect({
  items = [],
  label = "Attributes",
  maxWidth = "100%",
  onItemSelect,
}: MultipleSelectProps): JSX.Element {
  const { color } = useTheme();

  const selectedItems = items.filter((item) => item.checked);

  const { getDropdownProps, getSelectedItemProps } = useMultipleSelection({
    selectedItems,
  });

  const {
    getItemProps,
    getLabelProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
  } = useSelect({
    defaultHighlightedIndex: 0,
    items,
    stateReducer,
  });

  const handleItemSelect = (item: MultipleSelectItemProps) => {
    if (onItemSelect) {
      onItemSelect(item);
    }
  };

  return (
    <Styled.MultipleSelect {...getMenuProps()} maxWidth={maxWidth}>
      <Styled.MultipleSelectContainer
        isOpen={isOpen}
        {...getToggleButtonProps(
          getDropdownProps({ preventKeyAction: isOpen })
        )}
      >
        {
          <Styled.Label {...getLabelProps()}>
            <Styled.LabelTextContainer>
              <Text text={label} reset variant="Body3" />
              {selectedItems.length > 0 && (
                <Text
                  text={`: ${selectedItems.length} / ${items.length}`}
                  reset
                  variant="Body3"
                />
              )}
            </Styled.LabelTextContainer>
            <IconDownChevron fill={color.TEXT_1} size={20} />
          </Styled.Label>
        }
      </Styled.MultipleSelectContainer>
      {!isOpen && selectedItems.length > 0 && (
        <Styled.SelectedItemsContainer>
          {selectedItems.map((item, index) => (
            <Styled.BadgeContainer
              key={`${item.label}${index}`}
              {...getSelectedItemProps({ selectedItem: item, index })}
            >
              <Badge name={item.label} onClose={() => handleItemSelect(item)} />
            </Styled.BadgeContainer>
          ))}
        </Styled.SelectedItemsContainer>
      )}
      {isOpen && (
        <Styled.Dropdown isOpen={isOpen}>
          {items.map((item, index) => (
            <Styled.DropdownItem
              {...getItemProps({ item, index })}
              highlighted={highlightedIndex === index}
              key={`${item.label}${index}`}
            >
              <Checkbox
                checked={selectedItems.includes(item)}
                label={
                  <Styled.DropdownCheckboxLabel
                    text={item.label}
                    reset
                    variant="Body3"
                  />
                }
                name={item.label}
                onChange={() => handleItemSelect(item)}
              />
            </Styled.DropdownItem>
          ))}
        </Styled.Dropdown>
      )}
    </Styled.MultipleSelect>
  );
}

export default MultipleSelect;
