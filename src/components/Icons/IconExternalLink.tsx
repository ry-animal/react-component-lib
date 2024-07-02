import { useTheme } from "styled-components";

export function IconExternalLink({
  size = 14,
  fill,
}: {
  size?: number;
  fill?: string;
}) {
  const { color } = useTheme();
  const LOCAL_COLOR = fill ? fill : color.TEXT_1;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.911 11.5556H1.79991V1.44444H6.85547V0H1.79991C0.998247 0 0.355469 0.65 0.355469 1.44444V11.5556C0.355469 12.35 0.998247 13 1.79991 13H11.911C12.7055 13 13.3555 12.35 13.3555 11.5556V6.5H11.911V11.5556ZM8.29991 0V1.44444H10.8927L3.79325 8.54389L4.81158 9.56222L11.911 2.46278V5.05556H13.3555V0H8.29991Z"
        fill={LOCAL_COLOR}
      />
    </svg>
  );
}

export default IconExternalLink;
