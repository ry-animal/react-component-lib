import React, { ButtonHTMLAttributes, ReactElement, RefObject } from "react";
import Icon from "../../Icon";
import * as Styled from "./index.styled";

export type ButtonSizes = "small" | "medium" | "large";

export enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
  plaintext = "plaintext",
  reverse = "reverse",
  transparent = "transparent",
  success = "success",
}

export interface TextButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Text that goes on the button
   */
  label: string;
  /**
   *  'primary' - the dark one, 'secondary' - outlined, 'plaintext', 'reverse', 'transparent'
   *  defaults to primary
   */
  variant?: keyof typeof ButtonVariant;
  /**
   * 'small' is snug to text, 'large' is, well, large.
   */
  size?: ButtonSizes;
  /**
   * Provide an optional color string to override text color
   */
  color?: string;
  /**
   *  Provide optional icon url path to render icon
   */
  icon?: string | ReactElement;
  /**
   * Render icon to right of button text
   */
  flipIcon?: boolean;
  /**
   * Take 100% of the width of the parent
   */
  stretch?: boolean;
  /**
   * Toggle light and dark theme
   */
  isDarkTheme?: boolean;
  /**
   * Size of icon in button
   */
  iconSize?: number;
  /**
   * Reference to button
   */
  forwardRef?: RefObject<HTMLButtonElement>;
  /**
   * Modify HTML tag and keep styles
   */
  as?: React.ElementType;
}

export function TextButton({
  label,
  variant = ButtonVariant.primary,
  disabled,
  size = "large",
  color,
  icon,
  flipIcon,
  stretch,
  isDarkTheme,
  iconSize,
  forwardRef,
  as,
  ...props
}: TextButtonProps) {
  return (
    <Styled.TextButton
      {...props}
      aria-label={props["aria-label"] ?? label}
      variant={variant}
      disabled={!!disabled}
      color={color}
      size={size}
      stretch={!!stretch}
      isDarkTheme={isDarkTheme}
      iconSize={iconSize}
      ref={forwardRef}
      as={as}
    >
      <Styled.TextButtonLabel stretch={!!stretch} size={size}>
        {icon && !flipIcon && <Icon icon={icon} alt={`${label} icon`} />}
        {label}
        {icon && !!flipIcon && <Icon icon={icon} alt={`${label} icon`} />}
      </Styled.TextButtonLabel>
    </Styled.TextButton>
  );
}
