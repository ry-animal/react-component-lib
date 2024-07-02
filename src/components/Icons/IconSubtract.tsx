import { useTheme } from "styled-components";

export function IconSubtract({ isMin = false }: { isMin?: boolean }) {
  const { color } = useTheme();
  return (
    <svg
      width="12"
      height="3"
      viewBox="0 0 12 3"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={isMin ? color.SURFACE_4 : color.TEXT_1}
        d="M0.960938 2.42188V0.6875H11.0391V2.42188H0.960938Z"
      />
    </svg>
  );
}

export default IconSubtract;
