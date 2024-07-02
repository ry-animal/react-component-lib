import * as React from "react";
import { useTheme } from "styled-components";
import * as Styled from "./index.styled";

export interface SkeletonLoaderProps {
  /**
   * Width of the Loader
   */
  width?: string;
  /**
   * Height of the Loader
   */
  height?: string;
  /**
   * Border Radius of the Loader
   */
  radius?: string;
  /**
   * Time in seconds of Loader animation
   */
  time?: number;
  /**
   * Other Style properties
   */
  style?: React.CSSProperties;
}

export function SkeletonLoader({
  width = "100%",
  height = "16px",
  radius = useTheme().radius.r8,
  time = 1.3,
  ...props
}: SkeletonLoaderProps) {
  return (
    <Styled.SkeletonLoader
      width={width}
      height={height}
      radius={radius}
      time={`${time}s`}
      {...props}
    />
  );
}

export default SkeletonLoader;
