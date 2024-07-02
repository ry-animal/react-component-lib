export function IconLoopring({
  fillBackground = "#E3EBFB",
  fillIcon = "#1C60FF",
  size = 24,
}: {
  fillBackground?: string;
  fillIcon?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="12"
        fill={fillBackground}
        data-testid="icon-lr"
      />
      <path
        d="M13.8257 11.7363H19.2896V11.7795L10.7468 16.9599L14.9965 13.5926L13.8257 11.7363ZM10.6167 6.72852V17.0463L6.28027 13.5926L10.6167 6.72852Z"
        fill={fillIcon}
      />
    </svg>
  );
}

export default IconLoopring;
