import useScreenSize from "../../hooks/useScreenSize";

export enum DisplayOnMediaEnums {
  DESKTOP = "desktop",
  LAPTOP = "laptop",
  TABLET = "tablet",
  MOBILE = "mobile",
}

export interface DisplayOnMediaProps {
  showOn?:
    | "desktop"
    | "laptop"
    | "tablet"
    | "mobile"
    | ("desktop" | "laptop" | "tablet" | "mobile")[];
  hideOn?:
    | "desktop"
    | "laptop"
    | "tablet"
    | "mobile"
    | ("desktop" | "laptop" | "tablet" | "mobile")[];
  children: JSX.Element;
}

/**
 * Used for showing or hiding JSX.Element based on `window.matchMedia`
 *
 * `mobile: max-width "767px"`
 *
 * `tablet: min-width: "768px" and max-width: "1024px"`
 *
 * `laptop: min-width: "1025px" and max-width: "1279px"`
 *
 * `desktop: min-width: "1280px"`
 */

export function DisplayOnMedia({
  showOn,
  hideOn,
  children,
}: DisplayOnMediaProps) {
  const { isDesktop, isLaptop, isTablet, isMobile } = useScreenSize();

  if (hideOn) {
    if (
      (isDesktop && hideOn.includes(DisplayOnMediaEnums.DESKTOP)) ||
      (isLaptop && hideOn.includes(DisplayOnMediaEnums.LAPTOP)) ||
      (isTablet && hideOn.includes(DisplayOnMediaEnums.TABLET)) ||
      (isMobile && hideOn.includes(DisplayOnMediaEnums.MOBILE))
    ) {
      return null;
    }
  }

  if (showOn) {
    if (
      (isDesktop && showOn.includes(DisplayOnMediaEnums.DESKTOP)) ||
      (isLaptop && showOn.includes(DisplayOnMediaEnums.LAPTOP)) ||
      (isTablet && showOn.includes(DisplayOnMediaEnums.TABLET)) ||
      (isMobile && showOn.includes(DisplayOnMediaEnums.MOBILE))
    ) {
      return children;
    }
    return null;
  }

  return children;
}

export default DisplayOnMedia;
