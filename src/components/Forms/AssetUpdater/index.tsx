import { useRef } from "react";
import EditIcon from "../../../assets/icons/icon-edit-pencil.svg";
import DeleteIcon from "../../../assets/icons/icon-trash.svg";
import CircleButton from "../../Buttons/CircleButton";
import { ProfileIcon } from "../../Profile/ProfileIcon";
import { CollectionTile } from "../../Tiles/CollectionTile";
import { FileUpload, FileUploadProps } from "../FileUpload";
import * as Styled from "./index.styled";

export interface AssetUpdaterProps {
  bannerProps: FileUploadProps;
  bannerImg?: string;
  avatarProps: FileUploadProps;
  avatarImg?: string;
  tileProps?: FileUploadProps;
  tileImg?: string;
  isHex?: boolean;
  collectionName?: string;
  strings?: {
    uploadBannerLabel: string;
    deleteBannerLabel: string;
    uploadAvatarLabel: string;
    uploadTileLabel: string;
  };
}

export const defaultAssetStrings = {
  uploadBannerLabel: "Upload a banner",
  deleteBannerLabel: "Delete banner",
  uploadAvatarLabel: "Upload an avatar",
  uploadTileLabel: "Upload a tile",
};

const AVATAR_SIZE_PX = 96;
const AVATAR_BORDER_SIZE_PX = 4;

export const AssetUpdater = ({
  bannerProps,
  bannerImg,
  avatarProps,
  avatarImg,
  tileProps,
  tileImg,
  collectionName,
  isHex = false,
  strings = defaultAssetStrings,
}: AssetUpdaterProps) => {
  const bannerRef = useRef<HTMLButtonElement>(null);
  const avatarRef = useRef<HTMLButtonElement>(null);
  const tileRef = useRef<HTMLButtonElement>(null);

  return (
    <Styled.Container>
      <Styled.BannerWrapper hasTileProps={!!tileProps}>
        <FileUpload
          {...bannerProps}
          buttonRefs={[bannerRef]}
          label={strings.uploadBannerLabel}
        >
          <Styled.Banner imgSrc={bannerImg}>
            <CircleButton
              iconUrl={EditIcon}
              forwardRef={bannerRef}
              aria-label={strings.uploadBannerLabel}
              transparent
            />
            {bannerImg && (
              <CircleButton
                iconUrl={DeleteIcon}
                aria-label={strings.deleteBannerLabel}
                onClick={() => bannerProps.onChange(null)}
                transparent
              />
            )}
          </Styled.Banner>
        </FileUpload>
      </Styled.BannerWrapper>

      <Styled.AvatarFileWrapper>
        <FileUpload
          {...avatarProps}
          buttonRefs={[avatarRef]}
          label={strings.uploadAvatarLabel}
          isCircleDropzone
        >
          <Styled.AvatarWrapper>
            <ProfileIcon
              imgSrc={avatarImg}
              size={AVATAR_SIZE_PX}
              borderSize={AVATAR_BORDER_SIZE_PX}
              hex={isHex}
            />
            <Styled.ButtonWrapper>
              <CircleButton
                iconUrl={EditIcon}
                forwardRef={avatarRef}
                aria-label={strings.uploadAvatarLabel}
                transparent
              />
            </Styled.ButtonWrapper>
          </Styled.AvatarWrapper>
        </FileUpload>
      </Styled.AvatarFileWrapper>

      {tileProps && (
        <Styled.TileOuterWrapper>
          <Styled.TileFileWrapper>
            <FileUpload
              {...tileProps}
              buttonRefs={[tileRef]}
              label={strings.uploadTileLabel}
            >
              <Styled.TileWrapper>
                <CollectionTile
                  collectionImgSrc={tileImg}
                  collectionName={collectionName ?? ""}
                  creatorImgSrc={avatarImg}
                  contentSize="s"
                  creatorName=""
                  disabled
                />

                <Styled.ButtonWrapper>
                  <CircleButton
                    iconUrl={EditIcon}
                    forwardRef={tileRef}
                    aria-label={strings.uploadTileLabel}
                    transparent
                  />
                </Styled.ButtonWrapper>
              </Styled.TileWrapper>
            </FileUpload>
          </Styled.TileFileWrapper>
        </Styled.TileOuterWrapper>
      )}
    </Styled.Container>
  );
};

export default AssetUpdater;
