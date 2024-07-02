export interface DataBadgeProps {
  /**
   * Title of the badge
   */
  title?: string;
  /**
   * Image src of badge
   */
  imageSrc?: string;
  /**
   * Show gray background if no image
   */
  showImageFallback?: boolean;
  /**
   * Name of Badge
   */
  name?: string;
  /**
   * Is image Hexagon shape?
   */
  isImageHexagon?: boolean;
  /**
   * Is Dark Tile
   */
  isDark?: boolean;
  /**
   * Size of image
   */
  size?: "xs" | "s" | "m" | "l";
  /**
   * Badge with a border around
   */
  hasBorder?: boolean;
  /**
   * Has a icon to show is external link
   */
  hasLinkIcon?: boolean;
  /**
   * Title and Name in one line
   */
  inline?: boolean;
}
