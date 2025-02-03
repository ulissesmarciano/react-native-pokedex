import React from "react";
import styled from "styled-components/native";
import { progressLimitStyle } from "../../constants/progressStyle";

const ProgressBar = ({ progress, title, progressBGColor, limit, variant }) => {
  return (
    <Container>
      <ProgressTitle>{title}</ProgressTitle>
      <ProgressBarSpace>
        <Progress variant={variant} progressBGColor={progressBGColor} progress={progress}>
          <ProgressData>
            {progress}/{limit}
          </ProgressData>
        </Progress>
      </ProgressBarSpace>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

const ProgressTitle = styled.Text`
  color: #dbdbdb;
  text-transform: uppercase;
`;

const ProgressBarSpace = styled.View`
  height: 20px;
  max-width: 90%;
  flex: 1;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

const Progress = styled.View`
  ${({variant}) => progressLimitStyle[variant] || progressLimitStyle.primary}
`;

const ProgressData = styled.Text`
  color: #fff;
`;

export default ProgressBar;
