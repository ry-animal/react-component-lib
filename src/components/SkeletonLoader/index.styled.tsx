import styled from "styled-components";

export const SkeletonLoader = styled.span<{
  width: string;
  height: string;
  radius: string;
  time: string;
}>`
  @keyframes skeleton {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: calc(200px + 100%) 0;
    }
  }
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: block;
  visibility: hidden;
  position: relative;

  * {
    visibility: hidden;
    pointer-events: none;
    cursor: default;
  }

  &:after {
    content: "";
    visibility: visible;
    background-color: ${({ theme }) => theme.color.SURFACE_3};
    background-image: ${({ theme }) => `linear-gradient(
      90deg,
      ${theme.color.SURFACE_3},
      ${theme.color.SURFACE_3},
      ${theme.color.SURFACE_1},
      ${theme.color.SURFACE_3},
      ${theme.color.SURFACE_3}
    )`};
    background-size: 200px 100%;
    background-repeat: no-repeat;
    border-radius: ${({ radius }) => radius};
    animation: skeleton ${({ time }) => time} ease-in-out infinite;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;
