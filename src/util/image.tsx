import { ISelectedFile } from "src/components/Forms/FileUpload/ISelectedFile";

export const makeDataUrl = (selectedFile: ISelectedFile) =>
  URL.createObjectURL(selectedFile.file);
