export function IconPreview({ fill = "black" }: { fill?: string }) {
  return (
    <svg
      width="18"
      height="13"
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 6.30185C1 6.30185 3.88139 0.539062 8.92383 0.539062C13.9663 0.539062 16.8477 6.30185 16.8477 6.30185C16.8477 6.30185 13.9663 12.0646 8.92383 12.0646C3.88139 12.0646 1 6.30185 1 6.30185Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.92276 8.46271C10.1163 8.46271 11.0838 7.49518 11.0838 6.30167C11.0838 5.10816 10.1163 4.14062 8.92276 4.14062C7.72925 4.14062 6.76172 5.10816 6.76172 6.30167C6.76172 7.49518 7.72925 8.46271 8.92276 8.46271Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconPreview;
