import { useTheme } from "styled-components";

export function IconSearch({
  fill,
  size = 17,
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
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9212 12.0255C9.7923 12.9031 8.37376 13.4256 6.83317 13.4256C3.15127 13.4256 0.166504 10.4409 0.166504 6.75895C0.166504 3.07705 3.15127 0.0922852 6.83317 0.0922852C10.5151 0.0922852 13.4998 3.07705 13.4998 6.75895C13.4998 8.29954 12.9773 9.71809 12.0997 10.847L16.5891 15.3364C16.9145 15.6618 16.9145 16.1894 16.5891 16.5149C16.2637 16.8403 15.736 16.8403 15.4106 16.5149L10.9212 12.0255ZM11.8332 6.75895C11.8332 9.52038 9.59459 11.759 6.83317 11.759C4.07175 11.759 1.83317 9.52038 1.83317 6.75895C1.83317 3.99753 4.07175 1.75895 6.83317 1.75895C9.59459 1.75895 11.8332 3.99753 11.8332 6.75895Z"
        fill={LOCAL_COLOR}
      />
    </svg>
  );
}

export default IconSearch;
