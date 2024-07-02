export type AccountHandlers = {
  onActivate?: () => void;
  onAddFundsToL2: () => void;
  onAddFunds: () => void;
  onProfileClick: () => void;
  onSend: () => void;
  onWithdraw: () => void;
  onDisconnect?: () => void;
};
