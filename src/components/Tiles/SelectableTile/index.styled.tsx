import styled from "styled-components";

export const SelectedTileButton = styled.button<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.25s ease-out, box-shadow 0.25s ease-out;
  ${({ selected, theme }) => `
    gap: ${theme.space.s20};
    border-radius: ${theme.radius.r8};
    background: ${selected ? theme.color.SURFACE_3 : theme.color.SURFACE_1};
    border: ${
      selected
        ? `${theme.space.s2} solid ${theme.color.PRIMARY_1}`
        : `${theme.space.s2} solid transparent`
    };
    padding: ${theme.space.s32};
    color: ${theme.color.TEXT_1};
  `};

  &:hover {
    transform: scale(1.01);
    box-shadow: ${({ theme }) => theme.elevation.medium};
  }

  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
  &:disabled:hover {
    transform: none;
    box-shadow: none;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.span`
  ${({ theme }) => `
    font-size: ${theme.type.size.XS};
    font-weight: ${theme.type.weight.SEMI_BOLD};
  `};
  line-height: 1.25rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
`;

export const Subtitle = styled.span`
  text-align: center;
`;
