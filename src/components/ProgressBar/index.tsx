import { useUniqueId } from "../../hooks/useUniqueId";
import * as Styled from "./index.styled";

export type Position = "left" | "right" | "center";

type Props = {
  label: string;
  progress: number;
  position?: Position;
};

export function ProgressBar({ label, progress, position }: Props) {
  const id = useUniqueId();
  const fullWidth = 100;
  return (
    <Styled.ProgressBarWrapper>
      <Styled.Label position={position} id={id}>
        {label}
      </Styled.Label>
      <Styled.ProgressBarOuter>
        <Styled.ProgressBarInner
          width={`${progress * fullWidth}%`}
          role="progressbar"
          aria-valuenow={progress * fullWidth}
          aria-valuemin={0}
          aria-valuemax={fullWidth}
          aria-describedby={id}
          aria-busy={progress < 1}
        />
      </Styled.ProgressBarOuter>
    </Styled.ProgressBarWrapper>
  );
}
