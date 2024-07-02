import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProfileIcon } from ".";
import SmolCatPhoto from "../../../assets/images/smolcat.png";
import { lightColors } from "../../../theme";

export default {
  title: "Components/Profile/ProfileIcon",
  component: ProfileIcon,
} as ComponentMeta<typeof ProfileIcon>;

const Template: ComponentStory<typeof ProfileIcon> = (args) => (
  <ProfileIcon {...args} />
);

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
  imgSrc: SmolCatPhoto,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  imgSrc: SmolCatPhoto,
  size: 100,
};

export const HexIcon = Template.bind({});
HexIcon.args = {
  imgSrc: SmolCatPhoto,
  size: 200,
  hex: true,
};

const TransparentTemplate: ComponentStory<typeof ProfileIcon> = (args) => (
  <div style={{ backgroundColor: "#333" }}>
    <ProfileIcon {...args} />
  </div>
);

export const TranparentBorder = TransparentTemplate.bind({});
TranparentBorder.args = {
  imgSrc: SmolCatPhoto,
  size: 200,
  hex: true,
  transparentBorder: true,
  borderSize: 10,
};

export const BorderColor = Template.bind({});
BorderColor.args = {
  imgSrc: SmolCatPhoto,
  size: 200,
  hex: true,
  borderSize: 10,
  borderColor: lightColors.PRIMARY_3,
};
