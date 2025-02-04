import { useTheme } from "styled-components";

export function IconAdd({ isMax = false }: { isMax?: boolean }) {
  const { color } = useTheme();
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={isMax ? color.SURFACE_4 : color.TEXT_1}
        d="M7.09989 0.75C7.09989 0.335786 6.7641 0 6.34989 0C5.93567 0 5.59989 0.335786 5.59989 0.75V5.59989H0.75C0.335786 5.59989 0 5.93568 0 6.34989C0 6.7641 0.335786 7.09989 0.75 7.09989H5.59989V11.95C5.59989 12.3642 5.93567 12.7 6.34989 12.7C6.7641 12.7 7.09989 12.3642 7.09989 11.95V7.09989H11.95C12.3642 7.09989 12.7 6.7641 12.7 6.34989C12.7 5.93568 12.3642 5.59989 11.95 5.59989H7.09989V0.75Z"
      />
    </svg>
  );
}

export default IconAdd;
