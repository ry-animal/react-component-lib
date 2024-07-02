import styled from "styled-components";
import { Text } from "../components/Text";
import { ELEVATION_LIGHT } from "./elevation";

const BoxContainer = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.space.s24};
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.space.s8};
`;

interface BoxProps {
  item: string;
}
const Box = styled.div<BoxProps>`
  align-self: center;
  background-color: ${({ theme }) => theme.color.SURFACE_2};
  margin-right: ${({ theme }) => theme.space.s32};
  width: 300px;
  height: 300px;
  box-shadow: ${({ theme, item }) => {
    if (item === "low") {
      return theme.elevation.low;
    }
    if (item === "high") {
      return theme.elevation.high;
    }
    return theme.elevation.medium;
  }};
`;

export default {
  title: "Theme/Elevation",
  parameters: { options: { showPanel: false } },
};

const ElevationItem = ({ name, value }: { name: string; value: string }) => (
  <BoxContainer>
    <Box item={name} />
    <div>
      <Text>
        <b>Key:</b> {name}
      </Text>
      <Text>
        <b>Value:</b> {value}
      </Text>
    </div>
  </BoxContainer>
);

export const ElevationList = (): JSX.Element[] =>
  Object.entries(ELEVATION_LIGHT).map(([key, value]) => (
    <ElevationItem key={key} name={key} value={value} />
  ));
