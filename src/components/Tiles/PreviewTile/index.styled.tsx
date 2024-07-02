import styled from "styled-components";

export const PreviewContainer = styled.div`
  ${({ theme }) => `
    border: ${theme.space.s1} solid ${theme.color.SURFACE_3};
    border-radius: ${theme.radius.r16};
    background: ${theme.color.SURFACE_2};
  `};
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  padding: ${({ theme }) => theme.space.s16};
`;

export const NftImage = styled.div<{ imgSrc: string }>`
  ${({ imgSrc, theme }) => `
    border-radius: ${theme.radius.r8};
    margin-bottom: ${theme.space.s16};
    margin-top: ${theme.space.s16};
    background-image: url(${imgSrc});
  `};
  width: 100%;
  display: block;
  padding-bottom: 100%;
  background-size: cover;
  background-position: center;
`;

export const Subtitle = styled.span`
  ${({ theme }) => `
    font-size: ${theme.type.size.XXS};
    color:  ${theme.color.TEXT_2};
    font-family: ${theme.type.family.title};
    font-weight: ${theme.type.weight.NORMAL};
  `};
  overflow-wrap: anywhere;
`;

export const TitleRegion = styled.div`
  ${({ theme }) => `
    color: ${theme.color.TEXT_1};
    font-family: ${theme.type.family.title};
    font-size: ${theme.type.size.SM};
    font-weight: ${theme.type.weight.BOLD};
  `};
  line-height: 1.3125em;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

export const ItemCount = styled.span`
  ${({ theme }) => `
    color: ${theme.color.TEXT_3};
    font-family: ${theme.type.family.body};
    font-size: ${theme.type.size.XS};
    font-weight: ${theme.type.weight.NORMAL};
  `};
  float: right;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({ theme }) => `
    padding: ${theme.space.s4} ${theme.space.s12};
    border-radius: ${theme.radius.r16};
    background: ${theme.color.SURFACE_2};
  `};
`;

export const IconButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconText = styled.div`
  padding: 0 12px;
  ${({ theme }) => `
    color: ${theme.color.TEXT_2};
    font-size: ${theme.type.size.XXS};
    font-weight: ${theme.type.weight.MEDIUM};
  `}
`;

export const NftScreeningError = styled.div`
  ${({ theme }) => `
    border-radius: ${theme.radius.r8};
    margin-bottom: ${theme.space.s16};
    margin-top: ${theme.space.s16};
    border: 2px solid ${theme.color.ERROR_2};
    background-color: ${theme.color.ERROR_1};
  `};
  display: grid;
  place-items: center;
  padding-bottom: 100%;
  position: relative;
`;

export const ScreeningErrorText = styled.div`
  text-align: center;
  position: absolute;
`;

export const ModerationProgressLoader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ${({ theme }) => `
    margin-bottom: ${theme.space.s16};
  `};
`;
