import * as Styled from "./index.styled";
type Props = {
  circleColor: string;
  icon: string;
};

export function IconInCircle({ circleColor, icon }: Props) {
  return (
    <Styled.Circle color={circleColor}>
      <Styled.IconWrapper>
        <Styled.Icon src={icon} alt="icon" />
      </Styled.IconWrapper>
    </Styled.Circle>
  );
}
