import { IconExternalLink } from "../Icons";
import { ProfileIcon } from "../Profile/ProfileIcon";
import { DataBadgeProps } from "./index.interface";
import * as Styled from "./index.styled";

/**
 * Used for displaying a data inside of a badge
 */

export function DataBadge({
  title,
  imageSrc,
  showImageFallback,
  name,
  isImageHexagon,
  isDark,
  size = "s",
  hasBorder = false,
  hasLinkIcon = false,
  inline = false,
}: DataBadgeProps): JSX.Element {
  const renderDataBadgeSize = () => {
    const sizes = {
      xs: 24,
      small: 40,
      medium: 60,
      large: 80,
    };
    switch (size) {
      case "xs":
        return sizes.xs;
      case "m":
        return sizes.medium;
      case "l":
        return sizes.large;
      case "s":
      default:
        return sizes.small;
    }
  };
  return (
    <Styled.DataBadgeContainer hasBorder={hasBorder} inline={inline}>
      {(imageSrc || showImageFallback) && (
        <Styled.DataBadgeImage>
          <ProfileIcon
            imgSrc={imageSrc}
            hex={isImageHexagon}
            borderSize={0}
            size={renderDataBadgeSize()}
          />
        </Styled.DataBadgeImage>
      )}
      <Styled.DataBadgeData isDark={isDark} inline={inline}>
        {title && <Styled.DataBadgeDataText>{title}</Styled.DataBadgeDataText>}
        {name && (
          <Styled.DataBadgeDataTextLast
            hasLinkIcon={hasLinkIcon}
            inline={inline}
            hasTitle={!!title}
          >
            {name}
          </Styled.DataBadgeDataTextLast>
        )}
      </Styled.DataBadgeData>
      {hasLinkIcon && (
        <Styled.DataBadgeIcon>
          <IconExternalLink />
        </Styled.DataBadgeIcon>
      )}
    </Styled.DataBadgeContainer>
  );
}

export default DataBadge;
