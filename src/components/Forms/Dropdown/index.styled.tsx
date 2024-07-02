import styled from "styled-components";
import { BlurRadius } from "../../../constants/BlurRadius";

const DROPDOWN_HEIGHT = "48px";
// Since s8 is defined with px in we can't just do math
const DROPDOWN_OFFSET = "56px";

export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => `
    font-family: ${theme.type.family.body};
    gap: ${theme.space.s12};
  `};
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  transition: box-shadow 0.3s ease-out;
  ${({ theme }) => `
    box-shadow: 0 0 0 ${theme.space.s1} ${theme.color.SURFACE_4};
    border-radius: ${theme.radius.r4};
  `};
  &:hover {
    box-shadow: ${({ theme }) =>
      `0 0 0 ${theme.space.s2} ${theme.color.TEXT_1}`};
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color.TEXT_1};
  margin: 0;
`;

export const DropdownWrapper = styled.div`
  position: relative;
  height: ${DROPDOWN_HEIGHT};
  flex: 1;
`;

export const IconWrapper = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.layer.dropdown};
  right: 15px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const ClearButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  pointer-events: auto;
`;

export const DownIconImage = styled.img`
  pointer-events: none;
`;

export const DropdownToggle = styled.button`
  ${({ theme }) => `
    background: ${theme.color.SURFACE_2};
    color: ${theme.color.TEXT_1};
    border-radius: ${theme.radius.r4};
    padding: 0 ${theme.space.s16};
    font-weight: ${theme.type.weight.SEMI_BOLD};
    font-size: ${theme.type.size.XS};
  `};

  height: ${DROPDOWN_HEIGHT};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  line-height: 24px;
  border: none;
  outline: none;
`;

export const OptionsContainer = styled.ul<{ isOpen: boolean }>`
  ${({ isOpen }) => !isOpen && `display:none;`}

  ${({ theme }) => `
  padding: ${theme.space.s8};
  gap: ${theme.space.s4};
  z-index: ${theme.layer.dropdown};
  background: ${theme.color.SURFACE_2};
  top: ${DROPDOWN_OFFSET};
  border-radius: ${theme.radius.r8};  
  box-shadow: ${theme.elevation.medium};

`};

  width: 100%;
  box-sizing: border-box;
  list-style-type: none;
  border: none;
  outline: none;
  height: fit-content;
  max-height: 400px;
  overflow-y: auto;
  margin: 0;
  position: absolute;
`;

export const DropdownOption = styled.li<{ isHighlighted: boolean }>`
  display: flex;
  align-items: center;
  text-align: left;
  cursor: pointer;
  line-height: 22px;

  ${({ isHighlighted, theme }) => `
    padding: ${theme.space.s12} 0 ${theme.space.s12} ${theme.space.s20};
    border-radius: ${theme.radius.r6};
    font-weight: ${theme.type.weight.SEMI_BOLD};   
    color: ${theme.color.TEXT_1};
    background: ${
      isHighlighted ? theme.color.SURFACE_3 : theme.color.SURFACE_2
    };
    
    font-size: ${theme.type.size.XXS};
    margin: ${theme.space.s4};
    ${
      isHighlighted &&
      `
      transition: background-color 0.25s ease-out;
      @supports (backdrop-filter: blur(${BlurRadius.b15})) {
        backdrop-filter: blur(${BlurRadius.b15});
      }`
    };
  `};
`;
