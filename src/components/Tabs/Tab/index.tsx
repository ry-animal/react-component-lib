import { HTMLAttributes, ReactNode } from "react";
import { Text } from "../../Text";
import { TabStyleType } from "../Tabs";
import { GenericTab } from "./index.styled";

export interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  active?: boolean;
  children?: ReactNode | ReactNode[];
  tabStyleType?: string;
  tabId?: string;
  onClick?: () => void;
}

export const Tab = ({
  title,
  active = false,
  tabStyleType = TabStyleType.tab,
  tabId,
  onClick,
  ...props
}: TabProps) => (
  <GenericTab
    {...props}
    active={active}
    onClick={onClick}
    aria-label={title}
    aria-selected={active}
    tabIndex={active ? 0 : -1}
    role="tab"
    id={tabId}
    tabStyleType={tabStyleType}
  >
    <Text text={title} reset isGradient={active} as="span" variant="Body3" />
  </GenericTab>
);
