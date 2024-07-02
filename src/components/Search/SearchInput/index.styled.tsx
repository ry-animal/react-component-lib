import { rgba } from "polished";
import styled, { DefaultTheme } from "styled-components";
import { BlurRadius } from "../../../constants/BlurRadius";
import { DARK_THEME, LIGHT_THEME } from "../../../theme";
import { ThemeName } from "../../../theme/theme.interface";

const searchBGColor = (theme: DefaultTheme) =>
  theme.name === ThemeName.DARK
    ? rgba(theme.color.WHITE, theme.opacity.TWO)
    : rgba(theme.color.WHITE, theme.opacity.NINE);

export const SearchInput = styled.input<{
  width: string;
  backgroundColor?: string;
  isLightTheme?: boolean;
}>`
  ${({ backgroundColor, width, theme, isLightTheme }) => {
    let normalTheme: DefaultTheme = theme;
    if (isLightTheme !== undefined) {
      normalTheme = isLightTheme ? DARK_THEME : LIGHT_THEME;
    }
    return `
    background-color: ${backgroundColor || searchBGColor(normalTheme)};
    color: ${normalTheme.color.TEXT_1};
    border-radius: ${theme.radius.r4};
    font-size: ${theme.type.size.XXS};
    padding-left: ${theme.space.s48};
    padding-right: ${theme.space.s12};
    width: ${width};

    &::placeholder {
      color: ${normalTheme.color.TEXT_4};
    }
    
    &:focus {
      outline: ${theme.space.s2} solid ${normalTheme.color.TEXT_2};
    }
    `;
  }};
  backdrop-filter: blur(${BlurRadius.b8});
  background-position: 15px center;
  background-repeat: no-repeat;
  border-width: 0;
  height: 48px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.space.s16};
  left: ${({ theme }) => theme.space.s16};
  height: 16px;
  width: 16px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;
