import { ModelViewer } from ".";
import { render } from "../../util/test-utils";

describe("<ModelViewer />", () => {
  describe("rendering", () => {
    test("Default rendering matches snapshot", () => {
      expect(
        render(<ModelViewer src="./fake-media-path.glb" />).asFragment()
      ).toMatchSnapshot();
    });
    test("Rendering with props matches snapshot", () => {
      expect(
        render(
          <ModelViewer
            src="./fake-media-path.glb"
            style={{ maxHeight: 200, maxWidth: 200 }}
            autoplay={false}
            cameraControls={true}
            environmentImage="./fake-reflections.hdr"
            exposure={1}
            alt="fake 3d model"
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
  });
});
