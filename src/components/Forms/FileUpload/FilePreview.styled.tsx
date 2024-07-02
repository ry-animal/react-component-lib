import styled from "styled-components";
import { BlurRadius } from "../../../constants/BlurRadius";

export const MAX_DIMENSION_PX = 200;

export const FileWithoutPreview = styled.img`
  height: 150px;
  width: 150px;
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.color.TEXT_2};
`;

export const ImagePreview = styled.img`
  max-height: ${MAX_DIMENSION_PX}px;
  max-width: ${MAX_DIMENSION_PX}px;
`;

export const VideoPreview = styled.video`
  max-height: ${MAX_DIMENSION_PX}px;
  max-width: ${MAX_DIMENSION_PX}px;
`;

export const BlurWrapper = styled.div<{ blur: boolean }>`
  display: inline-block;
  ${({ blur }) => blur && `filter: blur(${BlurRadius.b8});`}
`;
