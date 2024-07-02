import styled, { css } from "styled-components";

export const hexClipPath = css`
  clip-path: url(#hexPath);
`;

interface HexBorderProps {
  size: number;
  borderSize: number;
  borderColor: string;
  transparentBorder?: boolean;
}

export const HexBorder = styled.div<HexBorderProps>`
  position: relative;
  height: ${({ size, borderSize }) => `${size + borderSize + borderSize}px`};
  width: ${({ size, borderSize }) => `${size + borderSize + borderSize}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${hexClipPath}

  &:before {
    content: "";
    background-color: ${({ borderColor }) => borderColor};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    ${({ transparentBorder }) => transparentBorder && "opacity: 50%;"}
  }
`;

interface ImageProps {
  imgSrc?: string;
  size: number;
}

export const CroppedImage = styled.div<ImageProps>`
  ${({ imgSrc }) => imgSrc && `background-image: url("${imgSrc}");`}
  background-color: ${({ theme }) => theme.color.PRIMARY_3};
  background-size: cover;
  background-position: center;
  position: relative;
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
  overflow: hidden;
  flex-shrink: 0;
`;

export const CircleImage = styled(CroppedImage)<ImageProps>`
  border-radius: 50%;
`;

interface CircleBorderProps {
  size: number;
  borderSize: number;
  borderColor: string;
  transparentBorder?: boolean;
}

export const CircleBorder = styled.div<CircleBorderProps>`
  position: relative;
  height: ${({ size, borderSize }) => `${size + borderSize + borderSize}px`};
  width: ${({ size, borderSize }) => `${size + borderSize + borderSize}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;

  &:before {
    content: "";
    background-color: ${({ borderColor }) => borderColor};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    ${({ transparentBorder }) => transparentBorder && "opacity: 50%;"}
  }
`;

export const SvgWrapper = styled.div`
  position: absolute;
`;

export const HexagonImage = styled(CroppedImage)`
  ${hexClipPath}
`;
