import styled from "styled-components";
import Badge from "../Badge";
import { MultipleSelect } from "./MultipleSelect";
import METADATA_PROPERTIES from "./MultipleSelect.fixtures";
import { useMultipleSelectItems } from "./MultipleSelect.hooks";
import { MultipleSelectItemProps } from "./MultipleSelect.interface";

export default {
  component: MultipleSelect,
  title: "Components/MultipleSelect",
  argTypes: {
    name: {
      control: {
        type: "string",
      },
    },
  },
};

export const Default = () => {
  const { multipleSelectItems, handleMultipleSelectItem } =
    useMultipleSelectItems(METADATA_PROPERTIES.attributes);
  return (
    <MultipleSelect
      items={multipleSelectItems}
      onItemSelect={handleMultipleSelectItem}
    />
  );
};

export const MultipleSelectedItems = () => {
  const { multipleSelectItems, handleMultipleSelectItem } =
    useMultipleSelectItems(
      METADATA_PROPERTIES.attributes.map((attribute) => ({
        ...attribute,
        checked: true,
      }))
    );

  return (
    <MultipleSelect
      items={multipleSelectItems}
      onItemSelect={handleMultipleSelectItem}
    />
  );
};

export const MaxWidth = () => {
  const { multipleSelectItems, handleMultipleSelectItem } =
    useMultipleSelectItems(
      METADATA_PROPERTIES.attributes.map((attribute) => ({
        ...attribute,
        checked: true,
      }))
    );

  return (
    <MultipleSelect
      items={multipleSelectItems}
      maxWidth="300px"
      onItemSelect={handleMultipleSelectItem}
    />
  );
};

export const LongBadge = () => {
  const { multipleSelectItems, handleMultipleSelectItem } =
    useMultipleSelectItems([
      { label: "Genesis", checked: true },
      { label: "Core", checked: true },
      { label: "Divide Order", checked: false },
      {
        label:
          "Mortal Judgment Mortal Judgment Mortal Judgment Mortal Judgment",
        checked: true,
      },
    ]);

  return (
    <MultipleSelect
      items={multipleSelectItems}
      maxWidth="300px"
      onItemSelect={handleMultipleSelectItem}
    />
  );
};

const MultipleSelectWrapper = styled.div`
  margin: ${({ theme }) => theme.space.s12} 0;
`;

const BadgeWrapper = styled.span`
  margin-right: ${({ theme }) => theme.space.s12};
`;

export const Composite = () => {
  const { multipleSelectItems, handleMultipleSelectItem } =
    useMultipleSelectItems(
      Object.keys(METADATA_PROPERTIES).reduce(
        (accumulator, property) => [
          ...accumulator,
          ...METADATA_PROPERTIES[
            property as keyof typeof METADATA_PROPERTIES
          ].map((item) => ({
            ...item,
            property,
          })),
        ],
        [] as MultipleSelectItemProps[]
      )
    );

  const getFilteredItems = (property: string) =>
    multipleSelectItems.filter((item) => item.property === property);

  return (
    <>
      {multipleSelectItems.map(
        (item, index) =>
          item.checked && (
            <BadgeWrapper key={`${item}${index}`}>
              <Badge
                name={item.label}
                onClose={() => handleMultipleSelectItem(item)}
                size="large"
              />
            </BadgeWrapper>
          )
      )}
      {Object.keys(METADATA_PROPERTIES).map((property) => (
        <MultipleSelectWrapper key={property}>
          <MultipleSelect
            items={getFilteredItems(property)}
            label={property.charAt(0).toUpperCase() + property.slice(1)}
            maxWidth="300px"
            onItemSelect={handleMultipleSelectItem}
          />
        </MultipleSelectWrapper>
      ))}
    </>
  );
};
