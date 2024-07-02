import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Dropdown } from ".";
import CameraIcon from "../../../assets/icons/icon-add-image-dark.svg";
import HandsIcon from "../../../assets/icons/icon-hands.svg";

export default {
  title: "Components/Forms/Dropdown",
  component: Dropdown,
  argTypes: {
    onSelect: { action: "onClick" },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  label: "Input Label",
  options: ["Option 1", "Option 2"],
};

export const RequiredDropdown = Template.bind({});
RequiredDropdown.args = {
  ...DefaultDropdown.args,
  required: true,
};

export const FixedOptionDropdown = () => (
  <Dropdown
    label="Fixed Selected Item"
    options={["buy", "sell", "manage"]}
    selected={"buy"}
    required
  />
);

export const CustomPlaceHolderDropdown = Template.bind({});
CustomPlaceHolderDropdown.args = {
  ...DefaultDropdown.args,
  placeholder: "Pick an option",
};

export const CustomOptionsDropdown = Template.bind({});
CustomOptionsDropdown.args = {
  ...DefaultDropdown.args,
  required: true,
  options: [
    <>
      <img src={HandsIcon} />
      Hands
    </>,
    <>
      <img src={CameraIcon} />
      Camera
    </>,
  ],
};
