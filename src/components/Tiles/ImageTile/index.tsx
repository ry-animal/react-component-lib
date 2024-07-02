import ColorfulPlus from "../../../assets/icons/icon-plus-colorful.svg";
import PlainPlus from "../../../assets/icons/icon-plus-plain.svg";
import { TileSize } from "../SimpleTile/index.interface";
import { ImageTileProps, TileImageVariant } from "./index.interface";
import STRINGS from "./index.strings";
import * as Styled from "./index.styled";

export function ImageTile({
  imageVariant = TileImageVariant.primary,
  size = TileSize.small,
  text = "",
  imgSrc,
  centerComponent,
  onClick,
  backgroundColor,
  ...props
}: ImageTileProps) {
  let img = null;
  if (centerComponent) {
    img = centerComponent;
  } else if (imgSrc) {
    img = <Styled.ImageIcon src={imgSrc} alt="tile image" />;
  } else if (imageVariant === TileImageVariant.primary) {
    img = <Styled.ImageIcon src={PlainPlus} alt="plain plus" />;
  } else {
    img = <Styled.ImageIcon src={ColorfulPlus} alt="colorful plus" />;
  }

  return (
    <Styled.ImageStyledSimpleTile
      imageVariant={imageVariant}
      size={size}
      onClick={onClick}
      aria-label={STRINGS.ariaLabel}
      backgroundColor={backgroundColor}
      {...props}
    >
      {img}
      <Styled.Text role="paragraph" imageVariant={imageVariant}>
        {text}
      </Styled.Text>
    </Styled.ImageStyledSimpleTile>
  );
}

export * from "./index.interface";
