import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { useClosePopup } from "../../../hooks/useClosePopup";
import { useUniqueId } from "../../../hooks/useUniqueId";
import { accessibleToggleProps } from "../../../util/accessibleToggleProps";
import { ButtonVariant, TextButton } from "../../Buttons/TextButton";
import { IconClear, IconHamburger, IconSearch } from "../../Icons";
import { AccountPreview } from "../../Profile/AccountPreview";
import { AccountHandlers } from "../../Profile/AccountPreview/AccountHandlers";
import { ProfileIcon } from "../../Profile/ProfileIcon";
import { getEntriesFromResults } from "../../Search/helpers";
import {
  Entry,
  SearchChangeHandler,
  SearchSelectHandler,
} from "../../Search/types";
import { LoginState } from "./LoginState";
import { LogoLink } from "./LogoLink";
import {
  AccountPopup,
  BottomPanel,
  ClickableIcon,
  ClickableImage,
  FullScreen,
  MobileNavBar,
  MobileNavCell,
  MobileOnly,
  NavLinksContainer,
  ProfileIconContainer,
} from "./MobileMenu.components";
import {
  MobileMenuHandlers,
  MobileMenuIds,
  MobileMenuState,
} from "./MobileMenu.types";
import { MobileMenuSearch } from "./MobileMenuSearch";
import { NavItem, NavLinks } from "./NavLinks";

const renderAccountPopup = (
  popupRef: React.RefObject<HTMLDivElement>,
  ids: MobileMenuIds,
  state: MobileMenuState,
  handlers: MobileMenuHandlers,
  themeSwitcher?: JSX.Element
) =>
  state.loginState && (
    <AccountPopup
      aria-label="Account information"
      id={ids.accountPopupId}
      ref={popupRef}
    >
      <AccountPreview
        accountHandlers={handlers.accountHandlers}
        stretch
        onClose={() => handlers.setIsProfileOpen(false)}
        themeSwitcher={themeSwitcher}
        {...state.loginState}
      />
    </AccountPopup>
  );

const renderProfileButton = (
  ids: MobileMenuIds,
  state: MobileMenuState,
  handlers: MobileMenuHandlers
) => (
  <MobileNavCell align="left">
    {!!state.loginState && !state.isMenuOpen && (
      <ClickableIcon
        {...accessibleToggleProps(
          "Account",
          ids.accountPopupId,
          state.isProfileOpen
        )}
        onClick={() => {
          handlers.setIsProfileOpen((_) => !_);
          handlers.setIsMenuOpen(false);
        }}
      >
        {state.isProfileOpen ? (
          <IconClear />
        ) : (
          <ProfileIconContainer>
            <ProfileIcon imgSrc={state.loginState.imgSrc} size={24} />
          </ProfileIconContainer>
        )}
      </ClickableIcon>
    )}
  </MobileNavCell>
);

