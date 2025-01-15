import styled from "styled-components";

const Type = ({name}) => {
  return (
    <Container>
      <TypeName>{name}</TypeName>
    </Container>
  );
};


const Container = styled.View`
    padding: 2px 8px;
    align-items: center;
    justify-content: center;
    background-color: green;
    border-radius: 10px;
`

const TypeName = styled.Text`
    color: #333;
    text-transform: capitalize;
    font-weight: 600;
`

export default Type;
