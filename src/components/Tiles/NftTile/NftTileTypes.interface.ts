import { CircleButtonStringProps, LikeButtonStringProps } from "../../Buttons";

interface NftContentStringProps {
  /**
   * Title of badge collection
   */
  collectionBadgeTitle?: string;
  /**
   * Title of badge creator
   */
  creatorBadgeTitle?: string;
  /**
   * Title of badge owner
   */
  ownerBadgeTitle?: string;
}

export interface VisibilityStatusProps {
  strings: CircleButtonStringProps;
}

export interface TileTooltipMenuProps {
  isNftVisible: boolean;
  onManageClick?: () => void;
  onVisibilityClick?: () => void;
  strings: CircleButtonStringProps;
}

export interface NftTooltipsStrings {
  circleButtonStrings: CircleButtonStringProps;
  visibilityButtonStrings: CircleButtonStringProps;
}

export interface NftTooltipsProps {
  isVariant: boolean;
  isVisible?: boolean;
  strings?: NftTooltipsStrings;

  onManageClick?: () => void;
  onVisibilityClick?: () => void;
}

export interface NftTileFooterStringProps {
  ethIconAlt: string;
  loopringIconAlt: string;
  notForSale: string;
  editDraftLabel: string;
  suspended: string;
}

export interface NftTileFooterInfoProps {
  /**
   * Price of nft in ETH
   */
  ethPrice?: number;
  /**
   * Price of nft in USD
   */
  dollarPrice?: number;
  /**
   * Layer of collection
   */
  layer?: "Loopring" | "Immutable" | "L1";
  /**
   * Disables interactive elements
   */
  disabled?: boolean;
  /**
   * Is dark tile
   */
  isVariant?: boolean;
  /**
   * Is NFT in suspended state
   */
  isSuspended?: boolean;
  /**
   * Action to edit draft on click
   */
  onEditDraft?: () => void;
  /**
   * String constants
   */
  strings?: NftTileFooterStringProps;
}

export interface NftTileStringProps {
  nftLinkLabel: string;
  imageAlt: string;
  footerInfoStrings: NftTileFooterStringProps;
  likeButtonStrings: LikeButtonStringProps;
}

export interface CollectionInfo {
  /**
   * Name of collection
   */
  collectionName: string;
  /**
   * /**
   * Image source for collection
   */
  collectionImgSrc: string;
  /**
   * Url to navigate to when collection clicked
   */
  collectionUrl: string;
}

export interface CreatorInfo {
  /**
   * Image source url for creator path
   */
  creatorImgSrc: string;
  /**
   * Name of creator
   */
  creatorName: string;
  /**
   * Url to navigate to when creator clicked
   */
  creatorUrl?: string;
}

export interface OwnerInfo {
  /**
   * Image source url for owner path
   */
  ownerImgSrc: string;
  /**
   * Name of owner
   */
  ownerName: string;
  /**
   * Url to navigate to when owner clicked
   */
  ownerUrl: string;
}

export interface NftContentProps {
  /**
   * Info of NFT Creator
   */
  creatorInfo: CreatorInfo;
  /**
   * Info of NFT owner
   */
  ownerInfo?: OwnerInfo;
  /**
   * Disables interactive elements
   */
  disabled: boolean;
  /**
   * Info on the collection
   */
  collectionInfo?: CollectionInfo;
  /**
   * Text describing how many nfts are available
   */
  availabilityText?: string;
  /**
   * Sets to Dark Tile
   */
  isVariant: boolean;
  /**
   * Boolean to show and hide badge titles
   */
  showBadgeTitle: boolean;
  /**
   * Default Strings
   */
  strings?: NftContentStringProps;
}

export interface NftTileProps {
  /**
   * Info on the creator
   */
  creatorInfo: CreatorInfo;
  /**
   * Name of nft
   */
  title: string;
  /**
   *
   * Image source for nft
   */
  nftImgSrc: string;
  /**
   * Fallback img incase nftImgSrc fails to load
   */
  fallbackImgSrc?: string;
  /**
   * Image to show when waiting for image to load
   */
  placeholderImgSrc?: string;
  /**
   *
   * Image Fit
   */
  nftImgFit?: "contain" | "cover";
  /**
   * Info on the collection
   */
  collectionInfo?: CollectionInfo;
  /**
   * Info on the owner
   */
  ownerInfo?: OwnerInfo;
  /**
   * Controls if gold tile
   */
  isVariant?: boolean;
  /**
   * Controls the visibility icon
   */
  isVisible?: boolean;
  /**
   * Disables interactive elements
   */
  disabled?: boolean;
  /**
   * Shows badge title
   */
  showBadgeTitle?: boolean;
  /**
   * Max width of tile
   */
  maxWidth?: number;
  /**
   * Url to navigate to when tile clicked
   */
  nftUrl?: string;
  /**
   * Pricing info to display at bottom of tile
   */
  footerInfo?: NftTileFooterInfoProps;
  /**
   * Text describing how many nfts are available
   */
  availabilityText?: string;
  /**
   * Number of likes for nft
   */
  likeCount?: number;
  /**
   * Shows filled heart if nft is liked
   */
  isLiked?: boolean;
  /**
   * Is NFT in suspended state
   */
  isSuspended?: boolean;
  /**
   * Called when like button clicked
   */
  onLikeClick?: () => void;
  /**
   * Called when manage nft button clicked
   */
  onManageClick?: () => void;
  /**
   * Called when visibility nft button clicked
   */
  onVisibilityClick?: () => void;
  /**
   * String constants
   */
  strings?: NftTileStringProps;
}
