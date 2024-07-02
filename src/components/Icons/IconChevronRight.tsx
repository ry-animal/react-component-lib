import { useTheme } from "styled-components";

export function IconChevronRight({
  fill,
  size = 26,
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
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2197 18.2803C9.92678 17.9874 9.92678 17.5126 10.2197 17.2197L14.6893 12.75L10.2197 8.28033C9.92678 7.98744 9.92678 7.51256 10.2197 7.21967C10.5126 6.92678 10.9874 6.92678 11.2803 7.21967L16.2803 12.2197C16.5732 12.5126 16.5732 12.9874 16.2803 13.2803L11.2803 18.2803C10.9874 18.5732 10.5126 18.5732 10.2197 18.2803Z"
        fill={LOCAL_COLOR}
      />
    </svg>
  );
}

export default IconChevronRight;
