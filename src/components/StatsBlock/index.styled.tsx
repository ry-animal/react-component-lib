import { rgba } from "polished";
import styled from "styled-components";
import { BlurRadius } from "../../constants/BlurRadius";

export const StatsBlockWrapper = styled.div<{ isDarkTheme?: boolean }>`
  ${({ theme }) => `
    border-radius: ${theme.radius.r8};
    background-color: ${rgba(theme.color.WHITE, theme.opacity.TWO)};
    gap: ${theme.space.s8};
    padding: ${theme.space.s8};
  `}
  display: flex;
  flex-wrap: wrap;

  ${({ isDarkTheme, theme }) =>
    isDarkTheme &&
    `
      background-color: ${rgba(theme.color.WHITE, theme.opacity.TWO)};
    `}

  > * {
    flex: 1 0 auto;
  }

  @supports (backdrop-filter: blur(${BlurRadius.b15})) {
    backdrop-filter: blur(${BlurRadius.b15});
  }
`;

export const StatBadgeContainer = styled.div<{ isDarkTheme?: boolean }>`
  ${({ theme }) => `
    font-family: ${theme.type.family.title};
    border-radius: ${theme.radius.r4};
    background-color: ${rgba(theme.color.WHITE, theme.opacity.FIVE)};
    padding: ${theme.space.s8} ${theme.space.s12};
    color: ${theme.color.BLACK};
  `}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 75px;

  ${({ isDarkTheme, theme }) =>
    isDarkTheme &&
    `
    background-color: ${rgba(theme.color.WHITE, theme.opacity.ONE)};
    color: ${theme.color.WHITE};
  `}
`;

export const StatButton = styled.button<{ isDarkTheme?: boolean }>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  transition: transform 0.25s ease-out;

  ${StatBadgeContainer} {
    &:hover,
    &:focus {
      background-color: ${({ isDarkTheme, theme }) =>
        isDarkTheme
          ? rgba(theme.color.WHITE, theme.opacity.THREE)
          : rgba(theme.color.WHITE, theme.opacity.NINE)};
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space.s4};
`;

export const Label = styled.span`
  text-align: center;

  ${({ theme }) => `
    font-weight: ${theme.type.weight.MEDIUM};
    font-size: ${theme.type.size.XXXS};
  `};
`;

export const Value = styled.span`
  ${({ theme }) => `
    font-weight: ${theme.type.weight.NORMAL};
    font-size: ${theme.type.size.XL};
  `}
`;

export const EthIcon = styled.img`
  width: ${({ theme }) => theme.space.s12};
`;
