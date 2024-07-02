import { useTheme } from "styled-components";
import { getDomainFromRegex } from "../../util/string";
import Anchor from "../Anchor";
import {
  IconDiscord,
  IconInstagram,
  IconReddit,
  IconTwitch,
  IconTwitter,
  IconWeb,
  IconYoutube,
} from "../Icons";
import * as Styled from "./index.styled";

export interface SocialLinkProps {
  url: string;
  type:
    | "twitter"
    | "discord"
    | "reddit"
    | "instagram"
    | "twitch"
    | "youtube"
    | "web";
  maxCharacters?: number;
}

export const SocialLink = ({
  url,
  type,
  maxCharacters = 25,
}: SocialLinkProps) => {
  const makeIconUrl = () => {
    const { color } = useTheme();
    switch (type) {
      case "discord":
        return <IconDiscord fill={color.TEXT_2} />;
      case "instagram":
        return <IconInstagram fill={color.TEXT_2} />;
      case "reddit":
        return <IconReddit fill={color.TEXT_2} />;
      case "twitch":
        return <IconTwitch fill={color.TEXT_2} />;
      case "twitter":
        return <IconTwitter fill={color.TEXT_2} />;
      case "youtube":
        return <IconYoutube fill={color.TEXT_2} />;
      default:
        return <IconWeb fill={color.TEXT_2} />;
    }
  };

  const makeText = () => {
    switch (type) {
      case "discord":
        return "Discord";
      case "instagram":
        return "Instagram";
      case "reddit":
        return "Reddit";
      case "twitch":
        return "Twitch";
      case "twitter":
        return "Twitter";
      case "youtube":
        return "Youtube";
      default: {
        let formattedUrl = getDomainFromRegex(url) || url;
        if (formattedUrl.length > maxCharacters) {
          formattedUrl = `...${formattedUrl.substring(
            formattedUrl.length - maxCharacters,
            formattedUrl.length
          )}`;
        }
        return formattedUrl;
      }
    }
  };

  return (
    <Anchor url={url} isExternalLink={true} title={url}>
      <Styled.SocialLink>
        {makeIconUrl()} {makeText()}
      </Styled.SocialLink>
    </Anchor>
  );
};

export default SocialLink;
