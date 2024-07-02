import { SkeletonLoader } from "../../SkeletonLoader";
import * as Styled from "./Loader.styled";

export function CollectionTileLoader() {
  return (
    <Styled.CollectionTileLoader>
      <Styled.CollectionTileLoaderTop>
        <SkeletonLoader height="25px" width="80%" />
        <SkeletonLoader height="25px" width="50%" />
      </Styled.CollectionTileLoaderTop>
      <Styled.CollectionTileLoaderBottom>
        <Styled.CollectionTileLoaderAvatar>
          <SkeletonLoader width="40px" height="40px" radius="40px" />
        </Styled.CollectionTileLoaderAvatar>
        <Styled.CollectionTileBadge>
          <SkeletonLoader height="10px" width="40%" />
          <SkeletonLoader height="10px" width="60%" />
        </Styled.CollectionTileBadge>
        <Styled.CollectionTileLoaderAvatar>
          <SkeletonLoader width="25px" height="25px" radius="25px" />
        </Styled.CollectionTileLoaderAvatar>
      </Styled.CollectionTileLoaderBottom>
    </Styled.CollectionTileLoader>
  );
}

export default CollectionTileLoader;
