import styled from "styled-components";

export const SwitchClickableRegion = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.s8};
  cursor: pointer;
`;

export const SwitchOuterBox = styled.span`
  position: relative;
  display: inline-block;
  width: 58px;
  height: 24px;
`;

export const SwitchHiddenInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background: ${({ theme }) => theme.gradient.ETH};
    border: ${({ theme }) => `${theme.space.s1} solid ${theme.color.TEXT_2}`};
  }
  &:checked + span:before {
    transform: translateX(28px);
    background-color: ${({ theme }) => theme.color.BLACK};
  }
  &:focus + span {
    box-shadow: ${({ theme }) => `0 0 ${theme.space.s1} ${theme.color.TEXT_2}`};
  }
`;

export const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  border: ${({ theme }) => `${theme.space.s1} solid ${theme.color.TEXT_4}`};
  border-radius: ${({ theme }) => theme.radius.r32};
  transition: all 0.4s ease-out;
  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 6px;
    bottom: 3px;
    background-color: ${({ theme }) => theme.color.TEXT_2};
    border-radius: ${({ theme }) => theme.radius.round};
    transition: 0.4s;
  }
`;
