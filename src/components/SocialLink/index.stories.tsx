import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SocialLink } from ".";

export default {
  title: "Components/SocialLink",
  component: SocialLink,
} as ComponentMeta<typeof SocialLink>;

const Template: ComponentStory<typeof SocialLink> = (args) => (
  <SocialLink {...args} />
);

export const Discord = Template.bind({});
Discord.args = {
  url: "https://discord.com/gamestop",
  type: "discord",
};

export const Instagram = Template.bind({});
Instagram.args = {
  url: "https://instagram.com/gamestop",
  type: "instagram",
};

export const Reddit = Template.bind({});
Reddit.args = {
  url: "https://reddit.com/r/gamestop",
  type: "reddit",
};

export const Twitch = Template.bind({});
Twitch.args = {
  url: "https://twitch.com/gamestop",
  type: "twitch",
};

export const Twitter = Template.bind({});
Twitter.args = {
  url: "https://twitter.com/gamestop",
  type: "twitter",
};

export const Youtube = Template.bind({});
Youtube.args = {
  url: "https://youtube.com/gamestop",
  type: "youtube",
};

export const EnsName = Template.bind({});
EnsName.args = {
  url: "gamestop.eth",
  type: "web",
};

export const GenericUrl = Template.bind({});
GenericUrl.args = {
  url: "https://www.myspace.com/my-cool-space",
  type: "web",
};

export const LongUrl = Template.bind({});
LongUrl.args = {
  url: "https://thisisalongurlthatwillbecropped.com/my-cool-space",
  type: "web",
};
