import { formatUSDPriceString, truncateEthAddress } from "../../../util/string";
import { CopyButton } from "../../Buttons/CopyButton";
import { EthAmount } from "../../EthAmount";
import STRINGS from "./index.strings";
import * as Styled from "./index.styled";

interface WalletDetailsProps {
  address: string;
  ethBalanceL1: number;
  ethBalanceL2: number;
  ethImmutableBalanceL2: number | undefined;
  usdBalance: number;
}

export function WalletDetails({
  address,
  ethBalanceL1,
  ethBalanceL2,
  ethImmutableBalanceL2,
  usdBalance,
}: WalletDetailsProps) {
  return (
    <Styled.WalletDetailsGrid>
      <Styled.Address title={address}>
        {truncateEthAddress(address)}
      </Styled.Address>
      <Styled.EthBalance>
        <EthAmount
          amount={
            ethBalanceL1 + ethBalanceL2 + Number(ethImmutableBalanceL2 ?? 0)
          }
        />
      </Styled.EthBalance>
      <CopyButton
        description={STRINGS.copyAddress}
        value={address}
        onClickText={STRINGS.walletCopied}
        altText={STRINGS.copy}
      />
      <Styled.UsdBalance>{formatUSDPriceString(usdBalance)}</Styled.UsdBalance>
      <Styled.BalanceDetailCell>Ethereum L1:</Styled.BalanceDetailCell>
      <Styled.BalanceDetailCell>
        <Styled.EthBalance>
          <EthAmount amount={ethBalanceL1} />
        </Styled.EthBalance>
      </Styled.BalanceDetailCell>
      <Styled.BalanceDetailCell>Loopring L2:</Styled.BalanceDetailCell>
      <Styled.BalanceDetailCell>
        <Styled.EthBalance>
          <EthAmount amount={ethBalanceL2} />
        </Styled.EthBalance>
      </Styled.BalanceDetailCell>
      {ethImmutableBalanceL2 !== undefined && (
        <>
          <Styled.BalanceDetailCell>ImmutableX L2:</Styled.BalanceDetailCell>
          <Styled.BalanceDetailCell>
            <Styled.EthBalance>
              <EthAmount amount={ethImmutableBalanceL2} />
            </Styled.EthBalance>
          </Styled.BalanceDetailCell>
        </>
      )}
    </Styled.WalletDetailsGrid>
  );
}
