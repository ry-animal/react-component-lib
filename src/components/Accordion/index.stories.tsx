import { ComponentStory } from "@storybook/react";
import Accordion, { AccordionItem } from ".";
import { Text } from "../Text";

export default {
  component: Accordion,
  title: "Components/Accordion",
  argTypes: {
    summary: {
      control: {
        type: "text",
      },
    },
    details: {
      control: {
        type: "text",
      },
    },
  },
};

const Template: ComponentStory<typeof Accordion> = () => (
  <Accordion>
    <AccordionItem summary="Lorem ipsum dolor sit amet">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Text>
    </AccordionItem>
    <AccordionItem summary="Ut enim ad minim veniam.">
      <img alt="foo" src="//source.unsplash.com/user/erondu/200x200" />
    </AccordionItem>
    <AccordionItem summary="Lorem ipsum dolor sit amet">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Text>
    </AccordionItem>
  </Accordion>
);

export const Default = Template.bind({});
