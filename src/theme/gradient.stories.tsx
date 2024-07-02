import styled from "styled-components";
import { Text } from "../components/Text";
import { GRADIENT } from "./gradient";

const BoxContainer = styled.div`
  padding: ${({ theme }) => theme.space.s24};
  margin-bottom: ${({ theme }) => theme.space.s8};
`;

interface BoxProps {
  item: string;
}
const Box = styled.div<BoxProps>`
  align-self: center;
  background-color: ${({ theme }) => theme.color.SURFACE_2};
  margin-right: ${({ theme }) => theme.space.s32};
  width: 100%;
  height: 300px;
  background: ${({ item }) => item};
`;

export default {
  title: "Theme/Gradient",
  parameters: { options: { showPanel: false } },
};

export const Gradients = () => (
  <BoxContainer>
    <div>
      <Text>
        <b>Key:</b> ETH
      </Text>

      <Box item={GRADIENT.ETH} />
      <Text>
        <b>Value:</b> {GRADIENT.ETH}
      </Text>
    </div>
  </BoxContainer>
);
