import userEvent from "@testing-library/user-event";
import { CollectionTile, CollectionTileLoader } from ".";
import { render, screen } from "../../../util/test-utils";

describe("<CollectionTile />", () => {
  const sampleProps = () => ({
    collectionImgSrc: "collection.jpg",
    collectionName: "Collection name",
    creatorImgSrc: "creator.png",
    creatorName: "Creator",
  });
  it("Default rendering matches snapshot", () => {
    expect(
      render(
        <CollectionTile {...sampleProps()} onClick={() => {}} />
      ).asFragment()
    ).toMatchSnapshot();
  });

  it("Default loading matches snapshot", () => {
    expect(render(<CollectionTileLoader />).asFragment()).toMatchSnapshot();
  });

  it("Default rendering matches snapshot (size = small)", () => {
    expect(
      render(
        <CollectionTile {...sampleProps()} onClick={() => {}} contentSize="s" />
      ).asFragment()
    ).toMatchSnapshot();
  });

  it("Default rendering matches snapshot (disabled)", () => {
    expect(
      render(
        <CollectionTile {...sampleProps()} onClick={() => {}} disabled={true} />
      ).asFragment()
    ).toMatchSnapshot();
  });

  it("Renders anchor if url provided", () => {
    const url = "/collection/url";
    render(<CollectionTile {...sampleProps()} collectionUrl={url} />);
    expect(screen.getByRole("link")).toHaveAttribute("href", url);
  });

  it("is Loopring", () => {
    render(<CollectionTile {...sampleProps()} layer="Loopring" />);
    expect(screen.getByTestId("icon-lr")).toHaveAttribute(
      "fill",
      "transparent"
    );
  });

  it("is L1", () => {
    render(<CollectionTile {...sampleProps()} layer="L1" />);
    expect(screen.getByTestId("icon-eth")).toHaveAttribute("fill", "#ffffff");
  });

  it("is ImmutableX", () => {
    render(<CollectionTile {...sampleProps()} layer="Immutable" />);
    expect(screen.getByTestId("icon-im")).toHaveAttribute("fill", "#ffffff");
  });

  it("undefined layer", () => {
    render(<CollectionTile {...sampleProps()} layer={undefined} />);
    expect(screen.queryByRole("role")).toBeNull();
  });

  it("Tile can be clicked", () => {
    const onClick = jest.fn();
    render(<CollectionTile {...sampleProps()} onClick={onClick} />);
    userEvent.click(screen.getByRole("button"));
    expect(onClick).toBeCalled();
  });
});
