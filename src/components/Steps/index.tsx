import { Orientation } from "../../constants/Orientation";
import * as Styled from "./index.styled";

export type Step = {
  label: string;
  description: string;
};

type Props = {
  steps: [Step, Step, ...Step[]];
  currentStep: number;
  orientation?: Orientation;
};

/**
 * This component is built for... stepping through things.
 * @param steps : [{label, description}]
 * @param currentStep : number -> start the counter at 0
 * @param orientation: defaults to horizontal, vertical is also an option
 * @returns A Steps componenent.
 */
export function Steps({ steps, currentStep, orientation }: Props) {
  return (
    <Styled.StepperContainer orientation={orientation ?? "horizontal"}>
      {steps.map((step, index) => (
        <Styled.StepItem
          orientation={orientation ?? "horizontal"}
          completed={currentStep >= index}
          key={index}
        >
          <Styled.StepBadge orientation={orientation ?? "horizontal"}>
            <Styled.StepLabel completed={currentStep >= index}>
              {step.label}
            </Styled.StepLabel>
            <Styled.StepDescription>{step.description}</Styled.StepDescription>
          </Styled.StepBadge>
        </Styled.StepItem>
      ))}
    </Styled.StepperContainer>
  );
}
