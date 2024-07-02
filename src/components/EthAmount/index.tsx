import { formatETHPriceString } from "../../util/string";
import { IconLogoEth } from "../Icons";
import * as Styled from "./index.styled";

export interface EthAmountStringProps {
  ethIconAlt: string;
}

export interface EthAmountProps {
  amount: number;
  bold?: boolean;
  isVariant?: boolean;
}

export const EthAmount = ({
  amount,
  bold,
  isVariant = false,
}: EthAmountProps) => (
  <Styled.Wrapper bold={!!bold} isVariant={isVariant}>
    <IconLogoEth size={20} />
    {formatETHPriceString(amount)}
  </Styled.Wrapper>
);
