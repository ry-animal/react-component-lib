import { useTheme } from "styled-components";

export function IconCreate({ fill }: { fill?: string }) {
  const { color } = useTheme();
  const LOCAL_COLOR = fill ? fill : color.TEXT_1;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill={LOCAL_COLOR}
      />
      <path
        d="M13.0713 11.5869H16.5869V13.1514H13.0713V16.7021H11.5068V13.1514H8V11.5869H11.5068V8.00098H13.0713V11.5869Z"
        fill={LOCAL_COLOR}
      />
    </svg>
  );
}

export default IconCreate;
