import { render, screen } from "../../../util/test-utils";
import { NavLinks } from "./NavLinks";

describe("<NavLinks />", () => {
  it("render all links", () => {
    render(<NavLinks onClick={() => null} />);
    const numOfLinks = 3;
    const anchors = screen.queryAllByRole("link");
    expect(anchors).toHaveLength(numOfLinks);
    expect(anchors[0]).toHaveAttribute("href", "/explore");
    expect(anchors[1]).toHaveAttribute("href", "/stats");
    expect(anchors[2]).toHaveAttribute("href", "/learn");
    expect(screen.getByText(/Explore/u));
    expect(screen.getByText(/Stats/u));
    expect(screen.getByText(/Learn/u));
  });
  it("render in isLightTheme mode", () => {
    render(<NavLinks isLightTheme />);
    const anchor = screen.getByText(/Explore/u);
    expect(anchor).toHaveStyleRule("color", "#ffffff");
  });
  it("render simplyfyNav mode", () => {
    render(<NavLinks simplyfyNav />);
    const anchors = screen.queryAllByRole("link");
    expect(anchors).toHaveLength(0);
  });

  it("render custom nav links", () => {
    render(
      <NavLinks
        navItems={[
          { label: "Custom", url: "/custom" },
          { label: "Link", url: "/link" },
        ]}
      />
    );

    const NUM_LINKS = 2;
    const anchors = screen.queryAllByRole("link");
    expect(anchors).toHaveLength(NUM_LINKS);
    expect(screen.getByText("Custom")).toBeInTheDocument();
    expect(screen.getByText("Link")).toBeInTheDocument();
  });
});
