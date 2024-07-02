import { accessibleToggleProps } from "../../../util/accessibleToggleProps";
import { IconClear } from "../../Icons";
import { SearchInput } from "../../Search";
import { SearchResult } from "../../Search/SearchResult";
import {
  ClickableImage,
  FullScreen,
  MobileNavBar,
  MobileNavCell,
  SearchResults,
} from "./MobileMenu.components";
import {
  MobileMenuHandlers,
  MobileMenuIds,
  MobileMenuState,
} from "./MobileMenu.types";

export const MobileMenuSearch = ({
  ids,
  state,
  handlers,
}: {
  ids: MobileMenuIds;
  state: MobileMenuState;
  handlers: MobileMenuHandlers;
}) => (
  <FullScreen id={ids.searchId}>
    <div>
      <MobileNavBar>
        <SearchInput
          placeholder="Search all collectibles"
          role="search"
          style={{ gridColumn: "1 / span 3" }}
          type="text"
          value={state.search}
          onChange={(e) => handlers.setSearch(e.target.value)}
        />
        <MobileNavCell align="right">
          <ClickableImage
            {...accessibleToggleProps("Search", ids.searchId, true)}
            onClick={() => {
              handlers.setIsSearchOpen(false);
              handlers.setSearch("");
            }}
          >
            <IconClear />
          </ClickableImage>
        </MobileNavCell>
      </MobileNavBar>
      {state.results.length > 0 && (
        <SearchResults>
          {state.results.map((_, i) => (
            <SearchResult
              entry={_}
              key={i}
              onNavigate={(e) => {
                handlers.setIsSearchOpen(false);
                handlers.onNavigate(e);
              }}
              onSearch={(e) => handlers.setSearch(e)}
            />
          ))}
        </SearchResults>
      )}
    </div>
  </FullScreen>
);

export default MobileMenuSearch;
