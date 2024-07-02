import { useTheme } from "styled-components";
import OptionsCircleBlack from "../../../assets/icons/icon-more-circle-black.svg";
import OptionsCircleWhite from "../../../assets/icons/icon-more-circle-white.svg";
import useScreenSize from "../../../hooks/useScreenSize";
import { ThemeName } from "../../../theme/theme.interface";
import CircleButton from "../../Buttons/CircleButton";
import DisplayOnMedia from "../../DisplayOnMedia";
import PopupMenu from "../../PopupMenu";
import { ALIGN } from "../../PopupMenu/index.interface";
import { ProfileIcon } from "../../Profile/ProfileIcon";
import { Text } from "../../Text";
import { TitleSectionProps } from "./index.interface";
import * as Styled from "./index.styled";

export const TitleSection = ({
  avatarUrl,
  isDarkTheme,
  isHexAvatar,
  title,
  makeButtons,
  strings,
}: TitleSectionProps) => {
  const { isMobile } = useScreenSize();
  const theme = useTheme();
  const optionIcon = isDarkTheme ? OptionsCircleWhite : OptionsCircleBlack;
  const avatarSize = 116;
  const avatarBorderSize = 4;

  const buttons = makeButtons(isDarkTheme ? ThemeName.DARK : ThemeName.LIGHT);
  const [button] = buttons;

  return (
    <Styled.TopContent>
      <DisplayOnMedia showOn={["mobile", "tablet", "laptop"]}>
        <ProfileIcon
          imgSrc={avatarUrl}
          size={avatarSize}
          borderSize={avatarBorderSize}
          transparentBorder
          hex={isHexAvatar}
        />
      </DisplayOnMedia>
      <Styled.TitleWrapper>
        <Styled.HeaderTitleWrapper>
          <Text
            color={isDarkTheme ? theme.color.WHITE : theme.color.BLACK}
            variant={isMobile ? "Display4" : "Display2"}
            reset
          >
            {title}
            <DisplayOnMedia showOn="mobile">
              <Styled.TitleButtonWrapper>
                {buttons.length > 1 ? (
                  <PopupMenu
                    options={makeButtons(theme.name as ThemeName)}
                    alignTo={ALIGN.right}
                    disableCloseIcon
                    button={{
                      iconUrl: optionIcon,
                      isDarkTheme,
                      transparent: true,
                      "aria-label": strings.optionsButtonLabel,
                    }}
                  />
                ) : (
                  <Styled.CenterButtonWrapper>
                    <CircleButton
                      size="xs"
                      onClick={button.onClick}
                      icon={button.icon}
                      isDarkTheme={isDarkTheme}
                      transparent
                      aria-label={button.label}
                    />
                  </Styled.CenterButtonWrapper>
                )}
              </Styled.TitleButtonWrapper>
            </DisplayOnMedia>
          </Text>
        </Styled.HeaderTitleWrapper>
      </Styled.TitleWrapper>
    </Styled.TopContent>
  );
};
