import { useRef, useState } from "react";
import { useClosePopup } from "../../../hooks/useClosePopup";
import { useUniqueId } from "../../../hooks/useUniqueId";
import { AccountPreview } from "../../Profile/AccountPreview";
import { AccountHandlers } from "../../Profile/AccountPreview/AccountHandlers";
import { ProfileIcon } from "../../Profile/ProfileIcon";
import * as Styled from "./index.styled";
import { LoginState } from "./LoginState";

interface LoginAreaProps {
  accountHandlers: AccountHandlers;
  loginState?: LoginState;
  showLoginButton?: boolean;
  isLightTheme?: boolean;
  themeSwitcher?: JSX.Element;
  onLogin: () => void;
}

export function LoginArea({
  accountHandlers,
  loginState,
  showLoginButton,
  isLightTheme,
  onLogin,
  themeSwitcher,
}: LoginAreaProps) {
  const avatarArea = useRef<HTMLDivElement>(null);
  const popoutId = useUniqueId();
  const [expanded, setExpanded] = useState(false);
  useClosePopup(avatarArea, () => setExpanded(false));

  return (
    <>
      {!loginState && showLoginButton && (
        <Styled.LoginButton isLightTheme={isLightTheme} onClick={onLogin}>
          Connect
        </Styled.LoginButton>
      )}
      {!!loginState && (
        <Styled.AvatarArea ref={avatarArea}>
          <Styled.AvatarButton
            aria-controls={popoutId}
            aria-expanded={expanded}
            aria-haspopup="menu"
            aria-pressed={expanded}
            role="button"
            onClick={() => setExpanded((_) => !_)}
          >
            <ProfileIcon imgSrc={loginState.imgSrc} size={40} />
          </Styled.AvatarButton>
          {!!expanded && (
            <Styled.PopOut id={popoutId} role="menu">
              <AccountPreview
                accountHandlers={accountHandlers}
                onClose={() => setExpanded(false)}
                themeSwitcher={themeSwitcher}
                {...loginState}
              />
            </Styled.PopOut>
          )}
        </Styled.AvatarArea>
      )}
    </>
  );
}
