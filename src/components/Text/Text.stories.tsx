import { ComponentStory } from "@storybook/react";
import { Text } from ".";

export default {
  component: Text,
  title: "Components/Text",
  argTypes: {
    color: {
      control: {
        type: "color",
      },
    },
    reset: {
      control: {
        type: "boolean",
      },
    },
    ellipsis: {
      control: {
        type: "boolean",
      },
    },
    inline: {
      control: {
        type: "boolean",
      },
    },
    as: {
      control: {
        type: "string",
      },
    },
  },
};

const designs = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/YzgT8FhyEaHw5s1rimOnkn/NFT-Marketplace-v1?node-id=10819%3A10088",
  },
};

const baseProps = {
  text: "The quick brown fox jumps over the lazy dog",
};

const basePropsBody = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = { ...basePropsBody };
Default.parameters = {
  ...designs,
};

export const Color = Template.bind({});
Color.args = { ...basePropsBody, color: "tomato" };

export const IsGradient = Template.bind({});
IsGradient.args = { ...basePropsBody, isGradient: true };

export const Align = Template.bind({});
Align.args = { ...basePropsBody, align: "center" };

export const Ellipsis = Template.bind({});
Ellipsis.args = { ...basePropsBody, ellipsis: true };

export const Display1 = Template.bind({});
Display1.args = { ...baseProps, variant: "Display1" };
Display1.parameters = {
  ...designs,
};

export const Display2 = Template.bind({});
Display2.args = { ...baseProps, variant: "Display2" };
Display2.parameters = {
  ...designs,
};

export const Display3 = Template.bind({});
Display3.args = { ...baseProps, variant: "Display3" };
Display3.parameters = {
  ...designs,
};

export const Display4 = Template.bind({});
Display4.args = { ...baseProps, variant: "Display4" };
Display4.parameters = {
  ...designs,
};

export const Display5 = Template.bind({});
Display5.args = { ...baseProps, variant: "Display5" };
Display5.parameters = {
  ...designs,
};

export const Display6 = Template.bind({});
Display6.args = { ...baseProps, variant: "Display6" };
Display6.parameters = {
  ...designs,
};

export const BodyTitle1 = Template.bind({});
BodyTitle1.args = { ...baseProps, variant: "BodyTitle1" };
BodyTitle1.parameters = {
  ...designs,
};

export const BodyTitle2 = Template.bind({});
BodyTitle2.args = { ...baseProps, variant: "BodyTitle2" };
BodyTitle2.parameters = {
  ...designs,
};

export const Body1 = Template.bind({});
Body1.args = { ...basePropsBody, variant: "Body1" };
Body1.parameters = {
  ...designs,
};

export const Body2 = Template.bind({});
Body2.args = { ...basePropsBody, variant: "Body2" };
Body2.parameters = {
  ...designs,
};

export const Body3 = Template.bind({});
Body3.args = { ...basePropsBody, variant: "Body3" };
Body3.parameters = {
  ...designs,
};

export const Caption = Template.bind({});
Caption.args = { ...basePropsBody, variant: "Caption" };
Default.parameters = {
  ...designs,
};

export const ModifyHTMLTag = Template.bind({});
ModifyHTMLTag.args = { ...basePropsBody, variant: "BodyTitle1", as: "h1" };

export const ResetSpace = Template.bind({});
ResetSpace.args = { ...basePropsBody, reset: true };

export const Inline = () => (
  <>
    <Text text="Hello" variant="Display1" inline reset />
    <Text text="World" variant="Display4" color="tomato" inline reset />
  </>
);

export const WithChildren = () => (
  <Text variant="Display1" inline reset>
    Hello
    <Text
      variant="Display1"
      as="span"
      color="tomato"
      inline
      reset
      text="World"
    />
  </Text>
);

const Spacer = () => <div style={{ height: "32px" }} />;

export const AllVariants = () => (
  <>
    <Text
      text="Type Family + Weight / size / leading / tracking"
      variant="Caption"
      color="#333"
      weight="700"
    />
    <Spacer />
    <Text
      text="Poppins SEMIBold / 72 / 88 / -1.5"
      variant="Caption"
      color="#666"
    />
    <Text text="Display1" variant="Display1" reset />
    <Spacer />
    <Text
      text="Poppins SEMIBold / 56 / 64 / -1.5"
      variant="Caption"
      color="#666"
    />
    <Text text="Display2" variant="Display2" reset />
    <Spacer />
    <Text
      text="Poppins SEMIBold / 40 / 48 / -1.5"
      variant="Caption"
      color="#666"
    />
    <Text text="Display3" variant="Display3" reset />
    <Spacer />
    <Text
      text="Poppins SEMIBold / 32 / 36 / -1.5"
      variant="Caption"
      color="#666"
    />
    <Text text="Display4" variant="Display4" reset />
    <Spacer />
    <Text
      text="Poppins SEMIBold / 24 / 32 / -1.5"
      variant="Caption"
      color="#666"
    />
    <Text text="Display5" variant="Display5" reset />
    <Spacer />
    <Text
      text="Poppins SEMIBold / 20 / 28 / 0"
      variant="Caption"
      color="#666"
    />
    <Text text="Display6" variant="Display6" reset />
    <Spacer />
    <Text
      text="Poppins SEMIBold / 18 / 20 / 0"
      variant="Caption"
      color="#666"
    />
    <Text text="BodyTitle1" variant="BodyTitle1" reset />
    <Spacer />
    <Text
      text="Poppins SEMIBold / 16 / 18 / 0"
      variant="Caption"
      color="#666"
    />
    <Text text="BodyTitle2" variant="BodyTitle2" reset />
    <Spacer />
    <Text
      text="Open Sans Regular / 18 / 32 / 0"
      variant="Caption"
      color="#666"
    />
    <Text text="Body1" variant="Body1" reset />
    <Spacer />
    <Text
      text="Open Sans Regular / 16 / 24 / 0"
      variant="Caption"
      color="#666"
    />
    <Text text="Body2" variant="Body2" reset />
    <Spacer />
    <Text
      text="Open Sans Regular / 14 / 22 / 0"
      variant="Caption"
      color="#666"
    />
    <Text text="Body3" variant="Body3" reset />
    <Spacer />
    <Text
      text="Open Sans Regular / 12 / 16 / -3"
      variant="Caption"
      color="#666"
    />
    <Text text="Caption" variant="Caption" reset />
  </>
);
AllVariants.parameters = {
  ...designs,
};
