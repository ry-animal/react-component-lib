import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import AddIcon from "../../../assets/icons/icon-plus.svg";
import { TextButton } from "../../Buttons/TextButton";
import IconClear from "../../Icons/IconClear";
import { Input } from "../Input";
import { Item, PropertiesGridProps, Props, RowProps } from "./index.interface";
import * as Styled from "./index.styled";

const defaultLabelStrings = {
  label: "Label",
  value: "Value",
};

function PropertyRow({
  item,
  updateKey,
  updateValue,
  removeProperty,
  keyPlaceholder,
  valuePlaceholder,
  maxPropKeyLength,
  maxPropValueLength,
}: RowProps) {
  const { color } = useTheme();
  return (
    <Styled.ItemRow>
      <Input
        error={item.errorLabelMessage}
        label={defaultLabelStrings.label}
        name={item.key}
        value={item.key}
        onChange={updateKey}
        placeholder={keyPlaceholder}
        maxLength={maxPropKeyLength}
      />
      <Input
        error={item.errorValueMessage}
        label={defaultLabelStrings.value}
        name={item.value}
        value={item.value}
        onChange={updateValue}
        placeholder={valuePlaceholder}
        maxLength={maxPropValueLength}
      />
      <Styled.ClearButton aria-label="Remove property" onClick={removeProperty}>
        <IconClear fill={color.TEXT_1} />
      </Styled.ClearButton>
    </Styled.ItemRow>
  );
}

function PropertiesGrid({
  title,
  subTitleError,
  items,
  keyPlaceholder,
  valuePlaceholder,
  maxPropKeyLength,
  maxPropValueLength,
  addProperty,
  updateProperty,
  removeProperty,
}: PropertiesGridProps) {
  return (
    <div>
      <Styled.Title>{title}</Styled.Title>
      {subTitleError && (
        <Styled.SubTitleError>{subTitleError}</Styled.SubTitleError>
      )}
      <Styled.PropertiesList>
        {items.map((item, index) => (
          <PropertyRow
            key={`row-${index}`}
            item={item}
            updateKey={(e) => updateProperty(index, "key", e.target.value)}
            updateValue={(e) => updateProperty(index, "value", e.target.value)}
            removeProperty={() => removeProperty(index)}
            keyPlaceholder={keyPlaceholder}
            valuePlaceholder={valuePlaceholder}
            maxPropKeyLength={maxPropKeyLength}
            maxPropValueLength={maxPropValueLength}
          />
        ))}
      </Styled.PropertiesList>
      <TextButton
        variant="plaintext"
        size="small"
        icon={AddIcon}
        label="Add Row"
        onClick={addProperty}
      />
    </div>
  );
}

export function Properties({
  onChange,
  title,
  subTitleError,
  keyPlaceholder,
  valuePlaceholder,
  properties,
  maxPropKeyLength,
  maxPropValueLength,
}: Props) {
  const [items, setItems] = useState<Item[]>([{ key: "", value: "" }]);

  useEffect(() => {
    if (
      properties?.length &&
      JSON.stringify(properties) !== JSON.stringify(items)
    ) {
      setItems(properties);
    }
  }, [properties]);

  useEffect(() => {
    onChange(items);
  }, [items]);

  const updateProperty = (
    index: number,
    field: "key" | "value",
    text: string
  ) =>
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index][field] = text;
      return newItems;
    });

  const removeProperty = (indexToRemove: number) =>
    setItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );

  const addProperty = () =>
    setItems((prevItems) => [...prevItems, { key: "", value: "" }]);

  return (
    <PropertiesGrid
      title={title}
      subTitleError={subTitleError}
      items={items}
      keyPlaceholder={keyPlaceholder}
      valuePlaceholder={valuePlaceholder}
      maxPropKeyLength={maxPropKeyLength}
      maxPropValueLength={maxPropValueLength}
      addProperty={addProperty}
      updateProperty={updateProperty}
      removeProperty={removeProperty}
    />
  );
}
