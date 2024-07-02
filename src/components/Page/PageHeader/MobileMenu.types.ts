import { AccountHandlers } from "src/components/Profile/AccountPreview/AccountHandlers";
import { Entry, SearchSelectHandler } from "src/components/Search/types";
import { LoginState } from "./LoginState";

export type MobileMenuIds = {
  menuId: string;
  accountPopupId: string;
  searchId: string;
};

export type MobileMenuState = {
  isMenuOpen: boolean;
  isProfileOpen: boolean;
  isSearchOpen: boolean;
  loginState: LoginState | undefined;
  results: Entry[];
  search: string;
};

export type MobileMenuHandlers = {
  accountHandlers: AccountHandlers;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsProfileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  onLogin: () => void;
  onNavigate: SearchSelectHandler;
};
