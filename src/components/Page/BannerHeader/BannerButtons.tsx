import { useTheme } from "styled-components";
import OptionsCircleBlack from "../../../assets/icons/icon-more-circle-black.svg";
import OptionsCircleWhite from "../../../assets/icons/icon-more-circle-white.svg";
import { useScreenSize } from "../../../hooks";
import { ThemeName } from "../../../theme/theme.interface";
import { ButtonVariant, TextButton } from "../../Buttons/TextButton";
import DisplayOnMedia from "../../DisplayOnMedia";
import PopupMenu from "../../PopupMenu";
import { ALIGN } from "../../PopupMenu/index.interface";
import { ButtonSectionProps } from "./index.interface";
import * as Styled from "./index.styled";

export const BannerButtons = ({
  makeButtons,
  isDarkTheme,
  strings,
}: ButtonSectionProps) => {
  const theme = useTheme();
  const { isDesktop } = useScreenSize();
  const optionIcon = isDarkTheme ? OptionsCircleWhite : OptionsCircleBlack;
  const optionIconSize = 32;

  const buttons = makeButtons(isDarkTheme ? ThemeName.DARK : ThemeName.LIGHT);
  const [firstButton] = buttons;
  const showLabel = isDesktop || buttons.length > 1;
  const showIcon = buttons.length === 1;

  const MAX_BUTTONS_TO_SHOW_POPUP = 2;
  const isMoreThanOneButton = buttons.length > 1;
  const shouldShowPopupMenu = buttons.length > MAX_BUTTONS_TO_SHOW_POPUP;

  return (
    <>
      <DisplayOnMedia hideOn="mobile">
        <Styled.ButtonGroup>
          <TextButton
            variant={ButtonVariant.transparent}
            label={showLabel ? firstButton.label : ""}
            onClick={firstButton.onClick}
            icon={showIcon ? firstButton.icon : undefined}
            isDarkTheme={isDarkTheme}
            aria-label={firstButton.label}
          />
          {isMoreThanOneButton &&
            (shouldShowPopupMenu ? (
              <PopupMenu
                options={makeButtons(theme.name as ThemeName).slice(1)}
                alignTo={ALIGN.right}
                disableCloseIcon
                button={{
                  label: "",
                  icon: optionIcon,
                  variant: ButtonVariant.transparent,
                  iconSize: optionIconSize,
                  isDarkTheme,
                  "aria-label": strings.optionsButtonLabel,
                }}
              />
            ) : (
              <TextButton
                variant={ButtonVariant.transparent}
                label=""
                onClick={buttons[1].onClick}
                icon={buttons[1].icon}
                isDarkTheme={isDarkTheme}
                aria-label={buttons[1].label}
              />
            ))}
        </Styled.ButtonGroup>
      </DisplayOnMedia>
    </>
  );
};
