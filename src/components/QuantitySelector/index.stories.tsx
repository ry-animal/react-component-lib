import { ComponentStory } from "@storybook/react";
import { useState } from "react";
import styled from "styled-components";
import { QuantitySelector } from ".";

export default {
  component: QuantitySelector,
  title: "Components/QuantitySelector",
  argTypes: {
    min: {
      control: {
        type: "number",
      },
    },
    max: {
      control: {
        type: "number",
      },
    },
    initialValue: {
      control: {
        type: "number",
      },
    },
  },
};

const baseProps = {
  min: 1,
  max: 10000,
};

const Template: ComponentStory<typeof QuantitySelector> = (args) => {
  const [quantity, setQuantity] = useState(args.initialValue ?? 1);
  const cost = 100;
  const StyledLabel = styled.div`
    color: ${({ theme }) => theme.color.TEXT_1};
  `;
  return (
    <>
      <StyledLabel>{`Cost: $${quantity * cost}`}</StyledLabel>
      <QuantitySelector
        {...args}
        initialValue={quantity}
        onChange={setQuantity}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = { ...baseProps };

export const NoInput = Template.bind({});
NoInput.args = { ...{ ...baseProps, initialValue: 10000, disableInput: true } };
