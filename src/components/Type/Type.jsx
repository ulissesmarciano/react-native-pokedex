import { TypeName, Container } from "./styles";

const Type = ({ name, typeBackground, variant }) => {
  return (
    <Container typeBackground={typeBackground} variant={variant}>
      <TypeName>{name}</TypeName>
    </Container>
  );
};

export default Type;
