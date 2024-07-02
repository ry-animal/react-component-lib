import BannerHeader, { defaultBannerButtonStrings } from ".";
import { render, screen } from "../../../util/test-utils";

describe("<BannerHeader />", () => {
  const mockMedia = {
    media: "",
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  };

  const sampleProps = () => ({
    title: "Bored Geek Club",
    avatarUrl: "//source.unsplash.com/user/wsanter/200x200",
    onShareClick: jest.fn(),
  });

  const ownerActions = { onSettingsClick: jest.fn(), onCreateClick: jest.fn() };

  const stats = [
    { label: "NFTs", value: 100000 },
    { label: "Owners", value: 45000 },
    { label: "For Sale", value: 10 },
    { label: "Weekly Volume", value: 2400, isETH: true },
    { label: "Floor Price", value: 1.75, isETH: true },
  ];

  describe("rendering", () => {
    beforeAll(() => {
      window.matchMedia = jest.fn().mockImplementation((query) => ({
        ...mockMedia,
        matches: query === "(min-width: 1025px)",
      }));
    });

    test("should render default header with required props", () => {
      expect(
        render(<BannerHeader {...sampleProps()} />).asFragment()
      ).toMatchSnapshot();
    });

    test("should render title", () => {
      const props = sampleProps();
      render(<BannerHeader {...props} />);
      expect(screen.getByText(props.title)).toBeInTheDocument();
    });

    test("should render stats block", () => {
      expect(
        render(<BannerHeader {...sampleProps()} stats={stats} />).asFragment()
      ).toMatchSnapshot();
    });

    test("should render hexagon avatar", () => {
      expect(
        render(
          <BannerHeader {...sampleProps()} isHexAvatar={true} />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("should render background image", () => {
      expect(
        render(
          <BannerHeader {...sampleProps()} imgUrl="./img-path.jpg" />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("should render dark theme", () => {
      expect(
        render(
          <BannerHeader
            {...sampleProps()}
            ownerActions={ownerActions}
            stats={stats}
            isDarkTheme={true}
            imgUrl="./img-path.jpg"
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("should render custom string props", () => {
      expect(
        render(
          <BannerHeader
            {...sampleProps()}
            strings={{
              shareButtonLabel: "Share Label",
              optionsButtonLabel: "Option Label",
              createButtonLabel: "Create Label",
              settingsButtonLabel: "Settings Label",
              closeButtonLabel: "Close Label",
            }}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("render custom action)", () => {
      render(
        <BannerHeader
          {...sampleProps()}
          customActions={[
            {
              label: "Button Action",
              onClick: jest.fn(),
              icon: "./img-path.svg",
            },
          ]}
        />
      );
      expect(screen.queryByLabelText("Button Action")).toBeTruthy();
    });

    describe("should render mobile buttons", () => {
      beforeEach(() => {
        window.matchMedia = jest.fn().mockImplementation((query) => ({
          ...mockMedia,
          matches: query === "(max-width: 767px)",
        }));
      });

      test("should render share button (no owner actions)", () => {
        render(<BannerHeader {...sampleProps()} />);
        expect(
          screen.queryByLabelText(defaultBannerButtonStrings.shareButtonLabel)
        ).toBeTruthy();

        expect(
          screen.queryByLabelText(defaultBannerButtonStrings.optionsButtonLabel)
        ).toBeFalsy();
        expect(
          screen.queryByLabelText(defaultBannerButtonStrings.createButtonLabel)
        ).toBeFalsy();
      });

      test("should render more options button (owner actions)", () => {
        render(<BannerHeader {...sampleProps()} ownerActions={ownerActions} />);

        expect(
          screen.queryByLabelText(defaultBannerButtonStrings.createButtonLabel)
        ).toBeFalsy();
        expect(
          screen.queryByLabelText(defaultBannerButtonStrings.shareButtonLabel)
        ).toBeFalsy();
        expect(
          screen.queryByLabelText(defaultBannerButtonStrings.optionsButtonLabel)
        ).toBeTruthy();
      });
    });

    describe("should render tablet buttons", () => {
      beforeEach(() => {
        window.matchMedia = jest.fn().mockImplementation((query) => ({
          ...mockMedia,
          matches: query === "(min-width: 768px) and (max-width: 1024px)",
        }));
      });

      test("should render share button without create button (no owner actions)", () => {
        render(<BannerHeader {...sampleProps()} />);
        expect(
          screen.queryByLabelText(defaultBannerButtonStrings.shareButtonLabel)
        ).toBeTruthy();

        expect(
          screen.queryByLabelText(defaultBannerButtonStrings.createButtonLabel)
        ).toBeFalsy();
        expect(
          screen.queryByLabelText(defaultBannerButtonStrings.optionsButtonLabel)
        ).toBeFalsy();
      });

      test("should render more options button and create button (owner actions)", () => {
        render(<BannerHeader {...sampleProps()} ownerActions={ownerActions} />);

        expect(
          screen.queryByLabelText(defaultBannerButtonStrings.shareButtonLabel)
        ).toBeFalsy();
        expect(
          screen.queryByLabelText(defaultBannerButtonStrings.optionsButtonLabel)
        ).toBeTruthy();
        expect(
          screen.queryByLabelText(defaultBannerButtonStrings.createButtonLabel)
        ).toBeTruthy();
      });
    });

    describe("should render laptop and desktop buttons", () => {
      test("should render share button without create button (no owner actions)", () => {
        render(<BannerHeader {...sampleProps()} />);
        window.matchMedia = jest.fn().mockImplementation((query) => ({
          ...mockMedia,
          matches: query === "(min-width: 1025px) and (max-width: 1279px)",
        }));
        expect(
          screen.queryByLabelText(defaultBannerButtonStrings.shareButtonLabel)
        ).toBeTruthy();
        expect(
          screen.queryByLabelText(defaultBannerButtonStrings.createButtonLabel)
        ).toBeFalsy();
        expect(
          screen.queryByLabelText(defaultBannerButtonStrings.optionsButtonLabel)
        ).toBeFalsy();

        window.matchMedia = jest.fn().mockImplementation((query) => ({
          ...mockMedia,
          matches: query === "(min-width: 1280px)",
        }));

        expect(
          screen.queryByLabelText(defaultBannerButtonStrings.shareButtonLabel)
        ).toBeTruthy();
        expect(
          screen.queryByLabelText(defaultBannerButtonStrings.createButtonLabel)
        ).toBeFalsy();
        expect(
          screen.queryByLabelText(defaultBannerButtonStrings.optionsButtonLabel)
        ).toBeFalsy();
      });

      test("should render share button and create button (owner actions)", () => {
        render(<BannerHeader {...sampleProps()} ownerActions={ownerActions} />);
        window.matchMedia = jest.fn().mockImplementation((query) => ({
          ...mockMedia,
          matches: query === "(min-width: 1025px) and (max-width: 1279px)",
        }));
        expect(
          screen.queryByRole("button", {
            name: defaultBannerButtonStrings.shareButtonLabel,
          })
        ).toBeTruthy();
        expect(
          screen.queryByRole("button", {
            name: defaultBannerButtonStrings.createButtonLabel,
          })
        ).toBeTruthy();

        window.matchMedia = jest.fn().mockImplementation((query) => ({
          ...mockMedia,
          matches: query === "(max-width: 1280px)",
        }));
        expect(
          screen.queryByRole("button", {
            name: defaultBannerButtonStrings.shareButtonLabel,
          })
        ).toBeTruthy();

        expect(
          screen.queryByRole("button", {
            name: defaultBannerButtonStrings.createButtonLabel,
          })
        ).toBeTruthy();
      });
    });
  });
});
