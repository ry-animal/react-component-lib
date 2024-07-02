import { NftTooltipsProps } from "./NftTileTypes.interface";
import { TileTooltipMenu } from "./TileTooltipMenu";
import { VisibilityStatus } from "./VisibilityStatus";

const NftTooltips = ({
  isVariant,
  isVisible,
  onManageClick,
  onVisibilityClick,
  strings = {
    circleButtonStrings: { buttonLabel: "More options" },
    visibilityButtonStrings: {
      buttonLabel: isVisible ? "Visible" : "Hidden",
    },
  },
}: NftTooltipsProps) => (
  <>
    {!isVariant && (onManageClick || onVisibilityClick) && (
      <TileTooltipMenu
        isNftVisible={!!isVisible}
        onManageClick={onManageClick}
        onVisibilityClick={onVisibilityClick}
        strings={strings?.circleButtonStrings}
      />
    )}
    {!isVariant && onVisibilityClick && !isVisible && (
      <VisibilityStatus strings={strings.visibilityButtonStrings} />
    )}
  </>
);

export default NftTooltips;
