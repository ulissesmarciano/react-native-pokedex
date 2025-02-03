import { StatusBar, FlatList, Text, View } from "react-native";
import React, { useState, useMemo } from "react";
import { Container, PokedexListContainer, PokemonItemWrapper } from "./styles";
import useFetchAllPokemons from "../../hooks/useFecthAllPokemons";

import Header from "../../components/PokedexHeader/PokedexHeader";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Type from "../../components/Type/Type";

const PokedexScreen = ({ navigation }) => {
  const { pokemons, loading, error } = useFetchAllPokemons();
  const [search, setSearch] = useState("");
  const searchNumber = parseInt(search, 10);
  const lowerSearch = search.toLowerCase();
  const NUM_COLUMNS = 2;
  const formatId = (id) => `#${id.toString().padStart(3, "0")}`;
  const formattedData = [...pokemons];
  while (formattedData.length % NUM_COLUMNS !== 0) {
    formattedData.push(null);
  }

  const pokemonsFiltered = useMemo(
    () =>
      pokemons.filter((pokemon) => {
        if (lowerSearch || searchNumber) {
          return (
            pokemon.name.toLowerCase().includes(lowerSearch) ||
            pokemon.id === searchNumber
          );
        }
        return true;
      }),
    [pokemons, lowerSearch, searchNumber]
  );

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#A40003" />
      <Header
        onChangeText={(text) => {
          setSearch(text);
          console.log(text);
        }}
        value={search}
      />
      <PokedexListContainer>
        {loading ? (
          <View
            style={{
              alignItems: "center",
              width: "100%",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white" }}>Loading</Text>
          </View>
        ) : error ? (
          <Text style={{ color: "white" }}>{error}</Text>
        ) : (
          <FlatList
            data={pokemonsFiltered}
            numColumns={NUM_COLUMNS}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item: pokemon }) =>
              pokemon ? (
                <PokemonItemWrapper>
                  <PokemonCard
                    name={pokemon?.name}
                    cardBackground={pokemon?.types?.[0].type.name}
                    id={formatId(pokemon.id)}
                    avatar={
                      pokemon?.sprites?.versions?.["generation-v"]?.[
                        "black-white"
                      ].animated?.front_default
                    }
                    onPress={() =>
                      navigation.navigate("Pokemon", { name: pokemon.name })
                    }
                    type={pokemon?.types.map((type, index) => (
                      <Type name={type?.type?.name} key={index} />
                    ))}
                  />
                </PokemonItemWrapper>
              ) : (
                <PokemonItemWrapper />
              )
            }
          />
        )}
      </PokedexListContainer>
    </Container>
  );
};

export default PokedexScreen;
