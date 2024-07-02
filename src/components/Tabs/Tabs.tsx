import {
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import useArrowNavigation from "../../hooks/useArrowNavigation";
import * as Styled from "./index.styled";

export enum TabStyleType {
  tab = "tabs",
  button = "buttons",
}

export interface TabsProps {
  initialKey?: number;
  children: ReactElement[];
  titleLabel?: string;
  tabStyleType?: "buttons" | "tabs";
  onTabChange?: (index: number) => void;
  onTabIdChange?: (tabId: string) => void;
}

export const Tabs = ({
  initialKey = 0,
  children,
  titleLabel = "Tabs",
  onTabChange,
  onTabIdChange,
  tabStyleType = TabStyleType.tab,
}: TabsProps) => {
  const [activeKey, setActiveKey] = useState(initialKey);
  const listRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useArrowNavigation({
    activeItem: activeKey,
    setActiveItem: setActiveKey,
    listRef,
    panelRef,
    orientation: "horizontal",
  });

  useEffect(() => {
    if (activeKey !== initialKey) {
      setActiveKey(initialKey);
    }
  }, [initialKey]);

  useEffect(() => {
    if (activeKey >= children.length && activeKey !== 0) {
      setActiveKey(0);
    }
  }, [children.length]);

  const normalIndex = activeKey >= children.length ? 0 : activeKey;

  return (
    <Styled.Tabs>
      <Styled.TabsHeader
        role="tablist"
        ref={listRef}
        aria-label={titleLabel}
        tabStyleType={tabStyleType}
      >
        {Children.map(children, (child, index) =>
          cloneElement(child, {
            onClick: () => {
              setActiveKey(index);
              if (onTabChange) {
                onTabChange(index);
              }
              if (onTabIdChange) {
                onTabIdChange(children[index].props.tabId);
              }
            },
            key: index,
            active: index === activeKey,
            tabStyleType,
            "aria-controls": `panel-${index}`,
          })
        )}
      </Styled.TabsHeader>
      <Styled.TabsBody
        tabStyleType={tabStyleType}
        role="tabpanel"
        ref={panelRef}
        tabIndex={0}
        id={`panel-${normalIndex}`}
        aria-labelledby={`tab-${normalIndex}`}
      >
        {children[normalIndex].props.children}
      </Styled.TabsBody>
    </Styled.Tabs>
  );
};
