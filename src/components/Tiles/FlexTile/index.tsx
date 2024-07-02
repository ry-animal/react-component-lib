import { FlexTileProps } from "./index.interface";
import * as Styled from "./index.styled";

/**
 * Simple Tile Component
 * @param children : pass through ReactNodes to be housed in the Tile
 * @returns A Flexible Tile componenent that resizes to parent width and height of children.
 */

export function FlexTile({ children }: FlexTileProps) {
  return <Styled.TileWrapper>{children}</Styled.TileWrapper>;
}
