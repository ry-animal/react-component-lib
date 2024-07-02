import { memo } from "react";
import { ImageWithFallbackProps } from "../../ImageWithFallback";
import * as Styled from "./index.styled";

export const NftImage = memo(
  ({
    imgSrc,
    fallbackImgSrc,
    placeholderImgSrc,
    imgFit = "cover",
    ...props
  }: ImageWithFallbackProps) => (
    <Styled.NftImageWrapper>
      <Styled.NftImage
        imgSrc={imgSrc}
        loading="lazy"
        fallbackImgSrc={fallbackImgSrc}
        placeholderImgSrc={placeholderImgSrc}
        imgFit={imgFit}
        {...props}
      />
    </Styled.NftImageWrapper>
  )
);
NftImage.displayName = "NftImage";
