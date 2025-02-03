import { css } from "styled-components/native";

export const progressLimitStyle = {
  primary: css`
    padding-right: 8px;
    height: 100%;
    width: ${({ progress }) => `${progress / 2}%`};
    background-color: ${({ progressBGColor }) => `${progressBGColor}`};
    border-radius: 10px;
    align-items: flex-end;
  `,

  secondary: css`
    padding-right: 8px;
    height: 100%;
    width: ${({ progress }) => `${progress / 10}%`};
    background-color: ${({ progressBGColor }) => `${progressBGColor}`};
    border-radius: 10px;
    align-items: flex-end;
  `,
};
