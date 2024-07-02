import userEvent from "@testing-library/user-event";
import { ProfileBadge } from ".";
import { render, screen } from "../../../util/test-utils";

describe("<ProfileBadge />", () => {
  it("Default rendering matches snapshot", () => {
    expect(
      render(
        <ProfileBadge displayName="smol cat" imgSrc="cat.png" />
      ).asFragment()
    ).toMatchSnapshot();
  });

  it("Default rendering matches snapshot (clickable)", () => {
    expect(
      render(
        <ProfileBadge
          displayName="smol cat"
          imgSrc="cat.png"
          onClick={() => {}}
        />
      ).asFragment()
    ).toMatchSnapshot();
  });

  it("Default rendering matches snapshot (custom sizes)", () => {
    expect(
      render(
        <ProfileBadge
          displayName="smol cat"
          fontSizeRem={0.5}
          iconSizePx={100}
          imgSrc="cat.png"
        />
      ).asFragment()
    ).toMatchSnapshot();
  });

  it("Default rendering matches snapshot (custom color)", () => {
    expect(
      render(
        <ProfileBadge color="red" displayName="smol cat" imgSrc="cat.png" />
      ).asFragment()
    ).toMatchSnapshot();
  });

  it("Default rendering matches snapshot (bold)", () => {
    expect(
      render(
        <ProfileBadge bold displayName="smol cat" imgSrc="cat.png" />
      ).asFragment()
    ).toMatchSnapshot();
  });

  it("with theme swicher", () => {
    render(
      <ProfileBadge
        displayName="smol cat"
        imgSrc="cat.png"
        themeSwitcher={<>Hello</>}
      />
    );
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("click handler gets called when badge is clicked", () => {
    const onClick = jest.fn();
    render(
      <ProfileBadge displayName="name" imgSrc="cat.png" onClick={onClick} />
    );
    userEvent.click(screen.getByRole("button"));
    expect(onClick).toBeCalled();
  });
});
