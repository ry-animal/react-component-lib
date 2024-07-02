import styled from "styled-components";

interface DataBadgeContainerProps {
  hasBorder: boolean;
  inline: boolean;
}
interface DataBadgeDataProps {
  inline: boolean;
  isDark?: boolean;
}
interface DataBadgeDataTextLastProps {
  hasLinkIcon: boolean;
  inline: boolean;
  hasTitle?: boolean;
}

export const DataBadgeContainer = styled.div<DataBadgeContainerProps>`
  display: flex;
  align-items: center;
  max-width: 100%;
  ${({ hasBorder, theme }) =>
    hasBorder &&
    `
    border: ${theme.space.s1} solid ${theme.color.SURFACE_4};
    background-color: ${theme.color.SURFACE_2};
    padding: ${theme.space.s8};
    border-radius: ${theme.space.s4};
  `}
  ${({ inline, theme }) =>
    inline &&
    `margin: ${theme.space.s4} ${theme.space.s8} ${theme.space.s4} 0;`}
`;

export const DataBadgeImage = styled.div`
  overflow: hidden;
  margin-right: ${({ theme }) => theme.space.s8};
  & img {
    max-width: 100%;
  }
`;

export const DataBadgeData = styled.p<DataBadgeDataProps>`
  flex: 1;
  display: flex;
  line-height: 16px;
  overflow: hidden;
  margin: 0;

  ${({ isDark, inline, theme }) => `
    font-weight: ${isDark ? theme.type.weight.NORMAL : theme.type.weight.BOLD};
    color: ${isDark ? theme.color.WHITE : theme.color.TEXT_1};
    flex-direction: ${inline ? "row" : "column"};
    justify-content: ${inline ? "flex-start" : "center"};
    font-size: ${theme.type.size.XXXS};
  `}
`;

export const DataBadgeDataText = styled.span`
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const DataBadgeDataTextLast = styled(
  DataBadgeDataText
)<DataBadgeDataTextLastProps>`
  font-weight: ${({ theme }) => theme.type.weight.NORMAL};

  ${({ hasLinkIcon, theme }) =>
    hasLinkIcon && `padding-right: ${theme.space.s12};`}
  ${({ inline, theme }) => inline && `padding-left: ${theme.space.s12};`}
  ${({ hasTitle, theme }) =>
    hasTitle && `font-weight: ${theme.type.weight.MEDIUM};`}
`;

export const DataBadgeIcon = styled.span`
  padding-top: ${({ theme }) => theme.space.s16};
`;
