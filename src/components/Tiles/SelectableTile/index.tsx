import { ReactElement } from "react";
import * as Styled from "./index.styled";

export interface SelectableTileProps {
  selected?: boolean;
  displayContent?: ReactElement;
  iconUrl?: string;
  title?: string | ReactElement;
  subtitle?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const SelectableTile = ({
  selected,
  displayContent,
  iconUrl,
  title,
  subtitle,
  disabled,
  onClick,
}: SelectableTileProps) => (
  <Styled.SelectedTileButton
    selected={selected}
    onClick={onClick}
    disabled={disabled}
  >
    {displayContent}
    {iconUrl && <img src={iconUrl} alt={`${title} icon`} />}
    <Styled.TitleWrapper>
      {title && <Styled.Title>{title}</Styled.Title>}
      {subtitle && <Styled.Subtitle>{subtitle}</Styled.Subtitle>}
    </Styled.TitleWrapper>
  </Styled.SelectedTileButton>
);

export default SelectableTile;
