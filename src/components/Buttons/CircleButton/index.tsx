import { ButtonHTMLAttributes, ReactElement, RefObject } from "react";
import * as Styled from "./index.styled";

export interface CircleButtonStringProps {
  buttonLabel: string;
}

export interface CircleButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Icon in button
   */
  iconUrl?: string;
  /**
   * Custom icon
   */
  icon?: ReactElement | string;
  /**
   * Size of button
   */
  size?: "xs" | "s" | "m" | "l";
  /**
   * Button is transparent until hovered
   */
  transparent?: boolean;
  /**
   * Button background color
   */
  backgroundColor?: string;
  /**
   * Toggle light or dark theme
   */
  isDarkTheme?: boolean;
  /**
   * Reference to object
   */
  forwardRef?: RefObject<HTMLButtonElement>;
  /**
   * String constants
   */
  strings?: CircleButtonStringProps;
}

export const defaultCircleButtonStrings = {
  buttonLabel: "Icon Button",
};

export function CircleButton({
  onClick,
  iconUrl,
  icon,
  size = "s",
  transparent = false,
  backgroundColor,
  disabled,
  isDarkTheme,
  forwardRef,
  strings = defaultCircleButtonStrings,
  ...props
}: CircleButtonProps) {
  return (
    <Styled.Button
      onClick={onClick}
      iconUrl={iconUrl}
      size={size}
      transparent={transparent}
      backgroundColor={backgroundColor}
      aria-label={strings.buttonLabel}
      disabled={disabled}
      isDarkTheme={isDarkTheme}
      ref={forwardRef}
      {...props}
    >
      {icon && (
        <Styled.CustomIcon
          icon={icon}
          aria-label={`${strings.buttonLabel} icon`}
        />
      )}
    </Styled.Button>
  );
}
export default CircleButton;
