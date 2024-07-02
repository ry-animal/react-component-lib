import { ReactElement } from "react";
import { ThemeName } from "../../../theme/theme.interface";
import { StatBadgeProps } from "../../StatsBlock/index.interface";

export interface BannerButtonStringProps {
  shareButtonLabel: string;
  createButtonLabel: string;
  settingsButtonLabel: string;
  optionsButtonLabel: string;
  closeButtonLabel: string;
}

export interface OwnerActions {
  onSettingsClick: () => void;
  onCreateClick?: () => void;
}

export interface MenuOptionsProps {
  ownerActions: OwnerActions;
  onShareClick: () => void;
  strings: BannerButtonStringProps;
  showCreateOption?: boolean;
}

export interface ButtonAction {
  label: string;
  icon?: ReactElement | string;
  onClick: () => void;
}

export interface ButtonSectionProps {
  makeButtons: (themeMode: ThemeName) => ButtonAction[];
  isDarkTheme?: boolean;
  strings: BannerButtonStringProps;
}

export interface BannerHeaderProps {
  /**
   * Main title text
   */
  title: string;
  /**
   * Image to display in banner background
   */
  imgUrl?: string;
  /**
   * Image avatar for user or collection
   */
  avatarUrl: string;
  /**
   * Toggle dark and light theme
   */
  isDarkTheme?: boolean;
  /**
   * Toggle avatar as a hexagon or a circle
   */
  isHexAvatar?: boolean;
  /**
   * Stats for a collection
   */
  stats?: StatBadgeProps[];
  /**
   * Action to fire when share clicked
   */
  onShareClick: () => void;
  /**
   * Actions for owner to Create NFT and edit Settings
   */
  ownerActions?: OwnerActions;
  /**
   * Optional list of custom actions
   */
  customActions?: ButtonAction[];
  /**
   * String constants
   */
  strings?: BannerButtonStringProps;
}

export interface TitleSectionProps {
  avatarUrl: string;
  isDarkTheme?: boolean;
  isHexAvatar?: boolean;
  title: string;
  makeButtons: (themeMode: ThemeName) => ButtonAction[];
  strings: BannerButtonStringProps;
}
