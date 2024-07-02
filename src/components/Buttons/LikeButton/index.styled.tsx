import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  user-select: none;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  pointer-events: auto;
  cursor: pointer;
  transition: background-color 0.25s ease-out;

  ${({ theme }) => `
    font-weight: ${theme.type.weight.NORMAL};
    gap: ${theme.space.s4};
    color: ${theme.color.TEXT_3};
    border-radius: ${theme.radius.r8};
    padding: ${theme.space.s8}; 
  `};

  &:disabled {
    pointer-events: none;
    cursor: default;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.SURFACE_3};
  }
`;
Button.displayName = "Button";

export const ImgIcon = styled.img`
  width: 16px;
`;
ImgIcon.displayName = "ImgIcon";
