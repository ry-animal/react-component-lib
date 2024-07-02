import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { AssetUpdater } from ".";
import { MIME_TYPES } from "../../../constants/mimeTypes";
import { makeDataUrl } from "../../../util/image";
import { ISelectedFile } from "../FileUpload/ISelectedFile";

export default {
  title: "Components/Forms/AssetUpdater",
  component: AssetUpdater,
  argTypes: {
    bannerProps: { control: "object" },
    avatarProps: { control: "object" },
    tileProps: { control: "object" },
    collectionName: { control: { type: "text" } },
    isHex: { control: "boolean" },
    bannerImg: { control: { type: "text" } },
    avatarImg: { control: { type: "text" } },
    tileImg: { control: { type: "text" } },
  },
} as ComponentMeta<typeof AssetUpdater>;

const EXAMPLE_MIME_TYPES = [
  MIME_TYPES.IMAGE_GIF,
  MIME_TYPES.IMAGE_JPEG,
  MIME_TYPES.IMAGE_PNG,
  MIME_TYPES.IMAGE_WEBP,
];

const Template: ComponentStory<typeof AssetUpdater> = (args) => {
  const [avatarFile, setAvatarFile] = useState<ISelectedFile | null>(null);
  const [bannerFile, setBannerFile] = useState<ISelectedFile | null>(null);
  const [bannerUpdated, setBannerUpdated] = useState(false);
  const [tileFile, setTileFile] = useState<ISelectedFile | null>(null);

  const makeBannerImg = () => {
    if (bannerUpdated) {
      return bannerFile ? makeDataUrl(bannerFile) : undefined;
    }
    return bannerFile ? makeDataUrl(bannerFile) : args.bannerImg;
  };

  return (
    <AssetUpdater
      {...args}
      avatarProps={{ ...args.avatarProps, onChange: setAvatarFile }}
      bannerProps={{
        ...args.bannerProps,
        onChange: (file) => {
          setBannerUpdated(true);
          setBannerFile(file);
        },
      }}
      tileProps={
        args.tileProps
          ? { ...args.tileProps, onChange: setTileFile }
          : undefined
      }
      avatarImg={avatarFile ? makeDataUrl(avatarFile) : args.avatarImg}
      bannerImg={makeBannerImg()}
      tileImg={tileFile ? makeDataUrl(tileFile) : args.tileImg}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  bannerProps: {
    allowedMimeTypes: EXAMPLE_MIME_TYPES,
    maxFileSizeInMB: 100,
    label: "Upload a banner",
    onChange: () => {},
    onError: () => {},
  },
  avatarProps: {
    allowedMimeTypes: EXAMPLE_MIME_TYPES,
    maxFileSizeInMB: 10,
    label: "Upload an avatar",
    onChange: () => {},
    onError: () => {},
  },
  tileProps: {
    allowedMimeTypes: EXAMPLE_MIME_TYPES,
    maxFileSizeInMB: 10,
    label: "Upload a tile",
    onChange: () => {},
    onError: () => {},
  },
  isHex: true,
};

export const Profile = Template.bind({});
Profile.args = {
  ...Default.args,
  tileProps: undefined,
  isHex: false,
  bannerImg: "//source.unsplash.com/user/erondu/1500x500",
  avatarImg: "//source.unsplash.com/user/wsanter/200x200",
};

export const Collection = Template.bind({});
Collection.args = {
  ...Default.args,
  isHex: true,
  bannerImg: "//source.unsplash.com/user/erondu/1500x500",
  avatarImg: "//source.unsplash.com/user/wsanter/200x200",
  tileImg: "//source.unsplash.com/user/erondu/800x800",
  collectionName: "Collection name",
};
