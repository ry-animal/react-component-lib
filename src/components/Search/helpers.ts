import { Entry, SearchResults } from "./types";

export const generateInitialEntries = (popularSearches?: string[]) => {
  const entries: Entry[] = [];
  if (popularSearches) {
    entries.push({ type: "header", isResult: false, label: "Top Searches" });
    for (const popularSearch of popularSearches) {
      entries.push({
        type: "suggestion",
        isResult: false,
        label: popularSearch,
      });
    }
  }
  return entries;
};

export const getEntriesFromResults = (
  results: SearchResults,
  noResultsFallback: Entry[]
) => {
  const entries: Entry[] = [];
  if (results.collections.length) {
    entries.push({ type: "header", isResult: false, label: "Collections" });
    for (const collection of results.collections) {
      entries.push({
        type: "collection",
        isResult: true,
        label: collection.name,
        description: collection.description,
        imageUrl: collection.imageUrl,
        fallbackImageUrl: collection.fallbackImageUrl,
        collectionSlug: collection.collectionSlug,
      });
    }
  }
  if (results.nfts.length) {
    entries.push({ type: "header", isResult: false, label: "NFTs" });
    for (const nft of results.nfts) {
      entries.push({
        type: "nft",
        isResult: true,
        label: nft.name,
        description: nft.description,
        imageUrl: nft.imageUrl,
        fallbackImageUrl: nft.fallbackImageUrl,
        collectionSlug: nft.collectionSlug,
        nftPath: nft.nftPath,
      });
    }
  }
  if (!entries.length) {
    return noResultsFallback;
  }
  return entries;
};
