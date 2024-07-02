import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { Tab, Tabs } from ".";

export default {
  component: Tabs,
  title: "Components/Tabs",
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = () => {
  const tabOptions = ["NFTs", "Drafts(2)", "For Sale (10.6k)", "Activites"];
  const [activeKey, setActiveKey] = useState(0);

  return (
    <Tabs onTabChange={setActiveKey} initialKey={activeKey}>
      {tabOptions.map((tab) => (
        <Tab key={tab} title={tab}>
          {tab}
        </Tab>
      ))}
    </Tabs>
  );
};

const Template2: ComponentStory<typeof Tabs> = () => {
  const tabOptions = [
    { tabId: "nft", label: "NFTs", data: "These are my NFTs" },
    {
      tabId: "collections",
      label: "Collections",
      data: "These are my Collections",
    },
    { tabId: "liked", label: "Liked", data: "These are my Liked NFTs" },
  ];
  const [activeTabId, setActiveTabId] = useState(tabOptions[0].tabId);

  return (
    <Tabs onTabIdChange={(tabChangeId) => setActiveTabId(tabChangeId)}>
      {tabOptions.map(({ tabId, label, data }) => (
        <Tab
          key={tabId}
          tabId={tabId}
          title={label}
          active={activeTabId === tabId}
        >
          {data}
        </Tab>
      ))}
    </Tabs>
  );
};

const Template3: ComponentStory<typeof Tabs> = () => {
  const tabOptions = ["Collections", "NFTs", "Creators"];
  const [activeKey, setActiveKey] = useState(0);

  return (
    <Tabs
      onTabChange={setActiveKey}
      initialKey={activeKey}
      tabStyleType="buttons"
    >
      {tabOptions.map((tab) => (
        <Tab key={tab} title={tab}>
          {tab}
        </Tab>
      ))}
    </Tabs>
  );
};

export const TabIndex = Template.bind({});
export const TabId = Template2.bind({});
export const ButtonModeStyle = Template3.bind({});
