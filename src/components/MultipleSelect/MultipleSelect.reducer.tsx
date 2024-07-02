import {
  useSelect,
  UseSelectState,
  UseSelectStateChangeOptions,
} from "downshift";
import { MultipleSelectItemProps } from "./MultipleSelect.interface";

const {
  stateChangeTypes: { ItemClick, MenuBlur, MenuMouseLeave },
} = useSelect;

export const stateReducer = (
  _state: UseSelectState<MultipleSelectItemProps>,
  actionAndChanges: UseSelectStateChangeOptions<MultipleSelectItemProps>
) => {
  const { changes, type } = actionAndChanges;
  switch (type) {
    case ItemClick:
    case MenuBlur:
      return {
        ...changes,
        isOpen: true,
      };
    case MenuMouseLeave:
      return {
        ...changes,
        isOpen: false,
      };
    default:
      return changes;
  }
};
