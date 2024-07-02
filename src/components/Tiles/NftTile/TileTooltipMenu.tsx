import { useTheme } from "styled-components";
import MoreOptionsIcon from "../../../assets/icons/icon-more-option.svg";
import IconHide from "../../Icons/IconHide";
import IconSetting from "../../Icons/IconSetting";
import IconShow from "../../Icons/IconShow";
import PopupMenu from "../../PopupMenu";
import { ListItem } from "../../PopupMenu/index.interface";
import * as Styled from "./index.styled";
import { TileTooltipMenuProps } from "./NftTileTypes.interface";

export const tooltipStrings = {
  hide: "Hide NFT",
  show: "Show NFT",
  manage: "Manage NFT",
};

export const TileTooltipMenu = ({
  isNftVisible,
  onManageClick,
  onVisibilityClick,
  strings,
}: TileTooltipMenuProps) => {
  const { color } = useTheme();
  const options: ListItem[] = [];

  if (onManageClick) {
    options.push({
      onClick: onManageClick,
      icon: <IconSetting fill={color.TEXT_1} />,
      label: tooltipStrings.manage,
    });
  }

  if (onVisibilityClick) {
    options.push({
      onClick: onVisibilityClick,
      icon: isNftVisible ? (
        <IconHide fill={color.TEXT_1} />
      ) : (
        <IconShow fill={color.TEXT_1} />
      ),
      label: isNftVisible ? tooltipStrings.hide : tooltipStrings.show,
    });
  }

  return (
    <Styled.TooltipWrapper>
      <PopupMenu
        options={options}
        button={{
          iconUrl: MoreOptionsIcon,
          transparent: true,
          strings,
        }}
      />
    </Styled.TooltipWrapper>
  );
};
