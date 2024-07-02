import styled from "styled-components";

export const DropTarget = styled.div<{
  isDropTarget: boolean;
  hasCustomContent: boolean;
  label?: string;
  isError?: boolean;
  isCircleDropzone?: boolean;
}>`
  ${({
    isDropTarget,
    hasCustomContent,
    label,
    isCircleDropzone,
    isError,
    theme,
  }) => {
    if (hasCustomContent) {
      return `
        position: relative;
        display: inline-block;
        width: 100%;
        color: ${theme.color.TEXT_1};
    ${
      isDropTarget
        ? `
      &:after {
        content: "${label ?? ""}";
        font-family: ${theme.type.family.body};
        font-weight: ${theme.type.weight.SEMI_BOLD};
        font-size: 0.875rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${theme.color.SURFACE_2};
        border: ${theme.space.s1} dashed ${theme.color.SURFACE_4};
        position: absolute;
        text-align: center;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        ${isCircleDropzone ? `border-radius: ${theme.radius.round}` : ""};
      }`
        : ""
    }`;
    }

    return `
      background-color: ${
        isDropTarget ? theme.color.SURFACE_2 : theme.color.SURFACE_1
      };
      border: ${
        isError
          ? `${theme.space.s2} dashed ${theme.color.ERROR_2}`
          : `${theme.space.s1} dashed ${theme.color.SURFACE_4}`
      };
      border-radius: ${theme.radius.r4};
      font-family: ${theme.type.family.body};
      padding: 3em;
      text-align: center;
    `;
  }}
`;

export const HiddenFileInput = styled.input`
  display: none;
  width: 0;
`;

export const InputError = styled.span`
  color: ${({ theme }) => theme.color.ERROR_2};
  font-weight: ${({ theme }) => theme.type.weight.MEDIUM};
  font-size: ${({ theme }) => theme.type.size.XXXS};
  line-height: 22px;
`;

export const ButtonWrapper = styled.span`
  position: absolute;
  right: 0;
  top: 0;
`;

export const DiscardButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
`;

export const FilePreviewWrapper = styled.div`
  margin: 1em;
  position: relative;
`;

export const Instructions = styled.div`
  color: ${({ theme }) => theme.color.TEXT_2};
  margin: 1em 30% 1em 30%;
`;

export const Restrictions = styled.div`
  color: ${({ theme }) => theme.color.TEXT_4};
  font-weight: ${({ theme }) => theme.type.weight.BOLD};
  font-size: 0.8em;
  margin: 1em;
`;
