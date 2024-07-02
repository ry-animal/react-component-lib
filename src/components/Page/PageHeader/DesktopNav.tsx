import { AccountHandlers } from "../../../components/Profile/AccountPreview/AccountHandlers";
import { SearchBox } from "../../../components/Search/SearchBox";
import {
  SearchChangeHandler,
  SearchSelectHandler,
} from "../../../components/Search/types";
import * as Styled from "./index.styled";
import { LoginArea } from "./LoginArea";
import { LoginState } from "./LoginState";
import { LogoLink } from "./LogoLink";
import { NavItem, NavLinks } from "./NavLinks";

interface DesktopNavProps {
  popularSearches?: string[];
  loginState: LoginState | undefined;
  showLoginButton: boolean | undefined;
  accountHandlers: AccountHandlers;
  onLogin: () => void;
  onSearch: SearchChangeHandler;
  onNavigate: SearchSelectHandler;
  isLightTheme?: boolean;
  simplyfyNav?: boolean;
  themeSwitcher?: JSX.Element;
  navItems?: NavItem[];
}

export function DesktopNav({
  popularSearches,
  loginState,
  showLoginButton,
  accountHandlers,
  onLogin,
  onSearch,
  onNavigate,
  isLightTheme,
  simplyfyNav,
  themeSwitcher,
  navItems,
}: DesktopNavProps) {
  return (
    <Styled.DesktopNavBar>
      <Styled.FlexSpan>
        <Styled.LogoContainer>
          <LogoLink isLightTheme={isLightTheme} />
        </Styled.LogoContainer>
        {!simplyfyNav && (
          <SearchBox
            popularSearches={popularSearches}
            onChange={onSearch}
            onSelect={onNavigate}
            isLightTheme={isLightTheme}
          />
        )}
      </Styled.FlexSpan>
      <Styled.FlexSpan>
        <Styled.LogoContainer>
          <NavLinks
            isLightTheme={isLightTheme}
            simplyfyNav={simplyfyNav}
            navItems={navItems}
          />
        </Styled.LogoContainer>
        <LoginArea
          accountHandlers={accountHandlers}
          loginState={loginState}
          showLoginButton={showLoginButton}
          isLightTheme={isLightTheme}
          onLogin={onLogin}
          themeSwitcher={themeSwitcher}
        />
      </Styled.FlexSpan>
    </Styled.DesktopNavBar>
  );
}

export default DesktopNav;
