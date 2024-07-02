import { useTheme } from "styled-components";

export function IconClear({
  fill,
  size = 24,
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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke={LOCAL_COLOR}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke={LOCAL_COLOR}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconClear;
