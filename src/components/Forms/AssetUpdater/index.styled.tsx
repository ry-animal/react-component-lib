import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export const BannerWrapper = styled.div<{ hasTileProps: boolean }>`
  width: 100%;
  ${({ hasTileProps, theme }) =>
    hasTileProps && `margin-right: ${theme.space.s24};`}

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    ${({ hasTileProps, theme }) =>
      hasTileProps && `margin-right: ${theme.space.s12};`}
  }
`;

export const Banner = styled.div<{ imgSrc?: string }>`
  background: ${({ imgSrc, theme }) =>
    imgSrc ? `url(${imgSrc})` : theme.color.SURFACE_3};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space.s16};
  height: 165px;
  width: 100%;
`;

export const AvatarFileWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: ${({ theme }) => theme.space.s32};
  transform: translateY(45%);

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    left: ${({ theme }) => theme.space.s16};
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TileOuterWrapper = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const TileFileWrapper = styled.div`
  position: relative;
  width: 90px;
`;

export const TileWrapper = styled.div`
  background: ${({ theme }) => theme.color.SURFACE_1};
  border-radius: ${({ theme }) => theme.radius.r6};
  border: ${({ theme }) => `3px solid ${theme.color.SURFACE_1}`};
`;
