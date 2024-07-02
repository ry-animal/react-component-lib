import styled, { css } from "styled-components";

export const INPUT_HEIGHT = "48px";
export const TEXTAREA_HEIGHT = "80px";

export const InputContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  font-family: ${({ theme }) => theme.type.family.body};
  position: relative;
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.color.TEXT_1};
  font-family: ${({ theme }) => theme.type.family.title};
  font-weight: ${({ theme }) => theme.type.weight.SEMI_BOLD};
  font-size: ${({ theme }) => theme.type.size.XS};
  line-height: 20px;
  margin-bottom: ${({ theme }) => theme.space.s8};
`;

export const inputCss = css`
  color: ${({ theme }) => theme.color.TEXT_1};
  background-color: ${({ theme }) => theme.color.SURFACE_1};
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  font-size: ${({ theme }) => theme.type.size.SM};
  font-family: ${({ theme }) => theme.type.family.body};
  font-weight: ${({ theme }) => theme.type.weight.SEMI_BOLD};
  line-height: 22px;
  border-radius: ${({ theme }) => theme.radius.r4};
  border: ${({ theme }) => `${theme.space.s1} solid ${theme.color.TEXT_1}`};
  padding: ${({ theme }) => `${theme.space.s8} ${theme.space.s16}`};
  box-sizing: border-box;

  &:disabled {
    background: ${({ theme }) => theme.color.SURFACE_3};
    border: ${({ theme }) => `${theme.space.s1} solid ${theme.color.TEXT_4}`};
  }

  &:invalid {
    border: ${({ theme }) => `${theme.space.s2} solid ${theme.color.ERROR_2}`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.TEXT_4};
    font-size: ${({ theme }) => theme.type.size.SM};
    font-weight: ${({ theme }) => theme.type.weight.NORMAL};
  }

  &:focus {
    outline: ${({ theme }) => `${theme.space.s1} solid ${theme.color.TEXT_1}`};
  }
`;

export const Input = styled.input<{ isError: boolean }>`
  ${inputCss};
  height: ${INPUT_HEIGHT};
  ${({ isError, theme }) =>
    isError && `border: ${theme.space.s2} solid ${theme.color.ERROR_2};`}
`;

export const TextArea = styled.textarea<{ isError: boolean }>`
  ${inputCss};
  height: ${TEXTAREA_HEIGHT};
  ${({ isError, theme }) =>
    isError && `border: ${theme.space.s2} solid ${theme.color.ERROR_2};`}
`;

export const InputError = styled.span`
  color: ${({ theme }) => theme.color.ERROR_2};
  font-weight: ${({ theme }) => theme.type.weight.MEDIUM};
  font-size: ${({ theme }) => theme.type.size.XXXS};
  line-height: 22px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const AnnotationWrapper = styled.div`
  position: absolute;

  ${({ theme }) => `
    right: ${theme.space.s16};
    top: ${theme.space.s12};
  `}
`;
