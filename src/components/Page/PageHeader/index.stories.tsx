import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LoremIpsum } from "lorem-ipsum";
import { BrowserRouter } from "react-router-dom";
import seedrandom from "seedrandom";
import { PageHeader } from ".";
import { FontFamily } from "../../../theme/fonts";
import { fakeSearch } from "../../Search/fakeSearch";
import { ThemeSwitcher } from "../../ThemeSwitcher";
import { SampleLoginState } from "./SampleLoginState";

export default {
  title: "Components/Page/PageHeader",
  component: PageHeader,
  parameters: { layout: "fullscreen" },
  argTypes: {
    accountHandlers: {
      defaultValue: {
        onDeposit: () => {},
        onProfileClick: () => {},
        onSend: () => {},
        onWithdraw: () => {},
      },
    },
    popularSearches: {
      defaultValue: ["Dogs", "Cats"],
    },
    onLogin: { action: "onLogin" },
    onNavigate: { action: "onNavigate" },
    onSearch: { action: "onSearch", defaultValue: fakeSearch },
    isLightTheme: {
      options: [true, false, undefined],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof PageHeader>;

const PARAGRAPH_COUNT = 15;

const Template: ComponentStory<typeof PageHeader> = (args) => {
  const loremIpsum = new LoremIpsum({ random: seedrandom("") });
  return (
    <BrowserRouter>
      <PageHeader {...args} />
      <div
        style={{
          fontFamily: FontFamily.SANS_SERIF_BODY,
          marginTop: "25%",
          marginLeft: "15%",
          marginRight: "15%",
        }}
      >
        {[...Array(PARAGRAPH_COUNT).keys()].map((i) => (
          <p key={i}>{loremIpsum.generateParagraphs(1)}</p>
        ))}
      </div>
    </BrowserRouter>
  );
};

export const PageHeaderColorful = Template.bind({});
PageHeaderColorful.args = {
  backgroundImage: true,
  showLoginButton: true,
};
PageHeaderColorful.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/57DcJRCtilChsDwZMhtGLs/GME-NFT-Platform?node-id=8596%3A22625",
  },
};

export const PageHeaderColorfulLoggedIn = Template.bind({});
PageHeaderColorfulLoggedIn.args = {
  backgroundImage: true,
  loginState: SampleLoginState,
};
PageHeaderColorfulLoggedIn.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/57DcJRCtilChsDwZMhtGLs/GME-NFT-Platform?node-id=8596%3A23169",
  },
};

export const PageHeaderPlain = Template.bind({});
PageHeaderPlain.args = { showLoginButton: true };

export const PageHeaderPlainLoggedIn = Template.bind({});
PageHeaderPlainLoggedIn.args = {
  loginState: SampleLoginState,
};
PageHeaderPlainLoggedIn.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/57DcJRCtilChsDwZMhtGLs/GME-NFT-Platform?node-id=8929%3A23328",
  },
};

export const PageHeaderWithThemeSwitcher = Template.bind({});
PageHeaderWithThemeSwitcher.args = {
  loginState: SampleLoginState,
  themeSwitcher: <ThemeSwitcher />,
};

export const PageHeaderWithTitle = Template.bind({});
PageHeaderWithTitle.args = {
  backgroundImage: true,
  showLoginButton: false,
  title: {
    header: <>Power to the Creator</>,
    tagline: "Easily collect, exchange & sell gaming collectibles",
  },
};

export const PageHeaderWithTitleAndLink = Template.bind({});
PageHeaderWithTitleAndLink.args = {
  backgroundImage: true,
  showLoginButton: false,
  title: {
    header: <>Power to the Creator</>,
    tagline: "Easily collect, exchange & sell gaming collectibles",
    link: { text: "Explore", url: "#" },
  },
};
PageHeaderWithTitleAndLink.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/57DcJRCtilChsDwZMhtGLs/GME-NFT-Platform?node-id=8377%3A23346",
  },
};

export const PageHeaderLightTheme = Template.bind({});
PageHeaderLightTheme.args = {
  isLightTheme: true,
  backgroundImage: true,
  showLoginButton: true,
  title: {
    header: <>Select your wallet</>,
  },
};

export const PageHeaderSimplifyNav = Template.bind({});
PageHeaderSimplifyNav.args = {
  simplyfyNav: true,
  backgroundImage: true,
};

export const PageHeaderSimplifyNavLoggedIn = Template.bind({});
PageHeaderSimplifyNavLoggedIn.args = {
  simplyfyNav: true,
  backgroundImage: true,
  loginState: SampleLoginState,
};

export const OptionalPopularSearchResults = Template.bind({});
OptionalPopularSearchResults.args = { popularSearches: undefined };

export const CustomNavItems = Template.bind({});
CustomNavItems.args = {
  navItems: [
    { label: "Games", url: "/games" },
    { label: "GameStop", url: "https://gamestop.com", isExternal: true },
  ],
};
