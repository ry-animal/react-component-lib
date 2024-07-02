import userEvent from "@testing-library/user-event";
import React from "react";
import styled from "styled-components";
import { Carousel, CarouselItem, renderBullet } from ".";
import { render, screen } from "../../util/test-utils";
import { CarouselOrientation } from "./index.interface";

const Tab = styled.p<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? "tomato" : "orange")};
`;

describe("Carousel", () => {
  describe("render", () => {
    it("should render with default props", () => {
      render(
        <Carousel>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </Carousel>
      );
      expect(screen.getByText("Slide 1")).toBeInTheDocument();
      expect(screen.getByText("Slide 2")).toBeInTheDocument();
    });

    it("renders carousel item", () => {
      render(<CarouselItem>Slide 1</CarouselItem>);
      expect(screen.getByText("Slide 1")).toBeInTheDocument();
    });

    it("should not render default bullet if custom provided", async () => {
      const items = [<p key={1}>Button 1</p>, undefined];

      expect(renderBullet(items).renderBullet(0, "class-name")).toBe("");

      expect(renderBullet(items).renderBullet(1, "class-name")).not.toBe("");
    });

    it("should render vertical styles", async () => {
      const { container } = render(
        <Carousel orientation={CarouselOrientation.vertical}>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </Carousel>
      );

      const [pagination] =
        container.getElementsByClassName("swiper-pagination");
      expect(pagination).toHaveStyle("flex-direction: column");

      const [slide] = container.getElementsByClassName("swiper-slide");
      expect(slide).toHaveStyle("height: 100%");
    });

    it("should render horizontal styles", async () => {
      const { container } = render(
        <Carousel orientation={CarouselOrientation.horizontal}>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </Carousel>
      );

      const [pagination] =
        container.getElementsByClassName("swiper-pagination");
      expect(pagination).not.toHaveStyle("flex-direction: column");

      const [slide] = container.getElementsByClassName("swiper-slide");
      expect(slide).not.toHaveStyle("height: 100%");
    });
  });

  describe("event handling", () => {
    it("should go to slide when click tab", async () => {
      render(
        <Carousel orientation={CarouselOrientation.horizontal}>
          <CarouselItem tab={<Tab>Tab 1</Tab>}>Slide 1</CarouselItem>
          <CarouselItem tab={<Tab>Tab 2</Tab>}>Slide 2</CarouselItem>
        </Carousel>
      );

      expect(screen.getByText("Tab 1")).toHaveStyleRule(
        "background-color: tomato"
      );

      userEvent.click(screen.getByText("Tab 2"));

      expect(screen.getByText("Tab 2")).toHaveStyleRule(
        "background-color: tomato"
      );
    });
  });
});
