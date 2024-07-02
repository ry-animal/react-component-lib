import { ButtonHTMLAttributes } from "react";
import { TileSize } from "../SimpleTile/index.interface";

export enum TileImageVariant {
  primary,
  secondary,
}
export interface ImageTileProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Pass through between ["primary" - plain plus, "secondary" - colorful plus]
   */
  imageVariant?: TileImageVariant;
  /**
   * Set the size between TileSize available ["small", "large"]
   */
  size?: TileSize;
  /**
   * Set the text to be shown in tile
   */
  text?: string;
  /**
   *  Component to be displayed
   */
  centerComponent?: JSX.Element;
  /**
   * Component to be displayed, will not be displayed if centerComponent is included
   */
  imgSrc?: string;
  /**
   * Color of tile background
   */
  backgroundColor?: string;
}
