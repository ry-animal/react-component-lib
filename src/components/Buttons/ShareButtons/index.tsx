import { useTheme } from "styled-components";
import { CopyButton } from "../../Buttons";
import { IconReddit } from "../../Icons/IconReddit";
import { IconTwitter } from "../../Icons/IconTwitter";
import * as Styled from "./index.styled";

export const STRINGS = {
  copy: "Copy",
  copied: "Copied",
  twitter: "Twitter",
  reddit: "Reddit",
  shareTo: "Share to",
  twitterRootUrl: "https://twitter.com/intent/tweet?url=",
  redditRootUrl: "https://www.reddit.com/submit?url=",
};

type ShareButtonsProps = {
  /**
   * Override for shared url, uses current window location by default
   */
  url?: string;
};

export const ShareButtons = ({ url }: ShareButtonsProps) => {
  const { color } = useTheme();

  const shareURL = url ?? encodeURI(window.location.href);
  const socialButtons = [
    {
      url: `${STRINGS.twitterRootUrl}${shareURL}`,
      icon: <IconTwitter fill={color.TEXT_1} />,
      label: STRINGS.twitter,
    },
    {
      url: `${STRINGS.redditRootUrl}${shareURL}`,
      icon: <IconReddit fill={color.TEXT_1} />,
      label: STRINGS.reddit,
    },
  ];

  return (
    <Styled.SocialButtonsWrapper>
      <Styled.CopyButtonWrapper>
        <CopyButton
          description={STRINGS.copy}
          value={shareURL}
          altText={STRINGS.copy}
          onClickText={STRINGS.copied}
        />
      </Styled.CopyButtonWrapper>
      {socialButtons.map((social, i) => (
        <Styled.ShareIconLink
          key={`${social.label}-${i}`}
          href={social.url}
          target="_blank"
          aria-label={`${STRINGS.shareTo} ${social.label}`}
        >
          <Styled.Icon>{social.icon}</Styled.Icon>
          {social.label}
        </Styled.ShareIconLink>
      ))}
    </Styled.SocialButtonsWrapper>
  );
};

export default ShareButtons;
