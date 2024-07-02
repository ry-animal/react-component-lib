import GamestopNFTLogoWhite from "../../../assets/images/gs-nft-logo-beta-white.svg";
import GamestopNFTLogo from "../../../assets/images/gs-nft-logo-beta.svg";
import Anchor from "../../Anchor";
import * as Styled from "./index.styled";
interface LogoLinkProps {
  isLightTheme?: boolean;
  ariaLabel?: string;
}

export const LogoLink = ({ isLightTheme }: LogoLinkProps) => (
  <Anchor isRouterLink url="/">
    {isLightTheme ? (
      <Styled.LogoLinkImage
        src={GamestopNFTLogoWhite}
        alt="Gamestop NFT Logo"
      />
    ) : (
      <Styled.LogoLinkImage src={GamestopNFTLogo} alt="Gamestop NFT Logo" />
    )}
  </Anchor>
);

export default LogoLink;
