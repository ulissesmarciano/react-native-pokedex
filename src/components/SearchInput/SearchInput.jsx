import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Input } from './styles';

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

export default SearchInput;