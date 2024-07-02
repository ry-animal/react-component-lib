import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useRef, useState } from "react";
import styled from "styled-components";
import { FileUpload } from ".";
import EditIcon from "../../../assets/icons/icon-edit.svg";
import HangryCat from "../../../assets/images/hangrycat.jpg";
import { MIME_TYPES } from "../../../constants/mimeTypes";
import CircleButton from "../../Buttons/CircleButton";
import { CollectionTile } from "../../Tiles/CollectionTile";
import { ISelectedFile } from "./ISelectedFile";

export default {
  component: FileUpload,
  title: "Components/Forms/FileUpload",
  argTypes: {
    onChange: { action: "onChange" },
    onError: { action: "onError" },
  },
} as ComponentMeta<typeof FileUpload>;

const EXAMPLE_MIME_TYPES = [
  MIME_TYPES.IMAGE_GIF,
  MIME_TYPES.IMAGE_JPEG,
  MIME_TYPES.IMAGE_PNG,
  MIME_TYPES.IMAGE_WEBP,
  MIME_TYPES.VIDEO_MP4,
  MIME_TYPES.VIDEO_WEBM,
  MIME_TYPES.MODEL_GTLF_DASH_BINARY,
  MIME_TYPES.MODEL_GTFL_PLUS_JSON,
];

const Width300pxDiv = styled.div`
  width: 300px;
  position: relative;
`;
Width300pxDiv.displayName = "Width300pxDiv";

const CenteredButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
CenteredButtonWrapper.displayName = "CenteredButtonWrapper";

const Template: ComponentStory<typeof FileUpload> = (args) => (
  <FileUpload {...args} />
);

export const SimpleFileUpload = Template.bind({});
SimpleFileUpload.args = {
  allowedMimeTypes: EXAMPLE_MIME_TYPES,
  maxFileSizeInMB: 100,
};

export const PrefilledFileUpload = Template.bind({});
PrefilledFileUpload.args = {
  ...SimpleFileUpload.args,
  defaultValue: {
    name: "HangryCat",
    mimeType: "image/jpg",
    mediaUri: HangryCat,
  },
};

export const DisabledDragAndDrop = Template.bind({});
DisabledDragAndDrop.args = {
  ...SimpleFileUpload.args,
  disableDragAndDrop: true,
};

export const ShowingError = Template.bind({});
ShowingError.args = {
  ...SimpleFileUpload.args,
  error: "Enter a custom error message here.",
};

export const ErrorAndBlur = Template.bind({});
ErrorAndBlur.args = {
  ...SimpleFileUpload.args,
  error: "Upload an image to see a blur.",
  blur: true,
};

export const WithOtherRestrictions = Template.bind({});
WithOtherRestrictions.args = {
  ...SimpleFileUpload.args,
  otherRestrictions:
    "Animated NFTs (gif and WEBP files) cannot exceed a total of a hundred million pixels in order to properly upload to the Marketplace.",
};

const CustomContentTemplate: ComponentStory<typeof FileUpload> = (args) => {
  const [file, setFile] = useState<ISelectedFile | null>();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const url = file ? URL.createObjectURL(file.file) : "";
  return (
    <Width300pxDiv>
      <FileUpload {...args} buttonRefs={[buttonRef]} onChange={setFile}>
        <CollectionTile
          collectionImgSrc={url}
          collectionName="My Collection"
          creatorImgSrc="//source.unsplash.com/user/wsanter/200x200"
          creatorName="Creator Name"
          onClick={() => {}}
        />
        <CenteredButtonWrapper>
          <CircleButton
            forwardRef={buttonRef}
            size="l"
            transparent
            iconUrl={EditIcon}
            onClick={() => {}}
          />
        </CenteredButtonWrapper>
      </FileUpload>
    </Width300pxDiv>
  );
};

export const CustomContent = CustomContentTemplate.bind({});
CustomContent.args = {
  ...SimpleFileUpload.args,
  label: "Upload Collection Tile",
};
