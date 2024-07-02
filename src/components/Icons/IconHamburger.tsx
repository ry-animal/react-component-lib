import { useTheme } from "styled-components";

export function IconHamburger({
  fill,
  size = 20,
}: {
  fill?: string;
  size?: number;
}) {
  const { color } = useTheme();
  const LOCAL_COLOR = fill ? fill : color.TEXT_1;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 5C0 4.44772 0.447715 4 1 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H1C0.447715 6 0 5.55228 0 5Z"
        fill={LOCAL_COLOR}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1C0 0.447715 0.447715 0 1 0H19C19.5523 0 20 0.447715 20 1C20 1.55228 19.5523 2 19 2H1C0.447715 2 0 1.55228 0 1Z"
        fill={LOCAL_COLOR}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 9C0 8.44772 0.447715 8 1 8H19C19.5523 8 20 8.44772 20 9C20 9.55228 19.5523 10 19 10H1C0.447715 10 0 9.55228 0 9Z"
        fill={LOCAL_COLOR}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 13C0 12.4477 0.447715 12 1 12H19C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14H1C0.447715 14 0 13.5523 0 13Z"
        fill={LOCAL_COLOR}
      />
    </svg>
  );
}

export default IconHamburger;
