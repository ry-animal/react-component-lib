export type Entry =
  | {
      type: "header" | "suggestion";
      isResult: false;
      label: string;
    }
  | {
      type: "collection";
      isResult: true;
      label: string;
      imageUrl: string;
      fallbackImageUrl?: string;
      description: string;
      collectionSlug: string;
    }
  | {
      type: "nft";
      isResult: true;
      label: string;
      imageUrl: string;
      fallbackImageUrl?: string;
      description: string;
      collectionSlug: string;
      nftPath: string;
    };

export type SearchResults = {
  collections: {
    name: string;
    description: string;
    imageUrl: string;
    fallbackImageUrl?: string;
    collectionSlug: string;
  }[];
  nfts: {
    name: string;
    description: string;
    imageUrl: string;
    fallbackImageUrl?: string;
    collectionSlug: string;
    nftPath: string;
  }[];
};

export type SearchChangeHandler = (query: string) => Promise<SearchResults>;

export type SearchSelectHandler = (result: {
  collectionSlug: string;
  nftPath?: string;
}) => void;