const renderNavBar = (
  ids: MobileMenuIds,
  state: MobileMenuState,
  handlers: MobileMenuHandlers,
  isLightTheme: boolean,
  simplyfyNav: boolean
) => (
  <MobileNavBar>
    <MobileNavCell align="left">
      {simplyfyNav && state.loginState ? null : (
        <ClickableImage
          {...accessibleToggleProps(
            "Menu",
            ids.menuId,
            state.isMenuOpen,
            "menu"
          )}
          onClick={() => handlers.setIsMenuOpen((_) => !_)}
        >
          {state.isMenuOpen ? (
            <IconClear fill="black" />
          ) : (
            <IconHamburger fill={isLightTheme ? "white" : "black"} />
          )}
        </ClickableImage>
      )}
    </MobileNavCell>
    {renderProfileButton(ids, state, handlers)}
    <MobileNavCell align="center">
      <LogoLink isLightTheme={state.isMenuOpen ? false : isLightTheme} />
    </MobileNavCell>
    <MobileNavCell align="right">
      {!simplyfyNav && (
        <ClickableImage
          {...accessibleToggleProps("Search", ids.searchId, false)}
          onClick={() => {
            handlers.setIsSearchOpen(true);
            handlers.setIsMenuOpen(false);
          }}
        >
          <IconSearch fill={isLightTheme ? "white" : "black"} />
        </ClickableImage>
      )}
    </MobileNavCell>
  </MobileNavBar>
);
export const FullScreenMenu = ({
  ids,
  state,
  handlers,
  isLightTheme,
  simplyfyNav,
  navItems,
}: {
  ids: MobileMenuIds;
  state: MobileMenuState;
  handlers: MobileMenuHandlers;
  isLightTheme: boolean;
  simplyfyNav: boolean;
  navItems?: NavItem[];
}) => (
  <FullScreen id={ids.menuId} backgroundColor="white">
    <div role="menu">
      {renderNavBar(ids, state, handlers, isLightTheme, simplyfyNav)}
      <NavLinksContainer>
        <NavLinks
          isLightTheme={isLightTheme}
          simplyfyNav={simplyfyNav}
          onClick={() => handlers.setIsMenuOpen(false)}
          navItems={navItems}
        />
      </NavLinksContainer>
    </div>
    <BottomPanel>
      {!state.loginState && (
        <TextButton
          label="Connect a Wallet"
          size="small"
          stretch
          variant={ButtonVariant.primary}
          onClick={() => {
            handlers.onLogin();
            handlers.setIsMenuOpen(false);
          }}
        />
      )}
    </BottomPanel>
  </FullScreen>
);

type MobileMenuProps = {
  accountHandlers: AccountHandlers;
  loginState?: LoginState;
  initialSearchEntries: Entry[];
  onLogin: () => void;
  onNavigate: SearchSelectHandler;
  onSearch: SearchChangeHandler;
  isLightTheme?: boolean;
  simplyfyNav?: boolean;
  themeSwitcher?: JSX.Element;
  navItems?: NavItem[];
};

export function MobileMenu({
  accountHandlers,
  loginState,
  initialSearchEntries,
  onLogin,
  onNavigate,
  onSearch,
  isLightTheme = false,
  simplyfyNav = false,
  themeSwitcher,
  navItems,
}: MobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [results, setResults] = useState<Entry[]>(initialSearchEntries);
  const [search, setSearch] = useState("");
  const popupRef = useRef<HTMLDivElement>(null);
  const ids = {
    menuId: useUniqueId(),
    accountPopupId: useUniqueId(),
    searchId: useUniqueId(),
  };
  useClosePopup(popupRef, () => setIsProfileOpen(false));
  const state = {
    isMenuOpen,
    isProfileOpen,
    isSearchOpen,
    loginState,
    results,
    search,
  };
  const handlers = {
    accountHandlers,
    setIsMenuOpen,
    setIsProfileOpen,
    setIsSearchOpen,
    setSearch,
    onLogin,
    onNavigate,
  };
  useEffect(() => {
    document.body.style.overflow =
      isMenuOpen || isSearchOpen ? "hidden" : "auto";
  }, [isMenuOpen, isSearchOpen]);
  useEffect(() => {
    if (search.trim()) {
      onSearch(search.trim()).then((_) =>
        setResults(getEntriesFromResults(_, initialSearchEntries))
      );
    } else {
      setResults(initialSearchEntries);
    }
  }, [search]);
  return (
    <MobileOnly>
      {!isMenuOpen &&
        !isSearchOpen &&
        renderNavBar(ids, state, handlers, isLightTheme, simplyfyNav)}
      {isProfileOpen &&
        renderAccountPopup(popupRef, ids, state, handlers, themeSwitcher)}
      {isMenuOpen && (
        <FullScreenMenu
          ids={ids}
          state={state}
          handlers={handlers}
          isLightTheme={isLightTheme}
          simplyfyNav={simplyfyNav}
          navItems={navItems}
        />
      )}
      {isSearchOpen && (
        <MobileMenuSearch ids={ids} state={state} handlers={handlers} />
      )}
    </MobileOnly>
  );
}
