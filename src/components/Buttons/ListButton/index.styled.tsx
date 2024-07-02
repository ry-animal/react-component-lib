import styled from "styled-components";

export const Button = styled.button<{ backgroundColor?: string }>`
  border: none;
  transition: background-color 0.25s ease-out;
  ${({ theme, backgroundColor }) => `
    background-color: ${backgroundColor ?? theme.color.SURFACE_3};
    padding: ${theme.space.s20};
    border-radius: ${theme.radius.r8};
    border: ${`${theme.space.s1} solid transparent`};
  `};
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, backgroundColor }) =>
      backgroundColor ?? theme.color.SURFACE_2};
    border: ${({ theme }) => `${theme.space.s1} solid ${theme.color.TEXT_4}`};
  }

  &:disabled {
    background-color: transparent;
    opacity: 0.6;
    cursor: default;
    border: ${({ theme }) =>
      `${theme.space.s1} solid ${theme.color.SURFACE_1}`};
  }
`;

export const ContentWrapper = styled.div<{ flipIcon?: boolean }>`
  display: flex;
  gap: ${({ theme }) => `${theme.space.s16}`};
  align-items: center;
  justify-content: ${({ flipIcon }) =>
    flipIcon ? "space-between" : "flex-start"};
  flex-direction: ${({ flipIcon }) => (flipIcon ? "row-reverse" : "row")};
`;

export const ImageIcon = styled.img`
  @media (max-width: ${({ theme }) => theme.media.tablet.min}) {
    height: 20px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;

export const Label = styled.span<{ labelColor?: string }>`
  ${({ theme, labelColor }) => `
    color: ${labelColor ?? theme.color.TEXT_2};
    font-family: ${theme.type.family.title};
    font-size: ${theme.type.size.XS};
    font-weight: ${theme.type.weight.BOLD};
  `}

  text-align: left;

  @media (max-width: ${({ theme }) => theme.media.tablet.min}) {
    ${({ theme }) => `font-size: ${theme.type.size.XXS};`}
  }
`;

export const Description = styled.p<{
  descriptionColor?: string;
}>`
  ${({ theme, descriptionColor }) => `
    color: ${descriptionColor ?? theme.color.TEXT_3};
    font-family: ${theme.type.family.body};
    font-weight: ${theme.type.weight.MEDIUM};
    font-size: ${theme.type.size.XXXS};
    margin-top: 0;
  `}

  margin-bottom: 0;
  max-width: 280px;
  text-align: left;
`;
