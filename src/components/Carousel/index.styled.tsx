import styled from "styled-components";
// Modules styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { CarouselOrientation, StyledCarouselProps } from "./index.interface";

const SIDE_WIDTH = "270px";

export const Carousel = styled.div<StyledCarouselProps>`
  .swiper-wrapper {
    height: ${({ customHeight }) => customHeight};
  }

  .swiper-pagination {
    ${({ orientation, theme }) =>
      orientation === CarouselOrientation.vertical
        ? `
          left: 0;
          right: auto;
          top: 0;
          bottom: 0;
          transform: none;
          width: ${SIDE_WIDTH};
          display: flex;
          flex-direction: column;
          gap: ${theme.space.s16};
          `
        : `    
          margin-top: ${theme.space.s24};
          position: relative;
          bottom: 0;
        `}
  }

  .swiper-pagination-bullet {
    width: ${({ theme }) => theme.space.s16};
    height: ${({ theme }) => theme.space.s16};
    border: ${({ theme }) => `1px solid ${theme.color.TEXT_3}`};
    background-color: transparent;
    opacity: unset;
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.color.TEXT_3};
  }

  .swiper-slide {
    ${({ orientation, customHeight }) =>
      orientation === CarouselOrientation.vertical
        ? `
        margin-left: ${SIDE_WIDTH};
        width: calc(100% - ${SIDE_WIDTH});
        height: 100%;
        `
        : `width: 100%; height: ${customHeight};`};
  }
`;

export const TabButton = styled.button`
  flex: 1;
  display: flex;
  cursor: pointer;
  background: transparent;
  margin: 0;
  padding: 0;
  border: none;
`;
