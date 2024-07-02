import MobileHeaderBanner from "../../../assets/images/header-banner-mobile.jpg";
import HeaderBanner from "../../../assets/images/header-banner.jpg";
import { useScreenSize } from "../../../hooks/useScreenSize";
import * as Styled from "./index.styled";

export const BackgroundImageInsert = () => {
  const { isMobile } = useScreenSize();
  return (
    <Styled.BannerImageWrapper>
      <Styled.BannerImage src={isMobile ? MobileHeaderBanner : HeaderBanner} />
    </Styled.BannerImageWrapper>
  );
};

export default BackgroundImageInsert;
