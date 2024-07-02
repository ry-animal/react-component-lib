import { cloneElement, ReactElement, useState } from "react";
import SwiperProps, { A11y, Autoplay, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselOrientation, CarouselProps } from "./index.interface";
import * as Styled from "./index.styled";

// Render the default bullet as empty if custom provided
export const renderBullet = (items?: (ReactElement | undefined)[]) => ({
  clickable: true,
  renderBullet(index: number, className: string) {
    const customBullet = items && items[index];
    return customBullet ? "" : `<span class="${className}"></span>`;
  },
});

export function Carousel({
  children,
  customHeight = "100vh",
  orientation = CarouselOrientation.vertical,
  spaceBetween = 50,
  slidesPerView = "auto",
  ...props
}: CarouselProps): JSX.Element {
  const [swiper, setSwiper] = useState<SwiperProps>();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnSetSwiper = (index: number) => {
    swiper?.slideTo(index);
  };

  const handleOnSlideChange = () => swiper && setActiveIndex(swiper.realIndex);

  return (
    <Styled.Carousel customHeight={customHeight} orientation={orientation}>
      <Swiper
        {...props}
        onSwiper={setSwiper}
        onSlideChange={handleOnSlideChange}
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        direction={orientation}
        pagination={renderBullet(children.map((child) => child.props.tab))}
      >
        <div className="swiper-pagination">
          {children.map(
            (child, index) =>
              child.props.tab && (
                <Styled.TabButton
                  key={index}
                  onClick={() => handleOnSetSwiper(index)}
                >
                  {cloneElement(child.props.tab, {
                    active: activeIndex === index,
                  })}
                </Styled.TabButton>
              )
          )}
        </div>

        {children.map((child, index) => (
          <SwiperSlide key={`slider-${index}`}>
            {child.props.children}
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.Carousel>
  );
}

export default Carousel;
