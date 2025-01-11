import React from 'react';
import { View, TouchableOpacity } from 'react-native'
import styled from 'styled-components';

const ThreeDotsButton = ({ onPress }) => {
    return (
        <Container onPress={onPress}>
            <Dot color="#ff8800" />
            <Dot color="#FBE263" />
            <Dot color="#90C853" />
        </Container>
    );
};

const Container = styled(TouchableOpacity)`
    
  justify-content: center;
  align-items: center;

  flex-direction: row;
  gap: 6px;
`;

const Dot = styled(View)`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
`;

export default ThreeDotsButton;
