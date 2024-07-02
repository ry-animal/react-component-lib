import { ButtonHTMLAttributes } from "react";
import LikeFilledIcon from "../../../assets/icons/icon-like-filled.svg";
import LikeIcon from "../../../assets/icons/icon-like.svg";
import { abbreviateNumber } from "../../../util/string";
import * as Styled from "./index.styled";

export interface LikeButtonStringProps {
  buttonLabel: string;
  iconFilledAlt: string;
  iconEmptyAlt: string;
}

export interface LikeButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Action to fire when clicked
   */
  onClick: () => void;
  /**
   * Shows filled (true), or empty (false) heart icon
   */
  isLiked: boolean;
  /**
   * Number of likes
   */
  likeCount: number;
  /**
   * String constants
   */
  strings?: LikeButtonStringProps;
}

export function LikeButton({
  onClick,
  isLiked,
  likeCount,
  disabled,
  strings = {
    buttonLabel: `${isLiked ? "unlike" : "like"} (${likeCount})`,
    iconFilledAlt: "filled like icon",
    iconEmptyAlt: "empty like icon",
  },
  ...props
}: LikeButtonProps) {
  return (
    <Styled.Button
      onClick={onClick}
      {...props}
      aria-label={strings.buttonLabel}
      disabled={disabled}
    >
      {abbreviateNumber(likeCount)}
      <Styled.ImgIcon
        src={isLiked ? LikeFilledIcon : LikeIcon}
        alt={isLiked ? strings.iconFilledAlt : strings.iconEmptyAlt}
      />
    </Styled.Button>
  );
}
