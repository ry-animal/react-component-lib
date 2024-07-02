import styled from "styled-components";

export const SearchArea = styled.div`
  ${({ theme }) => `
    font-family: ${theme.type.family.body};
    margin-left: ${theme.space.s8};
  `};
  position: relative;
`;

export const SearchResultsList = styled.div`
  ${({ theme }) => `
    background-color: ${theme.color.SURFACE_2};
    border-radius: ${theme.radius.r8};
    box-shadow: ${theme.elevation.low};
    padding-bottom: ${theme.space.s12};
    top: ${theme.space.s64};
    z-index: ${theme.layer.results};
  `};
  position: absolute;
  width: 480px;
`;
