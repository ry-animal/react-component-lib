import styled, { css } from "styled-components";
import { DARK_THEME } from "../../theme";
import { TextProps } from "./Text.interface";

const renderGradient = (isDark: boolean) => {
  if (isDark) {
    return "linear-gradient(75.61deg, #88AAF1 -4.16%, #C8B2F4 52.58%, #B8FAF6 98.12%)";
  }
  return "linear-gradient(75.61deg, #0052FC -4.16%, #B05AF3 46.45%, #00C6D2 98.12%)";
};

const baseStyles = css<TextProps>`
  color: ${({ color, theme }) => (color ? color : theme.color.TEXT_1)};
  margin: ${({ reset }) => (reset ? 0 : "0 0 1em 0")};
  text-align: ${({ align }) => align};
  display: ${({ inline }) => inline && "inline-block"};
  ${({ ellipsis }) =>
    ellipsis &&
    `display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `}
  ${({ isGradient, theme }) =>
    isGradient &&
    `@supports (-webkit-background-clip: text) {
      background: ${renderGradient(theme.name === DARK_THEME.name)};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
`;

const baseHeadingStyles = css<TextProps>`
  ${baseStyles}
  font-family: ${({ theme }) => theme.type.family.title};
  font-weight: ${({ weight, theme }) =>
    weight ? weight : theme.type.weight.SEMI_BOLD};
`;

const baseTypeStyles = css<TextProps>`
  ${baseStyles}
  font-family: ${({ theme }) => theme.type.family.body};
  font-weight: ${({ weight, theme }) =>
    weight ? weight : theme.type.weight.NORMAL};
`;

export const Display1 = styled.h1`
  ${baseHeadingStyles}
  font-size: ${({ theme }) => theme.type.size.XXXXL};
  line-height: 88px;
  letter-spacing: -0.015em;

  @media (max-width: ${({ theme }) => theme.media.tablet.max}) {
    font-size: ${({ theme }) => theme.type.size.XXXL};
    line-height: 64px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    font-size: ${({ theme }) => theme.type.size.XXL};
    line-height: 48px;
  }
`;

export const Display2 = styled.h2`
  ${baseHeadingStyles}
  font-size: ${({ theme }) => theme.type.size.XXXL};
  line-height: 64px;
  letter-spacing: -0.015em;

  @media (max-width: ${({ theme }) => theme.media.tablet.max}) {
    font-size: ${({ theme }) => theme.type.size.XXL};
    line-height: 48px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    font-size: ${({ theme }) => theme.type.size.XL};
    line-height: 36px;
  }
`;

export const Display3 = styled.h3`
  ${baseHeadingStyles}
  font-size: ${({ theme }) => theme.type.size.XXL};
  line-height: 48px;
  letter-spacing: -0.015em;

  @media (max-width: ${({ theme }) => theme.media.tablet.max}) {
    font-size: ${({ theme }) => theme.type.size.XL};
    line-height: 36px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    font-size: ${({ theme }) => theme.type.size.LG};
    line-height: 32px;
    letter-spacing: 0em;
  }
`;

export const Display4 = styled.h4`
  ${baseHeadingStyles}
  font-size: ${({ theme }) => theme.type.size.XL};
  line-height: 36px;
  letter-spacing: -0.015em;

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    font-size: ${({ theme }) => theme.type.size.LG};
    line-height: 32px;
    letter-spacing: 0em;
  }
`;

export const Display5 = styled.h5`
  ${baseHeadingStyles}
  font-size: ${({ theme }) => theme.type.size.LG};
  line-height: 32px;

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    font-size: ${({ theme }) => theme.type.size.MD};
    line-height: 28px;
  }
`;

export const Display6 = styled.h6`
  ${baseHeadingStyles}
  font-size: ${({ theme }) => theme.type.size.MD};
  line-height: 28px;

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    font-size: ${({ theme }) => theme.type.size.SM};
    line-height: 20px;
  }
`;

export const BodyTitle1 = styled.p`
  ${baseHeadingStyles}
  font-size: ${({ theme }) => theme.type.size.SM};
  line-height: 20px;

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    font-size: ${({ theme }) => theme.type.size.XS};
    line-height: 20px;
    letter-spacing: 0em;
  }
`;

export const BodyTitle2 = styled.p`
  ${baseHeadingStyles}
  font-size: ${({ theme }) => theme.type.size.XS};
  line-height: 18px;

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    font-size: ${({ theme }) => theme.type.size.XXS};
    line-height: 18px;
    letter-spacing: 0em;
  }
`;

export const Body1 = styled.p`
  ${baseTypeStyles}
  font-size: ${({ theme }) => theme.type.size.SM};
  line-height: 28px;

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    font-size: ${({ theme }) => theme.type.size.XS};
    line-height: 24px;
  }
`;

export const Body2 = styled.p`
  ${baseTypeStyles}
  font-size: ${({ theme }) => theme.type.size.XS};
  line-height: 24px;

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    font-size: ${({ theme }) => theme.type.size.XXS};
    line-height: 22px;
  }
`;

export const Body3 = styled.p`
  ${baseTypeStyles}
  font-size: ${({ theme }) => theme.type.size.XXS};
  line-height: 22px;
  letter-spacing: -0.01em;

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    font-size: ${({ theme }) => theme.type.size.XXXS};
    line-height: 16px;
  }
`;

export const Caption = styled.p`
  ${baseTypeStyles}
  font-size: ${({ theme }) => theme.type.size.XXXS};
  line-height: 16px;
  letter-spacing: -0.03em;
`;
