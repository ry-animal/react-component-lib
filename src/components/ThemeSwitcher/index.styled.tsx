import styled from "styled-components";
import iconMoon from "../../assets/icons/icon-moon.svg";
import iconSun from "../../assets/icons/icon-sun.svg";

export interface ThemeSwitcherCheckedProps {
  checked: boolean;
}

export const ThemeSwitcherLabel = styled.label`
  width: 76px;
  height: 30px;
  position: relative;
  display: flex;
  cursor: pointer;
`;

export const ThemeSwitcherInput = styled.input`
  width: 0;
  height: 0;
  appearance: none;
  &:checked + span {
    background-color: ${({ theme }) => theme.color.WHITE};
    border: ${({ theme }) => `${theme.space.s1} solid ${theme.color.TEXT_1}`};
  }
  &:checked + span:before {
    transform: translateX(46px);
    background-color: ${({ theme }) => theme.color.BLACK};
  }
  &:focus-visible + span {
    box-shadow: ${({ theme }) =>
      `0 0 0 ${theme.space.s1} ${theme.color.TEXT_1}`};
  }
`;

export const ThemeSwitcherSlider = styled.span<ThemeSwitcherCheckedProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => `${theme.color.BLACK}`};
  border: ${({ theme }) => `${theme.space.s1} solid ${theme.color.WHITE}`};
  border-radius: ${({ theme }) => theme.radius.round};
  transition: all 0.4s ease-out;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background: ${({ theme, checked }) =>
      `url(${checked ? iconSun : iconMoon}) no-repeat center ${
        checked ? theme.color.BLACK : theme.color.WHITE
      }`};
    border-radius: ${({ theme }) => theme.radius.round};
    transition: all 0.4s ease-out;
  }
`;

export const ThemeSwitcherText = styled.p<ThemeSwitcherCheckedProps>`
  margin: 0;
  position: absolute;
  top: 6px;
  right: 0;
  bottom: 0;
  right: ${({ checked }) => (checked ? "22px" : "2px")};
  left: ${({ checked }) => (checked ? "10px" : "30px")};
  clear: both;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ checked, theme }) =>
    checked ? theme.color.BLACK : theme.color.WHITE};

  font-weight: ${({ theme }) => theme.type.weight.SEMI_BOLD};
  font-size: ${({ theme }) => theme.type.size.XXXS};
  user-select: none;
`;
