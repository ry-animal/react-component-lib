import styled, { css } from "styled-components";

const SHARE_BREAKPOINT_MIN = "501px";
const SHARE_BREAKPOINT_MAX = "500px";

const textStyle = css`
  text-decoration: none;
  color: ${({ theme }) => theme.color.TEXT_3};
  font-size: ${({ theme }) => theme.type.size.XXXS};
`;

const hoverStyle = css`
  box-shadow: inset 0 0 0 2px ${({ theme }) => theme.color.TEXT_1};
  background: ${({ theme }) => theme.color.SURFACE_2};
  color: ${({ theme }) => theme.color.TEXT_1};
  font-size: ${({ theme }) => theme.type.size.XXS};
`;

const activeStyle = css`
  box-shadow: inset 0 0 0 4px ${({ theme }) => theme.color.TEXT_1};
  background: ${({ theme }) => theme.color.SURFACE_3};
  color: ${({ theme }) => theme.color.TEXT_1};
  font-size: ${({ theme }) => theme.type.size.XXXS};
`;

const buttonStyle = css`
  flex: 1;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.r4};
  height: 72px;
  padding: ${({ theme }) => theme.space.s16};
  transition: all 0.25s;
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.SURFACE_4};

  &:hover {
    ${hoverStyle}
  }
  &:active {
    ${activeStyle}
  }
`;

export const SocialButtonsWrapper = styled.div`
  display: grid;
  flex: 1;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: ${({ theme }) => theme.space.s16};

  @media (max-width: ${SHARE_BREAKPOINT_MAX}) {
    display: flex;
    justify-content: center;
  }
`;

export const CopyButtonWrapper = styled.div`
  ${textStyle}

  @media (max-width: ${SHARE_BREAKPOINT_MAX}) {
    > span {
      display: flex;
      flex-direction: column-reverse;
      gap: ${({ theme }) => theme.space.s8};
      text-align: center;

      img {
        ${buttonStyle};
        width: 72px;
      }
    }

    &:hover {
      > span img {
        ${hoverStyle}
      }
    }
  }

  @media (min-width: ${SHARE_BREAKPOINT_MIN}) {
    > span {
      justify-content: flex-end;
      flex-direction: row-reverse;
      gap: ${({ theme }) => theme.space.s16};
      ${buttonStyle};
    }
  }
`;

export const ShareIconLink = styled.a`
  cursor: pointer;
  display: flex;
  ${textStyle}

  @media (max-width: ${SHARE_BREAKPOINT_MAX}) {
    text-align: center;
    flex-direction: column;
    gap: ${({ theme }) => theme.space.s8};
    width: 72px;

    &:hover {
      div {
        ${hoverStyle}
      }
    }
  }

  @media (min-width: ${SHARE_BREAKPOINT_MIN}) {
    gap: ${({ theme }) => theme.space.s16};

    ${buttonStyle}
  }
`;

export const Icon = styled.div`
  @media (max-width: ${SHARE_BREAKPOINT_MAX}) {
    ${buttonStyle}
  }

  @media (min-width: ${SHARE_BREAKPOINT_MIN}) {
    width: 24px;

    & svg {
      width: 100%;
    }
  }
`;
