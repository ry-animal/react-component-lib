import { Orientation } from "src/constants/Orientation";
import styled from "styled-components";

export const StepLabel = styled.span<{ completed: boolean }>`
  text-align: center;
  width: var(--circleDiam);
  height: var(--circleDiam);
  font-weight: ${({ theme }) => theme.type.weight.MEDIUM};
  font-size: calc(var(--circleDiam) / 2);
  color: ${({ theme }) => theme.color.SURFACE_1};
  background: ${({ completed, theme }) =>
    completed ? theme.color.TEXT_1 : theme.color.TEXT_4};
  border: 0.1em solid
    ${({ completed, theme }) =>
      completed ? theme.color.TEXT_1 : theme.color.TEXT_4};
  border-radius: 50%;
  line-height: var(--circleDiam);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StepDescription = styled.span`
  text-align: center;
  color: ${({ theme }) => theme.color.TEXT_1};
  font-size: calc(var(--circleDiam) / 2);
  padding: 0.25em;
  font-weight: ${({ theme }) => theme.type.weight.NORMAL};
`;

export const StepBadge = styled.div<{ orientation: Orientation }>`
  display: flex;
  flex-direction: ${({ orientation }) =>
    orientation === "horizontal" ? "column" : "row"};
  align-items: center;
  justify-content: center;
`;

export const StepItem = styled.div<{
  orientation: Orientation;
  completed: boolean;
}>`
  --lineWidth: 4px;
  --circleDiam: 2rem;
  --verticalPaddingBottom: 4rem;
  --verticalGap: 2rem;
  --verticalBottom: 1rem;
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  color: ${({ completed, theme }) =>
    completed ? theme.color.TEXT_1 : theme.color.TEXT_4};
  text-align: center;

  &:before {
    position: relative;
    z-index: 1;
    display: block;
    ${({ orientation }) =>
      orientation === "vertical" &&
      "height: calc(var(--verticalPaddingBottom) + var(--verticalBottom) * 2);"}
  }

  &:first-child {
    padding-top: var(--lineWidth);
  }

  // this is the line
  &:not(:first-child):before {
    content: "";
    background-color: ${({ completed, theme }) =>
      completed ? theme.color.TEXT_1 : theme.color.TEXT_4};

    width: ${({ orientation }) =>
      orientation === "horizontal"
        ? "calc(100% - var(--circleDiam));"
        : "var(--lineWidth);"};

    /** Horizontal specific styles */
    ${({ orientation }) =>
      orientation === "horizontal" &&
      "height: var(--lineWidth); order: -1; right: calc(50% - var(--circleDiam) / 2 - 0.25%); top: 1.25rem; "}

    /** Vertical specific styles */   
    ${({ orientation }) =>
      orientation === "vertical" && "left: calc(var(--circleDiam) / 2);"}
      
    ${({ orientation }) =>
      orientation === "vertical" &&
      "height: calc(var(--verticalPaddingBottom) + var(--verticalBottom) * 2);"}
  }
`;

export const StepperContainer = styled.div<{ orientation: Orientation }>`
  font-family: ${({ theme }) => theme.type.family.body};
  display: flex;
  flex-direction: ${({ orientation }) =>
    orientation === "horizontal" ? "row" : "column"};
  flex: 1;
  justify-content: center;
  align-items: ${({ orientation }) =>
    orientation === "horizontal" ? "center" : "flex-start"};
  width: 100%;
  height: 100%;
`;
