import { offset, Placement, useFloating } from "@floating-ui/react-dom";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import CopyIcon from "../../../assets/icons/icon-copy.svg";
import * as Styled from "./index.styled";

export interface CopyButtonProps {
  /**
   * Button label
   */
  description: string;
  /**
   * Data to copy when clicked
   */
  value: string;
  /**
   * Text for aria alt
   */
  altText: string;
  /**
   * Text to display on tooltip when button is clicked
   */
  onClickText: string;
  /**
   * Display an outline
   */
  outline?: boolean;
  /**
   * *Preferred* placement of tooltip if viewport has space
   */
  tooltipPlacement?: Placement;
  /**
   * Delay for hiding notification banner, defaults to 2500ms
   */
  hideDelay?: number;
}

const TOOLTIP_HIDE_DELAY = 2500;

const TOOLTIP_OFFSET = 15;

export function CopyButton({
  description,
  value,
  altText,
  onClickText,
  outline,
  tooltipPlacement = "top",
  hideDelay = TOOLTIP_HIDE_DELAY,
}: CopyButtonProps) {
  const [controlledVisible, setControlledVisible] = useState<boolean>(false);
  const hideTooltipAfterDelay = useDebouncedCallback(() => {
    setControlledVisible(false);
  }, hideDelay);

  const { x, y, reference, floating, strategy } = useFloating({
    placement: tooltipPlacement,
    middleware: [
      offset({
        mainAxis: TOOLTIP_OFFSET,
      }),
    ],
  });

  return (
    <>
      <Styled.Clickable
        role="button"
        onClick={() => {
          navigator.clipboard.writeText(value);
          setControlledVisible(true);
          hideTooltipAfterDelay();
        }}
        ref={reference}
        outline={outline}
      >
        {description} <img src={CopyIcon} alt={altText} />
      </Styled.Clickable>
      {controlledVisible && (
        <Styled.TooltipContainer
          role="tooltip"
          ref={floating}
          style={{
            position: strategy,
            top: y ?? "",
            left: x ?? "",
          }}
        >
          {onClickText}
        </Styled.TooltipContainer>
      )}
    </>
  );
}
