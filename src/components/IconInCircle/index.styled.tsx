import styled from "styled-components";

const CIRCLE_WIDTH = "102px";

export const Icon = styled.img`
  height: 100%;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35%;
  height: 30%;
`;

export const Circle = styled.div<{ color: string }>`
  position: relative;
  width: ${CIRCLE_WIDTH};
  height: ${CIRCLE_WIDTH};
  border: 0.2em solid ${({ color }) => color};
  border-radius: 50%;
  color: ${({ color }) => color};
  text-align: center;
`;
