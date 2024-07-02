import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";
import { ShareButtons } from ".";

export default {
  title: "Components/Buttons/ShareButtons",
  component: ShareButtons,
  argTypes: {
    url: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof ShareButtons>;

const CenteredContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Template: ComponentStory<typeof ShareButtons> = (args) => (
  <CenteredContainer>
    <ShareButtons {...args} />
  </CenteredContainer>
);

export const Default = Template.bind({});

export const ShareUrl = Template.bind({});
ShareUrl.args = {
  url: "https://gamestop.com",
};
