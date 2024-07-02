import styled from "styled-components";
import { Text } from "../Text";

export const BannerWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: ${({ theme }) => theme.space.s64};
`;

export const Banner = styled.div`
  margin: auto;
  background-color: ${({ theme }) => theme.color.SURFACE_2};
  box-shadow: ${({ theme }) =>
    `0 ${theme.space.s2} ${theme.space.s24} 0 rgba(0,0,0,0.2)`};
  border-radius: ${({ theme }) => theme.radius.r8};
  width: 75%;
  max-width: ${({ theme }) => theme.media.desktop.min};
  @media (max-width: ${({ theme }) => theme.media.tablet.min}) {
    width: 100%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.media.tablet.min}) {
    flex-direction: column;
    padding-top: ${({ theme }) => theme.space.s24};
  }
`;

export const IconWrapper = styled.div`
  padding: 0 ${({ theme }) => theme.space.s24};
  height: 100%;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.media.tablet.max}) {
    display: none;
  }
`;

export const SideIconClearWrapper = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding-left: 24px;
`;

export const TopIconClearWrapper = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: right;
  padding-right: 24px;
`;

export const TextContainer = styled.div`
  align-self: center;
  display: flex;

  @media (max-width: ${({ theme }) => theme.media.tablet.max}) {
    padding: 0 ${({ theme }) => theme.space.s24};
  }

  @media (max-width: ${({ theme }) => theme.media.tablet.min}) {
    text-align: center;
  }
`;

export const Description = styled.div`
  margin: 0;
  @media (max-width: ${({ theme }) => theme.media.tablet.min}) {
    margin: ${({ theme }) => theme.space.s8};
  }
`;

export const ButtonGroupContainer = styled.div`
  display: flex;
  padding: ${({ theme }) => `${theme.space.s12} ${theme.space.s24}`};

  @media (max-width: ${({ theme }) => theme.media.tablet.min}) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  padding: ${({ theme }) => `${theme.space.s12} ${theme.space.s8}`};

  @media (max-width: ${({ theme }) => theme.media.tablet.min}) {
    button {
      width: 100%;
    }
  }
`;

export const Link = styled.a`
  align-items: center;
  border-bottom: 1px solid;
  display: inline-flex;
  height: 16px;
  text-decoration: none;

  &:hover,
  &:visited {
    text-decoration: none;
  }
`;

export const DescriptionText = styled(Text)`
  font-weight: 500;
`;
