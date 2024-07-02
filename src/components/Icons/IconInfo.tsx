export function IconInfo({
  fill = "black",
  size = 24,
}: {
  fill?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.25 10.75C11.25 10.3358 11.5858 10 12 10C12.4142 10 12.75 10.3358 12.75 10.75V15.25C12.75 15.6642 12.4142 16 12 16C11.5858 16 11.25 15.6642 11.25 15.25V10.75Z"
        fill={fill}
      />
      <path
        d="M11.25 8.75C11.25 8.33579 11.5858 8 12 8C12.4142 8 12.75 8.33579 12.75 8.75C12.75 9.16421 12.4142 9.5 12 9.5C11.5858 9.5 11.25 9.16421 11.25 8.75Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
        fill={fill}
      />
    </svg>
  );
}

export default IconInfo;
