import { rgba } from "polished";
import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import AddImageIconDark from "../../../assets/icons/icon-add-image-dark.svg";
import AddImageIconLight from "../../../assets/icons/icon-add-image-light.svg";

const UploadButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const ImagePreview = styled.div<{ imgSrc?: string }>`
  background: ${({ imgSrc, theme }) =>
    imgSrc ? `url(${imgSrc})` : theme.color.SURFACE_3};
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 50%;
  height: 96px;
  width: 96px;
  overflow: hidden;
`;

const IconOverlay = styled.div<{ isImagePresent: boolean }>`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isImagePresent, theme }) =>
    isImagePresent &&
    `
    background-color: ${rgba(theme.color.BLACK, theme.opacity.THREE)};
  `}
`;

const PhotoIcon = styled.img`
  width: 20px;
  height: 20px;
`;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  imgSrc?: string;
}

export function ImagePreviewButton({ imgSrc, ...props }: Props) {
  return (
    <UploadButton
      {...props}
      aria-label={props["aria-label"] ?? "Update image"}
      onClick={props.onClick}
    >
      <ImagePreview imgSrc={imgSrc}>
        <IconOverlay isImagePresent={!!imgSrc}>
          <PhotoIcon
            src={imgSrc ? AddImageIconLight : AddImageIconDark}
            alt="camera icon"
          />
        </IconOverlay>
      </ImagePreview>
    </UploadButton>
  );
}
