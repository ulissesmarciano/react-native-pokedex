import { View, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from "styled-components";

const SearchInput = () => {
  return (
    <Container>
      <Icon name="search" size={20} color="#ffffffab" />
      <Input 
        placeholder="Buscar"
        placeholderTextColor="#ffffffab"
      />
    </Container>
  );
};

const Container = styled(View)`
    padding-left: 4px;
    margin-left: -30px;
    height: 34px;
    justify-content: flex-start;
    flex: 1;
    align-items: center;
    flex-direction: row;
    border-width: 1px;
    border-color: red;
    border-radius: 50px;
    background-color: #363636;

`

const Input = styled(TextInput)`
  margin: 0;
  padding: 0;
  width: 80%;
  color: #fff;
  font-size: 16;
`

export default SearchInput;
