export interface MultipleSelectItemProps {
  label: string;
  checked: boolean;
  property?: string;
}

export interface MultipleSelectProps {
  items?: MultipleSelectItemProps[];
  label?: string;
  maxWidth?: string;
  onItemSelect?: (item: MultipleSelectItemProps) => void;
}
