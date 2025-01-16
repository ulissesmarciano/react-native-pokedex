import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    
  justify-content: center;
  align-items: center;

  flex-direction: row;
  gap: 6px;
`;

export const Dot = styled.View`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
`;
