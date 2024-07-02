import {
  Children,
  cloneElement,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTheme } from "styled-components";
import backArrowWhite from "../../assets/icons/icon-arrow-back-white.svg";
import backArrowBlack from "../../assets/icons/icon-arrow-back.svg";
import clearIconWhite from "../../assets/icons/icon-clear-white.svg";
import clearIconBlack from "../../assets/icons/icon-clear.svg";
import useArrowNavigation from "../../hooks/useArrowNavigation";
import useScreenSize from "../../hooks/useScreenSize";
import { ThemeName } from "../../theme/theme.interface";
import CircleButton from "../Buttons/CircleButton";
import { ButtonVariant, TextButton } from "../Buttons/TextButton";
import DisplayOnMedia from "../DisplayOnMedia";
import { Text } from "../Text";
import * as Styled from "./index.styled";

export interface MenuItemProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  subtitle?: string;
  active?: boolean;
  children?: ReactNode | ReactNode[];
  onClick?: () => void;
}

export const MenuItem = ({
  title,
  subtitle,
  active,
  onClick,
  ...props
}: MenuItemProps) => (
  <Styled.MenuItemButton
    active={active}
    onClick={onClick}
    aria-label={title}
    aria-selected={active}
    tabIndex={active ? 0 : -1}
    role="tab"
    {...props}
  >
    {title} {subtitle && <span>{subtitle}</span>}
  </Styled.MenuItemButton>
);

interface ContentPanelProps {
  activeIndex: number;
  menuItems: ReactElement<MenuItemProps>[];
  backButtonLabel: string;
  isItemSelected: boolean;
  tabPanelRef: RefObject<HTMLDivElement>;
  closeMenu: () => void;
}

const ContentPanel = ({
  menuItems,
  activeIndex,
  backButtonLabel,
  isItemSelected,
  tabPanelRef,
  closeMenu,
}: ContentPanelProps) => {
  const { isMobile } = useScreenSize();
  const { name } = useTheme();
  const backArrowIcon =
    name === ThemeName.DARK ? backArrowWhite : backArrowBlack;

  return (
    <Styled.MenuContent
      isItemSelected={isItemSelected}
      tabIndex={0}
      role="tabpanel"
      ref={tabPanelRef}
      id={`panel-${activeIndex}`}
      aria-labelledby={`tab-${activeIndex}`}
    >
      <Styled.MenuContentHeader>
        <DisplayOnMedia showOn="mobile">
          <Styled.BackButtonWrapper>
            <TextButton
              variant={ButtonVariant.plaintext}
              label=""
              icon={backArrowIcon}
              onClick={closeMenu}
              aria-label={backButtonLabel}
            />
          </Styled.BackButtonWrapper>
        </DisplayOnMedia>
        <Styled.ContentTitle>
          {!isMobile && menuItems[activeIndex].props.title}
          {isMobile && isItemSelected && menuItems[activeIndex].props.title}
        </Styled.ContentTitle>
      </Styled.MenuContentHeader>
      <Styled.ScrollableContent>
        {!isMobile && menuItems[activeIndex].props.children}
        {isMobile && isItemSelected && menuItems[activeIndex].props.children}
      </Styled.ScrollableContent>
    </Styled.MenuContent>
  );
};

export interface DrawerMenuProps {
  /**
   * Index of the menu item to show
   */
  initialKey?: number;
  /**
   * Title of menu to show above options
   */
  menuTitle?: string;
  /**
   * Children of <DrawerMenu />, must be type <MenuItem />
   */
  children: ReactElement<MenuItemProps> | ReactElement<MenuItemProps>[];
  /**
   * Event to fire when close button clicked
   */
  onClose: () => void;
  /**
   * Event to fire when menu item clicked
   */
  onTabChange?: (index: number) => void;
  /**
   * String constants
   */
  strings?: { backButtonLabel: string; closeButtonLabel: string };
}

export const DrawerMenu = ({
  initialKey,
  menuTitle,
  children,
  onTabChange,
  onClose,
  strings = { backButtonLabel: "back", closeButtonLabel: "close" },
}: DrawerMenuProps) => {
  const [activeKey, setActiveKey] = useState<number>();
  const { isMobile } = useScreenSize();
  const listRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const menuItems = "length" in children ? children : [children];

  useArrowNavigation({
    setActiveItem: setActiveKey,
    activeItem: activeKey ?? 0,
    listRef,
    panelRef,
    orientation: "vertical",
  });

  useEffect(() => {
    if (activeKey !== initialKey) {
      setActiveKey(initialKey);
    }
  }, [initialKey]);

  useEffect(() => {
    if (activeKey && activeKey >= menuItems.length) {
      setActiveKey(undefined);
    }
  }, [menuItems.length]);

  const isItemSelected = activeKey !== undefined;
  const normalIndex = activeKey && activeKey < menuItems.length ? activeKey : 0;

  const { name } = useTheme();
  const clearIcon = name === ThemeName.DARK ? clearIconWhite : clearIconBlack;
  const backArrowIcon =
    name === ThemeName.DARK ? backArrowWhite : backArrowBlack;

  return (
    <Styled.OuterWrapper>
      <Styled.ClickOutsideComponent onClick={onClose}>
        <DisplayOnMedia hideOn="mobile">
          <Styled.CloseButtonWrapper>
            <CircleButton
              iconUrl={clearIcon}
              onClick={onClose}
              aria-label={strings.closeButtonLabel}
            />
          </Styled.CloseButtonWrapper>
        </DisplayOnMedia>
        <Styled.InnerWrapper>
          <Styled.MenuOptionsWrapper
            isItemSelected={isItemSelected}
            isMobile={isMobile}
            data-testid="menu-options"
          >
            <Styled.HeaderRow>
              <DisplayOnMedia showOn="mobile">
                <Styled.BackButtonWrapper>
                  <TextButton
                    variant={ButtonVariant.plaintext}
                    label=""
                    icon={backArrowIcon}
                    onClick={onClose}
                    aria-label={strings.closeButtonLabel}
                  />
                </Styled.BackButtonWrapper>
              </DisplayOnMedia>
              {menuTitle && (
                <Styled.MenuTitle id="menu-title">
                  <Text text={menuTitle} variant="BodyTitle1" reset />
                </Styled.MenuTitle>
              )}
            </Styled.HeaderRow>
            <Styled.MenuTabsWrapper
              role="tablist"
              aria-labelledby="menu-title"
              aria-orientation="vertical"
              ref={listRef}
            >
              {Children.map(children, (child, index) =>
                cloneElement(child, {
                  onClick: () => {
                    setActiveKey(index);
                    panelRef.current?.scrollTo(0, 0);
                    onTabChange?.(index);
                  },
                  id: `tab-${index}`,
                  key: index,
                  active: index === (activeKey ?? 0),
                  "aria-controls": `panel-${index}`,
                })
              )}
            </Styled.MenuTabsWrapper>
          </Styled.MenuOptionsWrapper>
          <ContentPanel
            menuItems={menuItems}
            activeIndex={normalIndex}
            closeMenu={() => setActiveKey(undefined)}
            isItemSelected={isItemSelected}
            tabPanelRef={panelRef}
            backButtonLabel={strings.backButtonLabel}
          />
        </Styled.InnerWrapper>
      </Styled.ClickOutsideComponent>
    </Styled.OuterWrapper>
  );
};

export default DrawerMenu;
