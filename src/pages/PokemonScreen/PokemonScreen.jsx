import { View, Button, StyleSheet } from 'react-native';

const PokemonScreen = ({ navigation }) => {
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
