import { TextProps } from "./Text.interface";
import * as Styled from "./Text.styled";

/**
 * Text Component for automatic text styling
 *
 * #### Example Usage
 *
 * ```js
 * import { Text } from '@gamestop/nft-web-components';
 *
 * export const MyComponent = () => <Text variant="Display1" color="tomato" text="FooBar" reset />;
 * ```
 */

export function Text({
  align,
  inline,
  color,
  isGradient,
  reset = false,
  variant = "Body1",
  text,
  weight,
  ellipsis,
  as,
  children,
  ...props
}: TextProps) {
  const textProps = {
    reset,
    color,
    isGradient,
    align,
    inline,
    weight,
    ellipsis,
    as,
    ...props,
  };
  const content = text ? text : children;

  switch (variant) {
    case "Display1":
      return <Styled.Display1 {...textProps}>{content}</Styled.Display1>;
    case "Display2":
      return <Styled.Display2 {...textProps}>{content}</Styled.Display2>;
    case "Display3":
      return <Styled.Display3 {...textProps}>{content}</Styled.Display3>;
    case "Display4":
      return <Styled.Display4 {...textProps}>{content}</Styled.Display4>;
    case "Display5":
      return <Styled.Display5 {...textProps}>{content}</Styled.Display5>;
    case "Display6":
      return <Styled.Display6 {...textProps}>{content}</Styled.Display6>;
    case "BodyTitle1":
      return <Styled.BodyTitle1 {...textProps}>{content}</Styled.BodyTitle1>;
    case "BodyTitle2":
      return <Styled.BodyTitle2 {...textProps}>{content}</Styled.BodyTitle2>;
    case "Body1":
      return <Styled.Body1 {...textProps}>{content}</Styled.Body1>;
    case "Body3":
      return <Styled.Body3 {...textProps}>{content}</Styled.Body3>;
    case "Caption":
      return <Styled.Caption {...textProps}>{content}</Styled.Caption>;
    case "Body2":
    default:
      return <Styled.Body2 {...textProps}>{content}</Styled.Body2>;
  }
}

export default Text;
