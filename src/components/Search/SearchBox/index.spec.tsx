import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { SearchBox } from ".";
import { render, screen } from "../../../util/test-utils";
import { fakeSearch } from "../fakeSearch";
import { SearchResults } from "../types";

describe("<SearchBox />", () => {
  describe("rendering", () => {
    test("should render according to snapshot (closed)", () => {
      expect(
        render(
          <SearchBox
            popularSearches={["foo", "bar"]}
            onChange={fakeSearch}
            onSelect={jest.fn()}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("should render according to snapshot (opened with popular searches)", async () => {
      render(
        <SearchBox
          popularSearches={["foo", "bar"]}
          onChange={fakeSearch}
          onSelect={jest.fn()}
        />
      );
      userEvent.click(await screen.findByRole("search"));
      expect(await screen.findByRole("listbox")).toMatchSnapshot();
    });

    test("should not render listbox (without popular searches)", async () => {
      render(<SearchBox onChange={fakeSearch} onSelect={jest.fn()} />);
      userEvent.click(await screen.findByRole("search"));
      expect(screen.getByRole("listbox").childNodes.length).toBe(0);
    });

    test("should render according to snapshot (opened with results)", async () => {
      render(
        <SearchBox
          popularSearches={["foo", "bar"]}
          onChange={fakeSearch}
          onSelect={jest.fn()}
        />
      );
      await act(async () => {
        userEvent.type(await screen.findByRole("search"), "test");
      });
      expect(await screen.findByRole("listbox")).toMatchSnapshot();
    });

    test("should render according to snapshot (opened with no results)", async () => {
      render(
        <SearchBox
          popularSearches={["foo", "bar"]}
          onChange={fakeSearch}
          onSelect={jest.fn()}
        />
      );
      await act(async () => {
        userEvent.type(
          await screen.findByRole("search"),
          "really long search term"
        );
      });
      expect(await screen.findByRole("listbox")).toMatchSnapshot();
    });

    test("should render according to snapshot (opened then closed)", async () => {
      render(
        <SearchBox
          popularSearches={["foo", "bar"]}
          onChange={fakeSearch}
          onSelect={jest.fn()}
        />
      );
      await act(async () => {
        userEvent.type(await screen.findByRole("search"), "test{esc}");
      });
      expect(await screen.findByRole("listbox")).toMatchSnapshot();
    });

    test("should render according to snapshot (custom backgroundColor)", () => {
      const customColor = "pink";
      expect(
        render(
          <SearchBox
            popularSearches={["foo", "bar"]}
            onChange={fakeSearch}
            onSelect={jest.fn()}
            backgroundColor={customColor}
          />
        ).asFragment()
      ).toMatchSnapshot();
      expect(screen.getByRole("search")).toHaveStyleRule(
        "background-color",
        customColor
      );
    });
  });

  describe("event handling", () => {
    test("result can be clicked", async () => {
      const onSelect = jest.fn();
      render(
        <SearchBox
          popularSearches={["foo", "bar"]}
          onChange={fakeSearch}
          onSelect={onSelect}
        />
      );
      await act(async () => {
        const searchBox = await screen.findByRole("search");
        userEvent.type(searchBox, "test");
        const [header, collection0] = await screen.getAllByRole("option");
        userEvent.click(header);
        userEvent.click(collection0);
      });
      expect(onSelect).toHaveBeenCalledWith(
        expect.objectContaining({ collectionSlug: "collection0" })
      );
      expect(await screen.findByRole("listbox")).toMatchSnapshot();
    });

    test("suggestion can be clicked", async () => {
      const onChange = jest.fn(() =>
        Promise.resolve({ collections: [], nfts: [] } as SearchResults)
      );
      render(
        <SearchBox
          popularSearches={["foo", "bar"]}
          onChange={onChange}
          onSelect={jest.fn()}
        />
      );
      await act(async () => {
        const searchBox = await screen.findByRole("search");
        userEvent.click(searchBox);
        const [header, suggestion0] = await screen.getAllByRole("option");
        userEvent.click(header);
        userEvent.click(suggestion0);
      });
      expect(onChange).toHaveBeenCalledWith("foo");
      expect(await screen.findByRole("listbox")).toMatchSnapshot();
    });

    test("input gets trimmed", async () => {
      const onChange = jest.fn(() =>
        Promise.resolve({ collections: [], nfts: [] } as SearchResults)
      );
      render(
        <SearchBox
          popularSearches={["foo", "bar"]}
          onChange={onChange}
          onSelect={jest.fn()}
        />
      );
      await act(async () => {
        const searchBox = await screen.findByRole("search");
        userEvent.type(searchBox, " test ");
      });
      expect(onChange).toHaveBeenCalledWith("test");
    });

    test("search is not performed unless actual text is entered", async () => {
      const onChange = jest.fn(() =>
        Promise.resolve({ collections: [], nfts: [] } as SearchResults)
      );
      render(
        <SearchBox
          popularSearches={["foo", "bar"]}
          onChange={onChange}
          onSelect={jest.fn()}
        />
      );
      await act(async () => {
        const searchBox = await screen.findByRole("search");
        userEvent.type(searchBox, "     ");
      });
      expect(onChange).not.toHaveBeenCalled();
    });
  });
});
