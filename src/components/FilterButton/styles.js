import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 35px;
  width: 45px;
  justify-content: space-between;
  align-items: center;
`;

export const Line = styled.View`
  position: relative;
  width: 100%;
  height: 3px;
  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 5px;
`;

export const Dot = styled.View`
  position: absolute;
  top: -3px;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
`;
