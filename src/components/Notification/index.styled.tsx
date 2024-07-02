import styled from "styled-components";
import { NotificationVariant } from "./index.interface";

interface NotificationProps {
  variant: NotificationVariant;
}

export const Notification = styled.div<NotificationProps>`
  border-radius: ${({ theme }) => theme.radius.r8};
  padding: ${({ theme }) => theme.space.s16};
  border: ${({ theme }) => theme.space.s2} solid;

  ${({ theme, variant }) => {
    switch (variant) {
      case NotificationVariant.Information:
        return `
          border-color: ${theme.color.SECONDARY_3};
          background: ${theme.color.SECONDARY_1};
        `;
      case NotificationVariant.Error:
        return `
          border-color: ${theme.color.ERROR_2};
          background: ${theme.color.ERROR_1};
        `;

      default:
        return `
          border-color: ${theme.color.SUCCESS_2};
          background: ${theme.color.SUCCESS_1};
        `;
    }
  }}
`;

export const NotificationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NotificationIcon = styled.div`
  padding-right: ${({ theme }) => theme.space.s8};
  display: flex;

  @media (max-width: ${({ theme }) => theme.media.mobile.max}) {
    display: none;
  }
`;

export const NotificationList = styled.ul`
  margin: 0;
  padding: ${({ theme }) => `${theme.space.s8} 0 0 ${theme.space.s32}`};

  ${({ theme }) => `
    @media (max-width: ${theme.media.mobile.max}) {
      padding-left: ${theme.space.s24};
    }
  `}
`;
