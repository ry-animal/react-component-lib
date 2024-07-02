interface Item {
  errorLabelMessage?: string;
  errorValueMessage?: string;
  key: string;
  value: string;
}

interface RowProps {
  item: Item;
  updateKey: React.ChangeEventHandler<HTMLInputElement>;
  updateValue: React.ChangeEventHandler<HTMLInputElement>;
  removeProperty: VoidFunction;
  keyPlaceholder?: string;
  valuePlaceholder?: string;
  maxPropKeyLength?: number;
  maxPropValueLength?: number;
}

interface PropertiesGridProps {
  title: string;
  subTitleError?: string;
  items: Item[];
  keyPlaceholder?: string;
  valuePlaceholder?: string;
  maxPropKeyLength?: number;
  maxPropValueLength?: number;
  addProperty: () => void;
  updateProperty: (index: number, field: "key" | "value", text: string) => void;
  removeProperty: (indexToRemove: number) => void;
}

interface Props {
  onChange: (properties: Item[]) => void;
  title: string;
  // TODO: delete all instances of subTitleError once doing per field properties validation
  subTitleError?: string;
  keyPlaceholder?: string;
  valuePlaceholder?: string;
  properties?: Item[];
  maxPropKeyLength?: number;
  maxPropValueLength?: number;
}

export { Item, RowProps, PropertiesGridProps, Props };
