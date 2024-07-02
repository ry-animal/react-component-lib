import { ReactElement, ReactNode, RefObject } from "react";
import { DefaultTheme } from "styled-components";
import { CircleButtonProps, TextButtonProps } from "../Buttons";

export interface ListItem {
  onClick: () => void;
  icon?: ReactElement | string;
  label: string;
}

export enum ALIGN {
  left = "left",
  right = "right",
}

export interface PopupMenuStrings {
  buttonLabel: string;
  closeButtonLabel: string;
}

export interface MobileMenuProps {
  /**
   * Action to handle close event
   */
  onClose: () => void;
  /**
   * Menu options
   */
  children: ReactNode[];
  /**
   * String constants
   */
  strings: PopupMenuStrings;
  /**
   * Theme because outside of theme hierarchy
   */
  theme: DefaultTheme;
}

export interface DesktopMenuProps {
  alignTo: ALIGN;
  menuOptions: JSX.Element[];
  onClose: () => void;
  buttonRef: RefObject<HTMLElement>;
}

export interface PopupMenuProps {
  /**
   * Align menu to 'left' or 'right' of button
   */
  alignTo?: ALIGN;
  /**
   * Show close icon when menu open
   */
  disableCloseIcon?: boolean;
  /**
   * Button props
   */
  button: CircleButtonProps | TextButtonProps;
  /**
   * Menu options
   */
  options: ListItem[];
  /**
   * String constants
   */
  strings?: PopupMenuStrings;
  /**
   * Overrides existing icon for close, takes an url to icon
   */
  closeIconUrl?: string;
}
