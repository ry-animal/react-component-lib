import { useTheme } from "styled-components";

export function IconLogoEth({
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
      <g clipPath="url(#clip0_14895_64936)">
        <path
          data-testid="icon-eth"
          d="M12 16.4939V20.5L16.8571 13.5929L12 16.4939Z"
          fill={LOCAL_COLOR}
          fillOpacity="0.8"
        />
        <path
          d="M12 10.4252V15.5671L16.8571 12.6584L12 10.4252Z"
          fill={LOCAL_COLOR}
          fillOpacity="0.3"
        />
        <path d="M12 4.5V10.4252L16.8571 12.6584L12 4.5Z" fill={LOCAL_COLOR} />
        <path
          opacity="0.3"
          d="M11.9997 16.4939V20.5L7.14258 13.5929L11.9997 16.4939Z"
          fill={LOCAL_COLOR}
        />
        <path
          opacity="0.1"
          d="M11.9997 10.4252V15.5671L7.14258 12.6584L11.9997 10.4252Z"
          fill={LOCAL_COLOR}
        />
        <path
          opacity="0.6"
          d="M11.9997 4.5V10.4252L7.14258 12.6584L11.9997 4.5Z"
          fill={LOCAL_COLOR}
        />
      </g>
      <defs>
        <clipPath id="clip0_14895_64936">
          <rect
            width="9.71429"
            height="16"
            fill={LOCAL_COLOR}
            transform="translate(7.14258 4.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconLogoEth;
