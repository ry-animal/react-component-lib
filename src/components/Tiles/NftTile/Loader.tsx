import { useTheme } from "styled-components";
import { SkeletonLoader } from "../../SkeletonLoader";
import * as NftTileStyled from "./index.styled";
import * as Styled from "./Loader.styled";

export interface NftTileLoader {
  hideFooter?: boolean;
}

export function NftTileLoader({ hideFooter }: NftTileLoader) {
  const theme = useTheme();
  return (
    <Styled.NftTileLoader>
      <Styled.NftTileLoaderImage>
        <SkeletonLoader
          height="auto"
          width="100%"
          radius={"0"}
          style={{ position: "unset" }}
        />
      </Styled.NftTileLoaderImage>
      <Styled.NftTileLoaderBottom>
        <Styled.NftTileLoaderRow>
          <SkeletonLoader width="50%" height="20px" />
          <SkeletonLoader
            width="10%"
            height="20px"
            radius={theme.radius.round}
          />
        </Styled.NftTileLoaderRow>
        <Styled.NftTileLoaderRow>
          <Styled.NftTileLoaderUserSection>
            <SkeletonLoader
              width="24px"
              height="24px"
              radius={theme.radius.round}
            />
            <SkeletonLoader width="30%" height="16px" />
          </Styled.NftTileLoaderUserSection>
          <SkeletonLoader width="20%" height="16px" />
        </Styled.NftTileLoaderRow>

        {!hideFooter && (
          <>
            <NftTileStyled.HorizontalRule />
            <NftTileStyled.InfoWrapper>
              <SkeletonLoader width="30%" height="24px" />
              <SkeletonLoader
                width="24px"
                height="24px"
                radius={theme.radius.round}
              />
            </NftTileStyled.InfoWrapper>
          </>
        )}
      </Styled.NftTileLoaderBottom>
    </Styled.NftTileLoader>
  );
}

export default NftTileLoader;
