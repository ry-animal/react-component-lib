import styled from "styled-components";
import { INPUT_HEIGHT } from "../Input/index.styled";

export const Title = styled.p`
  color: ${({ theme }) => theme.color.TEXT_1};
`;

export const SubTitleError = styled.p`
  color: ${({ theme }) => theme.color.ERROR_2};
`;

export const PropertiesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.s12};
  color: ${({ theme }) => theme.color.TEXT_1};
`;

export const ItemRow = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  gap: ${({ theme }) => theme.space.s12};
  color: ${({ theme }) => theme.color.TEXT_1};
`;

export const ClearButton = styled.button`
  color: ${({ theme }) => theme.color.TEXT_1};
  background: transparent;
  border: none;
  cursor: pointer;
  height: ${INPUT_HEIGHT};
  right: 0;
  top: ${({ theme }) => theme.space.s32};
  position: relative;
  margin-left: ${({ theme }) => `-${theme.space.s16}`};
  transform: scale(0.8);
`;
