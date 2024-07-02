import * as React from "react";
import { ReactElement } from "react";
import * as Styled from "./index.styled";

type Props = {
  label: string;
  description?: string;
  icon?: string | ReactElement;
  flipIcon?: boolean;
  labelColor?: string;
  descriptionColor?: string;
  backgroundColor?: string;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function ListButton({
  label,
  description,
  labelColor,
  descriptionColor,
  backgroundColor,
  icon,
  flipIcon,
  disabled,
  onClick,
}: Props) {
  return (
    <Styled.Button
      backgroundColor={backgroundColor}
      onClick={onClick}
      aria-label={label}
      disabled={disabled}
    >
      <Styled.ContentWrapper flipIcon={!!flipIcon}>
        {icon && typeof icon === "string" ? (
          <Styled.ImageIcon src={icon} alt={`${label}-icon`} />
        ) : (
          icon
        )}
        <Styled.TextContent>
          <Styled.Label labelColor={labelColor}>{label}</Styled.Label>
          <Styled.Description descriptionColor={descriptionColor}>
            {description}
          </Styled.Description>
        </Styled.TextContent>
      </Styled.ContentWrapper>
    </Styled.Button>
  );
}
