import React from "react";
import {Container, Progress, ProgressBarSpace, ProgressData, ProgressTitle } from "./styles"

const ProgressBar = ({ progress, title, progressBGColor, limit, variant }) => {
  return (
    <Container>
      <ProgressTitle>{title}</ProgressTitle>
      <ProgressBarSpace>
        <Progress
          variant={variant}
          progressBGColor={progressBGColor}
          progress={progress}
        >
          <ProgressData>
            {progress}/{limit}
          </ProgressData>
        </Progress>
      </ProgressBarSpace>
    </Container>
  );
};

export default ProgressBar;
