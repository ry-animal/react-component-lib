import styled from "styled-components";

export const Container = styled.div<{ stretch?: boolean }>`
  width: ${({ stretch }) => (stretch ? "auto" : "300px")};

  ${({ theme }) => `
    background-color: ${theme.color.SURFACE_2};
    border-radius: ${theme.radius.r8};
    box-shadow: ${theme.elevation.medium};
    font-family: ${theme.type.family.body};
    padding: ${theme.space.s8};
  `}
`;

export const Details = styled.div`
  ${({ theme }) => `
    background-color: ${theme.color.SURFACE_1};
    border-radius: ${theme.radius.r8};
    margin-top: ${theme.space.s8};
    padding-top: ${theme.space.s4};
  `}
`;

export const DoubleWidthCell = styled.div`
  grid-column: 1 / span 2;
`;

export const WalletActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  ${({ theme }) => `
    gap: ${theme.space.s12} ${theme.space.s8};
    padding: ${theme.space.s12};
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => `
    margin-top: ${theme.space.s8};
    padding: ${theme.space.s12};
  `}
`;
