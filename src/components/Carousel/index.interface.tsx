import { ReactElement } from "react";
import { SwiperProps, SwiperSlideProps } from "swiper/react/swiper-react.js";

export enum CarouselOrientation {
  horizontal = "horizontal",
  vertical = "vertical",
}

export interface CarouselTabProps {
  active?: boolean;
}

export interface CarouselProps extends SwiperProps {
  children: ReactElement[];
  customHeight?: string;
  orientation?: CarouselOrientation;
  customPagination?: ReactElement<CarouselTabProps>[];
  onIndexChange?: (index: number) => void;
}

export interface StyledCarouselProps {
  customHeight: string;
  orientation: CarouselOrientation;
}

export interface CarouselItemProps extends SwiperSlideProps {
  tab?: ReactElement<CarouselTabProps>;
}
