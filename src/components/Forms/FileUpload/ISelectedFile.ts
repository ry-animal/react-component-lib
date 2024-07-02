export interface ISelectedFile {
  // TODO remove arrayBuffer once package updated in web store
  arrayBuffer: ArrayBuffer;
  file: File;
  mimeType: string;
  name: string;
}
