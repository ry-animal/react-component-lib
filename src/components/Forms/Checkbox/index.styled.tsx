import styled from "styled-components";

export const CheckboxSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  ${({ theme }) => `
    border: 1px solid ${theme.color.TEXT_1};
    border-radius: ${theme.radius.r6};
  `};

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

export const CheckboxInput = styled.input`
  appearance: none;
  position: absolute;
  left: 0;
  opacity: 0;
`;

export const CheckboxLabel = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  ${({ theme }) => `
    color: ${theme.color.TEXT_1};
    font-size: ${theme.type.size.XS};
    padding-left: ${theme.space.s32};
  `};

  &:hover ${CheckboxInput} ~ ${CheckboxSpan} {
    background: ${({ theme }) => theme.gradient.ETH};
  }

  ${CheckboxInput}:checked ~ ${CheckboxSpan} {
    background: ${({ theme }) => theme.gradient.ETH};
  }

  ${CheckboxInput}:checked ~ ${CheckboxSpan}::after {
    display: block;
  }

  ${CheckboxSpan}::after {
    left: 8px;
    bottom: 6px;
    width: 5px;
    height: 10px;
    border-color: ${({ theme }) => theme.color.BLACK};
    border-style: solid;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    border-radius: ${({ theme }) => theme.radius.r2};
  }
`;
