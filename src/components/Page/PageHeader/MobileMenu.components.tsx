import styled from "styled-components";
import { MEDIA_WIDTHS } from "../../../constants/MediaWidths";
import { ZIndex } from "../../../constants/ZIndex";

export const AccountPopup = styled.div`
  padding: ${({ theme }) => theme.space.s16};
  position: fixed;
  left: 0;
  top: 64px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  z-index: ${ZIndex.ACCOUNT_PREVIEW};
`;

export const BottomPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.s16};
  padding: ${({ theme }) => theme.space.s24};
`;

export const ClickableIcon = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  appearance: none;
`;

export const ClickableImage = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  appearance: none;
`;

interface FullScreenProps {
  backgroundColor?: string;
}
export const FullScreen = styled.div<FullScreenProps>`
  align-items: stretch;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.color.SURFACE_1};
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 0;
  overflow-y: scroll;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${ZIndex.MOBILE_MENU};
`;

export const MobileNavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 8fr 2fr;
  margin: 20px 10px 10px 10px;
  padding: 10px;
  user-select: none;
  gap: ${({ theme }) => theme.space.s16};
`;

export const MobileNavCell = styled.div<{ align: "left" | "center" | "right" }>`
  align-self: center;
  min-width: 30px;
  text-align: ${({ align }) => align};
`;

export const MobileOnly = styled.div`
  display: none;
  @media (max-width: ${MEDIA_WIDTHS.upToMedium}) {
    display: block;
  }
`;

export const NavLinksContainer = styled.div`
  a {
    border-bottom: 1px solid ${({ theme }) => theme.color.TEXT_2};
    color: ${({ theme }) => theme.color.BLACK};
    display: block;
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.type.weight.MEDIUM};
    padding: ${({ theme }) => theme.space.s16} 0;
    margin: 0 ${({ theme }) => theme.space.s16} 0;
    text-decoration: none;
  }
`;

export const SearchResults = styled.div``;

export const ProfileIconContainer = styled.div`
  margin-top: -${({ theme }) => theme.space.s2};
`;
