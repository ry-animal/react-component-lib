import styled from "styled-components";

export const PriceLabelWrapper = styled.div<{ isVariant?: boolean }>`
  ${({ isVariant, theme }) => `
    color: ${isVariant ? theme.color.WHITE : theme.color.TEXT_1};
    font-weight: ${theme.type.weight.BOLD};
    font-family: ${theme.type.family.body};
    font-size: ${theme.type.size.SM};
    padding: ${theme.space.s20} 0;
  `};
  ${({ isVariant, theme }) =>
    isVariant &&
    `
    @supports (-webkit-background-clip: text) {
        background: ${theme.gradient.ETH};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `}
  display: flex;
  align-items: center;
`;

export const DollarAmount = styled.span<{ isVariant?: boolean }>`
  ${({ isVariant, theme }) => `
    color: ${isVariant ? theme.color.WHITE : theme.color.TEXT_2};
    font-family: ${theme.type.family.title};
    font-weight: ${theme.type.weight.MEDIUM};
    margin-left: ${theme.space.s8};
    font-size: ${theme.type.size.XXS};

    // Poppins font offset to center with eth price    
    margin-top: ${theme.space.s4}; 
  `};
`;
