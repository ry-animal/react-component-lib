import * as Styled from "./index.styled";

export interface InfoBoxProps {
  children: JSX.Element | JSX.Element[];
  showBorder?: boolean;
}

export function InfoBox({ children, showBorder = true }: InfoBoxProps) {
  return (
    <Styled.InfoBoxContainer showBorder={showBorder}>
      <Styled.HoverBorder showBorder={showBorder} />
      <Styled.InnerContainer>{children}</Styled.InnerContainer>
    </Styled.InfoBoxContainer>
  );
}
