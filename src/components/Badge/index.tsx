import { useTheme } from "styled-components";
import { IconClear } from "../Icons";
import { Text } from "../Text";
import { BadgeProps } from "./index.interface";
import * as Styled from "./index.styled";

const renderSize = (
  size: BadgeProps["size"]
): { height: string; variant: "Body2" | "Body3"; iconSize: number } => {
  if (size === "medium") {
    return {
      variant: "Body3",
      height: "32px",
      iconSize: 16,
    };
  }

  return {
    variant: "Body2",
    height: "48px",
    iconSize: 36,
  };
};

export function Badge({
  maxWidth = "100%",
  name,
  onClose,
  size = "medium",
}: BadgeProps): JSX.Element {
  const { color } = useTheme();
  const { variant, height, iconSize } = renderSize(size);

  return (
    <Styled.Badge maxWidth={maxWidth} onClick={onClose}>
      <Styled.BadgeContainer height={height}>
        <Text ellipsis text={name} variant={variant} reset />
        <Styled.IconClearWrapper>
          <IconClear fill={color.TEXT_1} size={iconSize} />
        </Styled.IconClearWrapper>
      </Styled.BadgeContainer>
    </Styled.Badge>
  );
}

export default Badge;
