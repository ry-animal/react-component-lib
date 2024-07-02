import { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import ShareIconBlack from "../../../assets/icons/icon-share-black.svg";
import ShareIconWhite from "../../../assets/icons/icon-share-white.svg";
import { useScreenSize } from "../../../hooks";
import { ThemeName } from "../../../theme/theme.interface";
import { IconSetting } from "../../Icons";
import IconCreate from "../../Icons/IconCreate";
import StatsBlock from "../../StatsBlock";
import { BannerButtons } from "./BannerButtons";
import { BannerHeaderProps, ButtonAction } from "./index.interface";
import * as Styled from "./index.styled";
import { TitleSection } from "./TitleSection";

export const defaultBannerButtonStrings = {
  shareButtonLabel: "Share",
  createButtonLabel: "Create",
  optionsButtonLabel: "Options",
  settingsButtonLabel: "Settings",
  closeButtonLabel: "Close",
};

export const BannerHeader = ({
  title,
  imgUrl,
  avatarUrl,
  stats,
  onShareClick,
  ownerActions,
  customActions,
  isDarkTheme,
  isHexAvatar,
  strings = defaultBannerButtonStrings,
}: BannerHeaderProps) => {
  const [topOffset, setTopOffset] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);
  const { color } = useTheme();
  const { isDesktop } = useScreenSize();

  const updateOffset = useCallback(() => {
    if (bannerRef.current) {
      setTopOffset(
        bannerRef.current.getBoundingClientRect().top + window.scrollY
      );
    }
  }, [bannerRef.current]);

  useEffect(() => {
    window.addEventListener("resize", updateOffset);
    updateOffset();
    return () => {
      window.removeEventListener("resize", updateOffset);
    };
  }, [updateOffset]);

  const makeButtons = (themeName: ThemeName): ButtonAction[] => {
    const shareIcon =
      themeName === ThemeName.DARK ? ShareIconWhite : ShareIconBlack;

    // Share button always present
    const buttons: ButtonAction[] = [
      {
        label: strings.shareButtonLabel,
        onClick: onShareClick,
        icon: shareIcon,
      },
    ];

    if (customActions) {
      buttons.unshift(...customActions);
    }

    if (ownerActions) {
      if (ownerActions.onCreateClick) {
        buttons.unshift({
          label: strings.createButtonLabel,
          onClick: ownerActions.onCreateClick,
          icon: (
            <IconCreate
              fill={themeName === ThemeName.DARK ? color.WHITE : color.BLACK}
            />
          ),
        });
      }
      if (!isDesktop) {
        buttons.push({
          label: strings.settingsButtonLabel,
          onClick: ownerActions.onSettingsClick,
          icon: (
            <IconSetting
              fill={themeName === ThemeName.DARK ? color.WHITE : color.BLACK}
            />
          ),
        });
      }
    }
    return buttons;
  };

  return (
    <Styled.BannerWrapper ref={bannerRef}>
      <Styled.BannerBackground
        imgUrl={imgUrl}
        topOffset={topOffset}
        isDarkTheme={isDarkTheme}
      />
      <Styled.PageMarginWrapper>
        <Styled.ContentWrapper isSingleRow={!stats}>
          <TitleSection
            avatarUrl={avatarUrl}
            isDarkTheme={isDarkTheme}
            title={title}
            isHexAvatar={isHexAvatar}
            makeButtons={makeButtons}
            strings={strings}
          />
          <Styled.Row>
            {stats && (
              <Styled.StatsWrapper>
                <StatsBlock stats={stats} isDarkTheme={isDarkTheme} />
              </Styled.StatsWrapper>
            )}
            <BannerButtons
              makeButtons={makeButtons}
              isDarkTheme={isDarkTheme}
              strings={strings}
            />
          </Styled.Row>
        </Styled.ContentWrapper>
      </Styled.PageMarginWrapper>
    </Styled.BannerWrapper>
  );
};

export default BannerHeader;
