import { SocialLink } from ".";
import { render, screen } from "../../util/test-utils";

describe("<SocialLink />", () => {
  describe("rendering", () => {
    test("Default rendering matches snapshot", () => {
      render(<SocialLink url="https://gamestop.com" type="web" />);

      expect(screen.getByText("gamestop.com")).toBeInTheDocument();
    });

    test("Default rendering matches snapshot (discord)", () => {
      render(<SocialLink url="https://discord.com/gamestop" type="discord" />);

      expect(screen.getByText("Discord")).toBeInTheDocument();
    });

    test("Default rendering matches snapshot (instagram)", () => {
      render(
        <SocialLink url="https://instagram.com/gamestop" type="instagram" />
      );

      expect(screen.getByText("Instagram")).toBeInTheDocument();
    });

    test("Default rendering matches snapshot (reddit)", () => {
      render(<SocialLink url="https://reddit.com/gamestop" type="reddit" />);

      expect(screen.getByText("Reddit")).toBeInTheDocument();
    });

    test("Default rendering matches snapshot (twitch)", () => {
      render(<SocialLink url="https://twitch.com/gamestop" type="twitch" />);

      expect(screen.getByText("Twitch")).toBeInTheDocument();
    });

    test("Default rendering matches snapshot (twitter)", () => {
      render(<SocialLink url="https://twitter.com/gamestop" type="twitter" />);

      expect(screen.getByText("Twitter")).toBeInTheDocument();
    });

    test("Default rendering matches snapshot (youtube)", () => {
      render(<SocialLink url="https://youtube.com/gamestop" type="youtube" />);

      expect(screen.getByText("Youtube")).toBeInTheDocument();
    });

    test("Default rendering matches snapshot (invalid url)", () => {
      render(<SocialLink url="gamestop.eth" type="web" />);

      expect(screen.getByText("gamestop.eth")).toBeInTheDocument();
    });

    test("Truncates extra long url", () => {
      const expectedText = "...gurlthatwillbecropped.com";
      render(
        <SocialLink
          url="https://www.thisisanextralongurlthatwillbecropped.com"
          type="web"
          maxCharacters={25}
        />
      );
      expect(screen.getByText(expectedText)).toBeInTheDocument();
    });
  });
});
