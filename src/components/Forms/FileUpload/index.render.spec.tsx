import { FileUpload } from ".";
import HangryCat from "../../../assets/images/hangrycat.jpg";
import { lightColors } from "../../../theme";
import { fireEvent, render, screen } from "../../../util/test-utils";

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

  describe("rendering", () => {
    test("Default rendering matches snapshot", () => {
      expect(
        render(<FileUpload {...sampleProps()} />).asFragment()
      ).toMatchSnapshot();
    });

    test("Initial state rendering", () => {
      expect(
        render(
          <FileUpload
            {...sampleProps()}
            defaultValue={{
              name: "HangryCat",
              mimeType: "image/jpg",
              mediaUri: HangryCat,
            }}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Disable drag and drop", () => {
      expect(
        render(
          <FileUpload {...sampleProps()} disableDragAndDrop />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("Error rendering", async () => {
      const error = "test error";
      expect(
        render(<FileUpload {...sampleProps()} error={error} />).asFragment()
      ).toMatchSnapshot();

      const errorText = await screen.findByRole("alert");
      const dropTarget = await screen.findByRole("application");

      expect(errorText).toHaveStyleRule("color", lightColors.ERROR_2);
      expect(dropTarget).toHaveStyleRule(
        "border",
        `2px dashed ${lightColors.ERROR_2}`
      );
    });

    test("Custom content rendering", async () => {
      const label = "Drop zone label";
      expect(
        render(
          <FileUpload {...sampleProps()} label={label}>
            <p>I am custom content</p>
          </FileUpload>
        ).asFragment()
      ).toMatchSnapshot();

      const dropTarget = await screen.findByRole("application");
      expect(fireEvent.dragEnter(dropTarget)).toBeFalsy();

      expect(dropTarget).toHaveStyleRule("content", `"${label}"`, {
        modifier: "&:after",
      });

      fireEvent.dragLeave(dropTarget);

      expect(dropTarget).not.toHaveStyleRule("content", `"${label}"`, {
        modifier: "&:after",
      });
    });

    test("renders circle dropzone", async () => {
      const { rerender } = render(
        <FileUpload {...sampleProps()}>
          <p>I am custom content</p>
        </FileUpload>
      );
      const dropTarget = await screen.findByRole("application");
      fireEvent.dragEnter(dropTarget);

      expect(dropTarget).not.toHaveStyleRule("border-radius", "10000px", {
        modifier: "&:after",
      });

      rerender(
        <FileUpload {...sampleProps()} isCircleDropzone>
          <p>I am custom content</p>
        </FileUpload>
      );

      expect(dropTarget).toHaveStyleRule("border-radius", "10000px", {
        modifier: "&:after",
      });
    });

    test("Hover state rendering", async () => {
      render(<FileUpload {...sampleProps()} />);
      const dropTarget = await screen.findByRole("application");
      expect(fireEvent.dragEnter(dropTarget)).toBeFalsy();
      expect(dropTarget).toHaveStyleRule(
        "background-color",
        lightColors.SURFACE_2
      );
      fireEvent.dragLeave(dropTarget);
      expect(dropTarget).toHaveStyleRule(
        "background-color",
        lightColors.SURFACE_1
      );
    });
  });
});
