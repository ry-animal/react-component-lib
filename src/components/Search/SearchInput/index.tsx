import { UseComboboxReturnValue } from "downshift";
import { InputHTMLAttributes } from "react";
import { DefaultTheme, useTheme } from "styled-components";
import { DARK_THEME, LIGHT_THEME } from "../../..//theme";
import { useEscape } from "../../../hooks/useEscape";
import { IconSearch } from "../../Icons";
import { Entry } from "../types";
import STRINGS from "./index.strings";
import * as Styled from "./index.styled";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  combobox?: UseComboboxReturnValue<Entry>;
  placeholder?: string;
  backgroundColor?: string;
  isLightTheme?: boolean;
  width?: string;
  onEscape?: () => void;
}

export function SearchInput({
  combobox,
  placeholder = STRINGS.search,
  isLightTheme,
  backgroundColor,
  width,
  onEscape,
  ...props
}: SearchInputProps) {
  const theme = useTheme();
  useEscape(() => onEscape?.());

  let normalTheme: DefaultTheme = theme;
  if (isLightTheme !== undefined) {
    normalTheme = isLightTheme ? DARK_THEME : LIGHT_THEME;
  }

  return (
    <Styled.InputWrapper
      {...combobox?.getComboboxProps()}
      style={{ ...props.style }}
    >
      <Styled.SearchInput
        role="search"
        type="search"
        width={width || "100%"}
        placeholder={placeholder}
        {...combobox?.getInputProps()}
        onFocus={combobox?.openMenu}
        isLightTheme={isLightTheme}
        backgroundColor={backgroundColor}
        {...props}
      />
      <Styled.IconWrapper>
        <IconSearch fill={normalTheme.color.TEXT_1} />
      </Styled.IconWrapper>
    </Styled.InputWrapper>
  );
}
