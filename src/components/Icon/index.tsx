import { ImgHTMLAttributes, ReactElement } from "react";
import * as Styled from "./index.styled";

export interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Icon as a component or a url string
   */
  icon: ReactElement | string;
}

export function Icon({ icon, ...props }: IconProps) {
  /*
   * Check if !icon.type to test if JSX element
   * jest renders svg imports as [Object object] and when passed as ReactElement throws invalid child type
   */
  if (typeof icon === "string" || !icon.type) {
    return <img {...props} src={icon.toString()} />;
  }
  return <Styled.IconWrapper {...props}>{icon}</Styled.IconWrapper>;
}

export default Icon;
