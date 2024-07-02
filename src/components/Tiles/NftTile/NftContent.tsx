import { memo } from "react";
import Anchor from "../../../components/Anchor";
import DataBadge from "../../../components/DataBadge";
import * as Styled from "./index.styled";
import { CollectionInfo, NftContentProps } from "./NftTileTypes.interface";
const defaultNftContentStringProps = {
  ownerBadgeTitle: "Owner",
  collectionBadgeTitle: "Collection",
  creatorBadgeTitle: "Creator",
};

export const NftContent = memo(
  ({
    creatorInfo,
    disabled,
    collectionInfo,
    ownerInfo,
    availabilityText,
    isVariant,
    showBadgeTitle,
    strings = defaultNftContentStringProps,
  }: NftContentProps) => {
    const showCreatorOrOwnerTitle = ownerInfo
      ? strings.ownerBadgeTitle
      : strings.creatorBadgeTitle;

    const collection = (_collectionInfo: CollectionInfo) => (
      <Anchor
        url={_collectionInfo.collectionUrl}
        isRouterLink={true}
        disabled={disabled}
      >
        <Styled.Detail isVariant={isVariant}>
          <DataBadge
            title={showBadgeTitle ? strings.collectionBadgeTitle : ""}
            name={collectionInfo?.collectionName}
            imageSrc={collectionInfo?.collectionImgSrc}
            size="xs"
            isDark={isVariant}
          />
        </Styled.Detail>
      </Anchor>
    );

    const creatorOrOwner = () => {
      const creatorOrOwnerData = (
        <Styled.Detail isVariant={isVariant}>
          <DataBadge
            title={showBadgeTitle ? showCreatorOrOwnerTitle : ""}
            name={ownerInfo ? ownerInfo.ownerName : creatorInfo.creatorName}
            imageSrc={
              ownerInfo ? ownerInfo.ownerImgSrc : creatorInfo.creatorImgSrc
            }
            size="xs"
            isDark={isVariant}
          />
        </Styled.Detail>
      );
      const url = ownerInfo ? ownerInfo.ownerUrl : creatorInfo.creatorUrl;

      if (url) {
        return (
          <Anchor url={url} isRouterLink={true} disabled={disabled}>
            {creatorOrOwnerData}
          </Anchor>
        );
      }

      return creatorOrOwnerData;
    };

    return (
      <Styled.Row isVariant={isVariant}>
        {collectionInfo && collection(collectionInfo)}
        {creatorOrOwner()}
        {availabilityText && !isVariant && (
          <Styled.ItemCount>{availabilityText}</Styled.ItemCount>
        )}
      </Styled.Row>
    );
  }
);

NftContent.displayName = "NftContent";
