import { memo } from "react";
import { LikeButton } from "../../Buttons/LikeButton";
import * as Styled from "./index.styled";
import { NftContent } from "./NftContent";
import { defaultFooterInfoStrings, NftFooterInfo } from "./NftFooterInfo";
import { NftImage } from "./NftImage";
import { NftTileProps } from "./NftTileTypes.interface";
import NftTooltips from "./NftTooltips";

export const NftTile = memo(
  ({
    creatorInfo,
    collectionInfo,
    ownerInfo,
    nftImgSrc,
    fallbackImgSrc,
    placeholderImgSrc,
    nftImgFit = "cover",
    nftUrl,
    title,
    likeCount,
    availabilityText,
    maxWidth,
    footerInfo,
    isLiked,
    isVisible,
    isSuspended,
    isVariant = false,
    disabled = false,
    showBadgeTitle = false,
    onLikeClick,
    onManageClick,
    onVisibilityClick,
    strings = {
      nftLinkLabel: `${title} link`,
      footerInfoStrings: defaultFooterInfoStrings,
      imageAlt: `${title} image`,
      likeButtonStrings: {
        buttonLabel: `${isLiked ? "unlike" : "like"} (${likeCount})`,
        iconFilledAlt: "filled like icon",
        iconEmptyAlt: "empty like icon",
      },
    },
  }: NftTileProps) => (
    <Styled.TileWrapper
      maxWidth={maxWidth}
      disabled={disabled}
      isVariant={isVariant}
    >
      {nftUrl && (
        <Styled.TileLink
          url={nftUrl}
          isRouterLink={true}
          aria-label={strings.nftLinkLabel}
          disabled={disabled}
        />
      )}
      <Styled.InnerWrapper>
        <NftImage
          imgSrc={nftImgSrc}
          fallbackImgSrc={fallbackImgSrc}
          placeholderImgSrc={placeholderImgSrc}
          alt={strings.imageAlt}
          imgFit={nftImgFit}
        />
        <Styled.ContentWrapper>
          <Styled.Row>
            <Styled.Title isVariant={isVariant}>{title}</Styled.Title>
            {onLikeClick && !isVariant && (
              <LikeButton
                onClick={onLikeClick}
                likeCount={likeCount || 0}
                isLiked={isLiked || false}
                strings={strings.likeButtonStrings}
                disabled={disabled}
              />
            )}
          </Styled.Row>
          <NftContent
            creatorInfo={creatorInfo}
            ownerInfo={ownerInfo}
            disabled={disabled}
            collectionInfo={collectionInfo}
            availabilityText={availabilityText}
            isVariant={isVariant}
            showBadgeTitle={showBadgeTitle}
          />
          {footerInfo && (
            <>
              <Styled.HorizontalRule isVariant={isVariant} />
              <NftFooterInfo
                {...footerInfo}
                disabled={disabled}
                strings={strings.footerInfoStrings}
                isVariant={isVariant}
                isSuspended={isSuspended}
              />
            </>
          )}
        </Styled.ContentWrapper>
      </Styled.InnerWrapper>
      <NftTooltips
        isVariant={isVariant}
        isVisible={isVisible}
        onManageClick={onManageClick}
        onVisibilityClick={onVisibilityClick}
      />
      <Styled.BorderOverlay />
    </Styled.TileWrapper>
  )
);
NftTile.displayName = "NftTile";
