import { ComponentMeta, ComponentStory } from "@storybook/react";
import Pagination from ".";

export default {
  component: Pagination,
  title: "Components/Pagination",
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <div style={{ padding: "50px" }}>
    <Pagination {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  pageCount: 675,
};

export const MobileCountSize = Template.bind({});
MobileCountSize.args = {
  pageCount: 20,
  marginPagesDisplayed: 0,
};

export const StartingPageNumber = Template.bind({});
StartingPageNumber.args = {
  pageCount: 10,
  forcePage: 4,
};
