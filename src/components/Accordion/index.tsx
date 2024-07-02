import * as React from "react";
import { Children, ReactElement, useState } from "react";
import { IconChevronRight } from "../Icons";
import { Text } from "../Text";
import {
  AccordionIcon,
  AccordionItemWrapper,
  AccordionWrapper,
  DetailsWrapper,
  SummaryText,
  SummaryWrapper,
} from "./index.styled";

type AccordionItem = {
  summary: string;
  children: React.ReactNode | React.ReactNode[];
  active?: boolean;
  iconAlt?: string;
  onClick?: () => void;
};

export function AccordionItem({
  summary,
  children,
  active,
  onClick,
}: AccordionItem) {
  return (
    <AccordionItemWrapper>
      <SummaryWrapper onClick={onClick}>
        <AccordionIcon active={active || false}>
          <IconChevronRight size={20} />
        </AccordionIcon>
        <SummaryText>
          <Text text={summary} variant="Body1" align="left" reset />
        </SummaryText>
      </SummaryWrapper>
      <DetailsWrapper active={active || false}>{children}</DetailsWrapper>
    </AccordionItemWrapper>
  );
}

type AccordionProps = {
  children: ReactElement[];
};

export function Accordion({ children }: AccordionProps) {
  const [activeKey, setActiveKey] = useState<number | null>(null);

  return (
    <AccordionWrapper>
      {Children.map(children, (child, index) =>
        React.cloneElement(child, {
          onClick: () => {
            setActiveKey(index === activeKey ? null : index);
          },
          key: index,
          active: index === activeKey,
        })
      )}
    </AccordionWrapper>
  );
}

export default Accordion;
