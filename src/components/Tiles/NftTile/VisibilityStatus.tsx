import HiddenIcon from "../../../assets/icons/icon-hidden.svg";
import { lightColors } from "../../../theme";
import CircleButton from "../../Buttons/CircleButton";
import * as Styled from "./index.styled";
import { VisibilityStatusProps } from "./NftTileTypes.interface";

export const VisibilityStatus = ({ strings }: VisibilityStatusProps) => (
  <Styled.VisibilityStatusWrapper>
    <CircleButton
      iconUrl={HiddenIcon}
      onClick={() => {}}
      backgroundColor={lightColors.BLACK}
      strings={strings}
    />
  </Styled.VisibilityStatusWrapper>
);
VisibilityStatus.displayName = "VisibilityStatus";
