import { Link } from "react-router-dom";
import styled from "styled-components";

const renderAnchorStyles = (disabled: boolean) => {
  if (disabled) {
    return `
    text-decoration: none;
    pointer-events: none;
    cursor: default;`;
  } else {
    return `
    text-decoration: none;
    pointer-events: auto;
    cursor: pointer;`;
  }
};

export const RouterLink = styled(Link)<{ disabled: boolean }>`
  ${({ disabled }) => renderAnchorStyles(disabled)}
`;

export const Anchor = styled.a<{ disabled: boolean }>`
  ${({ disabled }) => renderAnchorStyles(disabled)}
`;
