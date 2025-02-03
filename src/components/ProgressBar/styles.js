import styled from "styled-components/native";
import { progressLimitStyle } from "../../constants/progressStyle";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

export const ProgressTitle = styled.Text`
  color: #dbdbdb;
  text-transform: uppercase;
`;

export const ProgressBarSpace = styled.View`
  height: 20px;
  max-width: 90%;
  flex: 1;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

export const Progress = styled.View`
  ${({ variant }) => progressLimitStyle[variant] || progressLimitStyle.primary}
`;

export const ProgressData = styled.Text`
  color: #fff;
`;
