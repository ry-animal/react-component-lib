import { useState } from "react";
import { MultipleSelectItemProps } from "./MultipleSelect.interface";

export const useMultipleSelectItems = (
  initialItems: MultipleSelectItemProps[]
) => {
  const [multipleSelectItems, setItems] = useState<MultipleSelectItemProps[]>([
    ...initialItems,
  ]);

  const handleMultipleSelectItem = (selectedItem: MultipleSelectItemProps) => {
    const updatedItems = multipleSelectItems.map((item) => {
      if (item.label === selectedItem.label) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setItems(updatedItems);
  };

  return { multipleSelectItems, handleMultipleSelectItem };
};
