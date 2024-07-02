import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { render, screen } from "../../../util/test-utils";
import { PreviewArea } from "./PreviewArea";

describe("<PreviewArea />", () => {
  global.URL.createObjectURL = jest.fn(
    () => "blob:http://localhost:6006/af2e50bd-bc94-4dff-ae8c-440eabdac5c6"
  );
  const sampleProps = (fileSelected: boolean) => ({
    file: fileSelected
      ? {
          arrayBuffer: Buffer.from("Hello world!", "ascii").buffer,
          file: new File(["hello"], "world"),
          mimeType: "text/plain",
          name: "message.txt",
        }
      : undefined,
    hiddenFileInput: createRef<HTMLInputElement>(),
    maxFileSizeInMB: 1024,
    onClose: jest.fn(),
  });

  describe("rendering", () => {
    test("Default rendering matches snapshot (file selected)", () => {
      expect(
        render(<PreviewArea {...sampleProps(true)} />).asFragment()
      ).toMatchSnapshot();
    });

    test("Default rendering matches snapshot (file not selected)", () => {
      expect(
        render(<PreviewArea {...sampleProps(false)} />).asFragment()
      ).toMatchSnapshot();
    });

    test("diplay Other Restrictions", () => {
      render(
        <PreviewArea {...sampleProps(false)} otherRestrictions="Hello Jest" />
      );
      expect(screen.getByText("Hello Jest")).toBeInTheDocument();
    });
  });

  describe("event handling", () => {
    test("onChange called", () => {
      const props = sampleProps(true);
      render(<PreviewArea {...props} />);
      const button = screen.getByRole("button");
      userEvent.click(button);
      expect(props.onClose).toHaveBeenCalled();
    });
  });
});
