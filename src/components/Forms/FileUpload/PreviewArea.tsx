import * as React from "react";
import { useTheme } from "styled-components";
import { DefaultFile } from ".";
import IconClear from "../../../components/Icons/IconClear";
import { ButtonVariant, TextButton } from "../../Buttons/TextButton";
import { FilePreview } from "./FilePreview";
import STRINGS from "./index.strings";
import * as Styled from "./index.styled";
import { ISelectedFile } from "./ISelectedFile";

const BUTTON_LABEL = STRINGS.selectMedia;

type Props = {
  defaultValue?: DefaultFile;
  file?: ISelectedFile;
  hiddenFileInput: React.RefObject<HTMLInputElement>;
  maxFileSizeInMB: number;
  otherRestrictions?: string;
  onClose: () => void;
  blur?: boolean;
};

export function PreviewArea({
  defaultValue,
  file,
  hiddenFileInput,
  maxFileSizeInMB,
  otherRestrictions,
  onClose,
  blur,
}: Props) {
  const { color } = useTheme();

  return (
    <>
      {file || defaultValue ? (
        <Styled.FilePreviewWrapper>
          <Styled.ButtonWrapper>
            <Styled.DiscardButton
              aria-label={STRINGS.discard}
              onClick={onClose}
            >
              <IconClear fill={color.TEXT_1} />
            </Styled.DiscardButton>
          </Styled.ButtonWrapper>
          <FilePreview defaultValue={defaultValue} file={file} blur={blur} />
        </Styled.FilePreviewWrapper>
      ) : (
        <>
          <Styled.Instructions>
            {STRINGS.dragText(BUTTON_LABEL)}
          </Styled.Instructions>
          <TextButton
            label={BUTTON_LABEL}
            onClick={() => hiddenFileInput.current?.click()}
            variant={ButtonVariant.secondary}
            size="small"
          />
          <Styled.Restrictions>
            {STRINGS.maxFile(maxFileSizeInMB)}
          </Styled.Restrictions>
          {otherRestrictions && (
            <Styled.Restrictions>{otherRestrictions}</Styled.Restrictions>
          )}
        </>
      )}
    </>
  );
}
