import { formatUSDPriceString } from "../../util/string";
import { EthAmount } from "../EthAmount";
import * as Styled from "./index.styled";

export interface PriceLabelProps {
  boldEth?: boolean;
  ethPrice: number;
  dollarPrice: number;
  isVariant?: boolean;
}

export const PriceLabel = ({
  boldEth,
  ethPrice,
  dollarPrice,
  isVariant,
}: PriceLabelProps) => (
  <Styled.PriceLabelWrapper isVariant={isVariant}>
    <EthAmount amount={ethPrice} bold={boldEth} isVariant={isVariant} />
    <Styled.DollarAmount isVariant={isVariant}>
      ({formatUSDPriceString(dollarPrice)})
    </Styled.DollarAmount>
  </Styled.PriceLabelWrapper>
);
