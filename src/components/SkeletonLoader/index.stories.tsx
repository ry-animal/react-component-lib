import { ComponentMeta, ComponentStory } from "@storybook/react";
import SkeletonLoader from ".";

export default {
  component: SkeletonLoader,
  title: "Components/Loaders/Skeleton",
  argTypes: {
    width: {
      control: {
        type: "text",
      },
    },
    height: {
      control: {
        type: "text",
      },
    },
    radius: {
      control: {
        type: "text",
      },
    },
    time: {
      control: {
        type: "number",
      },
    },
  },
} as ComponentMeta<typeof SkeletonLoader>;

const Template: ComponentStory<typeof SkeletonLoader> = (args) => (
  <SkeletonLoader {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Size = Template.bind({});
Size.args = {
  width: "200px",
  height: "350px",
};

export const Radius = Template.bind({});
Radius.args = {
  width: "150px",
  height: "150px",
  radius: "150px",
};

export const Time = Template.bind({});
Time.args = {
  time: 4,
};

const styles = {
  container: {
    width: "600px",
    maxWidth: "100%",
    display: "flex",
    "flex-direction": "column",
    paddingBottom: "64px",
    marginBottom: "64px",
    borderBottom: "1px solid #ccc",
  },
  inner: {
    display: "flex",
    marginBottom: "16px",
  },
  copy: {
    display: "flex",
    "flex-direction": "column",
    justifyContent: "space-around",
    width: "200px",
    height: "50px",
    marginLeft: "16px",
  },
  block: {
    marginBottom: "8px",
  },
};
const InLayoutComponent = () => (
  <div style={styles.container}>
    <div style={styles.inner}>
      <SkeletonLoader width="60px" height="60px" radius="60px" />
      <div style={styles.copy}>
        <SkeletonLoader height="24px" width="70%" />
        <SkeletonLoader />
      </div>
    </div>

    <SkeletonLoader style={styles.block} />
    <SkeletonLoader style={styles.block} />
    <SkeletonLoader />
  </div>
);

export const InLayout = () => (
  <div role="progressbar" aria-busy="true" aria-label="loading">
    <InLayoutComponent />
    <InLayoutComponent />
    <InLayoutComponent />
    <InLayoutComponent />
    <InLayoutComponent />
    <InLayoutComponent />
  </div>
);
