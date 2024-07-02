import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Notification } from ".";
import { NotificationVariant } from "./index.interface";

export default {
  title: "Components/Notification",
  component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification {...args} />
);

export const Default = Template.bind({});
Default.args = {
  heading: "Hello GameStop!",
  items: [
    "Pover to the players",
    "Pover to the creators",
    "Pover to the developers",
  ],
};

export const Information = Template.bind({});
Information.args = {
  heading: "Notification Information Variant",
  variant: NotificationVariant.Information,
};

export const Error = Template.bind({});
Error.args = {
  heading: "Notification Error Variant",
  variant: NotificationVariant.Error,
};

export const Success = Template.bind({});
Success.args = {
  heading: "Notification Success Variant",
  variant: NotificationVariant.Success,
};

export const WithItems = Template.bind({});
WithItems.args = {
  heading: "Notification",
  items: ["The First name field is empty", "The Last name field is empty"],
};

export const NoData = Template.bind({});
NoData.args = {};
