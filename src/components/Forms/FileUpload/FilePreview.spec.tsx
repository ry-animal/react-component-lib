import { BlurRadius } from "../../../constants/BlurRadius";
import { render, screen } from "../../../util/test-utils";
import { FilePreview } from "./FilePreview";
import { ISelectedFile } from "./ISelectedFile";

const sampleImage: ISelectedFile = {
  arrayBuffer: Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=",
    "base64"
  ),
  file: new File(["hello"], "world"),
  mimeType: "image/png",
  name: "pixel.png",
};

const sampleModel: ISelectedFile = {
  arrayBuffer: Buffer.from(
    "Not a real model! All my samples are too big!",
    "ascii"
  ),
  file: new File(["hello"], "world"),
  mimeType: "model/gltf-binary",
  name: "model.glb",
};

const sampleText: ISelectedFile = {
  arrayBuffer: Buffer.from("Hello world!", "ascii"),
  file: new File(["hello"], "world"),
  mimeType: "text/plain",
  name: "message.txt",
};

// Credit: https://github.com/mathiasbynens/small/blob/master/mp4-with-audio.mp4
const sampleVideo: ISelectedFile = {
  arrayBuffer: Buffer.from(
    "AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAC721kYXQhEAUgpBv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcCEQBSCkG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADengAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAsJtb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAALwABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAB7HRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAIAAAAAAAAALwAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAC8AAAAAAAEAAAAAAWRtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAAKxEAAAIAFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAEPbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAADTc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAgAQAAAAAKxEAAAAAAAzZXNkcwAAAAADgICAIgACAASAgIAUQBUAAAAAAfQAAAHz+QWAgIACEhAGgICAAQIAAAAYc3R0cwAAAAAAAAABAAAAAgAABAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAIAAAABAAAAHHN0c3oAAAAAAAAAAAAAAAIAAAFzAAABdAAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYnVkdGEAAABabWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAtaWxzdAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ni40MC4xMDE=",
    "base64"
  ),
  file: new File(["hello"], "world"),
  mimeType: "video/mp4",
  name: "mp4-with-audio.mp4",
};

describe("<FilePreview />", () => {
  global.URL.createObjectURL = jest.fn(
    () => "blob:http://localhost:6006/af2e50bd-bc94-4dff-ae8c-440eabdac5c6"
  );
  test("Default rendering matches snapshot (image file)", () => {
    expect(
      render(<FilePreview file={sampleImage} />).asFragment()
    ).toMatchSnapshot();
  });

  test("Default rendering matches snapshot (model file)", () => {
    expect(
      render(<FilePreview file={sampleModel} />).asFragment()
    ).toMatchSnapshot();
  });

  test("Default rendering matches snapshot (text file)", () => {
    expect(
      render(<FilePreview file={sampleText} />).asFragment()
    ).toMatchSnapshot();
  });

  test("Default rendering matches snapshot (video file)", () => {
    expect(
      render(<FilePreview file={sampleVideo} />).asFragment()
    ).toMatchSnapshot();
  });

  test("Default rendering matches snapshot (no file)", () => {
    expect(render(<FilePreview />).asFragment()).toMatchSnapshot();
  });

  test("Default rendering matches snapshot (blur)", () => {
    expect(
      render(<FilePreview file={sampleImage} blur={true} />).asFragment()
    ).toMatchSnapshot();
  });

  test("Blur Wrapper has blur radius style", async () => {
    render(<FilePreview file={sampleImage} blur={true} />).asFragment();

    const blurWrapper = await screen.findByTestId("blur");

    expect(blurWrapper).toHaveStyleRule("filter", `blur(${BlurRadius.b8})`);
  });
});
