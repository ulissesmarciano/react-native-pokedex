import { StatusBar, FlatList } from 'react-native';
import useFetchAllPokemons from '../../hooks/useFecthAllPokemons';
import styled from 'styled-components/native';

import Header from '../../components/PokedexHeader/PokedexHeader';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Type from '../../components/Type/Type';


const PokedexScreen = ({ navigation }) => {
  const { pokemons, loading, error } = useFetchAllPokemons();
  const NUM_COLUMNS = 2;

  const formatId = (id) => `#${id.toString().padStart(3, "0")}`;
  const formattedData = [...pokemons];
  while (formattedData.length % NUM_COLUMNS !== 0) {
    formattedData.push(null);
  }

  return (
    <Body>
      <StatusBar barStyle="light-content" backgroundColor="#A40003" />
      <Header />
      <PokedexListContainer>
        <FlatList
          data={pokemons}
          numColumns={NUM_COLUMNS}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item: pokemon }) =>
            pokemon ? (
              <PokemonItemWrapper>
                <PokemonCard
                  name={pokemon?.name}
                  cardBackground={pokemon?.types?.[0].type.name}
                  id={formatId(pokemon.id)}
                  avatar={pokemon?.sprites?.versions?.['generation-v']?.['black-white'].animated?.front_default}
                  onPress={() => navigation.navigate('Pokemon')}
                  type={pokemon?.types.map((type, index) => (
                    <Type
                      name={type?.type?.name}
                      key={index}
                    />
                  ))}
                />
              </PokemonItemWrapper>
            ) : (
              <PokemonItemWrapper />
            )
          }
        />
      </PokedexListContainer>
    </Body>
  );
};

const Body = styled.View`
  background-color: #FF010B;
  height: 100%;
`;

const PokedexListContainer = styled.View`
  margin: 14px;
  flex: 1;
  background-color: #363636;
  border-width: 1px;
  border-color: #000;
  border-radius: 10px;
`;

const PokemonItemWrapper = styled.View`
  flex: 1;
  margin: 6px;
  max-width: 50%;
`;

export default PokedexScreen;