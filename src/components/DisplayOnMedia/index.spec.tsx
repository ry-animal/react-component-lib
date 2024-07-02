import { DisplayOnMedia } from ".";
import { render } from "../../util/test-utils";

describe("<DisplayOnMedia />", () => {
  const mockMedia = {
    media: "",
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  };

  it("should display on mobile", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      ...mockMedia,
      matches: query === "(max-width: 767px)",
    }));

    const result = render(
      <>
        <DisplayOnMedia showOn="mobile">
          <>I am in a mobile!</>
        </DisplayOnMedia>
      </>
    );
    expect(result.queryByText("I am in a mobile!")).toBeTruthy();
  });

  it("should display on tablet", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      ...mockMedia,
      matches: query === "(min-width: 768px) and (max-width: 1024px)",
    }));

    const result = render(
      <>
        <DisplayOnMedia showOn="tablet">
          <>I am in a tablet</>
        </DisplayOnMedia>
      </>
    );

    expect(result.queryByText("I am in a tablet")).toBeTruthy();
  });

  it("should display on laptop", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      ...mockMedia,
      matches: query === "(min-width: 1025px) and (max-width: 1279px)",
    }));

    const result = render(
      <>
        <DisplayOnMedia showOn="laptop">
          <>I am in a laptop</>
        </DisplayOnMedia>
      </>
    );
    expect(result.queryByText("I am in a laptop")).toBeTruthy();
  });

  it("should display on desktop", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      ...mockMedia,
      matches: query === "(min-width: 1280px)",
    }));

    const result = render(
      <>
        <DisplayOnMedia showOn="desktop">
          <>I am in a desktop</>
        </DisplayOnMedia>
      </>
    );
    expect(result.queryByText("I am in a desktop")).toBeTruthy();
  });

  it("should display always", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      ...mockMedia,
      matches: query === "(min-width: 1280px)",
    }));

    const result = render(
      <>
        <DisplayOnMedia showOn={undefined}>
          <>I am in the DOM!</>
        </DisplayOnMedia>
      </>
    );
    expect(result.queryByText("I am in the DOM!")).toBeTruthy();
  });

  it("should be visible only in desktop", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      ...mockMedia,
      matches: query === "(max-width: 1279px)",
    }));
    const result = render(
      <>
        <DisplayOnMedia showOn="desktop">
          <>I am be visible on desktop but not in other devices</>
        </DisplayOnMedia>
      </>
    );
    expect(
      result.queryByText("I am be visible on desktop but not in other devices")
    ).toBeNull();
  });

  it("should be hidden on mobile", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      ...mockMedia,
      matches: query === "(max-width: 767px)",
    }));

    const result = render(
      <>
        <DisplayOnMedia hideOn="mobile">
          <>I am hidden in a mobile!</>
        </DisplayOnMedia>
      </>
    );
    expect(result.queryByText("I am hidden in a mobile!")).toBeNull();
  });

  it("should be hidden on tablet", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      ...mockMedia,
      matches: query === "(min-width: 768px) and (max-width: 1024px)",
    }));

    const result = render(
      <>
        <DisplayOnMedia hideOn="tablet">
          <>I am hidden in a tablet</>
        </DisplayOnMedia>
      </>
    );

    expect(result.queryByText("I am hidden in a tablet")).toBeNull();
  });

  it("should be hidden on laptop", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      ...mockMedia,
      matches: query === "(min-width: 1025px) and (max-width: 1279px)",
    }));

    const result = render(
      <>
        <DisplayOnMedia hideOn="laptop">
          <>I am hidden in a laptop</>
        </DisplayOnMedia>
      </>
    );
    expect(result.queryByText("I am hidden in a laptop")).toBeNull();
  });

  it("should be hidden on desktop", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      ...mockMedia,
      matches: query === "(min-width: 1280px)",
    }));

    const result = render(
      <>
        <DisplayOnMedia hideOn="desktop">
          <>I am hidden in a desktop</>
        </DisplayOnMedia>
      </>
    );
    expect(result.queryByText("I am hidden in a desktop")).toBeNull();
  });

  it("should be hidden on desktop", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      ...mockMedia,
      matches: query === "(max-width: 1279px)",
    }));
    const result = render(
      <>
        <DisplayOnMedia hideOn="desktop">
          <>I am always visible</>
        </DisplayOnMedia>
      </>
    );
    expect(result.queryByText("I am always visible")).toBeTruthy();
  });

  it("should always be visible", () => {
    const result = render(
      <>
        <DisplayOnMedia>
          <>I am always visible</>
        </DisplayOnMedia>
      </>
    );
    expect(result.queryByText("I am always visible")).toBeTruthy();
  });

  it("should be visible on laptop and desktop", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      ...mockMedia,
      matches: query === "(min-width: 1025px) and (max-width: 1279px)",
    }));
    const result = render(
      <>
        <DisplayOnMedia showOn={["laptop", "desktop"]}>
          <>I am visible on laptop and desktop</>
        </DisplayOnMedia>
      </>
    );
    expect(
      result.getByText("I am visible on laptop and desktop")
    ).toBeInTheDocument();

    window.matchMedia = jest.fn().mockImplementation((query) => ({
      ...mockMedia,
      matches: query === "(min-width: 1280px)",
    }));

    expect(
      result.getByText("I am visible on laptop and desktop")
    ).toBeInTheDocument();
  });

  it("should be hidden on laptop and desktop", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      ...mockMedia,
      matches: query === "(min-width: 1025px) and (max-width: 1279px)",
    }));
    const result = render(
      <>
        <DisplayOnMedia hideOn={["laptop", "desktop"]}>
          <>I am visible on laptop and desktop</>
        </DisplayOnMedia>
      </>
    );
    expect(result.queryByText("I am visible on laptop and desktop")).toBeNull();

    window.matchMedia = jest.fn().mockImplementation((query) => ({
      ...mockMedia,
      matches: query === "(min-width: 1280px)",
    }));

    expect(result.queryByText("I am visible on laptop and desktop")).toBeNull();
  });
});
