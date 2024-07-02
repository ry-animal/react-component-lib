import { useTheme } from "styled-components";
import { DataBadge } from "../../DataBadge";
import { IconImmutableX, IconLogoEth, IconLoopring } from "../../Icons";
import { CollectionTileProps } from "./index.interface";
import * as Styled from "./index.styled";

export function CollectionTile({
  collectionImgSrc,
  collectionName,
  collectionUrl,
  creatorImgSrc,
  creatorName,
  contentSize = "m",
  layer,
  disabled,
  onClick,
}: CollectionTileProps) {
  const { color } = useTheme();

  const buttonProps = onClick && {
    "aria-label": collectionName,
    role: "button",
    onClick,
  };

  const renderLayerIcon = () => {
    if (layer === "Immutable") {
      return <IconImmutableX fill={color.WHITE} size={20} />;
    }
    if (layer === "L1") {
      return <IconLogoEth fill={color.WHITE} />;
    }

    return (
      <IconLoopring
        fillBackground="transparent"
        fillIcon={color.WHITE}
        size={24}
      />
    );
  };

  const tile = (
    <Styled.Tile
      {...buttonProps}
      backgroundImg={collectionImgSrc}
      disabled={disabled}
      size={contentSize}
    >
      {collectionImgSrc && <Styled.TileImg bgImg={collectionImgSrc} />}
      <Styled.TileContent size={contentSize}>
        <Styled.TileContentData>
          <Styled.TileName>{collectionName}</Styled.TileName>
          {contentSize !== "s" && (
            <Styled.TileData>
              <Styled.TileDataBadge>
                <DataBadge
                  imageSrc={creatorImgSrc}
                  name={creatorName}
                  title="Creator"
                  isDark
                />
              </Styled.TileDataBadge>
              {layer && (
                <Styled.TileDataIcon>{renderLayerIcon()}</Styled.TileDataIcon>
              )}
            </Styled.TileData>
          )}
        </Styled.TileContentData>
      </Styled.TileContent>
    </Styled.Tile>
  );

  return collectionUrl ? (
    <Styled.LinkAnchor url={collectionUrl} isRouterLink disabled={disabled}>
      {tile}
    </Styled.LinkAnchor>
  ) : (
    tile
  );
}

export { CollectionTileLoader } from "./Loader";
export default CollectionTile;
