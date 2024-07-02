import * as React from "react";
import { useEscape } from "../../hooks/useEscape";
import * as Styled from "./index.styled";

export interface ClickOutsideProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactChild | React.ReactChild[];
  onClick: () => void;
}

export function ClickOutside({
  children,
  onClick,
  ...props
}: ClickOutsideProps) {
  useEscape(onClick);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    onClick();
  };
  return (
    <Styled.ClickOutsideTrigger {...props} onClick={handleClick}>
      {children}
    </Styled.ClickOutsideTrigger>
  );
}

export default ClickOutside;
