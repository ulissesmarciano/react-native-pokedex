import React from "react";
import { Container, Dot, Line, LineSection } from "./styles";

const FilterButton = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <Line color="#ff8800">
        <Dot color="#ff8800" right="5px" />
      </Line>
      <Line color="#FBE263">
        <Dot color="#FBE263" left="5px" />
      </Line>
      <Line color="#90C853">
        <Dot color="#90C853" right="10px" />
      </Line>
    </Container>
  );
};

export default FilterButton;
