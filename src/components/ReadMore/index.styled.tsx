import styled from "styled-components";

export const BodyText = styled.p`
  font-size: ${({ theme }) => theme.type.size.XXS};
  line-height: 24px;
  margin: ${({ theme }) => `0 0 ${theme.space.s16}`};
  font-family: ${({ theme }) => theme.type.family.title};
  font-weight: ${({ theme }) => theme.type.weight.NORMAL};
  color: ${({ theme }) => theme.color.TEXT_1};
  white-space: pre-wrap;
  overflow-wrap: break-word;
`;

export const MoreLink = styled.button`
  font-size: ${({ theme }) => theme.type.size.XXS};
  color: ${({ theme }) => theme.color.TEXT_1};
  line-height: 24px;
  font-weight: ${({ theme }) => theme.type.weight.BOLD};
  border: none;
  background-color: transparent;
  padding: ${({ theme }) => `0 0 0 ${theme.space.s4}`};
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
    outline: none;
  }
`;
