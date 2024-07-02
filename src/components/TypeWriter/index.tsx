import * as React from "react";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import Typed from "typed.js";

const TYPE_SPEED_IN_MS = 50;
const BACKSPACE_SPEED_IN_MS = 50;
const DELAY_IN_MS = 1000;

const HiddenText = styled.div`
  display: none;
`;
HiddenText.displayName = "HiddenText";

type TypeWriterProps = {
  children: React.ReactElement<HTMLParagraphElement>[];
};

export function TypeWriter({ children }: TypeWriterProps) {
  const element = useRef<HTMLSpanElement>(null);
  const hiddenText = useRef<HTMLDivElement>(null);
  let typed: Typed | null = null;
  useEffect(() => {
    if (element.current && hiddenText.current) {
      typed = new Typed(element.current, {
        backDelay: DELAY_IN_MS,
        backSpeed: BACKSPACE_SPEED_IN_MS,
        loop: true,
        stringsElement: hiddenText.current,
        typeSpeed: TYPE_SPEED_IN_MS,
      });
    }
    return () => typed?.destroy();
  }, []);
  return (
    <>
      <span ref={element} />
      <HiddenText ref={hiddenText}>{children}</HiddenText>
    </>
  );
}
