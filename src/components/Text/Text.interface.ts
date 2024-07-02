export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * What tag and typography style to use
   */
  variant?:
    | "Display1"
    | "Display2"
    | "Display3"
    | "Display4"
    | "Display5"
    | "Display6"
    | "BodyTitle1"
    | "BodyTitle2"
    | "Body1"
    | "Body2"
    | "Body3"
    | "Caption";
  /**
   * Text color to use
   */
  color?: string;
  /**
   * Gradient instead of Text color
   */
  isGradient?: boolean;
  /**
   * Text contents
   */
  text?: string;
  /**
   * Text aling
   */
  align?: "left" | "center" | "right";
  /**
   * Text aling
   */
  inline?: boolean;
  /**
   * Font weight
   */
  weight?: "400" | "500" | "600" | "700";
  /**
   * Reset base paddings and margins
   */
  reset?: boolean;
  /**
   * Force text to be one line and add ...
   */
  ellipsis?: boolean;
  /**
   * Modify HTML tag and keep styles
   */
  as?: React.ElementType;
}
