import Anchor from "../../Anchor";
import * as Styled from "./index.styled";
import STRINGS from "./NavLinks.strings";

export interface NavItem {
  label: string;
  url: string;
  isExternal?: boolean;
}

export const defaultNavItems: NavItem[] = [
  { label: STRINGS.explore, url: STRINGS.exploreUrl },
  { label: STRINGS.stats, url: STRINGS.statsUrl },
  { label: STRINGS.learn, url: STRINGS.learnUrl },
];

interface NavLinkProps {
  simplyfyNav?: boolean;
  isLightTheme?: boolean;
  navItems?: NavItem[];
  onClick?: () => void;
}

export const NavLinks = ({
  simplyfyNav = false,
  isLightTheme = false,
  navItems = defaultNavItems,
  onClick,
}: NavLinkProps) => (
  <>
    {!simplyfyNav && (
      <>
        {navItems.map((item, index) => (
          <Anchor
            key={`${item.label} ${index}`}
            url={item.url}
            isExternalLink={item.isExternal}
            isRouterLink={!item.isExternal}
            onClick={onClick && onClick}
          >
            <Styled.NavLink isLightTheme={isLightTheme}>
              {item.label}
            </Styled.NavLink>
          </Anchor>
        ))}
      </>
    )}
  </>
);

export default NavLinks;
