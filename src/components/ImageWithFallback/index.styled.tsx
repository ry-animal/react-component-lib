import styled from "styled-components";

export const Img = styled.img<{ placeholderImg?: string }>`
  ${({ placeholderImg }) =>
    placeholderImg &&
    `
    background-image: url("${placeholderImg}");
    background-size: cover;
  `}
`;
