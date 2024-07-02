import styled from "styled-components";

export const UserContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

interface BadgeWrapperProps {
  isButton: boolean;
  isThemeSwitcher: boolean;
}

export const BadgeWrapper = styled.div<BadgeWrapperProps>`
  align-items: center;
  cursor: ${({ isButton }) => (isButton ? "pointer" : "inherit")};
  display: flex;
  flex: 1;
  max-width: ${({ isThemeSwitcher }) => (isThemeSwitcher ? "74%" : "100%")};
  color: ${({ theme }) => theme.color.TEXT_1};
  gap: ${({ theme }) => theme.space.s8};
  padding: ${({ isButton, theme }) =>
    isButton
      ? `${theme.space.s8} ${theme.space.s16} ${theme.space.s8} ${theme.space.s8}`
      : "auto"};
  &:hover {
    background-color: ${({ isButton, theme }) =>
      isButton ? theme.color.SURFACE_1 : "auto"};
    border-radius: ${({ theme }) => theme.radius.r4};
  }
`;

export const DisplayName = styled.div<{
  bold?: boolean;
  textColor: string;
  fontSizeRem: number;
}>`
  color: ${({ textColor }) => textColor};
  flex-grow: 1;
  font-family: ${({ theme }) => theme.type.family.body};
  font-size: ${({ fontSizeRem }) => fontSizeRem}rem;
  font-weight: ${({ bold, theme }) =>
    bold ? theme.type.weight.SEMI_BOLD : theme.type.weight.MEDIUM};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
