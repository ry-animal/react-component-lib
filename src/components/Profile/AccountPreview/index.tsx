import { useTheme } from "styled-components";
import disconnectIconWhite from "../../../assets/icons/icon-logout-white.svg";
import disconnectIconBlack from "../../../assets/icons/icon-logout.svg";
import { ThemeName } from "../../../theme/theme.interface";
import { TextButton } from "../../Buttons/TextButton";
import { LoginState } from "../../Page/PageHeader/LoginState";
import { ProfileBadge } from "../ProfileBadge";
import { WalletDetails } from "../WalletDetails";
import { AccountHandlers } from "./AccountHandlers";
import STRINGS from "./index.strings";
import * as Styled from "./index.styled";

interface AccountPreviewProps extends LoginState {
  accountHandlers: AccountHandlers;
  stretch?: boolean;
  themeSwitcher?: JSX.Element;
  onClose: () => void;
}

const dummyHandler = () => {};

export function AccountPreview({
  accountHandlers,
  address,
  displayName,
  ethBalanceL1,
  ethBalanceL2,
  ethImmutableBalanceL2,
  imgSrc,
  stretch,
  usdBalance,
  showActivation,
  themeSwitcher,
  onClose,
}: AccountPreviewProps) {
  const handleOnClose = (action?: () => void) => {
    onClose();
    action?.();
  };
  const buttonConfig = () => {
    const buttonStates = {
      activate: {
        label: STRINGS.activate,
        handler: accountHandlers.onActivate || dummyHandler,
      },
      addFundsL2: {
        label: STRINGS.addFundsL2,
        handler: accountHandlers.onAddFundsToL2,
      },
      addFunds: {
        label: STRINGS.addFunds,
        handler: accountHandlers.onAddFunds,
      },
    };

    if (showActivation) {
      return buttonStates.activate;
    } else if (ethBalanceL1 > 0 && ethBalanceL2 === 0) {
      return buttonStates.addFundsL2;
    } else {
      return buttonStates.addFunds;
    }
  };
  const { label, handler } = buttonConfig();

  const { name } = useTheme();
  const iconDisconent =
    name === ThemeName.DARK ? disconnectIconWhite : disconnectIconBlack;

  return (
    <Styled.Container stretch={stretch}>
      <ProfileBadge
        displayName={displayName}
        fontSizeRem={1.1}
        onClick={() => handleOnClose(accountHandlers.onProfileClick)}
        iconSizePx={32}
        imgSrc={imgSrc}
        themeSwitcher={themeSwitcher}
      />
      <Styled.Details>
        <WalletDetails
          address={address}
          ethBalanceL1={ethBalanceL1}
          ethBalanceL2={ethBalanceL2}
          ethImmutableBalanceL2={ethImmutableBalanceL2}
          usdBalance={usdBalance}
        />
        <Styled.WalletActions>
          {ethBalanceL2 > 0 && (
            <>
              <TextButton
                label="Withdraw"
                size="small"
                stretch
                variant="secondary"
                onClick={() => handleOnClose(accountHandlers.onWithdraw)}
              />
              <TextButton
                label="Send"
                size="small"
                stretch
                variant="secondary"
                onClick={() => handleOnClose(accountHandlers.onSend)}
              />
            </>
          )}
          <Styled.DoubleWidthCell>
            <TextButton
              label={label}
              size="small"
              stretch
              onClick={() => handleOnClose(handler)}
            />
          </Styled.DoubleWidthCell>
        </Styled.WalletActions>
      </Styled.Details>
      {accountHandlers.onDisconnect && (
        <Styled.Footer>
          <TextButton
            label={STRINGS.disconnect}
            variant="plaintext"
            onClick={() => handleOnClose(accountHandlers.onDisconnect)}
            icon={iconDisconent}
          />
        </Styled.Footer>
      )}
    </Styled.Container>
  );
}
