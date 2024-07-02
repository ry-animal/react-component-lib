import { Pagination } from ".";
import { render } from "../../util/test-utils";
import { renderIcon } from "./index.styled";

describe("<Pagination />", () => {
  it("Default rendering matches snapshot", () => {
    expect(
      render(
        <Pagination onPageChange={() => null} pageCount={3} />
      ).asFragment()
    ).toMatchSnapshot();
  });
  it("Render dark mode", () => {
    expect(renderIcon("dark")).toMatchSnapshot();
  });
});
