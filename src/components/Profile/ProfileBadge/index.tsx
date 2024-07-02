import { useTheme } from "styled-components";
import IconChevronRight from "../../Icons/IconChevronRight";
import { ProfileIcon } from "../ProfileIcon";
import STRINGS from "./index.strings";
import * as Styled from "./index.styled";

const DEFAULT_SIZE_REM = 0.875;
const DEFAULT_ICON_SIZE_PX = 36;

type Props = {
  bold?: boolean;
  color?: string;
  displayName: string;
  fontSizeRem?: number;
  iconSizePx?: number;
  imgSrc?: string;
  transparentBorder?: boolean;
  themeSwitcher?: JSX.Element;
  onClick?: () => void;
};

export function ProfileBadge({
  bold,
  color,
  displayName,
  fontSizeRem,
  iconSizePx,
  imgSrc,
  transparentBorder,
  themeSwitcher,
  onClick,
}: Props) {
  const { color: themeColor } = useTheme();
  const isButton = !!onClick;

  return (
    <Styled.UserContainer>
      <Styled.BadgeWrapper
        aria-label={STRINGS.viewProfile}
        isButton={isButton}
        role={isButton ? "button" : undefined}
        onClick={onClick}
        isThemeSwitcher={Boolean(themeSwitcher)}
      >
        <ProfileIcon
          imgSrc={imgSrc}
          size={iconSizePx || DEFAULT_ICON_SIZE_PX}
          transparentBorder={transparentBorder}
        />
        <Styled.DisplayName
          bold={bold}
          fontSizeRem={fontSizeRem || DEFAULT_SIZE_REM}
          textColor={color || themeColor.TEXT_1}
          title={displayName}
        >
          {displayName}
        </Styled.DisplayName>
        {isButton && <IconChevronRight fill={themeColor.TEXT_3} />}
      </Styled.BadgeWrapper>
      {themeSwitcher && themeSwitcher}
    </Styled.UserContainer>
  );
}
