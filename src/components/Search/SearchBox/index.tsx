import { useCombobox, UseComboboxReturnValue } from "downshift";
import { useState } from "react";
import { generateInitialEntries, getEntriesFromResults } from "../helpers";
import { SearchInput } from "../SearchInput";
import { SearchResult } from "../SearchResult";
import { Entry, SearchChangeHandler, SearchSelectHandler } from "../types";
import * as Styled from "./index.styled";

const renderResultsArea = (
  combobox: UseComboboxReturnValue<Entry>,
  items: Entry[]
) => (
  <span {...combobox.getMenuProps()}>
    {items.length > 0 && combobox.isOpen && (
      <Styled.SearchResultsList>
        {items.map((item, index) => (
          <div
            key={`${item}${index}`}
            {...combobox.getItemProps({
              item,
              index,
              disabled: item.type === "header",
            })}
          >
            <SearchResult
              entry={item}
              highlighted={combobox.highlightedIndex === index}
            />
          </div>
        ))}
      </Styled.SearchResultsList>
    )}
  </span>
);

type SearchBoxProps = {
  popularSearches?: string[];
  onChange: SearchChangeHandler;
  onSelect: SearchSelectHandler;
  backgroundColor?: string;
  placeholder?: string;
  isLightTheme?: boolean;
};

export function SearchBox({
  popularSearches,
  onChange,
  onSelect,
  backgroundColor,
  placeholder,
  isLightTheme,
}: SearchBoxProps) {
  const initialEntries = generateInitialEntries(popularSearches);
  const [items, setItems] = useState<Entry[]>(initialEntries);
  const combobox = useCombobox({
    items,
    itemToString: (item) => `${item?.label}`,
    onInputValueChange: async ({ inputValue }) => {
      const trimmed = (inputValue as string).trim();
      setItems(
        trimmed
          ? getEntriesFromResults(await onChange(trimmed), initialEntries)
          : initialEntries
      );
    },
    onSelectedItemChange: async (changes) => {
      const { selectedItem } = changes;
      if (selectedItem?.isResult) {
        onSelect(selectedItem);
        combobox.closeMenu();
      } else if (selectedItem?.type === "suggestion") {
        combobox.openMenu();
      }
    },
  });
  return (
    <Styled.SearchArea>
      <SearchInput
        combobox={combobox}
        placeholder={placeholder}
        backgroundColor={backgroundColor}
        isLightTheme={isLightTheme}
        width="330px"
      />
      {renderResultsArea(combobox, items)}
    </Styled.SearchArea>
  );
}
