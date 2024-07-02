import userEvent from "@testing-library/user-event";
import { LikeButton } from ".";
import { render, screen } from "../../../util/test-utils";

describe("<LikeButton />", () => {
  describe("rendering", () => {
    test("should match snapshot (liked)", () => {
      expect(
        render(
          <LikeButton likeCount={5} isLiked={true} onClick={() => {}} />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("should match snapshot (not liked)", () => {
      expect(
        render(
          <LikeButton likeCount={5} isLiked={false} onClick={() => {}} />
        ).asFragment()
      ).toMatchSnapshot();
    });

    test("should match snapshot (string override)", () => {
      expect(
        render(
          <LikeButton
            likeCount={5}
            isLiked={false}
            onClick={() => {}}
            strings={{
              buttonLabel: `click here`,
              iconFilledAlt: "liked",
              iconEmptyAlt: "unliked",
            }}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
  });

  describe("event handling", () => {
    test("can be clicked", () => {
      const onClick = jest.fn();
      render(<LikeButton likeCount={5} isLiked={true} onClick={onClick} />);
      userEvent.click(screen.getByRole("button"));
      expect(onClick).toBeCalled();
    });
  });
});
