import styled from "styled-components";
import { Position } from ".";

export const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const Label = styled.span<{ position?: Position }>`
  text-align: ${({ position }) => position ?? "left"};
  font-family: ${({ theme }) => theme.type.family.body};
  font-size: 0.875em;
  font-weight: ${({ theme }) => theme.type.weight.NORMAL};
  color: ${({ theme }) => theme.color.TEXT_1};
`;

export const ProgressBarOuter = styled.div`
  background: ${({ theme }) => theme.color.TEXT_4};
  height: 12px;
  border-radius: ${({ theme }) => theme.radius.r24};
  overflow: hidden;
  position: relative;
`;

export const ProgressBarInner = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.r24};
  background: ${({ theme }) => theme.color.SUCCESS_2};
  transition: width 0.5s ease-in-out;
`;
