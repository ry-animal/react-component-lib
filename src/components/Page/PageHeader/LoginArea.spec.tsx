import { render } from "../../../util/test-utils";
import { SampleAccountHandlers } from "./index.spec";
import { LoginArea } from "./LoginArea";

describe("<PageHeader />", () => {
  test("render with light theme", () => {
    expect(
      render(
        <LoginArea
          accountHandlers={SampleAccountHandlers}
          showLoginButton
          isLightTheme
          onLogin={jest.fn()}
        />
      ).asFragment()
    ).toMatchSnapshot();
  });
});
