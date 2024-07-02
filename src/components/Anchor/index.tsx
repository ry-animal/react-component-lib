import * as React from "react";
import * as Styled from "./index.styled";

export interface WithLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Url path to route to
   */
  url: string;
  /**
   * Router Link if true, anchor if false
   */
  isRouterLink?: boolean;
  /**
   * Opens link in new tab
   */
  isExternalLink?: boolean;
  /**
   * Toggle interactivity
   */
  disabled?: boolean;
  /**
   * Optional Click event
   */
  onClick?: () => void;
  /**
   * Children to pass in
   */
  children?: React.ReactChild;
}

export function Anchor({
  url,
  isRouterLink = false,
  disabled = false,
  onClick,
  isExternalLink,
  children,
  ...props
}: WithLinkProps) {
  if (isRouterLink) {
    return (
      <Styled.RouterLink
        to={url}
        {...props}
        onClick={onClick && onClick}
        disabled={disabled}
        {...(disabled && { tabIndex: -1 })}
      >
        {children}
      </Styled.RouterLink>
    );
  }
  return (
    <Styled.Anchor
      href={url}
      {...props}
      disabled={disabled}
      {...(isExternalLink && { target: "_blank" })}
      {...(disabled && { tabIndex: -1 })}
    >
      {children}
    </Styled.Anchor>
  );
}

export default Anchor;
