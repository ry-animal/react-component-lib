import styled from "styled-components";

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AccordionItemWrapper = styled.div`
  transition: background-color 0.5s ease-in-out;
  ${({ theme }) => `
    border-bottom: 1px solid ${theme.color.SURFACE_3};
    &:hover, &:focus {
      background-color: ${theme.color.SURFACE_2};
    }
  `}
`;

export const SummaryWrapper = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  width: 100%;
  padding: ${({ theme }) => `${theme.space.s24} ${theme.space.s16}`};
  cursor: pointer;

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.color.SURFACE_4};
  }
`;

export const SummaryText = styled.div`
  margin-left: ${({ theme }) => theme.space.s8};
`;

export const AccordionIcon = styled.span<{ active: boolean }>`
  margin-top: ${({ theme }) => theme.space.s8};
  transform: rotate(${({ active }) => (active ? "90deg" : "0")});
  transform-origin: 60% 40%;
  transition: transform 0.25s ease-in-out;
`;

export const DetailsWrapper = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? "block" : "none")};
  transition: auto 0.5s ease-in-out;
  overflow: hidden;
  padding: ${({ theme }) => `${theme.space.s4} ${theme.space.s16}`};
`;
