import styled from "styled-components";

export const RadioButtonsWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.SURFACE_4};
  border-radius: ${({ theme }) => theme.radius.r32};
  padding: ${({ theme }) => theme.space.s2};
  display: inline-block;
`;

export const RadioButtonsInput = styled.input`
  appearance: none;
  margin: 0;
`;

export const RadioButtonsItem = styled.span``;

interface RadioButtonsLabelProps {
  checked: boolean;
}
export const RadioButtonsLabel = styled.label<RadioButtonsLabelProps>`
  display: inline-block;
  min-width: 80px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  transition: all 0.15s ease-out;
  ${({ theme }) => `
    font-size: ${theme.type.size.XXXS};
    font-weight: ${theme.type.weight.BOLD};
    border-radius: ${theme.radius.r32};
    padding: ${`${theme.space.s8} ${theme.space.s12}`};
  `};
  ${({ checked, theme }) =>
    checked
      ? `
      background-color: ${theme.color.SURFACE_1};
      color: ${theme.color.TEXT_1};
      cursor: default;
    `
      : `
      color: ${theme.color.TEXT_4};
  `};

  &:hover {
    color: ${({ theme }) => theme.color.TEXT_1};
  }
`;
