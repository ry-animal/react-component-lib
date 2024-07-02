import { ImgHTMLAttributes, useEffect, useState } from "react";
import BrokenImage from "../../assets/images/broken-image.jpg";
import * as Styled from "./index.styled";

export interface ImageWithFallbackProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Url src for img
   */
  imgSrc: string;
  /**
   * Img to show if default errors
   */
  fallbackImgSrc?: string;
  /**
   * Img to show if error
   */
  errorImgSrc?: string;
  /**
   * Img to show when loading
   */
  placeholderImgSrc?: string;
  /**
   *
   * Image Fit
   */
  imgFit?: "contain" | "cover";
}

export const ImageWithFallback = ({
  imgSrc,
  fallbackImgSrc = BrokenImage,
  errorImgSrc = BrokenImage,
  placeholderImgSrc,
  ...props
}: ImageWithFallbackProps) => {
  const [src, setSrc] = useState(imgSrc);
  const [loading, setLoading] = useState(true);
  const onError = () =>
    setSrc(src === fallbackImgSrc ? errorImgSrc : fallbackImgSrc);
  const onLoad = () => setLoading(false);

  useEffect(() => {
    setSrc(imgSrc);
    setLoading(true);
  }, [imgSrc]);

  return (
    <Styled.Img
      src={src}
      onError={onError}
      onLoad={onLoad}
      placeholderImg={loading ? placeholderImgSrc : undefined}
      {...props}
    />
  );
};

export default ImageWithFallback;
