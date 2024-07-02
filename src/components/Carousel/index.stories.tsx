import { ComponentStory } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { Carousel } from "./Carousel";
import CarouselItem from "./CarouselItem";
import { CarouselOrientation, CarouselTabProps } from "./index.interface";

export default {
  component: Carousel,
  title: "Components/Carousel",
  argTypes: {
    customHeight: {
      control: {
        type: "string",
      },
    },
    orientation: {
      control: {
        type: "select",
        labels: [CarouselOrientation.vertical, CarouselOrientation.horizontal],
      },
    },
  },
};

const Template: ComponentStory<typeof Carousel> = (props) => (
  <Carousel {...props}>
    <CarouselItem>
      <img src="//source.unsplash.com/user/alexanderhipp/1500x600" alt="" />
    </CarouselItem>
    <CarouselItem>
      <img src="//source.unsplash.com/user/wsanter/1500x600" alt="" />
    </CarouselItem>
    <CarouselItem>
      <img src="//source.unsplash.com/user/erondu/1500x600" alt="" />
    </CarouselItem>
  </Carousel>
);

export const Default = Template.bind({});
Default.args = {};

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: CarouselOrientation.horizontal,
  customHeight: "600px",
};

interface CustomTabProps extends CarouselTabProps {
  label?: string;
}

const TabWrapper = styled.div<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? "orange" : "tomato")};
  flex: 1;
`;

const CustomTab = ({ label, active }: CustomTabProps) => (
  <TabWrapper active={active}>{label}</TabWrapper>
);

const CustomTemplate: ComponentStory<typeof Carousel> = (props) => (
  <Carousel {...props}>
    <CarouselItem tab={<CustomTab label={"One"} />}>
      <img src="//source.unsplash.com/user/alexanderhipp/2000x500" alt="" />
    </CarouselItem>
    <CarouselItem tab={<CustomTab label={"Two"} />}>
      <img src="//source.unsplash.com/user/wsanter/2000x500" alt="" />
    </CarouselItem>
    <CarouselItem tab={<CustomTab label={"Three"} />}>
      <img src="//source.unsplash.com/user/erondu/2000x500" alt="" />
    </CarouselItem>
  </Carousel>
);

export const CustomPagination = CustomTemplate.bind({});
CustomPagination.args = {
  orientation: CarouselOrientation.vertical,
  customHeight: "70vh",
  autoplay: { pauseOnMouseEnter: true, disableOnInteraction: false },
};
