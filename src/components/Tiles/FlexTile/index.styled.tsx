import styled from "styled-components";

export const TileWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  ${({ theme }) => `
    border: ${theme.space.s1} solid ${theme.color.SURFACE_4};
    border-radius: ${theme.radius.r16};
    padding: ${theme.space.s12};
    color: ${theme.color.TEXT_1};
  `};
  flex: 1;
`;
