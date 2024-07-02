import { useTheme } from "styled-components";
import { TextButton } from "../Buttons/TextButton";
import DisplayOnMedia from "../DisplayOnMedia";
import IconClear from "../Icons/IconClear";
import IconWallet from "../Icons/IconWallet";
import { Text } from "../Text";
import * as Styled from "./index.styled";

interface ActionProps {
  label: string;
  onClick: () => void;
}
export interface BannerProps {
  title: string;
  description: string | React.ReactNode;
  dismissAction?: () => void;
  primaryAction?: ActionProps;
  secondaryAction?: ActionProps;
  showDismissButton?: boolean;
}

export function Banner({
  title,
  description,
  dismissAction,
  primaryAction,
  secondaryAction,
  showDismissButton,
}: BannerProps) {
  const { color } = useTheme();

  return (
    <Styled.BannerWrapper>
      <Styled.Banner>
        <Styled.ContentContainer>
          {showDismissButton && (
            <DisplayOnMedia showOn={["mobile", "tablet"]}>
              <Styled.TopIconClearWrapper onClick={dismissAction}>
                <IconClear fill={color.TEXT_1} />
              </Styled.TopIconClearWrapper>
            </DisplayOnMedia>
          )}
          <Styled.TextContainer>
            <Styled.IconWrapper>
              <IconWallet fill={color.TEXT_1} />
            </Styled.IconWrapper>
            <div>
              <Text text={title} variant="BodyTitle1" reset />
              <Styled.Description>
                {typeof description === "string" ? (
                  <Text text={description} reset />
                ) : (
                  description
                )}
              </Styled.Description>
            </div>
          </Styled.TextContainer>
          <Styled.ButtonGroupContainer>
            {primaryAction && (
              <Styled.ButtonContainer>
                <TextButton
                  label={primaryAction.label}
                  onClick={primaryAction.onClick}
                  size="small"
                />
              </Styled.ButtonContainer>
            )}
            {secondaryAction && (
              <Styled.ButtonContainer>
                <TextButton
                  label={secondaryAction.label}
                  onClick={secondaryAction.onClick}
                  variant="secondary"
                  size="small"
                />
              </Styled.ButtonContainer>
            )}
            {showDismissButton && (
              <DisplayOnMedia showOn={["laptop", "desktop"]}>
                <Styled.SideIconClearWrapper onClick={dismissAction}>
                  <IconClear fill={color.TEXT_1} />
                </Styled.SideIconClearWrapper>
              </DisplayOnMedia>
            )}
          </Styled.ButtonGroupContainer>
        </Styled.ContentContainer>
      </Styled.Banner>
    </Styled.BannerWrapper>
  );
}

export default Banner;
