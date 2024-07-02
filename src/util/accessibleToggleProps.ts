export function accessibleToggleProps(
  label: string,
  controls: string,
  expanded: boolean,
  popupType?: "menu"
) {
  return {
    "aria-controls": controls,
    "aria-expanded": expanded,
    "aria-haspopup": popupType || true,
    "aria-label": label,
    "aria-pressed": expanded,
    role: "button",
  };
}
