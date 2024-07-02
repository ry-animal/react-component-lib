import * as Styled from "./index.styled";

const hexSvg = (
  <svg
    width="0"
    height="0"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <clipPath
        id="hexPath"
        clipPathUnits="objectBoundingBox"
        transform="scale(0.02, 0.02)"
      >
        <path d="M26.2,0.7l19.2,11.1c0.7,0.4,1.2,1.2,1.2,2.1v22.2c0,0.9-0.5,1.7-1.2,2.1L26.2,49.3c-0.7,0.4-1.7,0.4-2.4,0L4.5,38.2c-0.7-0.4-1.2-1.2-1.2-2.1V13.9c0-0.9,0.5-1.7,1.2-2.1L23.8,0.7C24.5,0.3,25.5,0.3,26.2,0.7z" />
      </clipPath>
    </defs>
  </svg>
);
export interface ProfileIconProps {
  /**
   * Url for profile img
   */
  imgSrc?: string;
  /**
   * Size in px
   */
  size?: number;
  /**
   * Make icon a hexagon shape
   */
  hex?: boolean;
  /**
   * Border size in px
   */
  borderSize?: number;
  /**
   * Border color
   */
  borderColor?: string;
  /**
   * Make border transparent
   */
  transparentBorder?: boolean;
}

export function ProfileIcon({
  imgSrc,
  size = 40,
  hex,
  borderSize = 2,
  borderColor = "white",
  transparentBorder,
}: ProfileIconProps) {
  return hex ? (
    <>
      <Styled.SvgWrapper>{hexSvg}</Styled.SvgWrapper>
      <Styled.HexBorder
        size={size}
        borderSize={borderSize}
        borderColor={borderColor}
        transparentBorder={transparentBorder}
      >
        <Styled.HexagonImage imgSrc={imgSrc} size={size} />
      </Styled.HexBorder>
    </>
  ) : (
    <Styled.CircleBorder
      size={size}
      borderSize={borderSize}
      borderColor={borderColor}
      transparentBorder={transparentBorder}
    >
      <Styled.CircleImage imgSrc={imgSrc} size={size} />
    </Styled.CircleBorder>
  );
}
