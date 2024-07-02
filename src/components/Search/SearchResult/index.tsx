import { Entry, SearchSelectHandler } from "../types";
import * as Styled from "./index.styled";

type SearchResultProps = {
  entry: Entry;
  highlighted?: boolean;
  onNavigate?: SearchSelectHandler;
  onSearch?: (query: string) => void;
};

export function SearchResult({
  entry,
  highlighted,
  onNavigate,
  onSearch,
}: SearchResultProps) {
  if (entry.isResult) {
    return (
      <Styled.Result
        highlighted={!!highlighted}
        role={onNavigate ? "link" : undefined}
        onClick={onNavigate ? () => onNavigate(entry) : undefined}
      >
        <Styled.ResultImageWithFallback
          imgSrc={entry.imageUrl}
          fallbackImgSrc={entry.fallbackImageUrl}
        />
        <Styled.ResultHeader>{entry.label}</Styled.ResultHeader>
        <Styled.ResultText>{entry.description}</Styled.ResultText>
      </Styled.Result>
    );
  } else if (entry.type === "header") {
    return <Styled.Header role="heading">{entry.label}</Styled.Header>;
  } else {
    return (
      <Styled.Suggestion
        highlighted={!!highlighted}
        role={onSearch ? "link" : undefined}
        onClick={onSearch ? () => onSearch(entry.label) : undefined}
      >
        {entry.label}
      </Styled.Suggestion>
    );
  }
}
