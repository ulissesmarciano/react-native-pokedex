import { View, Button, StyleSheet } from 'react-native';
import useFetchPokemonData from '../../hooks/useFetchPokemonData';

const PokemonScreen = ({ navigation, route }) => {
  const { name } = route.params;
  const pokemonData = useFetchPokemonData(name)

  return (
    <View>
      <Button
        title="Go back to Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default PokemonScreen;
