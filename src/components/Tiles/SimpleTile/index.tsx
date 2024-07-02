import { SimpleTileProps, TileSize } from "./index.interface";
import STRINGS from "./index.strings";
import { Tile } from "./index.styled";

export function SimpleTile({
  children,
  size = TileSize.small,
  backgroundColor,
  onClick,
  ...props
}: SimpleTileProps) {
  return (
    <Tile
      aria-label={STRINGS.simpleTile}
      size={size}
      backgroundColor={backgroundColor}
      onClick={onClick}
      {...props}
    >
      {children}
    </Tile>
  );
}

export * from "./index.interface";
