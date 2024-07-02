import styled from "styled-components";
import { PageWidth } from "./pageWidth";

export default {
  title: "Theme/PageWidths",
  parameters: { options: { showPanel: false } },
};

const OuterDiv = styled.div`
  background-color: #ff9431;
  ${PageWidth}
`;

const InnerDiv = styled.div`
  width: 100%;
  background-color: #1d9ed1;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
`;

export const PageWidths = () => (
  <>
    <OuterDiv>
      <InnerDiv>
        Padding changes with page width
        <br />
        Max page width of 1600px
      </InnerDiv>
    </OuterDiv>
  </>
);
