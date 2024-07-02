import IconImmutableX from "../../../components/Icons/IconImmutableX";
import IconLoopring from "../../../components/Icons/IconLoopring";
import IconLoopringGradient from "../../../components/Icons/IconLoopringGradient";
import { ButtonVariant, TextButton } from "../../Buttons/TextButton";
import { IconLogoEth } from "../../Icons";
import { PriceLabel } from "../../PriceLabel";
import * as Styled from "./index.styled";
import { NftTileFooterInfoProps } from "./NftTileTypes.interface";

export const defaultFooterInfoStrings = {
  ethIconAlt: "Ethereum Mainnet",
  loopringIconAlt: "L2 Loopring",
  notForSale: "Not for sale",
  editDraftLabel: "Edit Draft",
  suspended: "Sales suspended",
};

export const NftFooterInfo = ({
  ethPrice,
  dollarPrice,
  layer,
  onEditDraft,
  disabled,
  strings = defaultFooterInfoStrings,
  isVariant = false,
  isSuspended,
}: NftTileFooterInfoProps) => {
  const renderIcon = () => {
    if (layer === "Immutable") {
      return <IconImmutableX />;
    }
    if (layer === "Loopring") {
      return isVariant ? <IconLoopringGradient /> : <IconLoopring />;
    }
    if (layer === "L1") {
      return <IconLogoEth />;
    }
    return null;
  };

  return (
    <Styled.InfoWrapper>
      {ethPrice && dollarPrice && (
        <PriceLabel
          ethPrice={ethPrice}
          dollarPrice={dollarPrice}
          boldEth
          isVariant={isVariant}
        />
      )}
      {!ethPrice && !dollarPrice && (
        <Styled.NotForSaleLabel>
          {isSuspended ? strings.suspended : strings.notForSale}
        </Styled.NotForSaleLabel>
      )}
      <Styled.ItemGroup>{renderIcon()}</Styled.ItemGroup>
      {onEditDraft && (
        <TextButton
          onClick={onEditDraft}
          variant={ButtonVariant.secondary}
          size="small"
          label={strings.editDraftLabel}
          aria-label={strings.editDraftLabel}
          disabled={disabled}
        />
      )}
    </Styled.InfoWrapper>
  );
};
