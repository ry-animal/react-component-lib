import { lightColors } from "../../../theme";
import { ButtonVariant, TextButton } from "../../Buttons/TextButton";
import { Text } from "../../Text";
import * as Styled from "./index.styled";

export interface TitleProps {
  title: {
    header: string | JSX.Element;
    tagline?: string;
    link?: { text: string; url: string };
  };
  isLightTheme?: boolean;
}

const renderButton = (text: string, url: string, isLightTheme?: boolean) => (
  <Styled.TextContainer>
    <TextButton
      size="small"
      variant={isLightTheme ? ButtonVariant.reverse : ButtonVariant.primary}
      label={text}
      onClick={() => (window.location.href = url)}
    />
  </Styled.TextContainer>
);

export function TitleArea({ title, isLightTheme }: TitleProps) {
  const { header, tagline, link } = title;

  return (
    <>
      <Styled.DesktopTitleContainer>
        <Styled.TextContainer>
          <Text
            variant="Display1"
            color={isLightTheme ? lightColors.WHITE : lightColors.BLACK}
            reset
          >
            {header}
          </Text>
        </Styled.TextContainer>
        {tagline && (
          <Styled.TextContainer>
            <Text
              variant="Display4"
              color={isLightTheme ? lightColors.WHITE : lightColors.BLACK}
              reset
            >
              {tagline}
            </Text>
          </Styled.TextContainer>
        )}
        {link && renderButton(link.text, link.url, isLightTheme)}
      </Styled.DesktopTitleContainer>
      <Styled.MobileTitleContainer>
        <Styled.TextContainer>
          <Text
            variant="Display3"
            color={isLightTheme ? lightColors.WHITE : lightColors.BLACK}
            reset
          >
            {header}
          </Text>
        </Styled.TextContainer>

        {tagline && (
          <Styled.TextContainer>
            <Text
              variant="Display6"
              color={isLightTheme ? lightColors.WHITE : lightColors.BLACK}
              reset
            >
              {tagline}
            </Text>
          </Styled.TextContainer>
        )}
        {link && renderButton(link.text, link.url, isLightTheme)}
      </Styled.MobileTitleContainer>
    </>
  );
}

export default TitleArea;
