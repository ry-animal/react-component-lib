import { rgba } from "polished";
import styled, { css } from "styled-components";
import ClickOutside from "../ClickOutside";

export const OuterWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => rgba(theme.color.BLACK, theme.opacity.FIVE)};
  display: flex;
  justify-content: flex-end;
`;

export const ClickOutsideComponent = styled(ClickOutside)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const CloseButtonWrapper = styled.div`
  margin: ${({ theme }) => theme.space.s32};

  @media (max-width: ${({ theme }) => theme.media.tablet.max}) {
    margin: ${({ theme }) => `${theme.space.s32} ${theme.space.s16}`};
  }
`;

export const InnerWrapper = styled.div`
  background: ${({ theme }) => theme.color.SURFACE_1};
  height: 100vh;
  display: flex;

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    flex: 1;
  }
`;

export const MenuTitle = styled.div`
  padding: ${({ theme }) =>
    `${theme.space.s40} ${theme.space.s8} ${theme.space.s24} ${theme.space.s8}`};

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    text-align: center;
    flex: 1;
    padding: 0;
  }
`;

const menuMargins = css`
  width: 325px;
  padding: ${({ theme }) => `0 ${theme.space.s16}`};

  @media (max-width: ${({ theme }) => theme.media.laptop.max}) {
    width: 275px;
    padding: ${({ theme }) => `0 ${theme.space.s8}`};
  }

  @media (max-width: ${({ theme }) => theme.media.tablet.max}) {
    width: 225px;
    padding: ${({ theme }) => `0 ${theme.space.s8}`};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    width: 100%;
    padding: ${({ theme }) => `0 ${theme.space.s32}`};
  }
`;

export const MenuOptionsWrapper = styled.div<{
  isItemSelected?: boolean;
  isMobile: boolean;
}>`
  background: ${({ theme }) => theme.color.SURFACE_3};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.s4};
  overflow-y: overlay;

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    overflow-y: unset;
    transition: transform 0.25s ease-in-out;
    background: ${({ theme }) => theme.color.SURFACE_1};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  ${({ isMobile, isItemSelected }) =>
    isMobile && isItemSelected
      ? "transform: translateX(-100%);"
      : "transform: translateX(0);"}
`;

export const BackButtonWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  ${menuMargins}
`;

export const MenuTabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.s4};
  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    overflow-y: overlay;
  }
  ${menuMargins}
`;

export const HeaderRow = styled.div`
  position: relative;
  display: flex;
  ${menuMargins}

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    margin: ${({ theme }) => `${theme.space.s32} 0`};
  }
`;

const menuContentMargins = css`
  width: 650px;
  padding: ${({ theme }) => `0 ${theme.space.s64}`};

  @media (max-width: ${({ theme }) => theme.media.laptop.max}) {
    width: 550px;
    padding: ${({ theme }) => `0 ${theme.space.s32}`};
  }

  @media (max-width: ${({ theme }) => theme.media.tablet.max}) {
    width: 425px;
    padding: ${({ theme }) => `0 ${theme.space.s32}`};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    width: auto;
  }
`;

export const MenuContentHeader = styled(HeaderRow)`
  ${menuContentMargins}
`;

export const MenuContent = styled.div<{ isItemSelected?: boolean }>`
  background: ${({ theme }) => theme.color.SURFACE_2};
  display: flex;
  flex-direction: column;
  overflow-y: overlay;
  border: 2px solid transparent;

  &:focus-visible {
    border: ${({ theme }) => `${theme.space.s2} solid ${theme.color.TEXT_1}`};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    overflow-y: unset;
    width: 100%;
    transition: transform 0.25s ease-in-out;
    transform: ${({ isItemSelected }) =>
      isItemSelected ? "translateX(0)" : "translateX(100%)"};
  }
`;

export const ScrollableContent = styled.div`
  ${menuContentMargins}
  color: ${({ theme }) => theme.color.TEXT_1};
  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    flex: 1;
    overflow-y: overlay;
  }
`;

export const ContentTitle = styled.h5`
  font-family: ${({ theme }) => theme.type.family.title};
  font-size: 1.75rem;
  margin: 0;
  color: ${({ theme }) => theme.color.TEXT_1};
  padding: ${({ theme }) => `${theme.space.s24} 0 ${theme.space.s32} 0`};

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    padding: 0;
    text-align: center;
    flex: 1;
    font-size: 1.125rem;
  }
`;

export const MenuItemButton = styled.button<{ active?: boolean }>`
  color: ${({ theme }) => theme.color.TEXT_1};
  background: transparent;
  font-family: ${({ theme }) => theme.type.family.title};
  font-weight: ${({ theme }) => theme.type.weight.MEDIUM};
  border: none;
  border-radius: ${({ theme }) => theme.radius.r4};
  padding: ${({ theme }) => theme.space.s16};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.25s ease-out;

  & span {
    font-weight: ${({ theme }) => theme.type.weight.BOLD};
    font-size: 0.875rem;
  }

  &:focus-visible {
    outline: ${({ theme }) => `${theme.space.s2} solid ${theme.color.TEXT_1}`};
  }

  &:hover {
    ${({ active, theme }) =>
      !active &&
      `
        background-color: ${theme.color.SURFACE_4};
    `};
  }

  ${({ active, theme }) =>
    active &&
    `
    cursor: default;
    color: ${theme.color.TEXT_3};
    background: ${theme.color.SURFACE_2};
    font-weight: ${theme.type.weight.SEMI_BOLD};   
  `};

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    padding: ${({ theme }) => `${theme.space.s16} 0`};
    color: ${({ theme }) => theme.color.TEXT_1};
    background: transparent;
    font-weight: ${({ theme }) => theme.type.weight.MEDIUM};
  }
`;
