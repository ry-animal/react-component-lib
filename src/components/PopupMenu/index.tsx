import { ReactElement, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, useTheme } from "styled-components";
import CloseIconWhite from "../../assets/icons/icon-clear-white.svg";
import CloseIconBlack from "../../assets/icons/icon-clear.svg";
import { useClosePopup } from "../../hooks/useClosePopup";
import CircleButton from "../Buttons/CircleButton";
import { TextButton } from "../Buttons/TextButton";
import ClickOutside from "../ClickOutside";
import DisplayOnMedia from "../DisplayOnMedia";
import { IconClear } from "../Icons";
import IconMoreOptions from "../Icons/IconMoreOptions";
import {
  ALIGN,
  DesktopMenuProps,
  MobileMenuProps,
  PopupMenuProps,
} from "./index.interface";
import STRINGS from "./index.strings";
import * as Styled from "./index.styled";

const MobileMenu = ({ onClose, children, strings, theme }: MobileMenuProps) => (
  <ThemeProvider theme={theme}>
    <Styled.MobileMenuWrapper data-testid="popup-mobile-menu">
      <ClickOutside onClick={onClose}>
        <Styled.CloseButtonWrapper>
          <CircleButton
            icon={<IconClear />}
            onClick={onClose}
            aria-label={strings.closeButtonLabel}
          />
        </Styled.CloseButtonWrapper>
        <Styled.PopupMenuWrapper>{children}</Styled.PopupMenuWrapper>
      </ClickOutside>
    </Styled.MobileMenuWrapper>
  </ThemeProvider>
);

const DesktopMenu = ({
  alignTo,
  menuOptions,
  onClose,
  buttonRef,
}: DesktopMenuProps) => {
  const desktopRef = useRef<HTMLDivElement>(null);
  useClosePopup([desktopRef, buttonRef], onClose);
  return (
    <Styled.OptionsWrapper
      ref={desktopRef}
      alignTo={alignTo}
      data-testid="popup-menu"
    >
      {menuOptions}
    </Styled.OptionsWrapper>
  );
};

const attemptRemoveMobileMenu = () => {
  const modal = document.getElementById("popup-mobile-menu");
  modal?.remove();
};

const getCloseIcon = (overrideIcon?: string, buttonDarkTheme?: boolean) => {
  if (overrideIcon) {
    return overrideIcon;
  }
  return buttonDarkTheme ? CloseIconWhite : CloseIconBlack;
};

export const PopupMenu = ({
  button,
  options,
  disableCloseIcon,
  alignTo = ALIGN.left,
  strings = STRINGS,
  closeIconUrl: closeIconOverride,
}: PopupMenuProps) => {
  const theme = useTheme();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    attemptRemoveMobileMenu();

    return () => attemptRemoveMobileMenu();
  }, []);

  const closeMenu = () => {
    attemptRemoveMobileMenu();
    setMenuOpen(false);
  };

  const onOptionSelected = (callback: () => void) => {
    callback();
    closeMenu();
  };

  const closeIconUrl = getCloseIcon(closeIconOverride, button.isDarkTheme);

  const determineIconUrl = (buttonIcon?: string | ReactElement) => {
    if (isMenuOpen && !disableCloseIcon) {
      return closeIconUrl;
    }
    return buttonIcon;
  };

  const menuOptions = options.map((item, index) => (
    <Styled.OptionButton
      key={index}
      onClick={() => onOptionSelected(item.onClick)}
      aria-label={item.label}
    >
      {item.icon && (
        <Styled.CustomIcon icon={item.icon} alt={`${item.label} icon`} />
      )}
      <Styled.TextWrapper>{item.label}</Styled.TextWrapper>
    </Styled.OptionButton>
  ));

  function createMobileMenu() {
    attemptRemoveMobileMenu();

    const modal = document.createElement("div");
    modal.setAttribute("id", "popup-mobile-menu");

    ReactDOM.render(
      <DisplayOnMedia showOn="mobile">
        <MobileMenu onClose={closeMenu} strings={strings} theme={theme}>
          {menuOptions}
        </MobileMenu>
      </DisplayOnMedia>,
      document.body.appendChild(modal)
    );
  }

  useEffect(() => {
    if (isMenuOpen) {
      createMobileMenu();
    } else {
      attemptRemoveMobileMenu();
    }
  }, [isMenuOpen]);

  const toggleMenuOpen = () => setMenuOpen((prevState) => !prevState);
  return (
    <Styled.MenuButtonWrapper>
      {"label" in button ? (
        <TextButton
          {...button}
          icon={determineIconUrl(button.icon ?? <IconMoreOptions />)}
          aria-label={button["aria-label"] ?? strings.buttonLabel}
          onClick={toggleMenuOpen}
          forwardRef={buttonRef}
        />
      ) : (
        <CircleButton
          {...button}
          iconUrl={determineIconUrl(button.iconUrl ?? button.icon)}
          aria-label={button["aria-label"] ?? strings.buttonLabel}
          onClick={toggleMenuOpen}
          forwardRef={buttonRef}
        />
      )}

      {isMenuOpen && (
        <>
          <DisplayOnMedia hideOn="mobile">
            <DesktopMenu
              alignTo={alignTo}
              menuOptions={menuOptions}
              onClose={closeMenu}
              buttonRef={buttonRef}
            />
          </DisplayOnMedia>
        </>
      )}
    </Styled.MenuButtonWrapper>
  );
};
export default PopupMenu;
