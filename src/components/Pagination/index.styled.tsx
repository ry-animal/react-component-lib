import styled from "styled-components";
import AddImageIconBackWhite from "../../assets/icons/icon-arrow-back-white.svg";
import AddImageIconBackBlack from "../../assets/icons/icon-arrow-back.svg";
import { ThemeName } from "../../theme/theme.interface";

export const renderIcon = (themeName: string) => {
  if (themeName === ThemeName.DARK) {
    return `url(${AddImageIconBackWhite}) center no-repeat`;
  }

  return `url(${AddImageIconBackBlack}) center no-repeat`;
};

export const Pagination = styled.div`
  padding: ${({ theme }) => theme.space.s8};
  display: flex;
  justify-content: center;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.space.s12};
  }

  li {
    a {
      font-family: ${({ theme }) => theme.type.family.title};
      font-weight: ${({ theme }) => theme.type.weight.MEDIUM};
      font-size: ${({ theme }) => theme.type.size.XXS};
      background-color: ${({ theme }) => theme.color.SURFACE_1};
      border: ${({ theme }) =>
        `${theme.space.s1} solid ${theme.color.SURFACE_4}`};
      border-radius: ${({ theme }) => theme.radius.r4};
      min-width: 40px;
      height: 40px;
      line-height: 1;
      display: flex;
      align-self: center;
      justify-content: center;
      align-items: center;
      user-select: none;
      cursor: pointer;
      transition: border-color 0.4s ease-out;
      color: ${({ theme }) => theme.color.TEXT_1};

      &:hover,
      &:focus {
        border-color: ${({ theme }) => theme.color.TEXT_4};
        background-color: ${({ theme }) => theme.color.SURFACE_2};
        outline: none;
      }
    }

    &.selected a {
      border-color: ${({ theme }) => theme.color.TEXT_2};
      box-shadow: ${({ theme }) =>
        `inset 0 0 0 ${theme.space.s1} ${theme.color.TEXT_2}`};
      transition: box-shadow 0.4s ease-out;
    }
  }

  .arrow {
    a {
      background: ${({ theme }) => renderIcon(theme.name)};
      background-size: 50%;
    }
    &.disabled {
      a {
        opacity: 0.2;
        border-color: ${({ theme }) => theme.color.TEXT_4};
        cursor: inherit;
      }
    }
  }

  .arrowNext a {
    background: ${({ theme }) => renderIcon(theme.name)};
    background-size: 50%;
    transform: rotate(180deg);
  }
`;
