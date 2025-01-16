import { TypeName, Container } from "./styles";

const Type = ({ name, typeBackground }) => {
  return (
    <Container typeBackground={typeBackground}>
      <TypeName>{name}</TypeName>
    </Container>
  );
};

export default Type;
