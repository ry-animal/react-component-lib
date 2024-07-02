import { useState } from "react";
import * as Styled from "./index.styled";

export type ReadMoreProps = {
  /**
   * Number of characters before truncate
   */
  count?: number;
  /**
   * Text to untruncate
   */
  lessText?: string;
  /**
   * Text to truncate
   */
  moreText?: string;
  /**
   * Body text
   */
  text: string;
};

export function ReadMore({
  count = 340,
  lessText = "...less",
  moreText = "...more",
  text,
}: ReadMoreProps): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text?.length >= count) {
    const trucatedText = text.substr(0, count);

    return (
      <Styled.BodyText>
        {isExpanded ? text : trucatedText}
        <Styled.MoreLink onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? lessText : moreText}
        </Styled.MoreLink>
      </Styled.BodyText>
    );
  }

  return <Styled.BodyText>{text}</Styled.BodyText>;
}

export default ReadMore;
