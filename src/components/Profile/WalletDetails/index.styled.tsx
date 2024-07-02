import styled from "styled-components";

export const Address = styled.span`
  color: ${({ theme }) => theme.color.TEXT_1};
  font-weight: ${({ theme }) => theme.type.weight.SEMI_BOLD};
  user-select: none;
`;

export const BalanceDetailCell = styled.span`
  color: ${({ theme }) => theme.color.TEXT_1};
  border-top: ${({ theme }) =>
    `${theme.space.s1} solid ${theme.color.SURFACE_3}`};
  font-size: 0.8rem;
  margin-top: ${({ theme }) => theme.space.s8};
  padding-top: ${({ theme }) => theme.space.s8};
`;

export const EthBalance = styled.span`
  display: flex;
  justify-content: flex-end;
`;

export const UsdBalance = styled.span`
  color: ${({ theme }) => theme.color.TEXT_2};
  font-size: 0.8rem;
  text-align: right;
`;

export const WalletDetailsGrid = styled.div`
  display: grid;
  font-family: ${({ theme }) => theme.type.family.body};
  gap: ${({ theme }) => `${theme.space.s4} 0`};
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  padding: ${({ theme }) => theme.space.s12};
`;
