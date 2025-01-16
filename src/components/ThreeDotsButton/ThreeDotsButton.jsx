import React from 'react';
import { Container, Dot } from './styles'

const ThreeDotsButton = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <Dot color="#ff8800" />
      <Dot color="#FBE263" />
      <Dot color="#90C853" />
    </Container>
  );
};

export default ThreeDotsButton;
