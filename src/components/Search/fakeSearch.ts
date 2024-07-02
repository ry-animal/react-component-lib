import { LoremIpsum } from "lorem-ipsum";
import seedrandom from "seedrandom";
import { SearchChangeHandler, SearchResults } from "./types";

const SampleNft = "//source.unsplash.com/user/erondu/400x600";
const NUM_MATCHES = 3;
const NO_RESULTS_LENGTH = 10;

const loremIpsum = new LoremIpsum({ random: seedrandom("") });
export const fakeSearch: SearchChangeHandler = (query: string) => {
  if (query === "" || query.length > NO_RESULTS_LENGTH) {
    // Simulate no results
    return Promise.resolve({ collections: [], nfts: [] });
  }
  const result: SearchResults = { collections: [], nfts: [] };
  for (let i = 0; i < NUM_MATCHES; i++) {
    result.collections.push({
      name: `${query} ${loremIpsum.generateWords(1)}`,
      description: loremIpsum.generateSentences(1),
      imageUrl: SampleNft,
      collectionSlug: `collection${i}`,
    });
  }
  for (let i = 0; i < NUM_MATCHES; i++) {
    result.nfts.push({
      name: `${query} ${loremIpsum.generateWords(1)}`,
      description: loremIpsum.generateSentences(1),
      imageUrl: SampleNft,
      collectionSlug: `collection${i}`,
      nftPath: `nft${i}`,
    });
  }
  return Promise.resolve(result);
};
