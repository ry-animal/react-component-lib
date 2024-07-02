import styled from "styled-components";
import { Text } from "../Text";
import { MultipleSelectProps } from "./MultipleSelect.interface";

export const Dropdown = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  ${({ theme, isOpen }) => `
    background-color: ${isOpen ? theme.color.SURFACE_3 : theme.color.SURFACE_1};
    border: 1px solid ${theme.color.SURFACE_3};
    border-radius: ${theme.radius.r4};
    margin: ${theme.space.s4} 0 0 0;
    padding: ${theme.space.s8};
  `}

  :focus {
    outline: none;
  }
`;

export const DropdownItem = styled.li<{ highlighted: boolean }>`
  transition: background-color 0.2s ease-out;

  ${({ theme, highlighted }) => `
    background-color: ${
      highlighted ? theme.color.SURFACE_1 : theme.color.SURFACE_3
    };
    border-radius: ${theme.radius.r4};
    padding: ${theme.space.s4} ${theme.space.s8} ${theme.space.s8} ${
    theme.space.s8
  };
  `}
`;

export const LabelTextContainer = styled.div`
  display: flex;
`;

export const Label = styled.label`
  ${({ theme }) => `
    align-items: center;
    cursor: pointer;  
    display: flex;
    justify-content: space-between;
    padding: ${theme.space.s12};
  `}
`;

export const MultipleSelect = styled.div<MultipleSelectProps>`
  ${({ theme, maxWidth }) => `
    background-color: ${theme.color.SURFACE_1};
    max-width: ${maxWidth};
  `}
`;

export const MultipleSelectContainer = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => `
    background-color: ${isOpen ? theme.color.SURFACE_3 : theme.color.SURFACE_1};
    border: 1px solid ${theme.color.SURFACE_3};
    border-radius: ${theme.radius.r4};
    cursor: pointer;

    &:hover, 
    &:focus-visible  {
      background-color: ${theme.color.SURFACE_3};
    }
  `};
`;
const BORDER_WIDTH = "1px";
export const SelectedItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -${BORDER_WIDTH};

  ${({ theme }) => `
    border-radius: ${theme.radius.r4};
    border: ${BORDER_WIDTH} solid ${theme.color.SURFACE_3};
    padding: ${theme.space.s12};
    gap: ${theme.space.s8};
  `}
`;

export const BadgeContainer = styled.span`
  max-width: 100%;
`;

export const DropdownCheckboxLabel = styled(Text)`
  ${({ theme }) => `
    @media (max-width: ${theme.media.mobile.max}) {
      padding-top: ${theme.space.s4};
    }
  `}
`;
