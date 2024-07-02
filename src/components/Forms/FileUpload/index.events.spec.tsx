import userEvent from "@testing-library/user-event";
import { RefObject } from "react";
import { act } from "react-dom/test-utils";
import { FileUpload } from ".";
import { fireEvent, render, screen } from "../../../util/test-utils";
import { ISelectedFile } from "./ISelectedFile";

const makeMockFile = () =>
  new File(["Hello world!"], "file.txt", { type: "text/plain" });

const makeMockFileList = (files: File[]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fileList = [...files] as any;
  fileList.item = (i: number) => fileList[i];
  return fileList as FileList;
};

/*
 * Tests that cause a File object to be read need to wait for the IO to complete before
 * performing assertions:
 */
const yieldForAsyncIo = () => {
  const SHORT_DELAY = 100;
  return new Promise((resolve) => {
    setTimeout(resolve, SHORT_DELAY);
  });
};

const getHiddenFileInput = () => screen.findByLabelText("File selector");

describe("<FileUpload />", () => {
  global.URL.createObjectURL = jest.fn(
    () => "blob:http://localhost:6006/af2e50bd-bc94-4dff-ae8c-440eabdac5c6"
  );
  const sampleProps = () => ({
    allowedMimeTypes: [
      "image/png",
      "image/jpeg",
      "text/plain",
      "model/gltf-binary",
    ],
    maxFileSizeInMB: 100,
    onChange: jest.fn(),
    onError: jest.fn(),
  });

  describe("event handling", () => {
    test("select a file using the file input", async () => {
      const files = makeMockFileList([makeMockFile()]);
      const props = sampleProps();
      props.onChange = jest.fn((file: ISelectedFile) => {
        expect(file.name).toBe(files[0].name);
        expect(file.mimeType).toBe(files[0].type);
      });
      render(<FileUpload {...props} />);
      await act(async () => {
        const hiddenFileInput = await getHiddenFileInput();
        fireEvent.change(hiddenFileInput, { target: { files } });
        await yieldForAsyncIo();
      });
      expect(props.onChange).toHaveBeenCalled();
      expect(props.onError).not.toHaveBeenCalled();
    });

    test("select a file using drag and drop (files method)", async () => {
      const files = makeMockFileList([makeMockFile()]);
      const props = sampleProps();
      props.onChange = jest.fn((file: ISelectedFile) => {
        expect(file.name).toBe(files[0].name);
        expect(file.mimeType).toBe(files[0].type);
      });
      render(<FileUpload {...props} />);
      const dropTarget = await screen.findByRole("application");
      await act(async () => {
        expect(
          fireEvent.drop(dropTarget, { dataTransfer: { files } })
        ).toBeFalsy();
        await yieldForAsyncIo();
      });
      expect(props.onChange).toHaveBeenCalled();
      expect(props.onError).not.toHaveBeenCalled();
    });

    test("select a file using drag and drop (dataTransfer method)", async () => {
      const mockFile = makeMockFile();
      const props = sampleProps();
      props.onChange = jest.fn((file: ISelectedFile) => {
        expect(file.name).toBe(mockFile.name);
        expect(file.mimeType).toBe(mockFile.type);
      });
      render(<FileUpload {...props} />);
      const dropTarget = await screen.findByRole("application");
      await act(async () => {
        expect(
          fireEvent.drop(dropTarget, {
            dataTransfer: {
              items: [
                // Valid file should be accepted:
                { kind: "file", getAsFile: () => mockFile },
                // Invalid file should be ignored:
                { kind: "file", getAsFile: () => null },
                // Item that is not a file should be ignored:
                { kind: "not-a-file", getAsFile: () => null },
              ],
            },
          })
        ).toBeFalsy();
        await yieldForAsyncIo();
      });
      expect(props.onChange).toHaveBeenCalled();
      expect(props.onError).not.toHaveBeenCalled();
    });

    test("contains clickable button to select a file", async () => {
      render(<FileUpload {...sampleProps()} />);
      const button = await screen.findByRole("button");
      userEvent.click(button);
    });

    test("discard file", async () => {
      const files = makeMockFileList([makeMockFile()]);
      const props = sampleProps();
      render(<FileUpload {...props} />);
      const hiddenFileInput = await getHiddenFileInput();
      await act(async () => {
        fireEvent.change(hiddenFileInput, { target: { files } });
        await yieldForAsyncIo();
        props.onChange.mockReset();
        const closeButton = await screen.findByLabelText("Discard");
        userEvent.click(closeButton);
      });
      expect(props.onChange).toHaveBeenCalledWith(null);
    });

    test("discard file when defaultFile", async () => {
      const defaultValue = {
        name: "HangryCat",
        mimeType: "image/jpg",
        mediaUri: "some.jpg",
      };
      const props = { ...sampleProps(), defaultValue };
      render(<FileUpload {...props} />);
      await act(async () => {
        const closeButton = await screen.findByLabelText("Discard");
        userEvent.click(closeButton);
      });
      expect(props.onChange).toHaveBeenCalledWith(null);
    });

    test("default browser drag handling is disabled", async () => {
      render(<FileUpload {...sampleProps()} />);
      const dropTarget = await screen.findByRole("application");
      expect(fireEvent.dragOver(dropTarget)).toBeFalsy();
    });

    test("select a 3D model file (requires a special case for support)", async () => {
      const files = makeMockFileList([
        new File(["Hello world!"], "file.glb", { type: "" }),
      ]);
      const props = sampleProps();
      props.onChange = jest.fn((file: ISelectedFile) => {
        expect(file.mimeType).toBe("model/gltf-binary");
      });
      render(<FileUpload {...props} />);
      await act(async () => {
        const hiddenFileInput = await getHiddenFileInput();
        fireEvent.change(hiddenFileInput, { target: { files } });
        await yieldForAsyncIo();
      });
    });

    test("select a 3D model file (requires a special case for support)", async () => {
      const files = makeMockFileList([
        new File(["Hello world!"], "file.gltf", { type: "" }),
      ]);
      const props = sampleProps();
      props.onChange = jest.fn((file: ISelectedFile) => {
        expect(file.mimeType).toBe("model/gltf+json");
      });
      render(<FileUpload {...props} />);
      await act(async () => {
        const hiddenFileInput = await getHiddenFileInput();
        fireEvent.change(hiddenFileInput, { target: { files } });
        await yieldForAsyncIo();
      });
    });

    test("select a file where the browser does not supply a mime type", async () => {
      const files = makeMockFileList([
        new File(["Hello world!"], "file.bin", { type: "" }),
      ]);
      const props = sampleProps();
      props.onChange = jest.fn((file: ISelectedFile) => {
        expect(file.mimeType).toBe("application/octet-stream");
      });
      render(<FileUpload {...props} />);
      await act(async () => {
        const hiddenFileInput = await getHiddenFileInput();
        fireEvent.change(hiddenFileInput, { target: { files } });
        await yieldForAsyncIo();
      });
    });

    test("custom button ref is clickable", async () => {
      const buttonRef = {
        current: { click: jest.fn() },
      } as unknown as RefObject<HTMLButtonElement>;
      const { unmount } = render(
        <FileUpload {...sampleProps()} buttonRefs={[buttonRef]}>
          <button ref={buttonRef}>Click Me</button>
        </FileUpload>
      );
      const button = await screen.findByRole("button");
      const hiddenFileInput = await getHiddenFileInput();
      jest.spyOn(hiddenFileInput, "click");
      userEvent.click(button);
      expect(hiddenFileInput.click).toHaveBeenCalledTimes(1);
      unmount();
      userEvent.click(button);
      expect(hiddenFileInput.click).toHaveBeenCalledTimes(1);
    });
  });

  describe("error handling", () => {
    test("rejects large files", async () => {
      const files = makeMockFileList([makeMockFile()]);
      const props = sampleProps();
      props.maxFileSizeInMB = 0;
      render(<FileUpload {...props} />);
      const hiddenFileInput = await getHiddenFileInput();
      fireEvent.change(hiddenFileInput, { target: { files } });
      expect(props.onChange).not.toHaveBeenCalled();
      expect(props.onError).toHaveBeenCalledWith("toobig");
    });

    test("rejects unsupported file types", async () => {
      const files = makeMockFileList([makeMockFile()]);
      const props = sampleProps();
      props.allowedMimeTypes = [];
      render(<FileUpload {...props} />);
      const hiddenFileInput = await getHiddenFileInput();
      fireEvent.change(hiddenFileInput, { target: { files } });
      expect(props.onChange).not.toHaveBeenCalled();
      expect(props.onError).toHaveBeenCalledWith("unsupportedtype");
    });

    test("rejects multiple file selection", async () => {
      const files = makeMockFileList([makeMockFile(), makeMockFile()]);
      const props = sampleProps();
      render(<FileUpload {...props} />);
      const hiddenFileInput = await getHiddenFileInput();
      fireEvent.change(hiddenFileInput, { target: { files } });
      expect(props.onChange).not.toHaveBeenCalled();
      expect(props.onError).toHaveBeenCalledWith("multiplefiles");
    });

    test("ignores empty selection", async () => {
      const files = makeMockFileList([]);
      const props = sampleProps();
      render(<FileUpload {...props} />);
      const dropTarget = await screen.findByRole("application");
      expect(
        fireEvent.drop(dropTarget, { dataTransfer: { files } })
      ).toBeFalsy();
      expect(props.onChange).not.toHaveBeenCalled();
      expect(props.onError).not.toHaveBeenCalled();
    });
  });
});
