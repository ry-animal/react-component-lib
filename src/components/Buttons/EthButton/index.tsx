import * as React from "react";
import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import downArrow from "../../../assets/icons/icon-chevron-down.svg";
import ethLogo from "../../../assets/icons/icon-eth-logo.svg";

const BorderWrap = styled.span`
  background: linear-gradient(to right, #88aaf1, #efccc1, #b8faf6, #c8b2f4);
  border-radius: 1.5em;
  display: inline-flex;
  padding: 2px;
`;

const InnerButton = styled.button`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  font-weight: ${({ theme }) => theme.type.weight.BOLD};
  gap: 5px;
  background: ${({ theme }) => theme.color.SURFACE_2};
  border: 0;
  border-radius: 1.5em;
  padding: 5px 10px 5px 10px;
`;

const PriceArea = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 80px;
`;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  balance: number;
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function EthButton({ balance, label, ...props }: Props) {
  return (
    <BorderWrap>
      <InnerButton {...props} aria-label={label}>
        <img src={ethLogo} alt="Ethereum logo" />
        <PriceArea>{balance} ETH</PriceArea>
        <img src={downArrow} alt="Down arrow" style={{ height: 20 }} />
      </InnerButton>
    </BorderWrap>
  );
}
