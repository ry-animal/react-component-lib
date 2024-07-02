import styled from "styled-components";

export const Wrapper = styled.span<{ bold: boolean; isVariant: boolean }>`
  font-family: ${({ theme }) => theme.type.family.title};
  font-weight: ${({ bold, theme }) =>
    bold ? theme.type.weight.SEMI_BOLD : theme.type.weight.NORMAL};
  display: flex;
  align-items: center;
  color: ${({ theme, isVariant }) =>
    isVariant ? theme.color.WHITE : theme.color.TEXT_1};
`;
