export enum ScreeningState {
  passed,
  pending,
  failed,
}

export interface ActionProps {
  onPreview?: React.MouseEventHandler<HTMLButtonElement>;
  onEdit?: React.MouseEventHandler<HTMLButtonElement>;
  onDelete?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface Props {
  creatorImgSrc: string;
  creatorName: string;
  itemCount: number;
  nftImgSrc: string;
  title: string;
  subtitle?: string;
  ethPrice: number;
  dollarPrice: number;
  forSale?: boolean;
  onPreview?: React.MouseEventHandler<HTMLButtonElement>;
  onEdit?: React.MouseEventHandler<HTMLButtonElement>;
  onDelete?: React.MouseEventHandler<HTMLButtonElement>;
  // TODO make required once consumers updated
  screeningState?: ScreeningState;
}
