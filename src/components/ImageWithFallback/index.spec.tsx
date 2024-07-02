import { fireEvent, render, screen } from "@testing-library/react";
import "jest-styled-components";
import ImageWithFallback from ".";

describe("<ImageWithFallback />", () => {
  const sampleProps = () => ({
    imgSrc: "//source.unsplash.com/user/erondu/800x800",
    fallbackImgSrc: "./fallback-img.jpg",
    errorImgSrc: "./error-loading-images.jpg",
    alt: "img",
  });
  describe("rendering", () => {
    test("Default rendering matches snapshot", () => {
      expect(
        render(<ImageWithFallback {...sampleProps()} />).asFragment()
      ).toMatchSnapshot();
    });

    test("Renders fallback image when src broken", () => {
      expect(
        render(
          <ImageWithFallback {...sampleProps()} imgSrc={"./bad-path.jpg"} />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Renders placeholder when loading if provided", () => {
      expect(
        render(
          <ImageWithFallback
            {...sampleProps()}
            placeholderImgSrc="//source.unsplash.com/user/erondu/5x5"
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Should render fallback img if bad img src", async () => {
      const props = sampleProps();
      render(
        <ImageWithFallback
          {...props}
          placeholderImgSrc="//source.unsplash.com/user/erondu/5x5"
        />
      );
      let img = screen.getByAltText(`${props.alt}`);
      expect(img).toHaveAttribute("src", props.imgSrc);

      fireEvent.error(img);

      img = screen.getByAltText(`${props.alt}`);
      expect(img).toHaveAttribute("src", props.fallbackImgSrc);
    });

    test("Show placeholder when loading, then remove when loaded", async () => {
      const props = sampleProps();
      const placeholderSrc = "//source.unsplash.com/user/erondu/5x5";
      const backgroundImgStyle = `url("${placeholderSrc}")`;
      render(
        <ImageWithFallback {...props} placeholderImgSrc={placeholderSrc} />
      );
      let img = screen.getByAltText(`${props.alt}`);

      expect(img).toHaveStyleRule("background-image", backgroundImgStyle);

      fireEvent.load(img);

      img = screen.getByAltText(`${props.alt}`);
      expect(img).not.toHaveStyleRule("background-image", backgroundImgStyle);
    });

    test("Should render errorImgSrc if fallback img also bad", async () => {
      const props = sampleProps();
      render(
        <ImageWithFallback
          {...props}
          placeholderImgSrc="//source.unsplash.com/user/erondu/5x5"
        />
      );
      let img = screen.getByAltText(`${props.alt}`);
      expect(img).toHaveAttribute("src", props.imgSrc);

      fireEvent.error(img);

      img = screen.getByAltText(`${props.alt}`);
      expect(img).toHaveAttribute("src", props.fallbackImgSrc);

      fireEvent.error(img);

      img = screen.getByAltText(`${props.alt}`);
      expect(img).toHaveAttribute("src", props.errorImgSrc);
    });
  });
});
