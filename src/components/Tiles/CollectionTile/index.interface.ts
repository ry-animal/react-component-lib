export interface CollectionTileProps {
  /**
   * Image to show on tile background
   */
  collectionImgSrc?: string;
  /**
   * Name of collection
   */
  collectionName: string;
  /**
   * URL to collection
   */
  collectionUrl?: string;
  /**
   * Avatar img for creator
   */
  creatorImgSrc?: string;
  /**
   * Display name of creator
   */
  creatorName: string;
  /**
   * Size of content inside tile
   */
  contentSize?: "s" | "m";
  /**
   * Layer of collection
   */
  layer?: "Loopring" | "Immutable" | "L1";
  /**
   * Disables tile interaction
   */
  disabled?: boolean;
  /**
   * Action to execute on click
   */
  onClick?: () => void;
}
