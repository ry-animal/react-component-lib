import DiscordIcon from "../../../assets/icons/icon-discord.svg";
import EmailIcon from "../../../assets/icons/icon-email.svg";
import TwitterIcon from "../../../assets/icons/icon-twitter.svg";
import * as Styled from "./index.styled";

export function SocialIcons() {
  return (
    <Styled.SocialIconsContainer>
      <a
        href="https://discord.gg/gamestop"
        target="_blank"
        rel="noreferrer"
        role="link"
      >
        <img src={DiscordIcon} />
      </a>
      <a
        href="https://twitter.com/gamestop"
        target="_blank"
        rel="noreferrer"
        role="link"
      >
        <img src={TwitterIcon} />
      </a>
      <a
        href="mailto:blockchainsupport@gamestop.com"
        target="_blank"
        rel="noreferrer"
        role="link"
      >
        <img src={EmailIcon} />
      </a>
    </Styled.SocialIconsContainer>
  );
}
