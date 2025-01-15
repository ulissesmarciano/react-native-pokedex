import { TypeName, Container } from "./styles";

const Type = ({name}) => {
  return (
    <Container>
      <TypeName>{name}</TypeName>
    </Container>
  );
};

export default Type;
