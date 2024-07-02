import * as React from "react";
import { ReactElement, RefObject, useEffect, useRef, useState } from "react";
import * as Styled from "./index.styled";
import { ISelectedFile } from "./ISelectedFile";
import { PreviewArea } from "./PreviewArea";

const BYTES_PER_MB = 1024 * 1024;

export type FileSelectionError = "toobig" | "unsupportedtype" | "multiplefiles";

export type DefaultFile = {
  name: string;
  mimeType: string;
  mediaUri: string;
};

const determineMimeType = (file: File) => {
  if (file.type) {
    return file.type;
  } else if (file.name.endsWith(".glb")) {
    /*
     * This is special-cased because browsers (as of Chrome 97) don't known a
     * mime type for *.glb files when selecting them through a file input constrol.
     */
    return "model/gltf-binary";
  } else if (file.name.endsWith(".gltf")) {
    return "model/gltf+json";
  } else {
    return "application/octet-stream";
  }
};

const makeAcceptList = (allowedMimeTypes: string[]) => {
  let result = allowedMimeTypes.join(",");
  if (allowedMimeTypes.find((_) => _.startsWith("model/gltf"))) {
    /*
     * Browsers (as of Chrome 97) don't understand that model/gltf-binary and
     * model/gltf+json data is stored in files with the .glb extension, so
     * explicitly list the extension as well:
     */
    result += ",.glb,.gltf";
  }
  return result;
};

const arrayBufferFromFile: (file: File) => Promise<ArrayBuffer> = (
  file: File
) =>
  new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result as ArrayBuffer);
    };
    fileReader.readAsArrayBuffer(file);
  });

const clearFile = (
  setFile: (file: ISelectedFile | null) => void,
  onChange: (file: ISelectedFile | null) => void,
  setDefaultFileValue: (file: DefaultFile | undefined) => void
) => {
  setFile(null);
  onChange(null);
  setDefaultFileValue(undefined);
};

const fileListToArray = (fileList: FileList | null) => {
  const files: File[] = [];
  if (fileList) {
    for (const file of fileList) {
      files.push(file);
    }
  }
  return files;
};

const getFilesFromDropEvent = (event: React.DragEvent) => {
  if (event.dataTransfer.items?.length > 0) {
    const files: File[] = [];
    for (const item of event.dataTransfer.items) {
      if (item.kind === "file") {
        const file = item.getAsFile();
        if (file) {
          files.push(file);
        }
      }
    }
    return files;
  } else if (event.dataTransfer.files?.length > 0) {
    return fileListToArray(event.dataTransfer.files);
  }
  return [];
};

const onFileSelection = async (
  files: File[],
  restrictions: { maxFileSizeInMB: number; allowedMimeTypes: string[] },
  handlers: {
    setFile: (file: ISelectedFile | null) => void;
    onChange: (file: ISelectedFile | null) => void;
    onError: (error: FileSelectionError) => void;
  }
) => {
  if (files.length === 1) {
    const [file] = files;
    const mimeType = determineMimeType(file);
    if (file.size > restrictions.maxFileSizeInMB * BYTES_PER_MB) {
      handlers.onError("toobig");
    } else if (restrictions.allowedMimeTypes.indexOf(mimeType) === -1) {
      handlers.onError("unsupportedtype");
    } else {
      const selectedFile = {
        arrayBuffer: await arrayBufferFromFile(file),
        file,
        mimeType,
        name: file.name,
      };
      handlers.setFile(selectedFile);
      handlers.onChange(selectedFile);
    }
  } else if (files.length > 1) {
    handlers.onError("multiplefiles");
  }
};

const handleOnChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  restrictions: { maxFileSizeInMB: number; allowedMimeTypes: string[] },
  handlers: {
    setFile: (file: ISelectedFile | null) => void;
    onChange: (file: ISelectedFile | null) => void;
    onError: (error: FileSelectionError) => void;
  }
) => {
  const files = fileListToArray(event.target.files);
  const { maxFileSizeInMB, allowedMimeTypes } = restrictions;
  const { setFile, onChange, onError } = handlers;
  // Ensure that a change event fires if the same file is selected again:
  event.target.value = "";
  onFileSelection(
    files,
    { maxFileSizeInMB, allowedMimeTypes },
    { setFile, onChange, onError }
  );
};

export type FileUploadProps = {
  allowedMimeTypes: string[];
  defaultValue?: DefaultFile;
  maxFileSizeInMB: number;
  otherRestrictions?: string;
  onChange: (file: ISelectedFile | null) => void;
  onError: (error: FileSelectionError) => void;
  error?: string;
  blur?: boolean;
  children?: ReactElement | ReactElement[];
  buttonRefs?: RefObject<HTMLButtonElement>[];
  label?: string;
  disableDragAndDrop?: boolean;
  isCircleDropzone?: boolean;
};

export function FileUpload({
  allowedMimeTypes,
  defaultValue,
  maxFileSizeInMB,
  otherRestrictions,
  onChange,
  onError,
  error,
  blur,
  children,
  buttonRefs,
  label,
  disableDragAndDrop,
  isCircleDropzone,
}: FileUploadProps) {
  const [file, setFile] = useState<ISelectedFile | null>(null);
  const [defaultFileValue, setDefaultFileValue] = useState<
    DefaultFile | undefined
  >(defaultValue);
  const [dropTargetCounter, setDropTargetCounter] = useState(0);
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handleFileClick = () => hiddenFileInput.current?.click();
    buttonRefs?.forEach((ref) =>
      ref.current?.addEventListener("click", handleFileClick)
    );
    return () =>
      buttonRefs?.forEach((ref) =>
        ref.current?.removeEventListener("click", handleFileClick)
      );
  }, []);
  const onDragEnter = (event: React.DragEvent) => {
    event.preventDefault();
    setDropTargetCounter((x) => x + 1);
  };
  const onDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setDropTargetCounter((x) => x - 1);
  };
  const onDragOver = (event: React.DragEvent) => event.preventDefault();
  const onDrop = async (event: React.DragEvent) => {
    event.preventDefault();
    setDropTargetCounter(0);
    await onFileSelection(
      getFilesFromDropEvent(event),
      { maxFileSizeInMB, allowedMimeTypes },
      { setFile, onChange, onError }
    );
  };
  return (
    <>
      <Styled.DropTarget
        isDropTarget={dropTargetCounter > 0}
        hasCustomContent={!!children}
        label={label}
        onDragEnter={disableDragAndDrop ? undefined : onDragEnter}
        onDragLeave={disableDragAndDrop ? undefined : onDragLeave}
        onDragOver={disableDragAndDrop ? undefined : onDragOver}
        onDrop={disableDragAndDrop ? undefined : onDrop}
        isCircleDropzone={isCircleDropzone}
        isError={!!error}
        role="application"
      >
        {children ? (
          children
        ) : (
          <PreviewArea
            defaultValue={defaultFileValue}
            file={file || undefined}
            hiddenFileInput={hiddenFileInput}
            maxFileSizeInMB={maxFileSizeInMB}
            otherRestrictions={otherRestrictions}
            onClose={() => clearFile(setFile, onChange, setDefaultFileValue)}
            blur={blur}
          />
        )}
        <Styled.HiddenFileInput
          type="file"
          accept={makeAcceptList(allowedMimeTypes)}
          ref={hiddenFileInput}
          aria-label="File selector"
          aria-invalid={!!error}
          onChange={(event) =>
            handleOnChange(
              event,
              { allowedMimeTypes, maxFileSizeInMB },
              { setFile, onChange, onError }
            )
          }
        />
      </Styled.DropTarget>
      {error && <Styled.InputError role="alert">{error}</Styled.InputError>}
    </>
  );
}
