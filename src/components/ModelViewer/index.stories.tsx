import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ModelViewer } from ".";
import Primatives3D from "../../assets/models/prim.glb";

export default {
  component: ModelViewer,
  title: "Components/ModelViewer",
} as ComponentMeta<typeof ModelViewer>;

const Template: ComponentStory<typeof ModelViewer> = (args) => (
  <ModelViewer {...args} />
);

export const DefaultModelViewer = Template.bind({});
DefaultModelViewer.args = {
  src: Primatives3D,
};
