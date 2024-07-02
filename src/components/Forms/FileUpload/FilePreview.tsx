import { memo } from "react";
import { DefaultFile } from ".";
import FolderIcon from "../../../assets/icons/icon-folder.svg";
import { makeDataUrl } from "../../../util/image";
import { ModelViewer } from "../../ModelViewer";
import * as Styled from "./FilePreview.styled";
import STRINGS from "./index.strings";
import { ISelectedFile } from "./ISelectedFile";

const determineMode = (mimeType?: string) => {
  let mode: "image" | "model" | "video" | "unknown" = "unknown";
  if (mimeType?.startsWith("image/")) {
    mode = "image";
  } else if (mimeType?.startsWith("video/")) {
    mode = "video";
  } else if (mimeType?.startsWith("model/")) {
    mode = "model";
  }
  return mode;
};

type Props = {
  defaultValue?: DefaultFile;
  file?: ISelectedFile;
  blur?: boolean;
};

function FilePreviewComponent({ defaultValue, file, blur }: Props) {
  const mimeType = file?.mimeType || defaultValue?.mimeType;
  const mode = determineMode(mimeType);
  const media = file ? makeDataUrl(file) : defaultValue?.mediaUri ?? "";
  return (
    <>
      <Styled.BlurWrapper blur={!!blur} data-testid="blur">
        {mode === "image" && (
          <Styled.ImagePreview alt={STRINGS.preview} src={media} />
        )}
        {mode === "model" && (
          <ModelViewer
            src={media}
            style={{
              maxHeight: Styled.MAX_DIMENSION_PX,
              maxWidth: Styled.MAX_DIMENSION_PX,
            }}
          />
        )}
        {mode === "video" && (
          <Styled.VideoPreview autoPlay controls loop>
            <source src={media} type={mimeType} />
          </Styled.VideoPreview>
        )}
        {mode === "unknown" && (
          <Styled.FileWithoutPreview
            alt={STRINGS.fileSelected}
            src={FolderIcon}
          />
        )}
      </Styled.BlurWrapper>
      <Styled.Name>{file?.name || defaultValue?.name}</Styled.Name>
    </>
  );
}

export const FilePreview = memo(FilePreviewComponent);
