import styled from "styled-components";

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.space.s128};
  height: ${({ theme }) => theme.space.s32};
  border: ${({ theme }) => `${theme.space.s1} solid ${theme.color.TEXT_1}`};
  border-radius: ${({ theme }) => theme.radius.r4};
  font-family: ${({ theme }) => theme.type.family.body};
  font-weight: ${({ theme }) => theme.type.weight.MEDIUM};
  color: ${({ theme }) => theme.color.TEXT_1};

  &:focus-within {
    border: ${({ theme }) => `${theme.space.s2} solid ${theme.color.TEXT_1}`};
    margin: ${({ theme }) => `-${theme.space.s1}`};
  }
`;

export const InputController = styled.input`
  all: unset;
  text-align: center;
  max-width: ${({ theme }) => theme.space.s64};

  &:hover,
  :focus {
    background-color: ${({ theme }) => theme.color.SURFACE_3};
    border-radius: ${({ theme }) => theme.radius.r4};
    cursor: pointer;
  }
`;

export const ControlButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `0 ${theme.space.s8}`};
  height: 100%;

  &:hover,
  :focus {
    background-color: ${({ theme }) => theme.color.SURFACE_3};
    border-radius: ${({ theme }) => theme.radius.r4};
    cursor: pointer;
  }
`;
