import { AccountHandlers } from "../../Profile/AccountPreview/AccountHandlers";
import { generateInitialEntries } from "../../Search/helpers";
import { SearchChangeHandler, SearchSelectHandler } from "../../Search/types";
import { BackgroundImageInsert } from "./BackgroundImageInsert";
import { DesktopNav } from "./DesktopNav";
import { LoginState } from "./LoginState";
import { MobileMenu } from "./MobileMenu";
import { NavItem } from "./NavLinks";
import { TitleArea } from "./TitleArea";

type PageHeaderProps = {
  accountHandlers: AccountHandlers;
  backgroundImage?: boolean;
  loginState?: LoginState;
  popularSearches?: string[];
  showLoginButton?: boolean;
  title?: {
    header: JSX.Element;
    tagline?: string;
    link?: { text: string; url: string };
  };
  onLogin: () => void;
  onNavigate: SearchSelectHandler;
  onSearch: SearchChangeHandler;
  isLightTheme?: boolean;
  simplyfyNav?: boolean;
  themeSwitcher?: JSX.Element;
  navItems?: NavItem[];
};

export function PageHeader({
  accountHandlers,
  backgroundImage,
  loginState,
  popularSearches,
  showLoginButton,
  title,
  onLogin,
  onNavigate,
  onSearch,
  isLightTheme = false,
  simplyfyNav = false,
  themeSwitcher,
  navItems,
}: PageHeaderProps) {
  return (
    <>
      {backgroundImage && <BackgroundImageInsert />}
      <DesktopNav
        popularSearches={popularSearches}
        loginState={loginState}
        showLoginButton={showLoginButton}
        accountHandlers={accountHandlers}
        onLogin={onLogin}
        onSearch={onSearch}
        onNavigate={onNavigate}
        isLightTheme={isLightTheme}
        simplyfyNav={simplyfyNav}
        themeSwitcher={themeSwitcher}
        navItems={navItems}
      />
      <MobileMenu
        accountHandlers={accountHandlers}
        loginState={loginState}
        initialSearchEntries={generateInitialEntries(popularSearches)}
        onLogin={onLogin}
        onNavigate={onNavigate}
        onSearch={onSearch}
        isLightTheme={isLightTheme}
        simplyfyNav={simplyfyNav}
        themeSwitcher={themeSwitcher}
        navItems={navItems}
      />
      {title && <TitleArea title={title} isLightTheme={isLightTheme} />}
    </>
  );
}
