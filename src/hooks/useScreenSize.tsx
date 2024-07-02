import { MEDIA_WIDTHS } from "../theme";
import useMediaQuery from "./useMediaQuery";

export const useScreenSize = () => {
  const isDesktop = useMediaQuery(`(min-width: ${MEDIA_WIDTHS.desktop.min})`);
  const isLaptop = useMediaQuery(
    `(min-width: ${MEDIA_WIDTHS.laptop.min}) and (max-width: ${MEDIA_WIDTHS.laptop.max})`
  );
  const isTablet = useMediaQuery(
    `(min-width: ${MEDIA_WIDTHS.tablet.min}) and (max-width: ${MEDIA_WIDTHS.tablet.max})`
  );
  const isMobile = useMediaQuery(`(max-width: ${MEDIA_WIDTHS.mobile.max})`);

  return { isDesktop, isLaptop, isTablet, isMobile };
};

export default useScreenSize;
