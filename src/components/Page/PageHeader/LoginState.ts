export type LoginState = {
  address: string;
  displayName: string;
  ethBalanceL1: number;
  ethBalanceL2: number;
  ethImmutableBalanceL2: number | undefined;
  imgSrc: string;
  usdBalance: number;
  showActivation?: boolean;
};
