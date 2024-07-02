import styled from "styled-components";

export const SocialLink = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.s8};
  font-size: ${({ theme }) => theme.type.size.XXS};
  color: ${({ theme }) => theme.color.TEXT_1};
  align-items: center;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  & svg {
    width: 16px;
    height: 16px;
  }
`;
