import * as React from "react";
import AutoshopSkybox from "../../assets/images/hdr/autoshop_1k_blur.hdr";
import "../../util/model-viewer";

type Props = {
  src: string;
  style?: React.CSSProperties;
  autoplay?: boolean;
  cameraControls?: boolean;
  environmentImage?: string;
  exposure?: number;
  alt?: string;
};

export const ModelViewer = ({
  src,
  style,
  autoplay = true,
  cameraControls = false,
  environmentImage = AutoshopSkybox,
  exposure = 2.0,
  alt = "3d model",
}: Props) => (
  <model-viewer
    src={src}
    style={{
      display: "inline-block",
      ...style,
    }}
    camera-controls={cameraControls}
    autoplay={autoplay}
    environment-image={environmentImage}
    alt={alt}
    exposure={exposure}
  />
);
