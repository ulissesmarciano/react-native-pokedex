import Icon from "react-native-vector-icons/MaterialIcons";
import { Container, Input } from "./styles";

const SearchInput = ({ onChangeText, value }) => {
  return (
    <Container>
      <Icon name="search" size={20} color="#ffffffab" />
      <Input
        onChangeText={onChangeText}
        placeholder="Buscar"
        placeholderTextColor="#ffffffab"
        value={value}
      />
    </Container>
  );
};

export default SearchInput;
