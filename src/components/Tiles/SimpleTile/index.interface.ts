import { ButtonHTMLAttributes } from "react";

export enum TileSize {
  small,
  large,
}

export interface SimpleTileProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Pass through ReactNodes to be housed in the Tile
   */
  children?: React.ReactNode;
  /**
   * Set the size between Sizes available TileSize ["small", "large"]
   */
  size?: TileSize;
  /**
   * Aria-label
   */
  label?: string;
  /**
   * Background color
   */
  backgroundColor?: string;
}
