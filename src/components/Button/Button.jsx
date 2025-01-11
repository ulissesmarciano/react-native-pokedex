import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components';

const StyledButton = styled(TouchableOpacity)`
  padding: 10px;
  background-color: blue;
  border-radius: 5px;
`;

const StyledText = styled(Text)`
  color: white;
  font-weight: bold;
  text-align: center;
`;

const Button = ({ title, onPress, style }) => (
  <StyledButton style={style} onPress={onPress}>
    <StyledText>{title}</StyledText>
  </StyledButton>
);

export default Button;