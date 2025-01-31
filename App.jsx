import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PokedexScreen from "./src/pages/PokedexScreen/PokedexScreen";
import PokemonScreen from "./src/pages/PokemonScreen/PokemonScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pokedex">
        <Stack.Screen
          name="Pokedex"
          component={PokedexScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pokemon"
          component={PokemonScreen}
          options={{ title: "", headerTransparent: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
