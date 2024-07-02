import styled from "styled-components";
import ImageWithFallback from "../../ImageWithFallback";

export const Header = styled.div`
  ${({ theme }) => `
    color: ${theme.color.TEXT_3};
    font-weight: ${theme.type.weight.SEMI_BOLD};
    font-size: ${theme.type.size.XXS};
    padding: ${theme.space.s16} ${theme.space.s24} ${theme.space.s8} ${theme.space.s24};
  `}
`;

export const Suggestion = styled.div<{ highlighted: boolean }>`
  ${({ highlighted, theme }) => `
    background-color: ${highlighted ? theme.color.SURFACE_1 : "auto"};
    color: ${theme.color.TEXT_2};
    font-size: ${theme.type.size.XXS};
    padding: ${`${theme.space.s8} ${theme.space.s24}`};
  `};
  cursor: pointer;
`;

export const Result = styled.div<{ highlighted: boolean }>`
  cursor: pointer;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  ${({ highlighted, theme }) => `
    background-color: ${highlighted ? theme.color.SURFACE_1 : "auto"};
    gap: ${theme.space.s1} ${theme.space.s12};
    padding: ${theme.space.s8} ${theme.space.s24};
  `};
`;

export const ResultHeader = styled.div`
  ${({ theme }) => `
    color: ${theme.color.TEXT_2};
    font-weight: ${theme.type.weight.SEMI_BOLD};
  `};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ResultImageWithFallback = styled(ImageWithFallback)`
  border-radius: ${({ theme }) => theme.radius.r4};
  grid-row: 1 / span 2;
  height: 40px;
  width: 40px;
`;

export const ResultText = styled.div`
  ${({ theme }) => `
    color: ${theme.color.TEXT_3};
    font-size: ${theme.type.size.XXXS};
  `}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
